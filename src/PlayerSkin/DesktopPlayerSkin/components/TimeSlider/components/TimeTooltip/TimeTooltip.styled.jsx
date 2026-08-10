import React from 'react';
import styled from 'styled-components';

export const Tooltip = React.forwardRef(({ isFullscreen, hasChapters, ...rest }, ref) => <div ref={ref} {...rest} />);

Tooltip.displayName = 'Tooltip';

export const StyledTooltip = styled(Tooltip)`
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    bottom: 13px;
  `
      : `
    bottom: 10px;
  `}
`;

export const Tip = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);

Tip.displayName = 'Tip';

export const StyledTip = styled(Tip)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4em 0.8em;
  transform: translateX(-50%);
  font-weight: 500;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    font-size: 18px;
  `
      : `
    font-size: 12px;
  `}
`;

export const ChapterLabel = React.forwardRef(({ isFullscreen, ...rest }, ref) => <span ref={ref} {...rest} />);

ChapterLabel.displayName = 'ChapterLabel';

export const StyledChapterLabel = styled(ChapterLabel)`
  display: block;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
  margin-top: 4px;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    font-size: 14px;
  `
      : `
    font-size: 11px;
  `}
`;
