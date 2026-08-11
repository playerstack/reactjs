import React from 'react';
import styled from 'styled-components';

const CaptionContainer = React.forwardRef(({ positionX, positionY, isDragging, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));
CaptionContainer.displayName = 'CaptionContainer';

export const StyledCaptionContainer = styled(CaptionContainer)`
  position: absolute;
  z-index: 4;
  pointer-events: auto;
  user-select: none;
  transform: translateX(-50%);
  text-align: center;
  ${({ positionX, positionY }) => `
    left: ${positionX}%;
    top: ${positionY}%;
  `}
  ${({ isDragging }) => isDragging ? 'cursor: grabbing;' : 'cursor: grab;'}
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
