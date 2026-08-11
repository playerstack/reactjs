import React from 'react';
import styled from 'styled-components';

const CaptionContainer = React.forwardRef(({ positionX, positionY, isDragging, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));
CaptionContainer.displayName = 'CaptionContainer';

export const StyledCaptionContainer = styled(CaptionContainer)`
  position: absolute;
  pointer-events: auto;
  user-select: none;
  touch-action: none;
  transform: translateX(-50%);
  text-align: center;
  ${({ positionX, positionY }) => `
    left: ${positionX}%;
    top: ${positionY}%;
  `}
  ${({ isDragging }) =>
    isDragging
      ? 'cursor: grabbing; transition: none; z-index: 9;'
      : 'cursor: grab; transition: top 0.3s ease; z-index: 6;'}
`;

const CaptionWindow = React.forwardRef(({ backgroundColor, ...rest }, ref) => <div ref={ref} {...rest} />);
CaptionWindow.displayName = 'CaptionWindow';

export const StyledCaptionWindow = styled(CaptionWindow)`
  padding: 4px 8px;
  border-radius: 4px;
  width: max-content;
  max-width: 80vw;
  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
`;

export const StyledCaptionText = styled.span`
  display: block;
  padding: 2px 6px;
  border-radius: 2px;
  line-height: 1.4;
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
