import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeatmapContainer, StyledHeatmapSvg } from './HeatmapGraph.styled';

/**
 * Renders a "most replayed" heatmap graph (mountain-line SVG shape)
 * above the time slider, similar to YouTube's Most Replayed feature.
 *
 * The SVG renders as a stroke line with subtle fill below, positioned
 * just above the progress bar rail.
 */
const HeatmapGraph = ({ strokePath, currentTime, duration, isFullscreen, bottomOffset, visible }) => {
  const clipId = React.useId();
  const playedClipId = `heatmap-played-${clipId}`;
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <StyledHeatmapContainer isFullscreen={isFullscreen} bottomOffset={bottomOffset} visible={visible}>
      <StyledHeatmapSvg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={playedClipId}>
            <rect x="0" y="0" width={progressPercent} height="100" />
          </clipPath>
        </defs>

        {/* Main stroke line — uniform color */}
        <path
          d={strokePath}
          fill="none"
          stroke="rgba(255, 255, 255, 0.75)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Played portion overlay — brighter */}
        <path
          d={strokePath}
          fill="none"
          stroke="rgba(255, 255, 255, 1)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          clipPath={`url(#${playedClipId})`}
        />
      </StyledHeatmapSvg>
    </StyledHeatmapContainer>
  );
};

HeatmapGraph.propTypes = {
  strokePath: PropTypes.string.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  isFullscreen: PropTypes.bool.isRequired,
  bottomOffset: PropTypes.number,
  visible: PropTypes.bool,
};

export default React.memo(
  HeatmapGraph,
  (p, n) =>
    p.strokePath === n.strokePath &&
    p.currentTime === n.currentTime &&
    p.duration === n.duration &&
    p.isFullscreen === n.isFullscreen &&
    p.bottomOffset === n.bottomOffset &&
    p.visible === n.visible,
);
