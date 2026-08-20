import { useCallback, useEffect, useRef } from 'react';

const DEFAULT_HIDE_DELAY = 3000;

/**
 * Generic auto-hide hook for player controls.
 * When controls are shown, a timer starts. After hideDelay ms the controls hide.
 * If shouldStayVisible is true the timer is cancelled and controls stay visible.
 *
 * This is the core logic previously in @playerstack/core/hooks. Now lives locally
 * in the reactjs package since core no longer exports React hooks.
 */
export function useAutoHideCore({ shouldStayVisible, onHidingChange, hideDelay = DEFAULT_HIDE_DELAY }) {
  const timerRef = useRef(null);

  const onHidingChangeRef = useRef(onHidingChange);
  onHidingChangeRef.current = onHidingChange;

  const shouldStayVisibleRef = useRef(shouldStayVisible);
  shouldStayVisibleRef.current = shouldStayVisible;

  // Synchronously clear any pending hide timer when shouldStayVisible is true.
  // This prevents the timer from firing between prop update and effect cleanup.
  if (shouldStayVisible && timerRef.current !== null) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      onHidingChangeRef.current(true);
    }, hideDelay);
  }, [clearTimer, hideDelay]);

  const showControls = useCallback(() => {
    clearTimer();
    onHidingChangeRef.current(false);

    if (shouldStayVisibleRef.current) {
      return;
    }

    startTimer();
  }, [clearTimer, startTimer]);

  const hideControls = useCallback(() => {
    clearTimer();
    onHidingChangeRef.current(true);
  }, [clearTimer]);

  // React to shouldStayVisible changes
  useEffect(() => {
    if (shouldStayVisible) {
      clearTimer();
      onHidingChangeRef.current(false);
    } else {
      startTimer();
    }
  }, [shouldStayVisible, clearTimer, startTimer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return { showControls, hideControls };
}
