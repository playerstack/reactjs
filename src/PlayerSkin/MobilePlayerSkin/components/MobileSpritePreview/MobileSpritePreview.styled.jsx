import styled, { css } from 'styled-components';

export const StyledSpriteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s ease;
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          pointer-events: none;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`;

export const StyledSpriteFrame = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;
