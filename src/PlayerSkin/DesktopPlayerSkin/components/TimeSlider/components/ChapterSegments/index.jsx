import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledChapterSegmentsContainer,
  StyledChapterSegment,
  StyledChapterSegmentFilled,
  StyledChapterSegmentBuffered,
} from './ChapterSegments.styled';

/**
 * Renders the timeline as segmented chapters instead of a continuous bar.
 * Each segment represents a chapter and is visually separated by a small gap.
 */
const ChapterSegments = ({ segments, currentTime, duration, bufferedScaleX, hoveredIndex, fullscreen }) => {
  if (segments.length === 0 || duration <= 0) return null;

  return (
    <StyledChapterSegmentsContainer isFullscreen={fullscreen}>
      {segments.map((segment, index) => {
        const segmentDuration = segment.endTime - segment.startTime;
        const widthPercent = (segmentDuration / duration) * 100;

        // Calculate fill within this segment
        let fillPercent = 0;
        if (currentTime >= segment.endTime) {
          fillPercent = 100;
        } else if (currentTime > segment.startTime) {
          fillPercent = ((currentTime - segment.startTime) / segmentDuration) * 100;
        }

        // Calculate buffered fill within this segment
        const bufferedTime = bufferedScaleX * duration;
        let bufferedPercent = 0;
        if (bufferedTime >= segment.endTime) {
          bufferedPercent = 100;
        } else if (bufferedTime > segment.startTime) {
          bufferedPercent = ((bufferedTime - segment.startTime) / segmentDuration) * 100;
        }

        return (
          <StyledChapterSegment
            key={index}
            style={{ width: `${widthPercent}%` }}
            title={segment.title}
            isFullscreen={fullscreen}
            isHovered={hoveredIndex === index}
          >
            <StyledChapterSegmentBuffered style={{ width: `${bufferedPercent}%` }} />
            <StyledChapterSegmentFilled style={{ width: `${fillPercent}%` }} />
          </StyledChapterSegment>
        );
      })}
    </StyledChapterSegmentsContainer>
  );
};

ChapterSegments.propTypes = {
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
      startPercent: PropTypes.number.isRequired,
      endPercent: PropTypes.number.isRequired,
    }),
  ).isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  bufferedScaleX: PropTypes.number.isRequired,
  hoveredIndex: PropTypes.number,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(ChapterSegments);
