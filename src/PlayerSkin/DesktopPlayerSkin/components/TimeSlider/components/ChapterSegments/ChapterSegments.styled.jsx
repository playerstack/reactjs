import React from 'react';
import styled from 'styled-components';

export const ChapterSegmentsContainerBase = React.forwardRef(({ isFullscreen, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

ChapterSegmentsContainerBase.displayName = 'ChapterSegmentsContainer';

export const StyledChapterSegmentsContainer = styled(ChapterSegmentsContainerBase)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2px;
  z-index: 3;
  overflow: visible;
  pointer-events: none;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 6px;
  `
      : `
    height: 4px;
  `}
`;

export const ChapterSegmentBase = React.forwardRef(({ isFullscreen, isHovered, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));

ChapterSegmentBase.displayName = 'ChapterSegment';

export const StyledChapterSegment = styled(ChapterSegmentBase)`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
  transition: transform 0.1s ease;
  transform-origin: center center;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 6px;
  `
      : `
    height: 4px;
  `}
  ${({ isHovered, isFullscreen }) =>
    isHovered &&
    (isFullscreen
      ? `
    transform: scaleY(1.8);
  `
      : `
    transform: scaleY(2);
  `)}
`;

export const StyledChapterSegmentBuffered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const StyledChapterSegmentFilled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #f00;
`;
