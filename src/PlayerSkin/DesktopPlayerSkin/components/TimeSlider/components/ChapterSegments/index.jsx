import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledChapterSegmentsContainer,
  StyledChapterSegment,
  StyledChapterSegmentFilled,
  StyledChapterSegmentBuffered,
} from '@PlayerSkin/DesktopPlayerSkin/components/TimeSlider/components/ChapterSegments/ChapterSegments.styled';

/**
 * Renders the timeline as segmented chapters instead of a continuous bar.
 * Each segment represents a chapter and is visually separated by a small gap.
 * Supports multi-range buffer visualization (YouTube-style).
 */
const ChapterSegments = ({ segments, currentTime, duration, bufferedRanges = [], hoveredIndex, fullscreen }) => {
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

        // Multi-range buffer: compute buffered portions within this segment
        const segmentBufferRanges =
          bufferedRanges.length > 0
            ? bufferedRanges
                .map((range) => {
                  const overlapStart = Math.max(range.start, segment.startTime);
                  const overlapEnd = Math.min(range.end, segment.endTime);
                  if (overlapStart >= overlapEnd) return null;
                  return {
                    left: ((overlapStart - segment.startTime) / segmentDuration) * 100,
                    width: ((overlapEnd - overlapStart) / segmentDuration) * 100,
                  };
                })
                .filter(Boolean)
            : [];

        return (
          <StyledChapterSegment
            key={index}
            style={{ width: `${widthPercent}%` }}
            title={segment.title}
            isFullscreen={fullscreen}
            isHovered={hoveredIndex === index}
          >
            {segmentBufferRanges.map((r, i) => (
              <StyledChapterSegmentBuffered
                key={i}
                style={{ position: 'absolute', left: `${r.left}%`, width: `${r.width}%` }}
              />
            ))}
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
  bufferedRanges: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
    }),
  ),
  hoveredIndex: PropTypes.number,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(ChapterSegments);
