import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

// Mock PlayerProxy to avoid actual player logic
jest.mock('../../src/core/PlayerProxy', () => {
  const ReactMock = require('react');
  return ReactMock.forwardRef((props, ref) => {
    ReactMock.useImperativeHandle(ref, () => ({
      seekTo: jest.fn(),
      getDuration: () => 120,
      getCurrentTime: () => 30,
      getSecondsLoaded: () => 60,
    }));
    return <div data-testid="player-proxy" />;
  });
});

// Mock AudioPlayerSkin
jest.mock('../../src/PlayerSkin/AudioPlayerSkin', () => {
  return (props) => (
    <div data-testid="audio-player-skin">
      <button data-testid="play-btn" onClick={props.onPlayClick}>Play</button>
      <button data-testid="pause-btn" onClick={props.onPauseClick}>Pause</button>
      <button data-testid="toggle-btn" onClick={props.onTogglePlay}>Toggle</button>
      <button data-testid="mute-btn" onClick={props.onMutedClick}>Mute</button>
      <button data-testid="seek-btn" onClick={() => props.changeCurrentTime(50)}>Seek</button>
      <button data-testid="rate-btn" onClick={() => props.changePlaybackRate(2)}>Rate</button>
      <button data-testid="seeking-btn" onClick={() => props.onSeeking(true)}>Seeking</button>
      <span data-testid="paused">{String(props.paused)}</span>
      <span data-testid="muted">{String(props.muted)}</span>
      <span data-testid="rate">{String(props.playbackRate)}</span>
    </div>
  );
});

// Mock usePlayerProxy
jest.mock('../../src/MediaPlayer/hooks/usePlayerProxy', () => {
  return jest.fn(() => ({
    videoUrl: 'http://example.com/audio.mp3',
    onReady: jest.fn(),
    onPlay: jest.fn(),
    onPause: jest.fn(),
    onEnded: jest.fn(),
    onError: jest.fn(),
    onBuffer: jest.fn(),
    onBufferEnd: jest.fn(),
    onDuration: jest.fn(),
    onProgress: jest.fn(),
    onSeek: jest.fn(),
    onStart: jest.fn(),
    onLoaded: jest.fn(),
    onMount: jest.fn(),
    onPlayBackRateChange: jest.fn(),
    onPlayBackQualityChange: jest.fn(),
  }));
});

import AudioMediaPlayerSkin from '../../src/MediaPlayer/components/AudioMediaPlayerSkin';

const PlayerCore = jest.fn((props) => {
  props.onMount?.({
    load: jest.fn(),
    play: jest.fn(),
    pause: jest.fn(),
    stop: jest.fn(),
    seekTo: jest.fn(),
    getPlayer: jest.fn(() => document.createElement('audio')),
    getDuration: jest.fn(() => 120),
    getCurrentTime: jest.fn(() => 30),
    getSecondsLoaded: jest.fn(() => 60),
    setVolume: jest.fn(),
    mute: jest.fn(),
    unmute: jest.fn(),
    setPlaybackRate: jest.fn(),
    disablePIP: jest.fn(),
  });
  return <audio data-testid="audio-element" />;
});

const baseProps = {
  url: 'http://example.com/song.mp3',
  playing: false,
  loop: false,
  muted: false,
  volume: 0.8,
  playbackRate: 1,
  playsinline: true,
  progressInterval: 1000,
  stopOnUnmount: true,
  language: 'en',
  config: {
    attributes: {},
    tracks: [],
    forceHLS: false,
    dashVersion: '4.7.4',
    forceDASH: false,
    forceFLV: false,
    flvVersion: '1.6.2',
    forceDisableHls: false,
    hlsOptions: {},
    hlsVersion: '1.5.7',
    forceSafariHLS: false,
  },
  activePlayer: PlayerCore,
  player: null,
  onReady: jest.fn(),
  onStart: jest.fn(),
  onPlay: jest.fn(),
  onPause: jest.fn(),
  onBuffer: jest.fn(),
  onBufferEnd: jest.fn(),
  onEnded: jest.fn(),
  onError: jest.fn(),
  onDuration: jest.fn(),
  onSeek: jest.fn(),
  onPlayBackRateChange: jest.fn(),
  onProgress: jest.fn(),
  onLoaded: jest.fn(),
  onMount: jest.fn(),
};

describe('AudioMediaPlayerSkin', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<AudioMediaPlayerSkin {...baseProps} />);
    expect(getByTestId('audio-player-skin')).toBeTruthy();
  });

  it('renders PlayerProxy when videoUrl is provided', () => {
    const { getByTestId } = render(<AudioMediaPlayerSkin {...baseProps} />);
    expect(getByTestId('player-proxy')).toBeTruthy();
  });

  it('onPlayClick sets playing state', () => {
    const { getByTestId } = render(<AudioMediaPlayerSkin {...baseProps} />);
    act(() => {
      fireEvent.click(getByTestId('play-btn'));
    });
    expect(getByTestId('paused').textContent).toBe('false');
  });

  it('onPauseClick sets paused state', () => {
    const { getByTestId } = render(<AudioMediaPlayerSkin {...baseProps} playing={true} />);
    act(() => {
      fireEvent.click(getByTestId('pause-btn'));
    });
    expect(getByTestId('paused').textContent).toBe('true');
  });

  it('onTogglePlay toggles playing state', () => {
    const { getByTestId } = render(<AudioMediaPlayerSkin {...baseProps} />);
    act(() => {
      fireEvent.click(getByTestId('toggle-btn'));
    });
    expect(getByTestId('paused').textContent).toBe('false');
  });

  it('changePlaybackRate updates rate', () => {
    const { getByTestId } = render(<AudioMediaPlayerSkin {...baseProps} />);
    act(() => {
      fireEvent.click(getByTestId('rate-btn'));
    });
    expect(getByTestId('rate').textContent).toBe('2');
  });

  it('onSeeking updates seeking state', () => {
    const { getByTestId } = render(<AudioMediaPlayerSkin {...baseProps} />);
    // Should not throw
    act(() => {
      fireEvent.click(getByTestId('seeking-btn'));
    });
  });

  it('syncs external playing prop change', () => {
    const { getByTestId, rerender } = render(<AudioMediaPlayerSkin {...baseProps} playing={false} />);
    expect(getByTestId('paused').textContent).toBe('true');

    rerender(<AudioMediaPlayerSkin {...baseProps} playing={true} />);
    expect(getByTestId('paused').textContent).toBe('false');
  });

  it('syncs external muted prop change', () => {
    const { getByTestId, rerender } = render(<AudioMediaPlayerSkin {...baseProps} muted={false} />);
    expect(getByTestId('muted').textContent).toBe('false');

    rerender(<AudioMediaPlayerSkin {...baseProps} muted={true} />);
    expect(getByTestId('muted').textContent).toBe('true');
  });

  it('syncs external playbackRate prop change', () => {
    const { getByTestId, rerender } = render(<AudioMediaPlayerSkin {...baseProps} playbackRate={1} />);
    expect(getByTestId('rate').textContent).toBe('1');

    rerender(<AudioMediaPlayerSkin {...baseProps} playbackRate={1.5} />);
    expect(getByTestId('rate').textContent).toBe('1.5');
  });

  it('syncs external loop prop change', () => {
    const { rerender } = render(<AudioMediaPlayerSkin {...baseProps} loop={false} />);
    // Should not throw
    rerender(<AudioMediaPlayerSkin {...baseProps} loop={true} />);
  });

  it('syncs external volume prop change when not muted', () => {
    const { rerender } = render(<AudioMediaPlayerSkin {...baseProps} volume={0.5} muted={false} />);
    rerender(<AudioMediaPlayerSkin {...baseProps} volume={0.9} muted={false} />);
    // No crash
  });

  it('resets state when url changes', () => {
    const { rerender } = render(<AudioMediaPlayerSkin {...baseProps} url="song1.mp3" />);
    rerender(<AudioMediaPlayerSkin {...baseProps} url="song2.mp3" />);
    // Should not crash
  });

  it('changeCurrentTime calls player seekTo when player provided', () => {
    const mockSeekTo = jest.fn();
    const playerObj = {
      seekTo: mockSeekTo,
      getPlayer: jest.fn(() => document.createElement('audio')),
    };
    const { getByTestId } = render(<AudioMediaPlayerSkin {...baseProps} player={playerObj} />);
    act(() => {
      fireEvent.click(getByTestId('seek-btn'));
    });
    expect(mockSeekTo).toHaveBeenCalledWith(50);
  });
});
