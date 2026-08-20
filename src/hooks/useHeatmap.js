import { useMemo } from 'react';

import { generateHeatmapPath } from '@playerstack/core';

import { useDeepCompareMemoize } from '@hooks/useDeepCompareMemoize';

/**
 * Hook that processes raw heatmap data (most replayed / view intensity)
 * into a normalized SVG stroke path suitable for rendering above the time slider.
 *
 * Uses useDeepCompareMemoize to stabilize the heatmapData prop reference,
 * then useMemo to compute the SVG path via core's generateHeatmapPath.
 *
 * @param {{ heatmapData: Array, duration: number }} params
 * @returns {{ strokePath: string, hasHeatmap: boolean }}
 */
export function useHeatmap({ heatmapData, duration }) {
  const stableData = useDeepCompareMemoize(heatmapData);

  const strokePath = useMemo(() => generateHeatmapPath(stableData, duration), [stableData, duration]);

  const hasHeatmap = strokePath.length > 0;

  return { strokePath, hasHeatmap };
}
