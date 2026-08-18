import React from 'react';
import { useAutoHide as useAutoHideCore } from '@playerstack/core/hooks';

import { useAppDispatch, useAppSelector } from '../context/index';

const useAutoHide = ({ hasResource, loading, prevented, paused, ended, waiting, seeking, kernelMsg }) => {
  const { controlsHovering, timeSliding, volumeSliding, menuVisible, subMenuVisible } = useAppSelector();
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
    (hiding) => {
      dispatch({ type: 'hiding', payload: hiding });
    },
    [dispatch],
  );

  const { showControls, hideControls } = useAutoHideCore({
    shouldStayVisible: !!shouldStayVisible,
    onHidingChange,
  });

  return { showControls, hideControls };
};

export default useAutoHide;
