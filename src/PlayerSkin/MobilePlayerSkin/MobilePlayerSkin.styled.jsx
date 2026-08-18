import styled, { css } from 'styled-components';
import { scopedReset } from '@PlayerSkin/Commons/scopedReset';

export const StyledMobilePlayerSkin = styled.div`
  ${scopedReset}
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  touch-action: manipulation;
  font-family: Helvetica, Arial, sans-serif;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
  ${({ $visible }) =>
    $visible
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;
