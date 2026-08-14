import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileBottomBar,
  StyledMobileTimeRail,
  StyledMobileTime,
  StyledMobileFullscreenButton,
  StyledMobileLiveBadge,
  StyledMobileLiveDot,
} from './MobileBottomBar.styled';
import MobileProgressBar from './MobileProgressBar';
import { FullscreenIcon, ExitFullscreenIcon } from '../../icons';
import { formatTime } from '../../../../utils';

const MobileBottomBar = ({
  visible,
  live,
  liveDVR = false,
  currentTime,
  duration,
  buffered,
  fullscreen,
  chapters,
  heatmapData,
  getChapterAtTime,
  i18n,
  onChangeCurrentTime,
  onSeeking,
  onRequestFullscreen,
  onExitFullscreen,
  hasDVR = false,
  isAtLiveEdge = true,
  offsetDisplay = '',
  sliderDuration = 0,
  sliderPosition = 0,
  seekToLiveEdge,
  seekToSliderPosition,
  onLiveDVRSeeking,
  adMode = false,
}) => (
  <StyledMobileBottomBar $visible={visible} onClick={(e) => e.stopPropagation()}>
    {/* Normal VOD mode */}
    {false === live && (
      <>
        <StyledMobileTime>
          {formatTime(Math.round(currentTime))} / {formatTime(Math.round(duration))}
        </StyledMobileTime>
        <StyledMobileTimeRail style={adMode ? { pointerEvents: 'none' } : undefined}>
          <MobileProgressBar
            currentTime={currentTime}
            duration={duration}
            buffered={buffered}
            chapters={chapters}
            heatmapData={heatmapData}
            getChapterAtTime={getChapterAtTime}
            onChange={onChangeCurrentTime}
            onSeeking={onSeeking}
            adMode={adMode}
          />
        </StyledMobileTimeRail>
      </>
    )}
    {/* Live mode — show timeline + Live badge when DVR enabled, otherwise just badge */}
    {live && liveDVR && (
      <>
        <StyledMobileTime>{offsetDisplay || formatTime(0)}</StyledMobileTime>
        <StyledMobileTimeRail>
          <MobileProgressBar
            currentTime={sliderPosition}
            duration={sliderDuration || 1}
            buffered={null}
            chapters={[]}
            heatmapData={[]}
            getChapterAtTime={() => null}
            onChange={hasDVR ? seekToSliderPosition : () => {}}
            onSeeking={hasDVR ? onLiveDVRSeeking : () => {}}
          />
        </StyledMobileTimeRail>
        <StyledMobileLiveBadge onClick={seekToLiveEdge} $atEdge={isAtLiveEdge}>
          <StyledMobileLiveDot $atEdge={isAtLiveEdge} />
          {i18n.live || 'Live'}
        </StyledMobileLiveBadge>
      </>
    )}
    {live && !liveDVR && (
      <StyledMobileLiveBadge $atEdge={true} style={{ marginRight: 'auto' }}>
        <StyledMobileLiveDot $atEdge={true} />
        {i18n.live || 'Live'}
      </StyledMobileLiveBadge>
    )}
    <StyledMobileFullscreenButton
      aria-label={fullscreen ? i18n.exitFullscreen : i18n.fullscreen}
      onClick={fullscreen ? onExitFullscreen : onRequestFullscreen}
    >
      {fullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
    </StyledMobileFullscreenButton>
  </StyledMobileBottomBar>
);

MobileBottomBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  live: PropTypes.bool.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  buffered: PropTypes.number,
  fullscreen: PropTypes.bool.isRequired,
  chapters: PropTypes.array,
  heatmapData: PropTypes.array,
  getChapterAtTime: PropTypes.func,
  i18n: PropTypes.object.isRequired,
  onChangeCurrentTime: PropTypes.func.isRequired,
  onSeeking: PropTypes.func,
  onRequestFullscreen: PropTypes.func.isRequired,
  onExitFullscreen: PropTypes.func.isRequired,
  hasDVR: PropTypes.bool,
  isAtLiveEdge: PropTypes.bool,
  offsetDisplay: PropTypes.string,
  sliderDuration: PropTypes.number,
  sliderPosition: PropTypes.number,
  seekToLiveEdge: PropTypes.func,
  seekToSliderPosition: PropTypes.func,
};

export default React.memo(MobileBottomBar);
