import React from 'react';
import { computeChapterSegments, getChapterAtTime as coreGetChapterAtTime } from '@playerstack/core';
import useDeepCompareMemoize from './useDeepCompareMemoize';

/**
 * Hook that processes chapter definitions and provides chapter-related
 * utilities for the time slider (segment boundaries, active chapter, etc.)
 *
 * @param {{ chapters: Array<{ title: string, startTime: number }>, duration: number }} params
 * @returns {{
 *   segments: Array<{ title: string, startTime: number, endTime: number, startPercent: number, endPercent: number }>,
 *   getChapterAtTime: (time: number) => object | null,
 * }}
 */
const useChapters = ({ chapters, duration }) => {
  const stableChapters = useDeepCompareMemoize(chapters);

  const segments = React.useMemo(() => computeChapterSegments(stableChapters, duration), [stableChapters, duration]);

  const getChapterAtTime = React.useCallback((time) => coreGetChapterAtTime(segments, time), [segments]);

  return {
    segments,
    getChapterAtTime,
  };
};

export default useChapters;
