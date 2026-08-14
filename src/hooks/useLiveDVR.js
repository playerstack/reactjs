import React from 'react';
import { computeLiveDVRState, sliderPositionToTime, formatLiveOffset } from '@playerstack/core';

/**
 * React hook for live DVR (time-shifting) functionality.
 *
 * Provides reactive state for live stream DVR, including:
 * - Whether DVR is available (seekable window is large enough)
 * - Current position within the DVR window
 * - Whether the user is at the live edge
 * - Formatted negative offset string
 * - Seek-to-live-edge action
 *
 * @param {object} params
 * @param {React.RefObject} params.videoRef - Ref to the video element
 * @param {boolean} params.live - Whether the stream is live
 * @param {number} params.currentTime - Current playback time (from player state)
 * @param {object} [params.config] - Optional DVR configuration
 * @param {number} [params.config.minDVRWindow=30] - Min seekable window to enable DVR
 * @param {number} [params.config.liveEdgeTolerance=10] - Tolerance for "at edge" detection
 * @returns {object} Live DVR state and actions
 */
const useLiveDVR = ({ videoRef, live, currentTime, config } = {}) => {
  const [dvrState, setDvrState] = React.useState(() => computeLiveDVRState(null, config));

  // Update DVR state on each time update
  React.useEffect(() => {
    if (!live) {
      setDvrState(computeLiveDVRState(null, config));
      return;
    }

    const el = videoRef?.current;
    if (!el) return;

    const update = () => {
      setDvrState(computeLiveDVRState(el, config));
    };

    // Initial computation
    update();

    // Listen to both timeupdate and progress for seekable range updates
    el.addEventListener('timeupdate', update);
    el.addEventListener('progress', update);

    return () => {
      el.removeEventListener('timeupdate', update);
      el.removeEventListener('progress', update);
    };
  }, [videoRef, live, config]);

  // Also recompute when currentTime prop changes (covers controlled scenarios)
  React.useEffect(() => {
    if (!live) return;
    const el = videoRef?.current;
    if (el) {
      setDvrState(computeLiveDVRState(el, config));
    }
  }, [currentTime, videoRef, live, config]);

  // Seek to live edge
  const seekToLiveEdge = React.useCallback(() => {
    const el = videoRef?.current;
    if (!el || !el.seekable || el.seekable.length === 0) return;

    const seekableEnd = el.seekable.end(el.seekable.length - 1);
    el.currentTime = seekableEnd;
  }, [videoRef]);

  // Convert a slider position to an absolute seek time
  const seekToSliderPosition = React.useCallback(
    (sliderPos) => {
      const el = videoRef?.current;
      if (!el) return;
      const time = sliderPositionToTime(sliderPos, dvrState.seekableStart);
      el.currentTime = time;
    },
    [videoRef, dvrState.seekableStart],
  );

  // Formatted offset string (e.g. "-1:20:06")
  const offsetDisplay = React.useMemo(
    () => formatLiveOffset(dvrState.liveEdgeOffset, dvrState.isAtLiveEdge),
    [dvrState.liveEdgeOffset, dvrState.isAtLiveEdge],
  );

  return {
    /** Whether the stream has a usable DVR window */
    hasDVR: dvrState.hasDVR,
    /** Whether the user is at the live edge */
    isAtLiveEdge: dvrState.isAtLiveEdge,
    /** Negative offset from live in seconds */
    liveEdgeOffset: dvrState.liveEdgeOffset,
    /** Formatted offset string (e.g. "-1:20:06") or empty when at edge */
    offsetDisplay,
    /** Duration for the slider (seekable window length) */
    sliderDuration: dvrState.sliderDuration,
    /** Current position within the slider */
    sliderPosition: dvrState.sliderPosition,
    /** Start of the seekable window (absolute time) */
    seekableStart: dvrState.seekableStart,
    /** End of the seekable window (absolute time, live edge) */
    seekableEnd: dvrState.seekableEnd,
    /** Buffered ratio relative to the DVR window (for slider buffered display) */
    seekableWindow: dvrState.seekableWindow,
    /** Seek to the live edge */
    seekToLiveEdge,
    /** Seek to a position within the slider (0..sliderDuration) */
    seekToSliderPosition,
  };
};

export default useLiveDVR;
