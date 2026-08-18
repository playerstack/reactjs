import { useCallback, useEffect, useRef } from 'react';
import { useMobileAutoHide as useMobileAutoHideCore } from '@playerstack/core/hooks';
import { useAppDispatch, useAppSelector } from '../context/index';

/**
 * Thin wrapper over core's useMobileAutoHide.
 * Reads context values (timeSliding, volumeSliding, menuVisible) and receives
 * player props to compute `shouldStayVisible`. Dispatches hiding state changes
 * to AppContext so CaptionOverlay and other consumers can react.
 *
 * Guards `hideControls` so it's a no-op when shouldStayVisible is true,
 * preserving the original behavior expected by MobilePlayerSkin consumers.
 */
export default function useMobileAutoHide({ hasResource, loading, prevented, paused, ended, waiting, seeking }) {
  const dispatch = useAppDispatch();
  const { timeSliding, volumeSliding, menuVisible } = useAppSelector();

  const shouldStayVisible =
    !hasResource ||
    loading ||
    prevented ||
    paused ||
    ended ||
    waiting ||
    seeking ||
    timeSliding ||
    volumeSliding ||
    menuVisible;

  const shouldStayVisibleRef = useRef(shouldStayVisible);
  shouldStayVisibleRef.current = shouldStayVisible;

  const onHidingChange = (hiding) => {
    dispatch({ type: 'hiding', payload: hiding });
  };

  const {
    controlsVisible,
    toggleControls,
    showControls,
    hideControls: coreHideControls,
  } = useMobileAutoHideCore({
    shouldStayVisible,
    onHidingChange,
  });

  // Guard hideControls: no-op when shouldStayVisible (matches original behavior)
  const hideControls = useCallback(() => {
    if (!shouldStayVisibleRef.current) {
      coreHideControls();
    }
  }, [coreHideControls]);

  // Sync hiding state on controlsVisible changes (covers initial state)
  useEffect(() => {
    dispatch({ type: 'hiding', payload: !controlsVisible });
  }, [controlsVisible, dispatch]);

  return { controlsVisible, toggleControls, showControls, hideControls };
}
