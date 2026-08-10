import React from 'react';
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

  const paths = React.useMemo(() => {
    if (!stableData || stableData.length === 0 || duration <= 0) {
      return { svgPath: '', strokePath: '' };
    }

    const points = stableData.map((point) => {
      const midTime = (point.startTime + point.endTime) / 2;
      const x = (midTime / duration) * 100;
      // Clamp value between 0 and 1
      const value = Math.max(0, Math.min(1, point.value));
      // Invert Y: 100 = bottom (value 0), 0 = top (value 1)
      const y = 100 - value * 100;
      return { x, y };
    });

    if (points.length < 2) {
      return { svgPath: '', strokePath: '' };
    }

    // Build SVG path using Catmull-Rom to cubic Bézier conversion
    // Higher tension = sharper peaks (more graph-like, less wavy)
    const tension = 6;

    // Virtual floor anchors at both ends — avoid allocating a new array
    // by using an accessor function that maps index to point.
    const totalPoints = points.length + 2; // floor-start + data + floor-end
    const getPoint = (idx) => {
      if (idx <= 0) return { x: 0, y: 100 };
      if (idx >= totalPoints - 1) return { x: 100, y: 100 };
      return points[idx - 1];
    };

    let curvePath = `M ${getPoint(0).x},${getPoint(0).y}`;

    for (let i = 0; i < totalPoints - 1; i++) {
      const p0 = getPoint(i - 1);
      const p1 = getPoint(i);
      const p2 = getPoint(i + 1);
      const p3 = getPoint(i + 2);

      const cp1x = p1.x + (p2.x - p0.x) / tension;
      const cp1y = p1.y + (p2.y - p0.y) / tension;
      const cp2x = p2.x - (p3.x - p1.x) / tension;
      const cp2y = p2.y - (p3.y - p1.y) / tension;

      curvePath += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }

    // strokePath = the full curve from floor to floor
    const strokePath = curvePath;

    return { strokePath };
  }, [stableData, duration]);

  const hasHeatmap = paths.strokePath.length > 0;

  return { strokePath: paths.strokePath, hasHeatmap };
};

export default useHeatmap;
