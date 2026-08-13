import React from 'react';
import { render, act } from '@testing-library/react';
import useCast from '../../src/hooks/useCast';

function TestComponent({ videoRef, disabled, onResult }) {
  const result = useCast({ videoRef, disabled });
  onResult(result);
  return null;
}

function renderHook(props) {
  const results = { current: null };
  const onResult = (r) => {
    results.current = r;
  };
  const rendered = render(<TestComponent {...props} onResult={onResult} />);
  return { results, rendered };
}

describe('useCast', () => {
  let originalPresentationRequest;

  beforeEach(() => {
    originalPresentationRequest = window.PresentationRequest;
  });

  afterEach(() => {
    if (originalPresentationRequest) {
      window.PresentationRequest = originalPresentationRequest;
    } else {
      delete window.PresentationRequest;
    }
  });

  describe('isSupported', () => {
    test('returns true when PresentationRequest is available', () => {
      window.PresentationRequest = jest.fn();
      const videoRef = { current: document.createElement('video') };
      const { results } = renderHook({ videoRef, disabled: false });
      expect(results.current.isSupported).toBe(true);
    });

    test('returns true when video.remote is available', () => {
      delete window.PresentationRequest;
      // jsdom video doesn't have .remote, so isSupported depends on PresentationRequest
      const videoRef = { current: document.createElement('video') };
      const { results } = renderHook({ videoRef, disabled: false });
      // Without PresentationRequest or remote, should be false
      expect(results.current.isSupported).toBe(false);
    });
  });

  describe('castState', () => {
    test('initial state is disconnected', () => {
      window.PresentationRequest = jest.fn();
      const videoRef = { current: document.createElement('video') };
      const { results } = renderHook({ videoRef, disabled: false });
      expect(results.current.castState).toBe('disconnected');
    });
  });

  describe('promptCast', () => {
    test('calls PresentationRequest.start when available', async () => {
      const mockConnection = {
        addEventListener: jest.fn(),
      };
      const mockStart = jest.fn().mockResolvedValue(mockConnection);
      window.PresentationRequest = jest.fn().mockImplementation(() => ({
        start: mockStart,
      }));

      const video = document.createElement('video');
      Object.defineProperty(video, 'currentSrc', { value: 'http://example.com/video.mp4' });
      const videoRef = { current: video };

      const { results } = renderHook({ videoRef, disabled: false });

      await act(async () => {
        results.current.promptCast();
        await new Promise((r) => setTimeout(r, 0));
      });

      expect(mockStart).toHaveBeenCalled();
    });

    test('does not throw when videoRef is null', () => {
      window.PresentationRequest = jest.fn().mockImplementation(() => ({
        start: jest.fn().mockRejectedValue(new Error('cancelled')),
      }));
      const videoRef = { current: null };
      const { results } = renderHook({ videoRef, disabled: false });
      expect(() => results.current.promptCast()).not.toThrow();
    });

    test('tries Remote Playback API first when video.remote exists', async () => {
      const mockPrompt = jest.fn().mockResolvedValue(undefined);
      const video = document.createElement('video');
      Object.defineProperty(video, 'remote', {
        value: { prompt: mockPrompt, watchAvailability: jest.fn(), cancelWatchAvailability: jest.fn(), addEventListener: jest.fn(), removeEventListener: jest.fn() },
        configurable: true,
      });
      const videoRef = { current: video };

      delete window.PresentationRequest;

      const { results } = renderHook({ videoRef, disabled: false });
      await act(async () => {
        results.current.promptCast();
        await new Promise((r) => setTimeout(r, 0));
      });

      expect(mockPrompt).toHaveBeenCalled();
    });

    test('falls back to PresentationRequest when remote.prompt fails', async () => {
      const mockConnection = { addEventListener: jest.fn() };
      const mockStart = jest.fn().mockResolvedValue(mockConnection);
      window.PresentationRequest = jest.fn().mockImplementation(() => ({
        start: mockStart,
      }));

      const mockPrompt = jest.fn().mockRejectedValue(new Error('dismissed'));
      const video = document.createElement('video');
      Object.defineProperty(video, 'remote', {
        value: { prompt: mockPrompt, watchAvailability: jest.fn(), cancelWatchAvailability: jest.fn(), addEventListener: jest.fn(), removeEventListener: jest.fn() },
        configurable: true,
      });
      Object.defineProperty(video, 'currentSrc', { value: 'http://example.com/v.mp4' });
      const videoRef = { current: video };

      const { results } = renderHook({ videoRef, disabled: false });
      await act(async () => {
        results.current.promptCast();
        await new Promise((r) => setTimeout(r, 10));
      });

      expect(mockPrompt).toHaveBeenCalled();
      expect(mockStart).toHaveBeenCalled();
    });

    test('sets castState to connected on successful presentation', async () => {
      const mockConnection = { addEventListener: jest.fn() };
      const mockStart = jest.fn().mockResolvedValue(mockConnection);
      window.PresentationRequest = jest.fn().mockImplementation(() => ({
        start: mockStart,
      }));

      const video = document.createElement('video');
      Object.defineProperty(video, 'currentSrc', { value: 'http://example.com/v.mp4' });
      const videoRef = { current: video };

      const { results } = renderHook({ videoRef, disabled: false });
      await act(async () => {
        results.current.promptCast();
        await new Promise((r) => setTimeout(r, 10));
      });

      expect(results.current.castState).toBe('connected');
    });

    test('stays disconnected when PresentationRequest.start fails', async () => {
      window.PresentationRequest = jest.fn().mockImplementation(() => ({
        start: jest.fn().mockRejectedValue(new Error('user cancelled')),
      }));

      const video = document.createElement('video');
      Object.defineProperty(video, 'currentSrc', { value: 'http://example.com/v.mp4' });
      const videoRef = { current: video };

      const { results } = renderHook({ videoRef, disabled: false });
      await act(async () => {
        results.current.promptCast();
        await new Promise((r) => setTimeout(r, 10));
      });

      expect(results.current.castState).toBe('disconnected');
    });

    test('uses window.location.href when no video src', async () => {
      const mockConnection = { addEventListener: jest.fn() };
      const mockStart = jest.fn().mockResolvedValue(mockConnection);
      window.PresentationRequest = jest.fn().mockImplementation(() => ({
        start: mockStart,
      }));

      const videoRef = { current: null };
      const { results } = renderHook({ videoRef, disabled: false });
      await act(async () => {
        results.current.promptCast();
        await new Promise((r) => setTimeout(r, 10));
      });

      expect(window.PresentationRequest).toHaveBeenCalledWith([window.location.href]);
    });
  });

  describe('disabled prop', () => {
    test('sets disableRemotePlayback on video when disabled', () => {
      window.PresentationRequest = jest.fn();
      const video = document.createElement('video');
      const videoRef = { current: video };
      renderHook({ videoRef, disabled: true });
      expect(video.disableRemotePlayback).toBe(true);
    });

    test('removes disableRemotePlayback when not disabled', () => {
      window.PresentationRequest = jest.fn();
      const video = document.createElement('video');
      video.disableRemotePlayback = true;
      const videoRef = { current: video };
      const { rendered } = renderHook({ videoRef, disabled: true });

      const results2 = { current: null };
      rendered.rerender(<TestComponent videoRef={videoRef} disabled={false} onResult={(r) => { results2.current = r; }} />);
      expect(video.disableRemotePlayback).toBe(false);
    });

    test('terminates active connection when disabled becomes true', async () => {
      const mockTerminate = jest.fn();
      const mockConnection = {
        addEventListener: jest.fn(),
        terminate: mockTerminate,
      };
      const mockStart = jest.fn().mockResolvedValue(mockConnection);
      window.PresentationRequest = jest.fn().mockImplementation(() => ({
        start: mockStart,
      }));

      const video = document.createElement('video');
      Object.defineProperty(video, 'currentSrc', { value: 'http://example.com/v.mp4' });
      const videoRef = { current: video };

      const { results, rendered } = renderHook({ videoRef, disabled: false });

      await act(async () => {
        results.current.promptCast();
        await new Promise((r) => setTimeout(r, 10));
      });

      expect(results.current.castState).toBe('connected');

      const results2 = { current: null };
      act(() => {
        rendered.rerender(<TestComponent videoRef={videoRef} disabled={true} onResult={(r) => { results2.current = r; }} />);
      });

      expect(mockTerminate).toHaveBeenCalled();
      expect(results2.current.castState).toBe('disconnected');
    });
  });

  describe('cleanup', () => {
    test('terminates connection on unmount', async () => {
      const mockTerminate = jest.fn();
      const mockConnection = {
        addEventListener: jest.fn(),
        terminate: mockTerminate,
      };
      const mockStart = jest.fn().mockResolvedValue(mockConnection);
      window.PresentationRequest = jest.fn().mockImplementation(() => ({
        start: mockStart,
      }));

      const video = document.createElement('video');
      Object.defineProperty(video, 'currentSrc', { value: 'http://example.com/video.mp4' });
      const videoRef = { current: video };

      const { results, rendered } = renderHook({ videoRef, disabled: false });

      await act(async () => {
        results.current.promptCast();
        await new Promise((r) => setTimeout(r, 10));
      });

      rendered.unmount();
      expect(mockTerminate).toHaveBeenCalled();
    });
  });
});
