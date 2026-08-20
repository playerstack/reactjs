import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledSlideRail,
  StyledSliderContainer,
  StyledSliderHandle,
  StyledSliderHandleRail,
  StyledTrack,
  StyledSliderContent,
} from '@PlayerSkin/DesktopPlayerSkin/components/TimeSlider/TimeSlider.styled';
import Timelens from '@PlayerSkin/DesktopPlayerSkin/components/TimeSlider/components/Timelens';
import TimeTooltip from '@PlayerSkin/DesktopPlayerSkin/components/TimeSlider/components/TimeTooltip';
import ChapterSegments from '@PlayerSkin/DesktopPlayerSkin/components/TimeSlider/components/ChapterSegments';
import HeatmapGraph from '@PlayerSkin/Commons/HeatmapGraph';
import useTimeSlider from '@hooks/useTimeSlider';
import { useChapters } from '@hooks/useChapters';
import { useHeatmap } from '@hooks/useHeatmap';
import { formatTime } from '@playerstack/core';
import { useAppSelector } from '@context/index';

const TimeSlider = ({
  spriteVTTFile,
  chapters,
  heatmapData,
  currentTime,
  duration,
  bufferedRanges = [],
  onChange,
  onSeeking,
  fullscreen,
  live = false,
  isAtLiveEdge = true,
  disabled = false,
  adMode = false,
}) => {
  const { i18n, captionDragging } = useAppSelector();
  const timelensRef = React.useRef(null);

  const {
    sliderRef,
    handleRef,
    showTooltip,
    timeSliderSliding,
    timeSliderState,
    trackTranslateX,
    onClick,
    onMouseDown,
    onSliderMouseOver,
    onSliderMouseMove,
    onMouseEnter,
    onMouseLeave,
  } = useTimeSlider({
    timelensRef,
    currentTime,
    duration,
    onChange,
    onSeeking,
  });

  const { segments, getChapterAtTime } = useChapters({ chapters, duration });
  const hasChapters = segments.length > 0;

  const { strokePath, hasHeatmap } = useHeatmap({ heatmapData, duration });

  // Get the chapter title and index for the hovered time position
  const hoveredChapter = React.useMemo(() => {
    const tooltipTime = timeSliderSliding ? timeSliderState.value : timeSliderState.tooltip;
    return getChapterAtTime(tooltipTime);
  }, [timeSliderSliding, timeSliderState.value, timeSliderState.tooltip, getChapterAtTime]);

  const hoveredSegmentIndex = React.useMemo(() => {
    if (!hoveredChapter || !showTooltip) return -1;
    return segments.findIndex((s) => s.startTime === hoveredChapter.startTime);
  }, [hoveredChapter, showTooltip, segments]);

  return (
    <StyledSliderContainer
      ref={sliderRef}
      role="slider"
      aria-label={i18n.timeBar}
      aria-valuemin={0}
      aria-valuemax={duration}
      aria-valuenow={currentTime}
      aria-valuetext={formatTime(Math.round(currentTime))}
      tabIndex={0}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onKeyDown={() => {}}
      onMouseOver={onSliderMouseOver}
      onMouseMove={onSliderMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={() => {}}
      isSliding={timeSliderSliding}
      isFullscreen={fullscreen}
      adMode={adMode}
      style={captionDragging || disabled ? { pointerEvents: 'none' } : undefined}
    >
      {hasChapters ? (
        <>
          <StyledSliderContent>
            <ChapterSegments
              segments={segments}
              currentTime={timeSliderSliding ? timeSliderState.value : currentTime}
              duration={duration}
              bufferedRanges={bufferedRanges}
              hoveredIndex={hoveredSegmentIndex}
              fullscreen={fullscreen}
            />
            <StyledSliderHandleRail style={{ transform: `translateX(${trackTranslateX.handle}%)` }}>
              <StyledSliderHandle
                ref={handleRef}
                type="button"
                onMouseDown={onMouseDown}
                onTouchStart={onMouseDown}
                isFullscreen={fullscreen}
              />
            </StyledSliderHandleRail>
          </StyledSliderContent>
        </>
      ) : (
        <StyledSliderContent>
          <StyledSlideRail isFullscreen={fullscreen}>
            {bufferedRanges.length > 0 &&
              duration > 0 &&
              bufferedRanges.map((range, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${(range.start / duration) * 100}%`,
                    width: `${((range.end - range.start) / duration) * 100}%`,
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                />
              ))}
            <StyledTrack adMode={adMode} style={{ transform: `translateX(${trackTranslateX.track}%)` }} />
          </StyledSlideRail>
          <StyledSliderHandleRail style={{ transform: `translateX(${trackTranslateX.handle}%)` }}>
            <StyledSliderHandle
              ref={handleRef}
              type="button"
              onMouseDown={onMouseDown}
              onTouchStart={onMouseDown}
              isFullscreen={fullscreen}
            />
          </StyledSliderHandleRail>
        </StyledSliderContent>
      )}
      <TimeTooltip
        sliderRef={sliderRef}
        showTooltip={showTooltip}
        duration={duration}
        tooltip={timeSliderSliding ? timeSliderState.value : timeSliderState.tooltip}
        chapterTitle={hoveredChapter?.title}
        fullscreen={fullscreen}
        live={live}
      />
      {hasHeatmap && (
        <HeatmapGraph
          strokePath={strokePath}
          currentTime={timeSliderSliding ? timeSliderState.value : currentTime}
          duration={duration}
          isFullscreen={fullscreen}
          visible={showTooltip || timeSliderSliding}
        />
      )}
      {spriteVTTFile && (
        <Timelens
          ref={timelensRef}
          sliderRef={sliderRef}
          duration={duration}
          spriteVTTFile={spriteVTTFile}
          fullscreen={fullscreen}
          hasChapters={hasChapters}
        />
      )}
    </StyledSliderContainer>
  );
};

TimeSlider.propTypes = {
  spriteVTTFile: PropTypes.string,
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startTime: PropTypes.number.isRequired,
    }),
  ),
  heatmapData: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  bufferedRanges: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
    }),
  ),
  onChange: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(
  TimeSlider,
  (p, n) =>
    p.spriteVTTFile === n.spriteVTTFile &&
    p.chapters === n.chapters &&
    p.heatmapData === n.heatmapData &&
    p.currentTime === n.currentTime &&
    p.duration === n.duration &&
    p.bufferedRanges === n.bufferedRanges &&
    p.onChange === n.onChange &&
    p.onSeeking === n.onSeeking &&
    p.fullscreen === n.fullscreen,
);
