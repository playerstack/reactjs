import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_HIDE_DELAY = 3000;

/**
 * Generic mobile auto-hide hook for player controls.
 * Mobile controls are toggled via tap (show/hide) rather than auto-shown on mouse movement.
 * When controls are shown, a timer starts. After hideDelay ms the controls hide.
 * If shouldStayVisible is true the timer is cancelled and controls stay visible.
 *
 * This is the core logic previously in @playerstack/core/hooks. Now lives locally
 * in the reactjs package since core no longer exports React hooks.
 */
export function useMobileAutoHideCore({ shouldStayVisible, onHidingChange, hideDelay = DEFAULT_HIDE_DELAY }) {
  const [controlsVisible, setControlsVisible] = useState(true);
  const timerRef = useRef(null);

  const onHidingChangeRef = useRef(onHidingChange);
  onHidingChangeRef.current = onHidingChange;

  const shouldStayVisibleRef = useRef(shouldStayVisible);
  shouldStayVisibleRef.current = shouldStayVisible;

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setControlsVisible(false);
      onHidingChangeRef.current(true);
    }, hideDelay);
  }, [clearTimer, hideDelay]);

  const toggleControls = useCallback(() => {
    setControlsVisible((prev) => {
      const next = !prev;
      if (next) {
        onHidingChangeRef.current(false);
        if (!shouldStayVisibleRef.current) {
          clearTimer();
          timerRef.current = setTimeout(() => {
            setControlsVisible(false);
            onHidingChangeRef.current(true);
          }, hideDelay);
        }
      } else {
        clearTimer();
        onHidingChangeRef.current(true);
      }
      return next;
    });
  }, [clearTimer, hideDelay]);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    onHidingChangeRef.current(false);
    clearTimer();

    if (!shouldStayVisibleRef.current) {
      startTimer();
    }
  }, [clearTimer, startTimer]);

  const hideControls = useCallback(() => {
    setControlsVisible(false);
    clearTimer();
    onHidingChangeRef.current(true);
  }, [clearTimer]);

  const controlsVisibleRef = useRef(controlsVisible);
  controlsVisibleRef.current = controlsVisible;

  useEffect(() => {
    if (shouldStayVisible) {
      setControlsVisible(true);
      clearTimer();
      onHidingChangeRef.current(false);
    } else if (controlsVisibleRef.current) {
      startTimer();
    }
  }, [shouldStayVisible, clearTimer, startTimer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return { controlsVisible, toggleControls, showControls, hideControls };
}
