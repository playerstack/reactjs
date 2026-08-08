import React from 'react';
import ReactDOM from 'react-dom';

import {
  StyledContextMenuChecked,
  StyledContextMenuContainer,
  StyledContextMenuItem,
  StyledContextMenuLabel,
} from './ContextMenu.styled';
import { mergeRefs } from '../../../utils';
import CheckedIcon from '../Icons/CheckedIcon';
import InLoopIcon from '../Icons/InLoopIcon';
import PipIcon from '../Icons/PipIcon';
import useAppDispatch from '../../../hooks/context/useAppDispatch';
import useAppSelector from '../../../hooks/context/useAppSelector';

const ICON_MAP = {
  loop: InLoopIcon,
  pip: PipIcon,
};

const ContextMenu = React.forwardRef(({ fullscreen, position, menuItems }, ref) => {
  const state = useAppSelector();
  const dispatch = useAppDispatch();

  const menuRef = React.useRef();

  const portalRool = React.useMemo(() => {
    if (fullscreen && state.playerRef?.current) {
      return state.playerRef.current;
    }
    return document.body;
  }, [fullscreen, state.playerRef]);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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

  const menuContent = (
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

  return ReactDOM.createPortal(menuContent, portalRool);
});

ContextMenu.displayName = 'ContextMenu';

export default React.memo(
  ContextMenu,
  (p, n) => p.fullscreen === n.fullscreen && p.position === n.position && p.menuItems === n.menuItems,
);
