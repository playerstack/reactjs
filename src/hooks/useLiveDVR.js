import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { sliderPositionToTime, formatLiveOffset } from '@playerstack/core';

const DVR_CONFIG = {
  minDVRWindow: 15,
  liveEdgeTolerance: 10,
};

/**
 * Compute DVR state from adapter data without touching the DOM.
 */
function computeStateFromAdapter(adapter) {
  const range = adapter.getSeekableRange();
  const empty = {
    hasDVR: false,
    seekableStart: 0,
    seekableEnd: 0,
    seekableWindow: 0,
    isAtLiveEdge: true,
    liveEdgeOffset: 0,
    sliderDuration: 0,
    sliderPosition: 0,
  };

  if (!range) return empty;

  const { start: seekableStart, end: seekableEnd } = range;
  const seekableWindow = seekableEnd - seekableStart;

  if (seekableWindow < DVR_CONFIG.minDVRWindow || !isFinite(seekableWindow)) {
    return { ...empty, seekableStart, seekableEnd, seekableWindow };
  }

  const currentTime = adapter.getCurrentTime();
  const liveEdgeOffset = currentTime - seekableEnd;
  const isAtLiveEdge = currentTime >= seekableEnd - DVR_CONFIG.liveEdgeTolerance;

  const sliderPosition = Math.max(0, Math.min(currentTime - seekableStart, seekableWindow));
  const sliderDuration = seekableWindow;

  return {
    hasDVR: true,
    seekableStart,
    seekableEnd,
    seekableWindow,
    isAtLiveEdge,
    liveEdgeOffset,
    sliderDuration,
    sliderPosition,
  };
}

/**
 * React hook for live DVR (time-shifting) functionality using an adapter.
 *
 * Provides reactive state for live stream DVR, including position within
 * the DVR window, live edge detection, formatted offset, and seek actions.
 *
 * Previously lived in @playerstack/core/hooks. Now local to reactjs since core
 * no longer exports React hooks.
 */
export function useLiveDVR({ adapter, liveDVR, playing: _playing }) {
  const [dvrState, setDvrState] = useState(null);
  const adapterRef = useRef(adapter);
  adapterRef.current = adapter;

  useEffect(() => {
    if (!liveDVR || !adapter) {
      setDvrState(null);
      return;
    }

    const update = () => {
      if (adapterRef.current) {
        setDvrState(computeStateFromAdapter(adapterRef.current));
      }
    };

    update();
    const cleanup = adapter.onTimeUpdate(update);
    return cleanup;
  }, [liveDVR, adapter]);

  const seekToLive = useCallback(() => {
    const a = adapterRef.current;
    if (!a) return;
    const range = a.getSeekableRange();
    if (!range) return;
    // Seek to live edge: slightly before the absolute end to avoid triggering 'ended'.
    // For real live streams seekable.end is the live edge.
    // For VOD-as-live, seeking exactly to the end can trigger ended event.
    const liveEdge = Math.max(range.start, range.end - 1);
    a.seekTo(liveEdge);
  }, []);

  const seekToDVRPosition = useCallback(
    (sliderPos) => {
      const a = adapterRef.current;
      if (!a || !dvrState) return;
      const time = sliderPositionToTime(sliderPos, dvrState.seekableStart);
      // Dragging to the very end of the DVR window must not land on the absolute
      // seekable end: for VOD-as-live that fires `ended` and leaves the element
      // paused. Cap at end - 1 so scrubbing to the edge means "go live", never stop.
      const safeTime = Math.min(time, Math.max(dvrState.seekableStart, dvrState.seekableEnd - 1));
      a.seekTo(safeTime);
    },
    [dvrState],
  );

  const isAtLiveEdge = dvrState?.isAtLiveEdge ?? true;

  const liveOffset = useMemo(
    () => (dvrState ? formatLiveOffset(dvrState.liveEdgeOffset, dvrState.isAtLiveEdge) : ''),
    [dvrState],
  );

  return { dvrState, isAtLiveEdge, liveOffset, seekToLive, seekToDVRPosition };
}
