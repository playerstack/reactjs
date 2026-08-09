import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileBottomBar,
  StyledMobileTimeRail,
  StyledMobileTime,
  StyledMobileFullscreenButton,
} from './MobileBottomBar.styled';
import MobileProgressBar from './MobileProgressBar';
import { FullscreenIcon, ExitFullscreenIcon } from '../../icons';
import { formatTime } from '../../../../utils';

const MobileBottomBar = ({
  visible,
  live,
  currentTime,
  duration,
  buffered,
  fullscreen,
  chapters,
  getChapterAtTime,
  i18n,
  onChangeCurrentTime,
  onSeeking,
  onRequestFullscreen,
  onExitFullscreen,
}) => (
  <StyledMobileBottomBar $visible={visible} onClick={(e) => e.stopPropagation()}>
    {false === live && (
      <>
        <StyledMobileTime>
          {formatTime(Math.round(currentTime))} / {formatTime(Math.round(duration))}
        </StyledMobileTime>
        <StyledMobileTimeRail>
          <MobileProgressBar
            currentTime={currentTime}
            duration={duration}
            buffered={buffered}
            chapters={chapters}
            getChapterAtTime={getChapterAtTime}
            onChange={onChangeCurrentTime}
            onSeeking={onSeeking}
          />
        </StyledMobileTimeRail>
      </>
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
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
    }),
  ),
  getChapterAtTime: PropTypes.func,
  i18n: PropTypes.shape({
    exitFullscreen: PropTypes.string,
    fullscreen: PropTypes.string,
  }).isRequired,
  onChangeCurrentTime: PropTypes.func.isRequired,
  onSeeking: PropTypes.func,
  onRequestFullscreen: PropTypes.func.isRequired,
  onExitFullscreen: PropTypes.func.isRequired,
};

export default React.memo(MobileBottomBar);
