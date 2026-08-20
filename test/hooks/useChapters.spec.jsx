import React from 'react';
import { renderHook } from '@testing-library/react';
import { useChapters } from '@hooks/useChapters';

describe('useChapters', () => {
  const sampleChapters = [
    { title: 'Intro', startTime: 0 },
    { title: 'Main', startTime: 30 },
    { title: 'Outro', startTime: 80 },
  ];

  // ─── segments computation ─────────────────────────────────────────────────────

  describe('segments', () => {
    test('returns empty segments when chapters is null', () => {
      const { result } = renderHook(() => useChapters({ chapters: null, duration: 100 }));
      expect(result.current.segments).toEqual([]);
    });

    test('returns empty segments when chapters is empty array', () => {
      const { result } = renderHook(() => useChapters({ chapters: [], duration: 100 }));
      expect(result.current.segments).toEqual([]);
    });

    test('returns empty segments when duration is 0', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 0 }));
      expect(result.current.segments).toEqual([]);
    });

    test('returns empty segments when duration is negative', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: -10 }));
      expect(result.current.segments).toEqual([]);
    });

    test('computes correct segments from chapters', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 100 }));
      const { segments } = result.current;

      expect(segments).toHaveLength(3);

      expect(segments[0]).toEqual({
        title: 'Intro',
        startTime: 0,
        endTime: 30,
        startPercent: 0,
        endPercent: 30,
      });

      expect(segments[1]).toEqual({
        title: 'Main',
        startTime: 30,
        endTime: 80,
        startPercent: 30,
        endPercent: 80,
      });

      expect(segments[2]).toEqual({
        title: 'Outro',
        startTime: 80,
        endTime: 100,
        startPercent: 80,
        endPercent: 100,
      });
    });

    test('sorts chapters by startTime', () => {
      const unordered = [
        { title: 'B', startTime: 50 },
        { title: 'A', startTime: 0 },
        { title: 'C', startTime: 80 },
      ];
      const { result } = renderHook(() => useChapters({ chapters: unordered, duration: 100 }));
      const titles = result.current.segments.map((s) => s.title);
      expect(titles).toEqual(['A', 'B', 'C']);
    });

    test('filters chapters with startTime >= duration', () => {
      const chapters = [
        { title: 'Valid', startTime: 0 },
        { title: 'Beyond', startTime: 150 },
      ];
      const { result } = renderHook(() => useChapters({ chapters, duration: 100 }));
      expect(result.current.segments).toHaveLength(1);
      expect(result.current.segments[0].title).toBe('Valid');
      expect(result.current.segments[0].endTime).toBe(100);
    });

    test('caps endTime at duration for last valid segment', () => {
      const chapters = [
        { title: 'First', startTime: 0 },
        { title: 'Second', startTime: 60 },
        { title: 'Third', startTime: 200 }, // beyond duration
      ];
      const { result } = renderHook(() => useChapters({ chapters, duration: 120 }));
      expect(result.current.segments).toHaveLength(2);
      expect(result.current.segments[1].endTime).toBe(120);
    });

    test('handles single chapter', () => {
      const chapters = [{ title: 'Only', startTime: 0 }];
      const { result } = renderHook(() => useChapters({ chapters, duration: 60 }));
      expect(result.current.segments).toHaveLength(1);
      expect(result.current.segments[0]).toEqual({
        title: 'Only',
        startTime: 0,
        endTime: 60,
        startPercent: 0,
        endPercent: 100,
      });
    });

    test('calculates correct percentages', () => {
      const chapters = [
        { title: 'A', startTime: 0 },
        { title: 'B', startTime: 25 },
      ];
      const { result } = renderHook(() => useChapters({ chapters, duration: 50 }));
      expect(result.current.segments[0].startPercent).toBe(0);
      expect(result.current.segments[0].endPercent).toBe(50);
      expect(result.current.segments[1].startPercent).toBe(50);
      expect(result.current.segments[1].endPercent).toBe(100);
    });

    test('segments are stable reference when chapters content unchanged', () => {
      const chapters = [{ title: 'A', startTime: 0 }];
      const { result, rerender } = renderHook(({ ch, dur }) => useChapters({ chapters: ch, duration: dur }), {
        initialProps: { ch: chapters, dur: 100 },
      });
      const first = result.current.segments;
      // Rerender with same-content new array reference
      rerender({ ch: [{ title: 'A', startTime: 0 }], dur: 100 });
      expect(result.current.segments).toBe(first);
    });
  });

  // ─── getChapterAtTime ─────────────────────────────────────────────────────────

  describe('getChapterAtTime', () => {
    test('returns null when no segments', () => {
      const { result } = renderHook(() => useChapters({ chapters: [], duration: 100 }));
      expect(result.current.getChapterAtTime(50)).toBeNull();
    });

    test('returns first chapter for time 0', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 100 }));
      const chapter = result.current.getChapterAtTime(0);
      expect(chapter.title).toBe('Intro');
    });

    test('returns correct chapter at boundary', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 100 }));
      // Time exactly at startTime of second chapter
      const chapter = result.current.getChapterAtTime(30);
      expect(chapter.title).toBe('Main');
    });

    test('returns correct chapter in middle of segment', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 100 }));
      const chapter = result.current.getChapterAtTime(55);
      expect(chapter.title).toBe('Main');
    });

    test('returns last chapter for time near end', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 100 }));
      const chapter = result.current.getChapterAtTime(95);
      expect(chapter.title).toBe('Outro');
    });

    test('returns first chapter for negative time', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 100 }));
      const chapter = result.current.getChapterAtTime(-5);
      expect(chapter.title).toBe('Intro');
    });

    test('returns last chapter for time beyond duration', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 100 }));
      const chapter = result.current.getChapterAtTime(150);
      expect(chapter.title).toBe('Outro');
    });

    test('returns correct segment object with all fields', () => {
      const { result } = renderHook(() => useChapters({ chapters: sampleChapters, duration: 100 }));
      const chapter = result.current.getChapterAtTime(40);
      expect(chapter).toEqual({
        title: 'Main',
        startTime: 30,
        endTime: 80,
        startPercent: 30,
        endPercent: 80,
      });
    });

    test('is stable callback reference across rerenders', () => {
      const { result, rerender } = renderHook(
        ({ ch, dur }) => useChapters({ chapters: ch, duration: dur }),
        { initialProps: { ch: sampleChapters, dur: 100 } },
      );
      const first = result.current.getChapterAtTime;
      rerender({ ch: sampleChapters, dur: 100 });
      expect(result.current.getChapterAtTime).toBe(first);
    });
  });
});
