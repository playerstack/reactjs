import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileChapterSegmentsContainer,
  StyledMobileChapterSegment,
  StyledMobileChapterSegmentBuffered,
  StyledMobileChapterSegmentFilled,
} from '@PlayerSkin/MobilePlayerSkin/components/MobileBottomBar/MobileChapterSegments.styled';

/**
 * Mobile-specific chapter segments that replace the standard progress bar
 * when chapters are provided. Uses percentage-based widths with flex gaps.
 */
const MobileChapterSegments = ({ segments, currentTime, duration, buffered, hoveredIndex }) => {
  if (segments.length === 0 || duration <= 0) return null;

  const bufferedTime = (buffered || 0) * duration;

  return (
    <StyledMobileChapterSegmentsContainer>
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
        let bufferedPercent = 0;
        if (bufferedTime >= segment.endTime) {
          bufferedPercent = 100;
        } else if (bufferedTime > segment.startTime) {
          bufferedPercent = ((bufferedTime - segment.startTime) / segmentDuration) * 100;
        }

        const isHovered = hoveredIndex === index;

        return (
          <StyledMobileChapterSegment
            key={index}
            style={{
              width: `${widthPercent}%`,
              transform: isHovered ? 'scaleY(2.5)' : 'none',
            }}
          >
            <StyledMobileChapterSegmentBuffered style={{ width: `${bufferedPercent}%` }} />
            <StyledMobileChapterSegmentFilled style={{ width: `${fillPercent}%` }} />
          </StyledMobileChapterSegment>
        );
      })}
    </StyledMobileChapterSegmentsContainer>
  );
};

MobileChapterSegments.propTypes = {
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
    }),
  ).isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  buffered: PropTypes.number,
  hoveredIndex: PropTypes.number,
};

export default React.memo(MobileChapterSegments);
