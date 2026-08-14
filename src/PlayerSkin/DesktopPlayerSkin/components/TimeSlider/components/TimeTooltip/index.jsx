import React from 'react';
import PropTypes from 'prop-types';

import { StyledTip, StyledTooltip, StyledChapterLabel } from './TimeTooltip.styled';
import { getMouseTranslateX } from '../../utils';
import { formatTime, formatLiveOffset } from '@playerstack/core';

const TimeTooltip = ({ sliderRef, duration, tooltip, showTooltip, chapterTitle, fullscreen, live = false }) => {
  const tooltipRef = React.useRef(null);
  const [translateX, setTranslateX] = React.useState('0');

  React.useLayoutEffect(() => {
    const translate = getMouseTranslateX({
      duration,
      currentTime: tooltip,
      sliderWidth: sliderRef.current?.offsetWidth || 0,
      tooltipWidth: tooltipRef.current?.offsetWidth || 0,
    });

    setTranslateX(translate);
  }, [duration, tooltip, chapterTitle, sliderRef]);

  // In live DVR mode, show negative offset from live edge (e.g. "-2:30")
  const displayTime = React.useMemo(() => {
    if (live && duration > 0) {
      const offset = tooltip - duration; // negative when behind
      if (offset >= -1) return formatTime(0); // at edge
      return formatLiveOffset(offset, false);
    }
    return formatTime(tooltip);
  }, [live, tooltip, duration]);

  return (
    <StyledTooltip
      style={{ display: showTooltip ? 'block' : '', transform: `translateX(${translateX}%)` }}
      isFullscreen={fullscreen}
    >
      <StyledTip ref={tooltipRef} isFullscreen={fullscreen}>
        {chapterTitle && <StyledChapterLabel isFullscreen={fullscreen}>{chapterTitle}</StyledChapterLabel>}
        {displayTime}
      </StyledTip>
    </StyledTooltip>
  );
};

TimeTooltip.propTypes = {
  sliderRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement) })]),
  duration: PropTypes.number.isRequired,
  tooltip: PropTypes.number.isRequired,
  showTooltip: PropTypes.bool.isRequired,
  chapterTitle: PropTypes.string,
  fullscreen: PropTypes.bool.isRequired,
  live: PropTypes.bool,
};

export default React.memo(
  TimeTooltip,
  (p, n) =>
    p.sliderRef === n.sliderRef &&
    p.duration === n.duration &&
    p.tooltip === n.tooltip &&
    p.showTooltip === n.showTooltip &&
    p.chapterTitle === n.chapterTitle &&
    p.fullscreen === n.fullscreen &&
    p.live === n.live,
);
