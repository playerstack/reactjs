import styled, { css } from 'styled-components';

export const StyledMobileBottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 7;
  display: flex;
  align-items: center;
  padding: 0px 16px 8px 16px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  ${({ $visible }) =>
    $visible
      ? css`
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`;

export const StyledMobileTimeRail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
`;

export const StyledMobileTime = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const StyledMobileFullscreenButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.8;
  flex-shrink: 0;
  margin-left: 4px;
  & > svg {
    width: 36px;
    height: 36px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const StyledMobileLiveDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 5px;
  border-radius: 50%;
  background: ${(props) => (props.$atEdge ? '#ff0000' : '#888888')};
  transition: background 0.2s ease;
`;

export const StyledMobileLiveBadge = styled.button`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 8px;
  margin: 0;
  border: none;
  background: none;
  color: ${(props) => (props.$atEdge ? '#ffffff' : 'rgba(255, 255, 255, 0.6)')};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }

  &:hover ${StyledMobileLiveDot} {
    background: #ff0000;
  }
`;
