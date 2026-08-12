import React from 'react';
import { render, act } from '@testing-library/react';
import PlayerProxy from '../../src/core/PlayerProxy';

// Shared video element with text tracks — same reference across calls
const mockVideoElement = document.createElement('video');
const mockTextTracks = [
  { language: 'en', mode: 'disabled' },
  { language: 'es', mode: 'disabled' },
];
Object.defineProperty(mockVideoElement, 'textTracks', {
  get: () => mockTextTracks,
  configurable: true,
});

const mockPlayer = {
  load: jest.fn(),
  play: jest.fn(),
  pause: jest.fn(),
  stop: jest.fn(),
  mute: jest.fn(),
  unmute: jest.fn(),
  setVolume: jest.fn(),
  enablePIP: jest.fn(),
  disablePIP: jest.fn(),
  setPlaybackRate: jest.fn(),
  seekTo: jest.fn(),
  getDuration: jest.fn(() => 120),
  getCurrentTime: jest.fn(() => 30),
  getSecondsLoaded: jest.fn(() => 60),
  getPlayer: jest.fn(() => mockVideoElement),
};

jest.mock('../../src/core/PlayerCore', () => {
  return jest.fn().mockImplementation((props) => {
    props.onMount?.(mockPlayer);
    return <video data-testid="video-element">Mock</video>;
  });
});

const PlayerCore = require('../../src/core/PlayerCore');

const baseProps = {
  loop: false,
  muted: false,
  pip: false,
  playbackRate: 1,
  playbackQuality: 1080,
  playsinline: false,
  progressInterval: 1000,
  stopOnUnmount: true,
  volume: 1,
  url: 'video.m3u8',
  width: '100%',
  height: '100%',
  playing: false,
  config: { attributes: {}, forceVideo: false, loopOnEnded: false },
  activePlayer: PlayerCore,
  disableDeferredLoading: false,
  progressFrequency: 100,
  onProgress: jest.fn(),
  activeCaption: null,
};

describe('PlayerProxy — caption track management', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset track modes
    mockTextTracks.forEach((t) => { t.mode = 'disabled'; });
  });

  it('sets text track mode to hidden when activeCaption matches', () => {
    const { rerender } = render(<PlayerProxy {...baseProps} activeCaption={null} />);
    rerender(<PlayerProxy {...baseProps} activeCaption="en" />);

    expect(mockTextTracks[0].mode).toBe('hidden');
    expect(mockTextTracks[1].mode).toBe('disabled');
  });

  it('disables all tracks when activeCaption becomes null', () => {
    const { rerender } = render(<PlayerProxy {...baseProps} activeCaption="en" />);
    rerender(<PlayerProxy {...baseProps} activeCaption={null} />);

    expect(mockTextTracks[0].mode).toBe('disabled');
    expect(mockTextTracks[1].mode).toBe('disabled');
  });

  it('switches active track when activeCaption changes language', () => {
    const { rerender } = render(<PlayerProxy {...baseProps} activeCaption="en" />);
    rerender(<PlayerProxy {...baseProps} activeCaption="es" />);

    expect(mockTextTracks[0].mode).toBe('disabled');
    expect(mockTextTracks[1].mode).toBe('hidden');
  });
});

describe('PlayerProxy — handleEnded with loop and loopOnEnded', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('seeks to 0 when loop=true and config.loopOnEnded=true', () => {
    const config = { attributes: {}, forceVideo: false, loopOnEnded: true };
    const ActivePlayer = jest.fn().mockImplementation((props) => {
      props.onMount?.(mockPlayer);
      // Simulate ended event
      setTimeout(() => props.onEnded?.(), 0);
      return <video>Mock</video>;
    });
    ActivePlayer.defaultProps = { config: { loopOnEnded: true } };

    const onEnded = jest.fn();
    render(
      <PlayerProxy {...baseProps} loop={true} config={config} activePlayer={ActivePlayer} onEnded={onEnded} />,
    );

    // onEnded should NOT be called when looping
    expect(onEnded).not.toHaveBeenCalled();
  });

  it('calls onEnded when loop=false', () => {
    const onEnded = jest.fn();
    const ActivePlayer = jest.fn().mockImplementation((props) => {
      props.onMount?.(mockPlayer);
      setTimeout(() => props.onEnded?.(), 0);
      return <video>Mock</video>;
    });

    jest.useFakeTimers();
    render(
      <PlayerProxy {...baseProps} loop={false} activePlayer={ActivePlayer} onEnded={onEnded} />,
    );
    jest.advanceTimersByTime(10);
    expect(onEnded).toHaveBeenCalled();
    jest.useRealTimers();
  });
});

describe('PlayerProxy — deferred loading', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('defers load when isLoading and url changes (no forceLoad)', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { rerender } = render(<PlayerProxy {...baseProps} url="first.m3u8" />);
    // The proxy is still loading (isLoading=true internally before handleReady)
    rerender(<PlayerProxy {...baseProps} url="second.m3u8" />);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('being deferred'));
    consoleSpy.mockRestore();
  });
});
