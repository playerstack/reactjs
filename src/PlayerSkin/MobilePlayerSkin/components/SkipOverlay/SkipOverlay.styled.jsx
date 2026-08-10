import styled, { keyframes, css } from 'styled-components';

const seekFade = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const StyledSkipOverlay = styled.div`
  position: absolute;
  top: 0;
  ${({ direction }) => (direction === 'forward' ? 'right: 0;' : 'left: 0;')}
  width: 55%;
  height: 100%;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  ${({ direction }) =>
    direction === 'forward'
      ? css`
          background: linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `
      : css`
          background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%);
        `}
`;

export const StyledSkipIconContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ direction }) => (direction === 'backward' ? 'transform: rotate(180deg);' : '')}
  & > svg {
    width: 20px;
    height: 20px;
    animation: ${seekFade} 1s infinite;
    opacity: 0;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`;

export const StyledSkipText = styled.span`
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
`;

export const StyledSkipTapArea = styled.button`
  position: absolute;
  top: 0;
  ${({ direction }) => (direction === 'forward' ? 'right: 0;' : 'left: 0;')}
  width: 50%;
  height: 100%;
  z-index: 6;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
`;
