import React from 'react';
import { StyledMediaPlayerWrapper } from './MediaPlayerWrapper.styled';

/**
 * MediaPlayerWrapper provides a styled container for the video player.
 * CSS resets are applied via styled-components scoped rules (no Shadow DOM).
 */
const MediaPlayerWrapper = React.forwardRef(({ children, style, ...props }, ref) => {
  return (
    <StyledMediaPlayerWrapper ref={ref} style={style} {...props}>
      {children}
    </StyledMediaPlayerWrapper>
  );
});

MediaPlayerWrapper.displayName = 'MediaPlayerWrapper';

export default MediaPlayerWrapper;
