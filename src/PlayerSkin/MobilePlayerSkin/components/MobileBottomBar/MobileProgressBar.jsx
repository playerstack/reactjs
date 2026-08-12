import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileProgressContainer,
  StyledMobileProgressTrack,
  StyledMobileProgressBuffered,
  StyledMobileProgressFilled,
  StyledMobileProgressHandle,
  StyledMobileSeekTooltip,
} from './MobileProgressBar.styled';
import MobileChapterSegments from './MobileChapterSegments';
import HeatmapGraph from '../../../Commons/HeatmapGraph';
import useHeatmap from '../../../../hooks/useHeatmap';
import useAppSelector from '../../../../hooks/context/useAppSelector';
import { formatTime } from '../../../../utils';

const MobileProgressBar = ({
  currentTime,
  duration,
  buffered,
  chapters,
  heatmapData,
  getChapterAtTime,
  onChange,
  onSeeking,
}) => {
  const containerRef = React.useRef(null);
  const isDragging = React.useRef(false);
  const [seeking, setSeeking] = React.useState(false);
  const { i18n } = useAppSelector();

  const progress = duration > 0 ? currentTime / duration : 0;
  const bufferedProgress = buffered || 0;
  const hasChapters = chapters && chapters.length > 0;

  const { strokePath, hasHeatmap } = useHeatmap({ heatmapData, duration });

  // Chapter title at current time position (shown during seek)
  const chapterAtCurrentTime = React.useMemo(() => {
    if (!hasChapters || !getChapterAtTime) return null;
    return getChapterAtTime(currentTime);
  }, [hasChapters, getChapterAtTime, currentTime]);

  const handleInteraction = React.useCallback(
    (clientX) => {
      if (!containerRef.current || !duration) return;
      const rect = containerRef.current.getBoundingClientRect();
      const fraction = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const newTime = fraction * duration;
      onChange(newTime);
    },
    [duration, onChange],
  );

  const handleMouseDown = React.useCallback(
    (e) => {
      isDragging.current = true;
      setSeeking(true);
      if (onSeeking) onSeeking(true);
      handleInteraction(e.clientX);

      const handleMouseMove = (ev) => {
        if (isDragging.current) {
          handleInteraction(ev.clientX);
        }
      };
      const handleMouseUp = () => {
        isDragging.current = false;
        setSeeking(false);
        if (onSeeking) onSeeking(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [handleInteraction, onSeeking],
  );

  const handleTouchStart = React.useCallback(
    (e) => {
      e.preventDefault();
      isDragging.current = true;
      setSeeking(true);
      if (onSeeking) onSeeking(true);
      const touch = e.touches[0];
      handleInteraction(touch.clientX);

      const handleTouchMove = (ev) => {
        ev.preventDefault();
        if (isDragging.current && ev.touches[0]) {
          handleInteraction(ev.touches[0].clientX);
        }
      };
      const handleTouchEnd = () => {
        isDragging.current = false;
        setSeeking(false);
        if (onSeeking) onSeeking(false);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    },
    [handleInteraction, onSeeking],
  );

  // Register touchstart as non-passive to allow preventDefault (avoid scroll during drag)
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('touchstart', handleTouchStart, { passive: false });
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleTouchStart]);

  return (
    <StyledMobileProgressContainer
      ref={containerRef}
      role="slider"
      aria-label={i18n.timeBar}
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(currentTime)}
      aria-valuetext={formatTime(Math.round(currentTime))}
      tabIndex={0}
      onMouseDown={handleMouseDown}
    >
      {hasChapters ? (
        <MobileChapterSegments
          segments={chapters}
          currentTime={currentTime}
          duration={duration}
          buffered={buffered}
          hoveredIndex={
            seeking && chapterAtCurrentTime
              ? chapters.findIndex((s) => s.startTime === chapterAtCurrentTime.startTime)
              : -1
          }
        />
      ) : (
        <>
          <StyledMobileProgressTrack />
          <StyledMobileProgressBuffered style={{ width: `${bufferedProgress * 100}%` }} />
          <StyledMobileProgressFilled style={{ width: `${progress * 100}%` }} />
        </>
      )}
      <StyledMobileProgressHandle style={{ left: `${progress * 100}%` }} />
      {hasHeatmap && (
        <HeatmapGraph
          strokePath={strokePath}
          currentTime={currentTime}
          duration={duration}
          isFullscreen={false}
          bottomOffset={14}
          visible={seeking}
        />
      )}
      {hasChapters && seeking && chapterAtCurrentTime && (
        <StyledMobileSeekTooltip style={{ left: `${progress * 100}%` }}>
          {chapterAtCurrentTime.title}
          {'\n'}
          {formatTime(Math.round(currentTime))}
        </StyledMobileSeekTooltip>
      )}
    </StyledMobileProgressContainer>
  );
};

MobileProgressBar.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  buffered: PropTypes.number,
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
    }),
  ),
  heatmapData: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
  getChapterAtTime: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onSeeking: PropTypes.func,
};

export default React.memo(MobileProgressBar);
