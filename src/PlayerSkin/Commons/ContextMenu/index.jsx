import React from 'react';

import {
  StyledContextMenuChecked,
  StyledContextMenuContainer,
  StyledContextMenuItem,
  StyledContextMenuLabel,
} from '@PlayerSkin/Commons/ContextMenu/ContextMenu.styled';
import { mergeRefs } from '@playerstack/core/hooks';
import { CheckedIcon, InLoopIcon, PipIcon } from '@playerstack/core/icons';
import { useAppDispatch, useAppSelector } from '@context/index';

const ICON_MAP = {
  loop: InLoopIcon,
  pip: PipIcon,
};

const ContextMenu = React.forwardRef(({ fullscreen, position, menuItems }, ref) => {
  const state = useAppSelector();
  const dispatch = useAppDispatch();

  const menuRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const path = event.composedPath ? event.composedPath() : [];
      const isInside = (menuRef.current && path.includes(menuRef.current)) || menuRef.current?.contains(event.target);
      if (!isInside) {
        dispatch({
          type: 'contextMenuVisible',
          payload: false,
        });
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dispatch, menuRef]);

  return (
    <StyledContextMenuContainer
      ref={mergeRefs([ref, menuRef])}
      showing={state.contextMenuVisible}
      positionX={position.x}
      positionY={position.y}
      data-itemindex="0"
      aria-checked={state.contextMenuVisible}
    >
      {menuItems.map((item, i) => {
        const IconComponent = ICON_MAP[item.iconType];
        return (
          <StyledContextMenuItem
            key={i}
            onClick={() => {
              item.action();
              dispatch({
                type: 'contextMenuVisible',
                payload: false,
              });
            }}
            isFullscreen={fullscreen}
          >
            {IconComponent && <IconComponent {...item.iconProps} />}
            <StyledContextMenuLabel>{item.label}</StyledContextMenuLabel>
            {item.isCheckable && item.defaultChecked && (
              <StyledContextMenuChecked>
                <CheckedIcon width={24} height={24} />
              </StyledContextMenuChecked>
            )}
          </StyledContextMenuItem>
        );
      })}
    </StyledContextMenuContainer>
  );
});

ContextMenu.displayName = 'ContextMenu';

export default React.memo(
  ContextMenu,
  (p, n) => p.fullscreen === n.fullscreen && p.position === n.position && p.menuItems === n.menuItems,
);
