import React from 'react';
import { generateHeatmapPath } from '@playerstack/core';
import useDeepCompareMemoize from './useDeepCompareMemoize';

/**
 * Hook that processes raw heatmap data (most replayed / view intensity)
 * into a normalized SVG stroke path suitable for rendering above the time slider.
 *
 * @param {{ heatmapData: Array<{ startTime: number, endTime: number, value: number }>, duration: number }} params
 * @returns {{
 *   strokePath: string,
 *   hasHeatmap: boolean,
 * }}
 */
const useHeatmap = ({ heatmapData, duration }) => {
  const stableData = useDeepCompareMemoize(heatmapData);

  const strokePath = React.useMemo(() => generateHeatmapPath(stableData, duration), [stableData, duration]);

  const hasHeatmap = strokePath.length > 0;

  return { strokePath, hasHeatmap };
};

export default useHeatmap;
