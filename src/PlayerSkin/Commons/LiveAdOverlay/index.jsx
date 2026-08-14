import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledLiveAdContainer,
  StyledLiveAdVideo,
  StyledLiveAdInfo,
  StyledLiveAdSkip,
  StyledLiveAdCTA,
  StyledLiveAdProgress,
  StyledLiveAdProgressBar,
  StyledLiveAdBadge,
} from './LiveAdOverlay.styled';

/**
 * Overlay component for live stream ad breaks.
 *
 * Renders a video ad on top of the live stream with:
 * - Ad video filling the player area
 * - "Ad" badge in top-left
 * - Skip button (with countdown) in bottom-right
 * - CTA button
 * - Progress bar at the bottom
 */
const LiveAdOverlay = ({
  active,
  url,
  title,
  buttonText,
  currentTime,
  duration,
  canSkip,
  skipCountdown,
  onSkip,
  onClick,
  onTimeUpdate,
  onEnded,
  adVideoRef,
}) => {
  if (!active) return null;

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <StyledLiveAdContainer>
      <StyledLiveAdVideo
        ref={adVideoRef}
        src={url}
        autoPlay
        playsInline
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
      <StyledLiveAdBadge>Ad</StyledLiveAdBadge>
      {title && <StyledLiveAdInfo>{title}</StyledLiveAdInfo>}
      {buttonText && (
        <StyledLiveAdCTA onClick={onClick}>{buttonText}</StyledLiveAdCTA>
      )}
      <StyledLiveAdSkip onClick={canSkip ? onSkip : undefined} $canSkip={canSkip}>
        {canSkip ? 'Skip Ad' : `Skip in ${skipCountdown}s`}
      </StyledLiveAdSkip>
      <StyledLiveAdProgress>
        <StyledLiveAdProgressBar style={{ transform: `scaleX(${progress})` }} />
      </StyledLiveAdProgress>
    </StyledLiveAdContainer>
  );
};

LiveAdOverlay.propTypes = {
  active: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  canSkip: PropTypes.bool.isRequired,
  skipCountdown: PropTypes.number.isRequired,
  onSkip: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onEnded: PropTypes.func.isRequired,
  adVideoRef: PropTypes.object,
};

export default React.memo(LiveAdOverlay);
