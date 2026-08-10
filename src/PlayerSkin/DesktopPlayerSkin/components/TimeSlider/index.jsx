import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledSlideRail,
  StyledSliderContainer,
  StyledSliderBuffered,
  StyledSliderHandle,
  StyledSliderHandleRail,
  StyledTrack,
  StyledSliderContent,
} from './TimeSlider.styled';
import Timelens from './components/Timelens';
import TimeTooltip from './components/TimeTooltip';
import ChapterSegments from './components/ChapterSegments';
import HeatmapGraph from '../../../Commons/HeatmapGraph';
import useTimeSlider from '../../../../hooks/useTimeSlider';
import useChapters from '../../../../hooks/useChapters';
import useHeatmap from '../../../../hooks/useHeatmap';
import { formatTime } from '../../../../utils';
import useAppSelector from '../../../../hooks/context/useAppSelector';

const TimeSlider = ({
  spriteVTTFile,
  chapters,
  heatmapData,
  currentTime,
  duration,
  buffered: bufferedScaleX,
  onChange,
  onSeeking,
  fullscreen,
}) => {
  const { i18n } = useAppSelector();
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
    >
      {hasChapters ? (
        <>
          <StyledSliderContent>
            <ChapterSegments
              segments={segments}
              currentTime={timeSliderSliding ? timeSliderState.value : currentTime}
              duration={duration}
              bufferedScaleX={bufferedScaleX}
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
            <StyledSliderBuffered style={{ transform: `scaleX(${bufferedScaleX})` }} />
            <StyledTrack style={{ transform: `translateX(${trackTranslateX.track}%)` }} />
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
  buffered: PropTypes.number.isRequired || null,
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
    p.buffered === n.buffered &&
    p.onChange === n.onChange &&
    p.onSeeking === n.onSeeking &&
    p.fullscreen === n.fullscreen,
);
