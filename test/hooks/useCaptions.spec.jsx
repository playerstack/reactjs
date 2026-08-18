jest.setTimeout(30000);
import React from 'react';
import { renderHook, act, waitFor } from '@testing-library/react';

// Mock fetch globally
const mockFetch = jest.fn(() =>
  Promise.resolve({ text: () => Promise.resolve('WEBVTT\n\n00:00:00.000 --> 00:00:05.000\nHello') }),
);
global.fetch = mockFetch;

jest.mock('@playerstack/core', () => {
  const actual = jest.requireActual('@playerstack/core');
  return {
    ...actual,
    getCookie: jest.fn(),
    setCookie: jest.fn(),
  };
});

const { DEFAULT_CAPTION_STYLE, getCookie, setCookie } = require('@playerstack/core');
const useCaptions = require('../../src/hooks/useCaptions').default;

// Stable references to avoid infinite re-render loops
const stableCaptions = [{ language: 'en', src: 'http://example.com/en.vtt', label: 'English' }];
const stableMultiCaptions = [
  { language: 'en', src: 'en.vtt', label: 'English' },
  { language: 'es', src: 'es.vtt', label: 'Spanish' },
];

describe('useCaptions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getCookie.mockReturnValue(null);
    mockFetch.mockImplementation(() =>
      Promise.resolve({ text: () => Promise.resolve('WEBVTT\n\n00:00:00.000 --> 00:00:05.000\nHello') }),
    );
  });

  it('returns default caption style when no cookie saved', () => {
    const { result } = renderHook(() => useCaptions({ captions: null, activeCaption: null }));
    expect(result.current.captionStyle).toEqual(DEFAULT_CAPTION_STYLE);
    expect(result.current.cues).toEqual([]);
  });

  it('restores caption style from cookie', () => {
    const savedStyle = JSON.stringify({ fontColor: '#ff0000', fontSize: '150%' });
    getCookie.mockReturnValue(savedStyle);

    const { result } = renderHook(() => useCaptions({ captions: null, activeCaption: null }));
    expect(result.current.captionStyle.fontColor).toBe('#ff0000');
    expect(result.current.captionStyle.fontSize).toBe('150%');
    expect(result.current.captionStyle.fontFamily).toBe('sans-serif');
  });

  it('uses default style when cookie has invalid JSON', () => {
    getCookie.mockReturnValue('not-valid-json{{{');
    const { result } = renderHook(() => useCaptions({ captions: null, activeCaption: null }));
    expect(result.current.captionStyle).toEqual(DEFAULT_CAPTION_STYLE);
  });

  it('fetches and parses VTT when activeCaption matches a track', async () => {
    const { result } = renderHook(() => useCaptions({ captions: stableCaptions, activeCaption: 'en' }));

    await waitFor(() => {
      expect(result.current.cues.length).toBeGreaterThan(0);
    });
    expect(mockFetch).toHaveBeenCalledWith('http://example.com/en.vtt');
  }, 30000);

  it('sets empty cues when activeCaption is null', () => {
    const { result } = renderHook(() => useCaptions({ captions: stableCaptions, activeCaption: null }));
    expect(result.current.cues).toEqual([]);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('sets empty cues when captions array is empty', () => {
    const empty = [];
    const { result } = renderHook(() => useCaptions({ captions: empty, activeCaption: 'en' }));
    expect(result.current.cues).toEqual([]);
  });

  it('sets empty cues when active language not found in captions', () => {
    const { result } = renderHook(() => useCaptions({ captions: stableCaptions, activeCaption: 'fr' }));
    expect(result.current.cues).toEqual([]);
  });

  it('handles fetch error gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    mockFetch.mockImplementation(() => Promise.reject(new Error('Network error')));

    const { result } = renderHook(() => useCaptions({ captions: stableCaptions, activeCaption: 'en' }));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
    });
    expect(result.current.cues).toEqual([]);
    consoleSpy.mockRestore();
  }, 30000);

  it('updateCaptionStyle updates style and saves to cookie', () => {
    const { result } = renderHook(() => useCaptions({ captions: null, activeCaption: null }));

    const newStyle = { ...DEFAULT_CAPTION_STYLE, fontColor: '#00ff00' };
    act(() => {
      result.current.updateCaptionStyle(newStyle);
    });

    expect(result.current.captionStyle.fontColor).toBe('#00ff00');
    expect(setCookie).toHaveBeenCalledWith('caption_style', JSON.stringify(newStyle), 365);
  });

  it('clears cues when switching from active caption to null', async () => {
    const { result, rerender } = renderHook(
      ({ active }) => useCaptions({ captions: stableCaptions, activeCaption: active }),
      { initialProps: { active: 'en' } },
    );

    await waitFor(() => expect(result.current.cues.length).toBeGreaterThan(0));

    rerender({ active: null });
    expect(result.current.cues).toEqual([]);
  }, 30000);

  it('re-fetches when activeCaption language changes', async () => {
    const { result, rerender } = renderHook(
      ({ active }) => useCaptions({ captions: stableMultiCaptions, activeCaption: active }),
      { initialProps: { active: 'en' } },
    );

    await waitFor(() => expect(result.current.cues.length).toBeGreaterThan(0));
    expect(mockFetch).toHaveBeenCalledWith('en.vtt');

    rerender({ active: 'es' });
    await waitFor(() => expect(mockFetch).toHaveBeenCalledWith('es.vtt'));
  }, 30000);
});
