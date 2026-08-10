import React from 'react';
import styled from 'styled-components';

export const HeatmapContainer = React.forwardRef(({ isFullscreen, bottomOffset, visible, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

HeatmapContainer.displayName = 'HeatmapContainer';

export const StyledHeatmapContainer = styled(HeatmapContainer)`
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 2;
  bottom: ${({ bottomOffset }) => (bottomOffset != null ? `${bottomOffset}px` : '6px')};
  transform-origin: bottom center;
  transition:
    opacity 0.25s ease-out,
    transform 0.25s ease-out;
  ${({ visible }) =>
    visible
      ? `
    opacity: 1;
    transform: scaleY(1);
  `
      : `
    opacity: 0;
    transform: scaleY(0);
  `}
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 40px;
  `
      : `
    height: 30px;
  `}
`;

export const StyledHeatmapSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;
