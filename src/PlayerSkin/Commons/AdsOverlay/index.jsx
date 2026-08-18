import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAdBannerWrapper,
  StyledAdBanner,
  StyledAdIcon,
  StyledAdInfo,
  StyledAdTitle,
  StyledAdUrl,
  StyledAdButton,
  StyledSkipWrapper,
  StyledSkipButton,
  StyledSkipMessage,
  StyledSkipCountdownText,
  StyledSkipPreviewImage,
  StyledSkipIcon,
  StyledSponsoredLabel,
} from './AdsOverlay.styled';
import { useAppSelector } from '../../../context/index';

/**
 * Skip forward icon — exact SVG from TubeakPlayer
 */
const SkipForwardIcon = () => (
  <StyledSkipIcon viewBox="11 10 14 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M 13.211 23.887 C 13.082 23.986 12.972 24.02 12.883 23.989 C 12.794 23.958 12.75 23.874 12.75 23.739 L 12.75 12.261 C 12.75 12.126 12.794 12.042 12.883 12.011 C 12.972 11.98 13.082 12.014 13.211 12.113 L 20.492 17.649 C 20.553 17.696 20.598 17.745 20.625 17.797 L 20.625 12.51 C 20.625 12.375 20.69 12.258 20.82 12.159 C 20.95 12.061 21.104 12.011 21.281 12.011 L 22.594 12.011 C 22.771 12.011 22.925 12.061 23.055 12.159 C 23.185 12.258 23.25 12.375 23.25 12.51 L 23.25 23.49 C 23.25 23.625 23.185 23.742 23.055 23.841 C 22.925 23.939 22.771 23.989 22.594 23.989 L 21.281 23.989 C 21.104 23.989 20.95 23.939 20.82 23.841 C 20.69 23.742 20.625 23.625 20.625 23.49 L 20.625 18.203 C 20.598 18.255 20.553 18.304 20.492 18.351 Z" />
  </StyledSkipIcon>
);

/**
 * AdsOverlay component — renders ad banner (left) and skip button (right).
 *
 * - Ad banner: follows timeline position (moves down with autohide)
 * - Skip button: stays fixed in bottom-right regardless of autohide
 * - Sponsored label: follows ad banner
 */
const AdsOverlay = ({
  ads,
  canSkip,
  skipCountdown,
  hasSkipTimer,
  adProgress,
  onSkipClick,
  onAdClick,
  hiding,
  poster,
  menuOpen = false,
  fullscreen = false,
}) => {
  const { i18n } = useAppSelector();

  if (!ads) return null;

  const adsZIndex = menuOpen ? { zIndex: 0 } : undefined;

  // Extract URL hostname for display
  let displayUrl = '';
  try {
    displayUrl = new URL(ads.url).hostname;
  } catch {
    displayUrl = ads.url;
  }

  return (
    <>
      {/* Left: Ad Banner — moves down with timeline on autohide */}
      <StyledAdBannerWrapper hiding={hiding} isFullscreen={fullscreen} style={adsZIndex}>
        <StyledAdBanner onClick={onAdClick} role="link" aria-label={ads.title}>
          {ads.icon && <StyledAdIcon src={ads.icon} alt="" />}
          <StyledAdInfo>
            <StyledAdTitle>{ads.title}</StyledAdTitle>
            <StyledAdUrl>{displayUrl}</StyledAdUrl>
          </StyledAdInfo>
          <StyledAdButton type="button">{ads.buttonText}</StyledAdButton>
        </StyledAdBanner>
        <StyledSponsoredLabel>
          {i18n.sponsored} &bull; {displayUrl}
        </StyledSponsoredLabel>
      </StyledAdBannerWrapper>

      {/* Right: Skip Block — stays fixed at right edge */}
      {hasSkipTimer && (
        <StyledSkipWrapper isFullscreen={fullscreen} style={adsZIndex}>
          {canSkip ? (
            <StyledSkipButton onClick={onSkipClick} aria-label={i18n.skipAd} isFullscreen={fullscreen} canSkip>
              {i18n.skipAd}
              <SkipForwardIcon />
            </StyledSkipButton>
          ) : (
            <StyledSkipMessage isFullscreen={fullscreen}>
              <StyledSkipCountdownText isFullscreen={fullscreen}>{skipCountdown}</StyledSkipCountdownText>
              {poster && <StyledSkipPreviewImage src={poster} alt="" width="73" height="41" draggable="false" />}
            </StyledSkipMessage>
          )}
        </StyledSkipWrapper>
      )}
    </>
  );
};

AdsOverlay.propTypes = {
  ads: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    icon: PropTypes.string,
    skipAfter: PropTypes.number,
  }),
  canSkip: PropTypes.bool.isRequired,
  skipCountdown: PropTypes.number.isRequired,
  hasSkipTimer: PropTypes.bool.isRequired,
  adProgress: PropTypes.number.isRequired,
  onSkipClick: PropTypes.func.isRequired,
  onAdClick: PropTypes.func.isRequired,
  hiding: PropTypes.bool.isRequired,
  poster: PropTypes.string,
};

export default React.memo(
  AdsOverlay,
  (p, n) =>
    p.ads === n.ads &&
    p.canSkip === n.canSkip &&
    p.skipCountdown === n.skipCountdown &&
    p.hasSkipTimer === n.hasSkipTimer &&
    p.adProgress === n.adProgress &&
    p.onSkipClick === n.onSkipClick &&
    p.onAdClick === n.onAdClick &&
    p.hiding === n.hiding &&
    p.poster === n.poster &&
    p.fullscreen === n.fullscreen &&
    p.menuOpen === n.menuOpen,
);
