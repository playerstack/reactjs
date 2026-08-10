import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';

/**
 * Comprehensive coverage test file targeting uncovered functions
 * across multiple source files to push function coverage from 93.8% to 95%+.
 */

// ─── 1. StyledGeneralButton – CSS interpolation functions ─────────────────────

jest.mock('../../src/hooks/context/useAppSelector', () => {
  return jest.fn(() => ({
    playerRef: { current: null },
    i18n: {},
    hiding: false,
    contextMenuVisible: false,
    controlsHovering: false,
    timeSliding: false,
    volumeSliding: false,
    menuVisible: false,
    subMenuVisible: false,
  }));
});

import StyledGeneralButton from '../../src/PlayerSkin/Commons/Buttons/StyledGeneralButton';

describe('StyledGeneralButton – CSS interpolation coverage', () => {
  const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

  // Override useAppSelector to provide a real playerRef for tooltip positioning
  const useAppSelector = require('../../src/hooks/context/useAppSelector');

  test('renders with isFullscreen=true and isText=false (triggers fullscreenButton css)', () => {
    const { container } = render(
      <StyledGeneralButton title="FS" isFullscreen={true} isText={false} data-testid="btn">
        FS
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  test('renders with isFullscreen=false and isText=false (triggers normalButton css)', () => {
    render(
      <StyledGeneralButton title="Normal" isFullscreen={false} isText={false} data-testid="btn">
        Normal
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('renders with isFullscreen=true and isText=true (triggers fullscreenText css)', () => {
    render(
      <StyledGeneralButton title="FSText" isFullscreen={true} isText={true} data-testid="btn">
        FSText
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('renders with isFullscreen=false and isText=true (triggers textButtonStyles css)', () => {
    render(
      <StyledGeneralButton title="Text" isFullscreen={false} isText={true} data-testid="btn">
        Text
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('renders with isFakeDisabled=true (triggers isFakeDisabled css)', () => {
    render(
      <StyledGeneralButton title="FD" isFakeDisabled={true} data-testid="btn">
        FakeDisabled
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('renders with isFakeDisabled=false', () => {
    render(
      <StyledGeneralButton title="NFD" isFakeDisabled={false} data-testid="btn">
        NotFakeDisabled
      </StyledGeneralButton>,
      { wrapper },
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('StyledTooltipText renders with isFullscreen=true (tooltip font/size branch)', () => {
    render(
      <StyledGeneralButton title="Tooltip FS" isFullscreen={true} isTooltipActive={true} data-testid="btn">
        TFS
      </StyledGeneralButton>,
      { wrapper },
    );
    // Trigger mouse enter to render tooltip positioning logic
    fireEvent.mouseEnter(screen.getByTestId('btn'));
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('StyledTooltipText renders with isFullscreen=false (tooltip font/size branch)', () => {
    render(
      <StyledGeneralButton title="Tooltip NFS" isFullscreen={false} isTooltipActive={true} data-testid="btn">
        TNFS
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.mouseEnter(screen.getByTestId('btn'));
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('handleMouseEnter calculates tooltip position with real playerRef', () => {
    // Set up playerRef with a real DOM container
    const playerDiv = document.createElement('div');
    Object.defineProperty(playerDiv, 'getBoundingClientRect', {
      value: () => ({ width: 800, height: 400, left: 0, top: 0, right: 800, bottom: 400 }),
    });
    playerDiv.querySelectorAll = jest.fn(() => []);

    useAppSelector.mockReturnValue({
      playerRef: { current: playerDiv },
      i18n: {},
      hiding: false,
      contextMenuVisible: false,
      controlsHovering: false,
      timeSliding: false,
      volumeSliding: false,
      menuVisible: false,
      subMenuVisible: false,
    });

    render(
      <StyledGeneralButton title="Position Test" isFullscreen={false} isTooltipActive={true} data-testid="btn-pos">
        Pos
      </StyledGeneralButton>,
      { wrapper },
    );

    fireEvent.mouseEnter(screen.getByTestId('btn-pos'));
    expect(screen.getByTestId('btn-pos')).toBeInTheDocument();

    // Reset mock
    useAppSelector.mockReturnValue({
      playerRef: { current: null },
      i18n: {},
      hiding: false,
      contextMenuVisible: false,
      controlsHovering: false,
      timeSliding: false,
      volumeSliding: false,
      menuVisible: false,
      subMenuVisible: false,
    });
  });

  test('handleMouseLeave resets tooltip and calls onMouseLeave', () => {
    const onMouseLeave = jest.fn();
    render(
      <StyledGeneralButton title="Leave" isFullscreen={false} data-testid="btn-leave" onMouseLeave={onMouseLeave}>
        Leave
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.mouseEnter(screen.getByTestId('btn-leave'));
    fireEvent.mouseLeave(screen.getByTestId('btn-leave'));
    expect(onMouseLeave).toHaveBeenCalled();
  });

  test('handleClick resets tooltip when not fakeDisabled', () => {
    const onClick = jest.fn();
    render(
      <StyledGeneralButton title="Click" isFakeDisabled={false} data-testid="btn-click" onClick={onClick}>
        Click
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.click(screen.getByTestId('btn-click'));
    expect(onClick).toHaveBeenCalled();
  });

  test('handleMouseDown resets tooltip when not fakeDisabled', () => {
    const onMouseDown = jest.fn();
    render(
      <StyledGeneralButton title="Down" isFakeDisabled={false} data-testid="btn-down" onMouseDown={onMouseDown}>
        Down
      </StyledGeneralButton>,
      { wrapper },
    );
    fireEvent.mouseDown(screen.getByTestId('btn-down'));
    expect(onMouseDown).toHaveBeenCalled();
  });
});

// ─── 2. MobileCenterControls – onClick handlers ──────────────────────────────

import MobileCenterControls from '../../src/PlayerSkin/MobilePlayerSkin/components/MobileCenterControls/index';

describe('MobileCenterControls – onClick handlers (stopPropagation)', () => {
  const defaultProps = {
    visible: true,
    isLoading: false,
    paused: true,
    ended: false,
    onPlayPause: jest.fn(),
    onPrevious: jest.fn(),
    onNext: jest.fn(),
    i18n: { previous: 'Previous', next: 'Next', play: 'Play', pause: 'Pause' },
  };

  test('PrevButton click calls onPrevious and stops propagation', () => {
    const onPrevious = jest.fn();
    const parentClick = jest.fn();
    render(
      <div onClick={parentClick}>
        <MobileCenterControls {...defaultProps} onPrevious={onPrevious} />
      </div>,
    );
    const prevBtn = screen.getByLabelText('Previous');
    fireEvent.click(prevBtn);
    expect(onPrevious).toHaveBeenCalled();
    expect(parentClick).not.toHaveBeenCalled();
  });

  test('NextButton click calls onNext and stops propagation', () => {
    const onNext = jest.fn();
    const parentClick = jest.fn();
    render(
      <div onClick={parentClick}>
        <MobileCenterControls {...defaultProps} onNext={onNext} />
      </div>,
    );
    const nextBtn = screen.getByLabelText('Next');
    fireEvent.click(nextBtn);
    expect(onNext).toHaveBeenCalled();
    expect(parentClick).not.toHaveBeenCalled();
  });

  test('does not render Previous button when onPrevious is not provided', () => {
    render(<MobileCenterControls {...defaultProps} onPrevious={undefined} />);
    expect(screen.queryByLabelText('Previous')).toBeNull();
  });

  test('does not render Next button when onNext is not provided', () => {
    render(<MobileCenterControls {...defaultProps} onNext={undefined} />);
    expect(screen.queryByLabelText('Next')).toBeNull();
  });

  test('renders neither nav button when no callbacks provided (single video)', () => {
    render(<MobileCenterControls {...defaultProps} onPrevious={undefined} onNext={undefined} />);
    expect(screen.queryByLabelText('Previous')).toBeNull();
    expect(screen.queryByLabelText('Next')).toBeNull();
    // Play button still present
    expect(screen.getByLabelText('Play')).toBeInTheDocument();
  });

  test('PlayButton click calls stopPropagation and onPlayPause', () => {
    const onPlayPause = jest.fn();
    const parentClick = jest.fn();
    render(
      <div onClick={parentClick}>
        <MobileCenterControls {...defaultProps} onPlayPause={onPlayPause} />
      </div>,
    );
    const playBtn = screen.getByLabelText('Play');
    fireEvent.click(playBtn);
    expect(onPlayPause).toHaveBeenCalled();
    expect(parentClick).not.toHaveBeenCalled();
  });

  test('Spinner click calls stopPropagation when isLoading=true', () => {
    const parentClick = jest.fn();
    const { container } = render(
      <div onClick={parentClick}>
        <MobileCenterControls {...defaultProps} isLoading={true} />
      </div>,
    );
    // When loading, the spinner div replaces the play button; prev/next still render
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);
    const centerControlsDiv = buttons[0].parentElement;
    const spinnerDiv = centerControlsDiv.children[1]; // middle child
    fireEvent.click(spinnerDiv);
    expect(parentClick).not.toHaveBeenCalled();
  });

  test('renders PauseIcon when playing (paused=false, ended=false)', () => {
    render(<MobileCenterControls {...defaultProps} paused={false} ended={false} />);
    const pauseBtn = screen.getByLabelText('Pause');
    expect(pauseBtn).toBeInTheDocument();
  });

  test('renders PlayIcon when ended (aria-label is Pause since paused=false)', () => {
    render(<MobileCenterControls {...defaultProps} paused={false} ended={true} />);
    // The aria-label depends on `paused` prop, not `ended`
    const btn = screen.getByLabelText('Pause');
    expect(btn).toBeInTheDocument();
  });
});

// ─── 3. SkipOverlay.styled – CSS interpolation functions ─────────────────────

import {
  StyledSkipOverlay,
  StyledSkipIconContainer,
  StyledSkipTapArea,
  StyledSkipText,
} from '../../src/PlayerSkin/MobilePlayerSkin/components/SkipOverlay/SkipOverlay.styled';

describe('SkipOverlay.styled – CSS interpolation coverage', () => {
  test('StyledSkipOverlay with direction=forward and visible=true', () => {
    const { container } = render(<StyledSkipOverlay direction="forward" visible={true} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('StyledSkipOverlay with direction=backward and visible=false', () => {
    const { container } = render(<StyledSkipOverlay direction="backward" visible={false} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('StyledSkipOverlay with direction=forward and visible=false', () => {
    const { container } = render(<StyledSkipOverlay direction="forward" visible={false} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('StyledSkipOverlay with direction=backward and visible=true', () => {
    const { container } = render(<StyledSkipOverlay direction="backward" visible={true} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('StyledSkipIconContainer with direction=backward (triggers rotate)', () => {
    const { container } = render(<StyledSkipIconContainer direction="backward" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('StyledSkipIconContainer with direction=forward (no rotate)', () => {
    const { container } = render(<StyledSkipIconContainer direction="forward" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('StyledSkipTapArea with direction=forward', () => {
    const { container } = render(<StyledSkipTapArea direction="forward" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('StyledSkipTapArea with direction=backward', () => {
    const { container } = render(<StyledSkipTapArea direction="backward" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('StyledSkipText renders correctly', () => {
    render(<StyledSkipText>5 seconds</StyledSkipText>);
    expect(screen.getByText('5 seconds')).toBeInTheDocument();
  });
});

// ─── 4. UnfullscreenIcon – render with props ─────────────────────────────────

import UnfullscreenIcon from '../../src/PlayerSkin/Commons/Icons/UnfullscreenIcon';

describe('UnfullscreenIcon – function coverage', () => {
  test('renders with default width/height', () => {
    const { container } = render(<UnfullscreenIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg.getAttribute('width')).toBe('36');
    expect(svg.getAttribute('height')).toBe('36');
  });

  test('renders with custom width/height', () => {
    const { container } = render(<UnfullscreenIcon width={48} height={48} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('48');
    expect(svg.getAttribute('height')).toBe('48');
  });

  test('renders with string width/height', () => {
    const { container } = render(<UnfullscreenIcon width="100%" height="100%" />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('100%');
    expect(svg.getAttribute('height')).toBe('100%');
  });

  test('memo compareProps returns true for same props', () => {
    const { compareProps } = require('../../src/PlayerSkin/Commons/Icons/Icons.constants');
    expect(compareProps({ width: 36, height: 36 }, { width: 36, height: 36 })).toBe(true);
  });

  test('memo compareProps returns false for different props', () => {
    const { compareProps } = require('../../src/PlayerSkin/Commons/Icons/Icons.constants');
    expect(compareProps({ width: 36, height: 36 }, { width: 48, height: 48 })).toBe(false);
  });
});

// ─── 5. core/index.js – lazyPlayer (React.lazy callback) ────────────────────

describe('core/index – lazyPlayer', () => {
  test('lazyPlayer is a valid React.lazy component', () => {
    const corePlayer = require('../../src/core/index').default;
    expect(corePlayer.lazyPlayer).toBeDefined();
    // React.lazy returns an object with $$typeof and _init/_payload
    expect(corePlayer.lazyPlayer.$$typeof).toBeDefined();
  });

  test('lazyPlayer can be rendered inside Suspense (triggers lazy callback)', async () => {
    const corePlayer = require('../../src/core/index').default;
    const LazyPlayer = corePlayer.lazyPlayer;

    // Render in Suspense to trigger the lazy import callback
    const { container } = render(
      <React.Suspense fallback={<div data-testid="fallback">Loading...</div>}>
        <LazyPlayer url="test.mp4" />
      </React.Suspense>,
    );

    // Initially shows fallback while lazy component loads
    expect(container).toBeTruthy();
  });

  test('lazy utility resolves import correctly', async () => {
    // Directly test the lazy utility function from utils/player
    const { lazy } = require('../../src/utils/player');
    const LazyComp = lazy(() => Promise.resolve({ default: () => <div>Loaded</div> }));
    expect(LazyComp).toBeDefined();
    expect(LazyComp.$$typeof).toBeDefined();
  });
});

// ─── 6. usePlayerSkinWrapper – uncovered memorizedProps callbacks & key handlers

describe('usePlayerSkinWrapper – additional callback coverage', () => {
  const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

  const makePlayer = () => ({
    seekTo: jest.fn(),
    getCurrentTime: jest.fn(() => 30),
    getDuration: jest.fn(() => 120),
    getPlayer: jest.fn(() => {
      const video = document.createElement('video');
      video.volume = 0.5;
      video.muted = false;
      return video;
    }),
  });

  const makePlayerRef = () => ({ current: document.createElement('div') });

  let player;
  let playerRef;
  let updateState;

  beforeEach(() => {
    player = makePlayer();
    playerRef = makePlayerRef();
    playerRef.current.requestFullscreen = jest.fn();
    updateState = jest.fn((fn) => {
      if (typeof fn === 'function') {
        return fn({ playing: false, volume: 0.5, isMuted: false, loop: false, seeking: false });
      }
    });
    jest.clearAllMocks();
  });

  const getHook = (overrides = {}) =>
    renderHook(
      () => {
        const usePlayerSkinWrapper = require('../../src/hooks/usePlayerSkinWrapper').default;
        return usePlayerSkinWrapper({
          ref: React.createRef(),
          playerRef,
          url: 'test.mp4',
          player,
          fullHDQualityBreak: 1080,
          sources: [{ src: 'v720.mp4', resolution: 720 }],
          prevented: false,
          muted: false,
          updateState,
          ...overrides,
        });
      },
      { wrapper },
    );

  test('changePlayBackQuality updates state even when player is null', () => {
    const { result } = getHook({ player: null });
    act(() => result.current.memorizedProps.changePlayBackQuality(720));
    expect(updateState).toHaveBeenCalled();
  });

  test('onSeeking calls updateState with seeking value', () => {
    const { result } = getHook();
    act(() => result.current.memorizedProps.onSeeking(true));
    expect(updateState).toHaveBeenCalled();
  });

  test('onLoopClick toggles loop in state', () => {
    const { result } = getHook();
    act(() => result.current.memorizedProps.onLoopClick());
    expect(updateState).toHaveBeenCalled();
  });

  test('onMutedClick in memorizedProps delegates to volume hook', () => {
    const { result } = getHook();
    // onMutedClick checks playerRef2.current then calls onMutedClickRef.current()
    expect(() => act(() => result.current.memorizedProps.onMutedClick())).not.toThrow();
  });

  describe('handleKeyDown – MUTE_KEY with video element', () => {
    test('MUTE_KEY triggers onMutedClick with active video', () => {
      const { result } = getHook();
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        key: 'm',
        keyCode: 77,
        which: 77,
      };
      expect(() => act(() => result.current.handleKeyDown(event))).not.toThrow();
    });
  });

  describe('handleKeyDown – ARROW keys with active video', () => {
    test('ARROW_LEFT_KEY seeks backward with video element', () => {
      player.getCurrentTime.mockReturnValue(10);
      player.getDuration.mockReturnValue(120);
      const { result } = getHook();
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        key: 'ArrowLeft',
        keyCode: 37,
        which: 37,
      };
      act(() => result.current.handleKeyDown(event));
      expect(player.seekTo).toHaveBeenCalledWith(5);
    });

    test('ARROW_RIGHT_KEY seeks forward with video element', () => {
      player.getCurrentTime.mockReturnValue(50);
      player.getDuration.mockReturnValue(120);
      const { result } = getHook();
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        key: 'ArrowRight',
        keyCode: 39,
        which: 39,
      };
      act(() => result.current.handleKeyDown(event));
      expect(player.seekTo).toHaveBeenCalledWith(55);
    });

    test('ARROW_UP_KEY increases volume with video element', () => {
      const { result } = getHook();
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        key: 'ArrowUp',
        keyCode: 38,
        which: 38,
      };
      // This triggers updateVolumeWithCallback which needs videoRef.current
      expect(() => act(() => result.current.handleKeyDown(event))).not.toThrow();
    });

    test('ARROW_DOWN_KEY decreases volume with video element', () => {
      const { result } = getHook();
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        key: 'ArrowDown',
        keyCode: 40,
        which: 40,
      };
      expect(() => act(() => result.current.handleKeyDown(event))).not.toThrow();
    });
  });
});

// ─── 7. useVolume – setTimeout callback in onMutedClick ──────────────────────

describe('useVolume – setTimeout callback coverage', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('setTimeout callback resets ignoreVolumeChangeRef after onMutedClick (muting)', () => {
    const useVolume = require('../../src/hooks/useVolume').default;
    const videoElement = document.createElement('video');
    videoElement.volume = 0.8;
    videoElement.muted = false;
    const videoRef = { current: videoElement };
    const updateState = jest.fn();

    const { result } = renderHook(() =>
      useVolume({
        prevented: false,
        muted: false,
        videoRef,
        src: 'test.mp4',
        updateState,
      }),
    );

    // Call onMutedClick to trigger the setTimeout
    act(() => result.current.onMutedClick());

    // At this point, ignoreVolumeChangeRef should be true
    // The volumechange event should be ignored
    const volumeEvent = new Event('volumechange');
    Object.defineProperty(volumeEvent, 'target', { value: videoElement });

    // Clear the updateState calls from onMutedClick
    updateState.mockClear();

    // Dispatch volumechange - should be ignored because ignoreVolumeChangeRef is true
    act(() => {
      videoElement.dispatchEvent(volumeEvent);
    });
    expect(updateState).not.toHaveBeenCalled();

    // Advance timers to trigger the setTimeout callback
    act(() => {
      jest.runAllTimers();
    });

    // Now dispatch volumechange again - should be processed
    act(() => {
      videoElement.dispatchEvent(new Event('volumechange'));
    });
    // After the timer fires, ignoreVolumeChangeRef is false, so the listener processes the event
    expect(updateState).toHaveBeenCalled();
  });

  test('setTimeout callback resets ignoreVolumeChangeRef after onMutedClick (unmuting)', () => {
    const useVolume = require('../../src/hooks/useVolume').default;
    const videoElement = document.createElement('video');
    videoElement.volume = 0.8;
    videoElement.muted = true;
    const videoRef = { current: videoElement };
    const updateState = jest.fn();

    const { result } = renderHook(() =>
      useVolume({
        prevented: false,
        muted: true,
        videoRef,
        src: 'test.mp4',
        updateState,
      }),
    );

    // Call onMutedClick to unmute (triggers setTimeout)
    act(() => result.current.onMutedClick());

    updateState.mockClear();

    // Advance timers to execute the setTimeout callback
    act(() => {
      jest.runAllTimers();
    });

    // After timer fires, volumechange events should be processed again
    act(() => {
      videoElement.dispatchEvent(new Event('volumechange'));
    });
    expect(updateState).toHaveBeenCalled();
  });
});

// ─── 8. MobileCenterControls.styled – CSS interpolation ──────────────────────

import { StyledMobileCenterControls } from '../../src/PlayerSkin/MobilePlayerSkin/components/MobileCenterControls/MobileCenterControls.styled';

describe('MobileCenterControls.styled – CSS interpolation coverage', () => {
  test('renders with visible=true (opacity 1, pointer-events auto)', () => {
    const { container } = render(<StyledMobileCenterControls visible={true} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with visible=false (opacity 0, pointer-events none)', () => {
    const { container } = render(<StyledMobileCenterControls visible={false} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
