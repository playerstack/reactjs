import React from 'react';

import useAppDispatch from './context/useAppDispatch';
import useAppSelector from './context/useAppSelector';
import { buildIconProps } from '../PlayerSkin/Commons/constants';

const usePlayerSkinWrapped = ({
  fullscreen,
  contextMenuRef,
  pictureInPictureEnabled,
  pip,
  loop = false,
  requestPictureInPicture,
  exitPictureInPicture,
  onLoopClick,
  adMode = false,
}) => {
  const dispatch = useAppDispatch();
  const { i18n } = useAppSelector();

  const [cMPosition, setCMPosition] = React.useState({ x: 0, y: 0 });

  const handleContextMenu = React.useCallback(
    (event) => {
      event.preventDefault();
      const contextMenuWidth = contextMenuRef.current?.offsetWidth || 0;
      const contextMenuHeight = contextMenuRef.current?.offsetHeight || 0;

      // Get position relative to player container (for Shadow DOM compatibility)
      const containerRect = event.currentTarget.getBoundingClientRect();
      const relativeX = event.clientX - containerRect.left;
      const relativeY = event.clientY - containerRect.top;
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      const left = relativeX + contextMenuWidth > containerWidth ? relativeX - contextMenuWidth : relativeX;
      const top = relativeY + contextMenuHeight > containerHeight ? relativeY - contextMenuHeight : relativeY;

      setCMPosition({ x: left, y: top });
      dispatch({
        type: 'contextMenuVisible',
        payload: true,
      });
    },
    [contextMenuRef, dispatch],
  );

  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  const menuItemsMemorized = React.useMemo(() => {
    const menuItems = [];
    if (!adMode) {
      menuItems.push({
        action: onLoopClick,
        label: i18n.loop,
        iconType: 'loop',
        iconProps,
        isCheckable: true,
        defaultChecked: loop,
      });
    }
    if (pictureInPictureEnabled) {
      menuItems.push({
        action: pip ? exitPictureInPicture : requestPictureInPicture,
        label: i18n.pictureInPicture,
        iconType: 'pip',
        iconProps,
        isCheckable: false,
        defaultChecked: false,
      });
    }

    return menuItems;
  }, [
    iconProps,
    i18n,
    pictureInPictureEnabled,
    pip,
    loop,
    adMode,
    requestPictureInPicture,
    exitPictureInPicture,
    onLoopClick,
  ]);

  return {
    handleContextMenu,
    contextMenuPosition: cMPosition,
    contextMenuItems: menuItemsMemorized,
  };
};

export default usePlayerSkinWrapped;
