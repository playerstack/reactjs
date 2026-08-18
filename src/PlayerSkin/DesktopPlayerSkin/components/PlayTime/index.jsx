import React from 'react';
import PropTypes from 'prop-types';

import { StyledControlText, StyledLiveDot, StyledLiveBadge, StyledChapterIndicator } from '@PlayerSkin/DesktopPlayerSkin/components/PlayTime/PlayTime.styled';
import { formatTime } from '@playerstack/core';
import { useAppSelector } from '@context/index';

const PlayTime = ({
  live,
  duration,
  currentTime,
  chapterTitle,
  isAtLiveEdge = true,
  offsetDisplay = '',
  onLiveClick,
}) => {
  const { i18n } = useAppSelector();

  return (
    <StyledControlText role="timer" aria-live="off">
      {live && offsetDisplay ? offsetDisplay : formatTime(Math.round(currentTime))}
      {live ? (
        <StyledLiveBadge
          type="button"
          $atEdge={isAtLiveEdge}
          onClick={onLiveClick}
          aria-label={isAtLiveEdge ? i18n.live : `${i18n.live} - ${i18n.seekToLive || 'Go to live'}`}
          title={isAtLiveEdge ? '' : i18n.seekToLive || 'Go to live'}
        >
          <StyledLiveDot $atEdge={isAtLiveEdge} />
          {i18n.live}
        </StyledLiveBadge>
      ) : (
        ` / ${formatTime(Math.round(duration))}`
      )}
      {chapterTitle && <StyledChapterIndicator> · {chapterTitle}</StyledChapterIndicator>}
    </StyledControlText>
  );
};

PlayTime.propTypes = {
  live: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  chapterTitle: PropTypes.string,
  isAtLiveEdge: PropTypes.bool,
  offsetDisplay: PropTypes.string,
  onLiveClick: PropTypes.func,
};

export default React.memo(
  PlayTime,
  (p, n) =>
    p.live === n.live &&
    p.duration === n.duration &&
    p.currentTime === n.currentTime &&
    p.chapterTitle === n.chapterTitle &&
    p.isAtLiveEdge === n.isAtLiveEdge &&
    p.offsetDisplay === n.offsetDisplay &&
    p.onLiveClick === n.onLiveClick,
);
