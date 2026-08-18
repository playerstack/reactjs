import React from 'react';
import { renderHook } from '@testing-library/react';
import { useHeatmap } from '@playerstack/core/hooks';

describe('useHeatmap', () => {
  const getHook = (props) => renderHook(() => useHeatmap(props));

  describe('hasHeatmap', () => {
    test('returns false when heatmapData is null', () => {
      const { result } = getHook({ heatmapData: null, duration: 100 });
      expect(result.current.hasHeatmap).toBe(false);
      expect(result.current.strokePath).toBe('');
    });

    test('returns false when heatmapData is empty array', () => {
      const { result } = getHook({ heatmapData: [], duration: 100 });
      expect(result.current.hasHeatmap).toBe(false);
    });

    test('returns false when duration is 0', () => {
      const data = [
        { startTime: 0, endTime: 10, value: 0.5 },
        { startTime: 10, endTime: 20, value: 0.8 },
      ];
      const { result } = getHook({ heatmapData: data, duration: 0 });
      expect(result.current.hasHeatmap).toBe(false);
    });

    test('returns false when only one data point', () => {
      const data = [{ startTime: 0, endTime: 10, value: 0.5 }];
      const { result } = getHook({ heatmapData: data, duration: 100 });
      expect(result.current.hasHeatmap).toBe(false);
    });

    test('returns true when valid data with 2+ points', () => {
      const data = [
        { startTime: 0, endTime: 10, value: 0.5 },
        { startTime: 10, endTime: 20, value: 0.8 },
      ];
      const { result } = getHook({ heatmapData: data, duration: 100 });
      expect(result.current.hasHeatmap).toBe(true);
    });
  });

  describe('strokePath generation', () => {
    test('starts at floor (0,100)', () => {
      const data = [
        { startTime: 0, endTime: 10, value: 0.5 },
        { startTime: 10, endTime: 20, value: 0.8 },
        { startTime: 20, endTime: 30, value: 0.3 },
      ];
      const { result } = getHook({ heatmapData: data, duration: 100 });
      expect(result.current.strokePath).toMatch(/^M 0,100/);
    });

    test('ends at floor (100,100)', () => {
      const data = [
        { startTime: 0, endTime: 10, value: 0.5 },
        { startTime: 10, endTime: 20, value: 0.8 },
        { startTime: 20, endTime: 30, value: 0.3 },
      ];
      const { result } = getHook({ heatmapData: data, duration: 100 });
      expect(result.current.strokePath).toContain('100,100');
    });

    test('contains cubic Bézier commands', () => {
      const data = [
        { startTime: 0, endTime: 10, value: 0.5 },
        { startTime: 10, endTime: 20, value: 0.8 },
        { startTime: 20, endTime: 30, value: 0.3 },
      ];
      const { result } = getHook({ heatmapData: data, duration: 100 });
      expect(result.current.strokePath).toContain(' C ');
    });

    test('does not end with Z (open path for stroke)', () => {
      const data = [
        { startTime: 0, endTime: 10, value: 0.5 },
        { startTime: 10, endTime: 20, value: 0.8 },
        { startTime: 20, endTime: 30, value: 0.3 },
      ];
      const { result } = getHook({ heatmapData: data, duration: 100 });
      expect(result.current.strokePath).not.toMatch(/Z$/);
    });

    test('clamps values above 1 to 1', () => {
      const data = [
        { startTime: 0, endTime: 50, value: 1.5 },
        { startTime: 50, endTime: 100, value: 2.0 },
      ];
      const { result } = getHook({ heatmapData: data, duration: 100 });
      // Value 1 means y = 100 - 1*100 = 0 (top of SVG)
      expect(result.current.strokePath).toContain(',0');
    });

    test('clamps values below 0 to 0', () => {
      const data = [
        { startTime: 0, endTime: 50, value: -0.5 },
        { startTime: 50, endTime: 100, value: -1.0 },
      ];
      const { result } = getHook({ heatmapData: data, duration: 100 });
      // Value 0 means y = 100 - 0*100 = 100 (bottom of SVG)
      expect(result.current.strokePath).toContain(',100');
    });
  });

  describe('memoization', () => {
    test('returns same strokePath reference when data is deeply equal', () => {
      const data1 = [
        { startTime: 0, endTime: 50, value: 0.5 },
        { startTime: 50, endTime: 100, value: 0.8 },
      ];
      const data2 = [
        { startTime: 0, endTime: 50, value: 0.5 },
        { startTime: 50, endTime: 100, value: 0.8 },
      ];
      const { result, rerender } = renderHook(({ data, duration }) => useHeatmap({ heatmapData: data, duration }), {
        initialProps: { data: data1, duration: 100 },
      });

      const firstPath = result.current.strokePath;
      rerender({ data: data2, duration: 100 });
      expect(result.current.strokePath).toBe(firstPath);
    });

    test('recomputes when data changes', () => {
      const data1 = [
        { startTime: 0, endTime: 50, value: 0.5 },
        { startTime: 50, endTime: 100, value: 0.8 },
      ];
      const data2 = [
        { startTime: 0, endTime: 50, value: 0.9 },
        { startTime: 50, endTime: 100, value: 0.2 },
      ];
      const { result, rerender } = renderHook(({ data, duration }) => useHeatmap({ heatmapData: data, duration }), {
        initialProps: { data: data1, duration: 100 },
      });

      const firstPath = result.current.strokePath;
      rerender({ data: data2, duration: 100 });
      expect(result.current.strokePath).not.toBe(firstPath);
    });
  });
});
