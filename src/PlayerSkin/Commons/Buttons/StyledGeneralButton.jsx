import React from 'react';
import styled, { css } from 'styled-components';

import { StyledMediaPlayerWrapper } from '../../../MediaPlayer/components/MediaPlayerWrapper/MediaPlayerWrapper.styled';
import { StyledPlayerSkin } from '../../DesktopPlayerSkin/DesktopPlayerSkin.styled';

const baseButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  &:focus,
  &:hover {
    opacity: 1;
  }
  &:disabled {
    cursor: not-allowed;
    color: #a4a4a4;
  }
  & * {
    pointer-events: none;
  }
`;

const textButtonStyles = css`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`;

const fullscreenButton = css`
  width: 54px;
  height: 54px;
`;

const normalButton = css`
  width: 36px;
  height: 36px;
`;

const fullscreenText = css`
  font-size: 145% !important;
`;

const GeneralButton = React.forwardRef(
  ({ isText, isFullscreen = false, isFakeDisabled = false, title, ...rest }, ref) => (
    <button ref={ref} {...rest}>
      {rest.children}
    </button>
  ),
);

GeneralButton.displayName = 'GeneralButton';

const StyledGeneralButton = styled(GeneralButton)`
  ${StyledMediaPlayerWrapper} ${StyledPlayerSkin} & {
    ${baseButtonStyles}
    ${({ isFullscreen, isText }) => !isText && (isFullscreen ? fullscreenButton : normalButton)}
    ${({ isFullscreen, isText }) => isFullscreen && isText && fullscreenText}
    ${({ isText }) => isText && textButtonStyles}
    ${({ isFakeDisabled }) =>
      isFakeDisabled &&
      `
      color: #a4a4a4;
    `}
  }
`;

export default StyledGeneralButton;
