import React from 'react';
import styled from 'styled-components';

const OptionsContainer = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);
OptionsContainer.displayName = 'OptionsContainer';

export const StyledOptionsContainer = styled(OptionsContainer)`
  width: 280px;
  max-height: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  z-index: 9;
  background: rgba(15, 15, 15, 0.95);
  border-radius: 6px;
  padding: 4px 0;
  ${({ isFullscreen }) => (isFullscreen ? `right: -52px; bottom: 60px;` : `right: -35px; bottom: 45px;`)}
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #333;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 3px;
  }
`;

const OptionsHeader = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);
OptionsHeader.displayName = 'OptionsHeader';

export const StyledOptionsHeader = styled(OptionsHeader)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0;
  height: 57px;
  & button {
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const OptionsItem = React.forwardRef(({ selected, isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);
OptionsItem.displayName = 'OptionsItem';

export const StyledOptionsItem = styled(OptionsItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 40px;
  cursor: pointer;
  font-size: 13px;
  color: #fff;
  ${({ selected }) => selected && 'color: #4da6ff;'}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  ${({ isFullscreen }) => (isFullscreen ? 'height: 49px;' : '')}
`;

export const StyledOptionsLabel = styled.span`
  flex: 1;
`;

export const StyledOptionsValue = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
`;

const ResetButton = React.forwardRef(({ isFullscreen, ...rest }, ref) => <button ref={ref} {...rest} />);
ResetButton.displayName = 'ResetButton';

export const StyledResetButton = styled(ResetButton)`
  display: block;
  width: calc(100% - 24px);
  margin: 8px 12px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background: transparent;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const OptionsContent = React.forwardRef(({ show, ...rest }, ref) => <div ref={ref} {...rest} />);
OptionsContent.displayName = 'OptionsContent';

export const StyledOptionsContent = styled(OptionsContent)`
  opacity: 0;
  transform: translate(100px, 0);
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  ${({ show }) =>
    show &&
    `
    opacity: 1;
    transform: translate(0, 0);
  `}
`;
