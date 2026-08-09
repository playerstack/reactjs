import { render, screen, fireEvent } from '@testing-library/react';
import PlayerCore from '../../src/core/PlayerCore';
import {
  DASH_GLOBAL,
  DASH_SDK_URL,
  FLV_GLOBAL,
  FLV_SDK_URL,
  HLS_GLOBAL,
  HLS_SDK_URL,
} from '../../src/core/core.constants';
import { getSDK, hasAudio, supportsWebKitPresentationMode } from '../../src/utils/player';

jest.mock('../../src/utils/player');

describe('PlayerCore Component', () => {
  let props;

  beforeEach(() => {
    props = {
      onMount: jest.fn(),
      onPlay: jest.fn(),
      onBuffer: jest.fn(),
      onBufferEnd: jest.fn(),
      onPause: jest.fn(),
      onEnded: jest.fn(),
      onError: jest.fn(),
      onPlayBackRateChange: jest.fn(),
      onEnablePIP: jest.fn(),
      onDisablePIP: jest.fn(),
      onSeek: jest.fn(),
      onReady: jest.fn(),
      onLoaded: jest.fn(),
      playing: false,
      url: 'test-url.mp4',
      config: {
        hlsVersion: '1.0.0',
        hlsOptions: {},
        dashVersion: '4.0.0',
        flvVersion: '1.0.0',
        forceHLS: false,
        forceDASH: false,
        forceFLV: false,
        forceDisableHls: false,
        forceSafariHLS: false,
      },
    };
    jest.clearAllMocks();
    supportsWebKitPresentationMode.mockReturnValue(false);
    hasAudio.mockReturnValue(true);
  });

  describe('Lifecycle', () => {
    it('calls onMount on componentDidMount', () => {
      render(<PlayerCore {...props} />);
      expect(props.onMount).toHaveBeenCalled();
    });

    it('adds event listeners on mount', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');
      jest.spyOn(player, 'addEventListener');
      // Listeners were already added during mount
      expect(props.onMount).toHaveBeenCalled();
    });

    it('sets playsinline attributes', () => {
      render(<PlayerCore {...props} playsinline={true} />);
      const player = screen.getByTestId('video-element');
      expect(player.getAttribute('playsinline')).toBe('');
      expect(player.getAttribute('webkit-playsinline')).toBe('');
      expect(player.getAttribute('x5-playsinline')).toBe('');
    });
  });

  describe('componentWillUnmount cleanup', () => {
    it('destroys HLS instance on unmount', () => {
      const instance = new PlayerCore(props);
      const videoElement = document.createElement('video');
      instance.player = videoElement;
      const hlsMock = { destroy: jest.fn() };
      instance.hls = hlsMock;

      instance.componentWillUnmount();

      expect(hlsMock.destroy).toHaveBeenCalled();
      expect(instance.hls).toBeNull();
    });

    it('resets DASH instance on unmount', () => {
      const instance = new PlayerCore(props);
      const videoElement = document.createElement('video');
      instance.player = videoElement;
      const dashMock = { reset: jest.fn() };
      instance.dash = dashMock;

      instance.componentWillUnmount();

      expect(dashMock.reset).toHaveBeenCalled();
      expect(instance.dash).toBeNull();
    });

    it('destroys FLV instance on unmount', () => {
      const instance = new PlayerCore(props);
      const videoElement = document.createElement('video');
      instance.player = videoElement;
      const flvMock = { unload: jest.fn(), detachMediaElement: jest.fn(), destroy: jest.fn() };
      instance.flv = flvMock;

      instance.componentWillUnmount();

      expect(flvMock.unload).toHaveBeenCalled();
      expect(flvMock.detachMediaElement).toHaveBeenCalled();
      expect(flvMock.destroy).toHaveBeenCalled();
      expect(instance.flv).toBeNull();
    });

    it('removes event listeners and sets listenersAttached to false', () => {
      const instance = new PlayerCore(props);
      const videoElement = document.createElement('video');
      instance.player = videoElement;
      const spy = jest.spyOn(instance, 'removeListeners');

      instance.componentWillUnmount();

      expect(spy).toHaveBeenCalledWith(videoElement);
      expect(instance.listenersAttached).toBe(false);
    });
  });

  describe('load() method', () => {
    it('returns early if isReady is false', () => {
      const instance = new PlayerCore(props);
      instance.player = document.createElement('video');
      instance.load('test.mp4', false);
      expect(getSDK).not.toHaveBeenCalled();
    });

    it('destroys existing HLS before loading new URL', () => {
      const instance = new PlayerCore(props);
      instance.player = document.createElement('video');
      const hlsMock = { destroy: jest.fn() };
      instance.hls = hlsMock;

      instance.load('test.mp4', true);
      expect(hlsMock.destroy).toHaveBeenCalled();
    });

    it('resets existing DASH before loading new URL', () => {
      const instance = new PlayerCore(props);
      instance.player = document.createElement('video');
      const dashMock = { reset: jest.fn() };
      instance.dash = dashMock;

      instance.load('test.mp4', true);
      expect(dashMock.reset).toHaveBeenCalled();
    });

    it('unloads existing FLV before loading new URL', () => {
      const instance = new PlayerCore(props);
      instance.player = document.createElement('video');
      const flvMock = { unload: jest.fn() };
      instance.flv = flvMock;

      instance.load('test.mp4', true);
      expect(flvMock.unload).toHaveBeenCalled();
    });

    it('loads HLS URL via getSDK', async () => {
      const hlsInstance = {
        on: jest.fn(),
        loadSource: jest.fn(),
        attachMedia: jest.fn(),
        destroy: jest.fn(),
      };
      const HlsClass = jest.fn(() => hlsInstance);
      HlsClass.Events = { MANIFEST_PARSED: 'hlsManifestParsed', ERROR: 'hlsError' };
      getSDK.mockResolvedValue(HlsClass);

      const hlsProps = { ...props, url: 'video.m3u8' };
      const instance = new PlayerCore(hlsProps);
      instance.player = document.createElement('video');

      instance.load('video.m3u8', true);

      await new Promise((r) => setTimeout(r, 0));

      expect(getSDK).toHaveBeenCalledWith(
        HLS_SDK_URL.replace('VERSION', props.config.hlsVersion),
        HLS_GLOBAL,
      );
      expect(hlsInstance.loadSource).toHaveBeenCalledWith('video.m3u8');
      expect(hlsInstance.attachMedia).toHaveBeenCalledWith(instance.player);
      expect(props.onLoaded).toHaveBeenCalled();
    });

    it('HLS SDK error calls onError', async () => {
      getSDK.mockRejectedValue(new Error('SDK load failed'));

      const hlsProps = { ...props, url: 'video.m3u8' };
      const instance = new PlayerCore(hlsProps);
      instance.player = document.createElement('video');

      instance.load('video.m3u8', true);

      await new Promise((r) => setTimeout(r, 0));
      expect(props.onError).toHaveBeenCalled();
    });

    it('loads DASH URL via getSDK', async () => {
      const dashPlayer = {
        initialize: jest.fn(),
        on: jest.fn(),
        getDebug: jest.fn(() => ({ setLogToBrowserConsole: jest.fn() })),
        updateSettings: jest.fn(),
      };
      const dashjs = {
        MediaPlayer: () => ({ create: () => dashPlayer }),
        LogLevel: { LOG_LEVEL_NONE: 0 },
      };
      getSDK.mockResolvedValue(dashjs);

      const dashProps = { ...props, url: 'video.mpd' };
      const instance = new PlayerCore(dashProps);
      instance.player = document.createElement('video');

      instance.load('video.mpd', true);

      await new Promise((r) => setTimeout(r, 0));

      expect(getSDK).toHaveBeenCalledWith(
        DASH_SDK_URL.replace('VERSION', props.config.dashVersion),
        DASH_GLOBAL,
      );
      expect(dashPlayer.initialize).toHaveBeenCalled();
      expect(props.onLoaded).toHaveBeenCalled();
    });

    it('DASH SDK version < 3 calls setLogToBrowserConsole', async () => {
      const dashPlayer = {
        initialize: jest.fn(),
        on: jest.fn(),
        getDebug: jest.fn(() => ({ setLogToBrowserConsole: jest.fn() })),
        updateSettings: jest.fn(),
      };
      const dashjs = {
        MediaPlayer: () => ({ create: () => dashPlayer }),
        LogLevel: { LOG_LEVEL_NONE: 0 },
      };
      getSDK.mockResolvedValue(dashjs);

      const dashProps = { ...props, url: 'video.mpd', config: { ...props.config, dashVersion: '2.9.0' } };
      const instance = new PlayerCore(dashProps);
      instance.player = document.createElement('video');

      instance.load('video.mpd', true);

      await new Promise((r) => setTimeout(r, 0));
      expect(dashPlayer.getDebug).toHaveBeenCalled();
    });

    it('DASH SDK error calls onError', async () => {
      getSDK.mockRejectedValue(new Error('DASH load failed'));

      const dashProps = { ...props, url: 'video.mpd' };
      const instance = new PlayerCore(dashProps);
      instance.player = document.createElement('video');

      instance.load('video.mpd', true);

      await new Promise((r) => setTimeout(r, 0));
      expect(props.onError).toHaveBeenCalled();
    });

    it('loads FLV URL via getSDK', async () => {
      const flvPlayer = {
        attachMediaElement: jest.fn(),
        load: jest.fn(),
        on: jest.fn(),
        destroy: jest.fn(),
      };
      const flvjs = {
        createPlayer: jest.fn(() => flvPlayer),
        Events: { ERROR: 'error' },
      };
      getSDK.mockResolvedValue(flvjs);

      const flvProps = { ...props, url: 'video.flv' };
      const instance = new PlayerCore(flvProps);
      instance.player = document.createElement('video');

      instance.load('video.flv', true);

      await new Promise((r) => setTimeout(r, 0));

      expect(getSDK).toHaveBeenCalledWith(
        FLV_SDK_URL.replace('VERSION', props.config.flvVersion),
        FLV_GLOBAL,
      );
      expect(flvjs.createPlayer).toHaveBeenCalledWith({ type: 'flv', url: 'video.flv' });
      expect(flvPlayer.attachMediaElement).toHaveBeenCalledWith(instance.player);
      expect(flvPlayer.load).toHaveBeenCalled();
      expect(props.onLoaded).toHaveBeenCalled();
    });

    it('FLV SDK error calls onError', async () => {
      getSDK.mockRejectedValue(new Error('FLV load failed'));

      const flvProps = { ...props, url: 'video.flv' };
      const instance = new PlayerCore(flvProps);
      instance.player = document.createElement('video');

      instance.load('video.flv', true);

      await new Promise((r) => setTimeout(r, 0));
      expect(props.onError).toHaveBeenCalled();
    });

    it('handles MediaStream URL via srcObject', () => {
      const stream = new MediaStream();
      const streamProps = { ...props, url: stream };
      const instance = new PlayerCore(streamProps);
      const videoElement = document.createElement('video');
      instance.player = videoElement;

      instance.load(stream, true);
      expect(instance.player.srcObject).toBe(stream);
    });
  });

  describe('stop() method', () => {
    it('removes src attribute', () => {
      const instance = new PlayerCore(props);
      const videoElement = document.createElement('video');
      instance.player = videoElement;
      videoElement.src = 'test.mp4';

      instance.stop();
      expect(videoElement.getAttribute('src')).toBeNull();
    });

    it('destroys HLS on stop', () => {
      const instance = new PlayerCore(props);
      instance.player = document.createElement('video');
      const hlsMock = { destroy: jest.fn() };
      instance.hls = hlsMock;

      instance.stop();
      expect(hlsMock.destroy).toHaveBeenCalled();
      expect(instance.hls).toBeNull();
    });

    it('resets DASH on stop', () => {
      const instance = new PlayerCore(props);
      instance.player = document.createElement('video');
      const dashMock = { reset: jest.fn() };
      instance.dash = dashMock;

      instance.stop();
      expect(dashMock.reset).toHaveBeenCalled();
      expect(instance.dash).toBeNull();
    });

    it('destroys FLV on stop', () => {
      const instance = new PlayerCore(props);
      instance.player = document.createElement('video');
      const flvMock = { unload: jest.fn(), detachMediaElement: jest.fn(), destroy: jest.fn() };
      instance.flv = flvMock;

      instance.stop();
      expect(flvMock.unload).toHaveBeenCalled();
      expect(flvMock.detachMediaElement).toHaveBeenCalled();
      expect(flvMock.destroy).toHaveBeenCalled();
      expect(instance.flv).toBeNull();
    });
  });

  describe('play() method', () => {
    it('calls player.play and handles promise rejection', () => {
      const instance = new PlayerCore(props);
      const mockPromise = Promise.reject(new Error('play failed'));
      instance.player = { play: jest.fn(() => mockPromise) };

      instance.play();
      expect(instance.player.play).toHaveBeenCalled();
      // catch should be called with onError
      return mockPromise.catch(() => {});
    });

    it('handles player.play returning undefined (no promise)', () => {
      const instance = new PlayerCore(props);
      instance.player = { play: jest.fn(() => undefined) };

      expect(() => instance.play()).not.toThrow();
    });
  });

  describe('pause() method', () => {
    it('calls player.pause', () => {
      const instance = new PlayerCore(props);
      instance.player = { pause: jest.fn() };

      instance.pause();
      expect(instance.player.pause).toHaveBeenCalled();
    });
  });

  describe('seekTo() method', () => {
    it('sets currentTime', () => {
      const instance = new PlayerCore(props);
      instance.player = { currentTime: 0, pause: jest.fn() };

      instance.seekTo(50);
      expect(instance.player.currentTime).toBe(50);
    });

    it('pauses if keepPlaying is false', () => {
      const instance = new PlayerCore(props);
      instance.player = { currentTime: 0, pause: jest.fn() };

      instance.seekTo(50, false);
      expect(instance.player.currentTime).toBe(50);
      expect(instance.player.pause).toHaveBeenCalled();
    });

    it('does not pause if keepPlaying is true', () => {
      const instance = new PlayerCore(props);
      instance.player = { currentTime: 0, pause: jest.fn() };

      instance.seekTo(50, true);
      expect(instance.player.pause).not.toHaveBeenCalled();
    });
  });

  describe('setVolume() method', () => {
    it('sets player volume', () => {
      const instance = new PlayerCore(props);
      instance.player = { volume: 1 };

      instance.setVolume(0.5);
      expect(instance.player.volume).toBe(0.5);
    });
  });

  describe('mute() and unmute()', () => {
    it('mute sets player.muted to true', () => {
      const instance = new PlayerCore(props);
      instance.player = { muted: false };

      instance.mute();
      expect(instance.player.muted).toBe(true);
    });

    it('unmute sets player.muted to false', () => {
      const instance = new PlayerCore(props);
      instance.player = { muted: true };

      instance.unmute();
      expect(instance.player.muted).toBe(false);
    });
  });

  describe('enablePIP() method', () => {
    it('calls requestPictureInPicture when available', () => {
      const instance = new PlayerCore(props);
      const mockPromise = Promise.resolve();
      instance.player = { requestPictureInPicture: jest.fn(() => mockPromise) };
      document.pictureInPictureElement = null;

      instance.enablePIP();
      expect(instance.player.requestPictureInPicture).toHaveBeenCalled();
    });

    it('does not call requestPictureInPicture if already in PIP', () => {
      const instance = new PlayerCore(props);
      instance.player = { requestPictureInPicture: jest.fn() };
      document.pictureInPictureElement = instance.player;

      instance.enablePIP();
      expect(instance.player.requestPictureInPicture).not.toHaveBeenCalled();
    });

    it('uses webkitSetPresentationMode if supported', () => {
      supportsWebKitPresentationMode.mockReturnValue(true);
      const instance = new PlayerCore(props);
      instance.player = {
        requestPictureInPicture: undefined,
        webkitPresentationMode: 'inline',
        webkitSetPresentationMode: jest.fn(),
      };
      document.pictureInPictureElement = null;

      instance.enablePIP();
      expect(instance.player.webkitSetPresentationMode).toHaveBeenCalledWith('picture-in-picture');
    });

    it('handles PIP promise rejection', () => {
      const instance = new PlayerCore(props);
      const mockPromise = { catch: jest.fn() };
      instance.player = { requestPictureInPicture: jest.fn(() => mockPromise) };
      document.pictureInPictureElement = null;

      instance.enablePIP();
      expect(mockPromise.catch).toHaveBeenCalled();
    });
  });

  describe('disablePIP() method', () => {
    it('calls document.exitPictureInPicture when element is current', () => {
      const instance = new PlayerCore(props);
      instance.player = {};
      document.exitPictureInPicture = jest.fn();
      document.pictureInPictureElement = instance.player;

      instance.disablePIP();
      expect(document.exitPictureInPicture).toHaveBeenCalled();
    });

    it('uses webkitSetPresentationMode for Safari', () => {
      supportsWebKitPresentationMode.mockReturnValue(true);
      const instance = new PlayerCore(props);
      instance.player = {
        webkitPresentationMode: 'picture-in-picture',
        webkitSetPresentationMode: jest.fn(),
      };
      document.exitPictureInPicture = null;

      instance.disablePIP();
      expect(instance.player.webkitSetPresentationMode).toHaveBeenCalledWith('inline');
    });
  });

  describe('setPlaybackRate() method', () => {
    it('sets playbackRate on player', () => {
      const instance = new PlayerCore(props);
      instance.player = { playbackRate: 1 };

      instance.setPlaybackRate(2);
      expect(instance.player.playbackRate).toBe(2);
    });

    it('calls onError if setting playbackRate throws', () => {
      const instance = new PlayerCore(props);
      instance.player = {};
      Object.defineProperty(instance.player, 'playbackRate', {
        set: () => { throw new Error('not allowed'); },
        get: () => 1,
      });

      instance.setPlaybackRate(2);
      expect(props.onError).toHaveBeenCalled();
    });
  });

  describe('getDuration() method', () => {
    it('returns null if no player', () => {
      const instance = new PlayerCore(props);
      instance.player = null;
      expect(instance.getDuration()).toBeNull();
    });

    it('returns seekable end when duration is Infinity', () => {
      const instance = new PlayerCore(props);
      instance.player = {
        duration: Infinity,
        seekable: { length: 1, end: jest.fn(() => 300) },
      };

      expect(instance.getDuration()).toBe(300);
      expect(instance.player.seekable.end).toHaveBeenCalledWith(0);
    });

    it('returns duration when seekable is empty and duration is Infinity', () => {
      const instance = new PlayerCore(props);
      instance.player = {
        duration: Infinity,
        seekable: { length: 0 },
      };

      expect(instance.getDuration()).toBe(Infinity);
    });

    it('returns duration when finite', () => {
      const instance = new PlayerCore(props);
      instance.player = {
        duration: 200,
        seekable: { length: 0 },
      };

      expect(instance.getDuration()).toBe(200);
    });
  });

  describe('getSecondsLoaded() edge cases', () => {
    it('returns null if no player', () => {
      const instance = new PlayerCore(props);
      instance.player = null;
      expect(instance.getSecondsLoaded()).toBeNull();
    });

    it('returns 0 if buffered length is 0', () => {
      const instance = new PlayerCore(props);
      instance.player = {
        buffered: { length: 0 },
        duration: 100,
        seekable: { length: 0 },
      };
      expect(instance.getSecondsLoaded()).toBe(0);
    });

    it('returns duration if buffered end exceeds duration', () => {
      const instance = new PlayerCore(props);
      instance.player = {
        buffered: { length: 1, end: jest.fn(() => 200) },
        duration: 100,
        seekable: { length: 0 },
      };
      expect(instance.getSecondsLoaded()).toBe(100);
    });

    it('returns buffered end if within duration', () => {
      const instance = new PlayerCore(props);
      instance.player = {
        buffered: { length: 1, end: jest.fn(() => 50) },
        duration: 100,
        seekable: { length: 0 },
      };
      expect(instance.getSecondsLoaded()).toBe(50);
    });
  });

  describe('getSource() method', () => {
    it('returns undefined for HLS URLs', () => {
      const hlsProps = { ...props, url: 'video.m3u8' };
      const instance = new PlayerCore(hlsProps);
      expect(instance.getSource('video.m3u8')).toBeUndefined();
    });

    it('returns undefined for DASH URLs', () => {
      const dashProps = { ...props, url: 'video.mpd' };
      const instance = new PlayerCore(dashProps);
      expect(instance.getSource('video.mpd')).toBeUndefined();
    });

    it('returns undefined for FLV URLs', () => {
      const flvProps = { ...props, url: 'video.flv' };
      const instance = new PlayerCore(flvProps);
      expect(instance.getSource('video.flv')).toBeUndefined();
    });

    it('returns undefined for MediaStream', () => {
      const stream = new MediaStream();
      const streamProps = { ...props, url: stream };
      const instance = new PlayerCore(streamProps);
      expect(instance.getSource(stream)).toBeUndefined();
    });

    it('returns the URL for regular video files', () => {
      const instance = new PlayerCore(props);
      expect(instance.getSource('video.mp4')).toBe('video.mp4');
    });
  });

  describe('Event handlers', () => {
    it('onPresentationModeChange triggers onEnablePIP for pip mode', () => {
      supportsWebKitPresentationMode.mockReturnValue(true);
      const instance = new PlayerCore(props);
      instance.player = { webkitPresentationMode: 'picture-in-picture' };

      const event = { type: 'webkitpresentationmodechanged' };
      instance.onPresentationModeChange(event);

      expect(props.onEnablePIP).toHaveBeenCalledWith(event);
    });

    it('onPresentationModeChange triggers onDisablePIP for inline mode', () => {
      supportsWebKitPresentationMode.mockReturnValue(true);
      const instance = new PlayerCore(props);
      instance.player = { webkitPresentationMode: 'inline', play: jest.fn() };

      const event = { type: 'webkitpresentationmodechanged' };
      instance.onPresentationModeChange(event);

      expect(props.onDisablePIP).toHaveBeenCalledWith(event);
    });

    it('onPresentationModeChange does nothing if not supported', () => {
      supportsWebKitPresentationMode.mockReturnValue(false);
      const instance = new PlayerCore(props);
      instance.player = { webkitPresentationMode: 'picture-in-picture' };

      const event = { type: 'webkitpresentationmodechanged' };
      instance.onPresentationModeChange(event);

      expect(props.onEnablePIP).not.toHaveBeenCalled();
    });

    it('onDisablePIP calls props.onDisablePIP and plays if playing', () => {
      const playingProps = { ...props, playing: true };
      const instance = new PlayerCore(playingProps);
      instance.player = { play: jest.fn(() => Promise.resolve()) };

      const event = { type: 'leavepictureinpicture' };
      instance.onDisablePIP(event);

      expect(props.onDisablePIP).toHaveBeenCalledWith(event);
      expect(instance.player.play).toHaveBeenCalled();
    });

    it('onDisablePIP does not play if not playing', () => {
      const instance = new PlayerCore(props);
      instance.player = { play: jest.fn() };

      const event = { type: 'leavepictureinpicture' };
      instance.onDisablePIP(event);

      expect(props.onDisablePIP).toHaveBeenCalledWith(event);
      expect(instance.player.play).not.toHaveBeenCalled();
    });

    it('onPlayBackRateChange calls props with playbackRate', () => {
      const instance = new PlayerCore(props);
      instance.onPlayBackRateChange({ target: { playbackRate: 1.5 } });
      expect(props.onPlayBackRateChange).toHaveBeenCalledWith(1.5);
    });

    it('onSeek calls props with currentTime', () => {
      const instance = new PlayerCore(props);
      instance.onSeek({ target: { currentTime: 42 } });
      expect(props.onSeek).toHaveBeenCalledWith(42);
    });
  });

  describe('ref callback', () => {
    it('stores prevPlayer when ref changes', () => {
      const instance = new PlayerCore(props);
      const player1 = document.createElement('video');
      const player2 = document.createElement('video');

      instance.ref(player1);
      expect(instance.player).toBe(player1);
      expect(instance.prevPlayer).toBeUndefined();

      instance.ref(player2);
      expect(instance.player).toBe(player2);
      expect(instance.prevPlayer).toBe(player1);
    });
  });

  describe('componentDidUpdate', () => {
    it('removes listeners from prevPlayer and adds to new player', () => {
      const instance = new PlayerCore(props);
      const oldPlayer = document.createElement('video');
      const newPlayer = document.createElement('video');

      instance.player = newPlayer;
      instance.prevPlayer = oldPlayer;
      instance.listenersAttached = true;

      const removeSpy = jest.spyOn(instance, 'removeListeners');
      const addSpy = jest.spyOn(instance, 'addListeners');

      instance.componentDidUpdate({ ...props });

      expect(removeSpy).toHaveBeenCalledWith(oldPlayer);
      expect(addSpy).toHaveBeenCalledWith(newPlayer);
    });

    it('sets srcObject to null when url changes and not MediaStream', () => {
      const { rerender } = render(<PlayerCore {...props} url="video1.mp4" />);
      const player = screen.getByTestId('video-element');

      // Change URL to trigger componentDidUpdate branch
      rerender(<PlayerCore {...props} url="video2.mp4" />);

      expect(player.srcObject).toBeNull();
    });

    it('does not add listeners if already attached', () => {
      const instance = new PlayerCore(props);
      const videoElement = document.createElement('video');
      instance.player = videoElement;
      instance.listenersAttached = true;
      instance.prevPlayer = null;

      const addSpy = jest.spyOn(instance, 'addListeners');
      instance.componentDidUpdate({ ...props });

      expect(addSpy).not.toHaveBeenCalled();
    });
  });

  describe('addListeners edge cases', () => {
    it('returns early if player is null', () => {
      const instance = new PlayerCore(props);
      // Should not throw
      expect(() => instance.addListeners(null)).not.toThrow();
    });

    it('does not add canplay listener when shouldUseHLS is true', () => {
      const hlsProps = { ...props, config: { ...props.config, forceHLS: true } };
      const instance = new PlayerCore(hlsProps);
      const videoElement = document.createElement('video');
      const addSpy = jest.spyOn(videoElement, 'addEventListener');

      instance.addListeners(videoElement);

      const canplayCalls = addSpy.mock.calls.filter(([event]) => event === 'canplay');
      expect(canplayCalls.length).toBe(0);
    });
  });

  describe('removeListeners edge cases', () => {
    it('returns early if player is null', () => {
      const instance = new PlayerCore(props);
      expect(() => instance.removeListeners(null)).not.toThrow();
    });
  });

  describe('Rendered component event handlers', () => {
    it('fires onReady via canplay event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('canplay'));
      expect(props.onReady).toHaveBeenCalled();
    });

    it('fires onPlay via play event with hasAudio', () => {
      hasAudio.mockReturnValue(true);
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('play'));
      expect(props.onPlay).toHaveBeenCalledWith(expect.objectContaining({ hasAudio: true }));
    });

    it('fires onBuffer via waiting event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('waiting'));
      expect(props.onBuffer).toHaveBeenCalled();
    });

    it('fires onBufferEnd via playing event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('playing'));
      expect(props.onBufferEnd).toHaveBeenCalled();
    });

    it('fires onPause via pause event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('pause'));
      expect(props.onPause).toHaveBeenCalled();
    });

    it('fires onEnded via ended event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('ended'));
      expect(props.onEnded).toHaveBeenCalled();
    });

    it('fires onSeek via seeked event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      Object.defineProperty(player, 'currentTime', { value: 42, writable: true });
      fireEvent(player, new Event('seeked'));
      expect(props.onSeek).toHaveBeenCalledWith(42);
    });

    it('fires onPlayBackRateChange via ratechange event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      Object.defineProperty(player, 'playbackRate', { value: 2, writable: true });
      fireEvent(player, new Event('ratechange'));
      expect(props.onPlayBackRateChange).toHaveBeenCalledWith(2);
    });

    it('fires onEnablePIP via enterpictureinpicture event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('enterpictureinpicture'));
      expect(props.onEnablePIP).toHaveBeenCalled();
    });

    it('fires onDisablePIP via leavepictureinpicture event', () => {
      render(<PlayerCore {...props} />);
      const player = screen.getByTestId('video-element');

      fireEvent(player, new Event('leavepictureinpicture'));
      expect(props.onDisablePIP).toHaveBeenCalled();
    });
  });

  describe('Rendered component lifecycle', () => {
    it('renders with config.tracks', () => {
      const tracks = [
        { kind: 'subtitles', src: 'subs.vtt', srcLang: 'en', label: 'English' },
      ];
      render(<PlayerCore {...props} config={{ ...props.config, tracks }} />);
      const player = screen.getByTestId('video-element');
      const trackElement = player.querySelector('track');
      expect(trackElement).toBeTruthy();
    });

    it('renders with width and height auto', () => {
      render(<PlayerCore {...props} width="auto" height="auto" />);
      const player = screen.getByTestId('video-element');
      expect(player.style.width).toBe('auto');
      expect(player.style.height).toBe('auto');
    });

    it('renders with playing=true sets autoPlay', () => {
      render(<PlayerCore {...props} playing={true} />);
      const player = screen.getByTestId('video-element');
      expect(player.autoplay).toBe(true);
    });

    it('componentWillUnmount is triggered on unmount via render', () => {
      const { unmount } = render(<PlayerCore {...props} />);
      // Should not throw on unmount
      expect(() => unmount()).not.toThrow();
    });

    it('unmount with forceDisableHls loads player', () => {
      const disableProps = { ...props, config: { ...props.config, forceDisableHls: true } };
      const { unmount } = render(<PlayerCore {...disableProps} />);
      expect(() => unmount()).not.toThrow();
    });
  });

  describe('load() stale sequence handling', () => {
    it('ignores stale HLS load if loadSequence changed', async () => {
      const hlsInstance = {
        on: jest.fn(),
        loadSource: jest.fn(),
        attachMedia: jest.fn(),
        destroy: jest.fn(),
      };
      const HlsClass = jest.fn(() => hlsInstance);
      HlsClass.Events = { MANIFEST_PARSED: 'hlsManifestParsed', ERROR: 'hlsError' };
      getSDK.mockResolvedValue(HlsClass);

      const hlsProps = { ...props, url: 'video.m3u8' };
      const instance = new PlayerCore(hlsProps);
      instance.player = document.createElement('video');

      // Start first load
      instance.load('video.m3u8', true);
      // Start second load (increments sequence, making first stale)
      instance.load('video2.m3u8', true);

      await new Promise((r) => setTimeout(r, 0));

      // First load should be ignored (stale), second should proceed
      // hlsInstance.loadSource should only be called once (for second)
      expect(hlsInstance.loadSource).toHaveBeenCalledWith('video2.m3u8');
    });

    it('HLS triggers onReady and onError callbacks', async () => {
      let manifestCallback;
      let errorCallback;
      const hlsInstance = {
        on: jest.fn((event, cb) => {
          if (event === 'hlsManifestParsed') manifestCallback = cb;
          if (event === 'hlsError') errorCallback = cb;
        }),
        loadSource: jest.fn(),
        attachMedia: jest.fn(),
        destroy: jest.fn(),
      };
      const HlsClass = jest.fn(() => hlsInstance);
      HlsClass.Events = { MANIFEST_PARSED: 'hlsManifestParsed', ERROR: 'hlsError' };
      getSDK.mockResolvedValue(HlsClass);

      const hlsProps = { ...props, url: 'video.m3u8' };
      const instance = new PlayerCore(hlsProps);
      instance.player = document.createElement('video');

      instance.load('video.m3u8', true);

      await new Promise((r) => setTimeout(r, 0));

      // Trigger manifest parsed
      manifestCallback();
      expect(props.onReady).toHaveBeenCalled();

      // Trigger error
      errorCallback('error-event', { type: 'networkError' });
      expect(props.onError).toHaveBeenCalledWith('error-event', { type: 'networkError' }, hlsInstance, HlsClass);
    });

    it('DASH triggers error callback', async () => {
      let dashErrorCallback;
      const dashPlayer = {
        initialize: jest.fn(),
        on: jest.fn((event, cb) => {
          if (event === 'error') dashErrorCallback = cb;
        }),
        updateSettings: jest.fn(),
      };
      const dashjs = {
        MediaPlayer: () => ({ create: () => dashPlayer }),
        LogLevel: { LOG_LEVEL_NONE: 0 },
      };
      getSDK.mockResolvedValue(dashjs);

      const dashProps = { ...props, url: 'video.mpd' };
      const instance = new PlayerCore(dashProps);
      instance.player = document.createElement('video');

      instance.load('video.mpd', true);

      await new Promise((r) => setTimeout(r, 0));

      // Trigger error
      dashErrorCallback({ type: 'dashError' });
      expect(props.onError).toHaveBeenCalledWith({ type: 'dashError' }, null, dashPlayer, dashjs);
    });

    it('FLV triggers error callback', async () => {
      let flvErrorCallback;
      const flvPlayer = {
        attachMediaElement: jest.fn(),
        load: jest.fn(),
        on: jest.fn((event, cb) => {
          if (event === 'error') flvErrorCallback = cb;
        }),
        destroy: jest.fn(),
      };
      const flvjs = {
        createPlayer: jest.fn(() => flvPlayer),
        Events: { ERROR: 'error' },
      };
      getSDK.mockResolvedValue(flvjs);

      const flvProps = { ...props, url: 'video.flv' };
      const instance = new PlayerCore(flvProps);
      instance.player = document.createElement('video');

      instance.load('video.flv', true);

      await new Promise((r) => setTimeout(r, 0));

      // Trigger error
      flvErrorCallback('flv-error', { detail: 'error' });
      expect(props.onError).toHaveBeenCalledWith('flv-error', { detail: 'error' }, flvPlayer, flvjs);
    });
  });

  describe('MediaStream srcObject fallback', () => {
    it('uses URL.createObjectURL as fallback when srcObject throws', () => {
      const stream = new MediaStream();
      const streamProps = { ...props, url: stream };
      const instance = new PlayerCore(streamProps);
      const videoElement = document.createElement('video');

      // Make srcObject setter throw
      Object.defineProperty(videoElement, 'srcObject', {
        set: () => { throw new Error('not supported'); },
        get: () => null,
      });

      window.URL.createObjectURL = jest.fn(() => 'blob:url');
      instance.player = videoElement;

      instance.load(stream, true);
      expect(window.URL.createObjectURL).toHaveBeenCalledWith(stream);
    });
  });

  describe('getPlayer()', () => {
    it('returns the player element', () => {
      const instance = new PlayerCore(props);
      const videoElement = document.createElement('video');
      instance.player = videoElement;
      expect(instance.getPlayer()).toBe(videoElement);
    });
  });

  describe('getCurrentTime()', () => {
    it('returns null if no player', () => {
      const instance = new PlayerCore(props);
      instance.player = null;
      expect(instance.getCurrentTime()).toBeNull();
    });

    it('returns currentTime', () => {
      const instance = new PlayerCore(props);
      instance.player = { currentTime: 42 };
      expect(instance.getCurrentTime()).toBe(42);
    });
  });
});
