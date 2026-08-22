import React from 'react';

/**
 * Auto-hide for the light-DOM Core skin (parity with the former `useAutoHide`).
 *
 * WHY here instead of Core: the Style_Layer already fades the control bar + vignette when the
 * `playerstack-media-controller` host carries `data-hiding` (see `playerstack.css`
 * `playerstack-media-controller[data-hiding] .playerstack-controls`), but NOTHING was setting
 * that attribute after the migration, so the controls never hid. This hook reproduces the
 * original timer logic and reflects `data-hiding` on the controller host:
 *
 *   - The controls STAY visible whenever the player is in a state the user must see (paused,
 *     ended, loading, buffering/waiting, seeking, prevented, a kernel status message, or while
 *     a menu / slider drag / hover is active) — mirroring the original `shouldStayVisible`.
 *   - Otherwise a countdown (default 3s) runs; when it elapses the host gets `data-hiding` and
 *     the Style_Layer fades the chrome out. ANY pointer movement over the player clears
 *     `data-hiding` and restarts the countdown, so moving the mouse always reveals the controls.
 *
 * Kept framework-local (reactjs skin) and DOM-only: it toggles a single host attribute the
 * Style_Layer already understands, so Core stays agnostic and untouched.
 *
 * @param {object} params
 * @param {React.RefObject<HTMLElement>} params.controllerRef - The `playerstack-media-controller` host.
 * @param {boolean} params.shouldStayVisible - When true the controls never hide (forced-visible state).
 * @param {number} [params.delay=3000] - Idle milliseconds before hiding.
 */
export function useCoreAutoHide({ controllerRef, shouldStayVisible, delay = 3000 }) {
  // Keep the latest `shouldStayVisible` in a ref so the timer callback reads the current value
  // without re-binding listeners / restarting effects on every state change.
  const stayVisibleRef = React.useRef(shouldStayVisible);
  stayVisibleRef.current = shouldStayVisible;

  React.useEffect(() => {
    const host = controllerRef.current;
    if (!host) {
      return undefined;
    }

    let timer = null;

    const show = () => {
      host.removeAttribute('data-hiding');
    };

    const hide = () => {
      // Never hide while a forced-visible state is active (paused/menu/hover/etc.).
      if (stayVisibleRef.current) {
        return;
      }
      host.setAttribute('data-hiding', 'true');
    };

    const clearTimer = () => {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };

    const scheduleHide = () => {
      clearTimer();
      // Do not start the countdown while forced visible; the state-effect below reschedules
      // once the forced-visible condition clears.
      if (stayVisibleRef.current) {
        return;
      }
      timer = setTimeout(hide, delay);
    };

    // Any interaction reveals the chrome and restarts the idle countdown.
    const onActivity = () => {
      show();
      scheduleHide();
    };

    // Leaving the player hides immediately (unless forced visible), matching the original.
    const onLeave = () => {
      clearTimer();
      hide();
    };

    host.addEventListener('pointermove', onActivity);
    host.addEventListener('pointerdown', onActivity);
    host.addEventListener('pointerleave', onLeave);

    // Start from a visible state with a pending countdown.
    onActivity();

    return () => {
      clearTimer();
      host.removeEventListener('pointermove', onActivity);
      host.removeEventListener('pointerdown', onActivity);
      host.removeEventListener('pointerleave', onLeave);
      // Leave the chrome visible on unmount so a remount never starts hidden.
      show();
    };
  }, [controllerRef, delay]);

  // React to forced-visible changes without rebuilding the listeners: when the player enters a
  // must-stay-visible state, reveal immediately; when it leaves that state, (re)start the
  // countdown so the controls can hide again after the idle delay.
  React.useEffect(() => {
    const host = controllerRef.current;
    if (!host) {
      return undefined;
    }
    if (shouldStayVisible) {
      host.removeAttribute('data-hiding');
      return undefined;
    }
    const timer = setTimeout(() => {
      if (!stayVisibleRef.current) {
        host.setAttribute('data-hiding', 'true');
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [controllerRef, shouldStayVisible, delay]);
}
