import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledLiveAdContainer,
  StyledLiveAdVideo,
  StyledLiveAdTopBar,
  StyledLiveAdBadge,
  StyledLiveAdInfo,
  StyledLiveAdBottomBar,
  StyledLiveAdActions,
  StyledLiveStreamBadge,
  StyledLiveAdCTA,
  StyledLiveAdSkip,
  StyledLiveAdProgress,
  StyledLiveAdProgressBar,
} from '@PlayerSkin/Commons/LiveAdOverlay/LiveAdOverlay.styled';

/**
 * Live stream ad overlay — Twitch-style.
 *
 * Pure presentational component. All state managed by useLiveAd hook.
 *
 * Behavior:
 * - Stream plays muted behind this overlay (never pauses)
 * - Ad video fills player area
 * - "AD" badge top-left, "Live Stream" indicator bottom-left
 * - Skip button with countdown bottom-right
 * - Yellow progress bar at bottom edge
 * - Fade-in on mount, fade-out via `isExiting` prop (CSS animation)
 *   ensures smooth transition back to stream — no "pause" appearance
 */
const LiveAdOverlay = ({
  isActive,
  isExiting,
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
  if (!isActive) return null;

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <StyledLiveAdContainer $exiting={isExiting}>
      <StyledLiveAdVideo
        ref={adVideoRef}
        src={url}
        autoPlay
        playsInline
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />

      <StyledLiveAdTopBar>
        <StyledLiveAdBadge>AD</StyledLiveAdBadge>
        {title && <StyledLiveAdInfo>{title}</StyledLiveAdInfo>}
      </StyledLiveAdTopBar>

      <StyledLiveAdBottomBar>
        <StyledLiveAdActions>
          <StyledLiveStreamBadge>Live Stream</StyledLiveStreamBadge>
          {buttonText && <StyledLiveAdCTA onClick={onClick}>{buttonText}</StyledLiveAdCTA>}
          <StyledLiveAdSkip onClick={canSkip ? onSkip : undefined} $canSkip={canSkip}>
            {canSkip ? 'Skip Ad' : `Skip in ${skipCountdown}s`}
          </StyledLiveAdSkip>
        </StyledLiveAdActions>
        <StyledLiveAdProgress>
          <StyledLiveAdProgressBar style={{ transform: `scaleX(${progress})` }} />
        </StyledLiveAdProgress>
      </StyledLiveAdBottomBar>
    </StyledLiveAdContainer>
  );
};

LiveAdOverlay.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isExiting: PropTypes.bool.isRequired,
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
