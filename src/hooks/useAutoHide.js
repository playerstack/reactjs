import React from 'react';
import { useAutoHideCore } from '@hooks/useAutoHideCore';

import { useAppDispatch, useAppSelector } from '@context/index';

const useAutoHide = ({ hasResource, loading, prevented, paused, ended, waiting, seeking, kernelMsg }) => {
  const { controlsHovering, timeSliding, volumeSliding, menuVisible, subMenuVisible, hiding } = useAppSelector();
  const dispatch = useAppDispatch();

  const shouldStayVisible =
    hasResource === false ||
    loading ||
    prevented ||
    paused ||
    ended ||
    waiting ||
    seeking ||
    timeSliding ||
    volumeSliding ||
    menuVisible ||
    subMenuVisible ||
    controlsHovering ||
    kernelMsg;

  const onHidingChange = React.useCallback(
    (newHiding) => {
      dispatch({ type: 'hiding', payload: newHiding });
    },
    [dispatch],
  );

  // If controls should stay visible but are currently hidden, force show.
  // This handles the case where shouldStayVisible value didn't change
  // (e.g., was true for 'waiting', stays true for 'paused') but hiding
  // was set to true by the timer before the state transition.
  React.useEffect(() => {
    if (shouldStayVisible && hiding) {
      dispatch({ type: 'hiding', payload: false });
    }
  }, [shouldStayVisible, hiding, dispatch]);

  const { showControls, hideControls } = useAutoHideCore({
    shouldStayVisible: !!shouldStayVisible,
    onHidingChange,
  });

  return { showControls, hideControls };
};

export default useAutoHide;
