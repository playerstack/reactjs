import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from '@context/index';
import MobilePlayerSkin from '@PlayerSkin/MobilePlayerSkin/index';

// Mock hooks that have complex dependencies
jest.mock('../../src/hooks/useMobileAutoHide', () => () => ({
  controlsVisible: true,
  toggleControls: jest.fn(),
  showControls: jest.fn(),
  hideControls: jest.fn(),
}));

jest.mock('@playerstack/core/hooks', () => ({
  ...jest.requireActual('@playerstack/core/hooks'),
  useDoubleTapSkip: () => ({
    skipState: { left: false, right: false, visible: false, seconds: 0 },
    handleTapLeft: jest.fn(),
    handleTapRight: jest.fn(),
  }),
}));

jest.mock('../../src/hooks/usePlayerSkinWrapped', () => () => ({
  contextMenuItems: [],
  contextMenuPosition: { x: 0, y: 0 },
  handleContextMenu: jest.fn(),
}));

const baseProps = {
  videoRef: { current: document.createElement('video') },
  playerRef: { current: document.createElement('div') },
  live: false,
  hasResource: true,
  hasAudio: true,
  prevented: false,
  loading: false,
  paused: true,
  ended: false,
  seeking: false,
  waiting: false,
  duration: 120,
  buffered: 50,
  currentTime: 30,
  muted: false,
  volume: 0.8,
  pictureInPictureEnabled: false,
  pip: false,
  fullscreen: false,
  qualities: [
    { label: '720p', value: '720', isFullHD: false },
    { label: '1080p', value: '1080', isFullHD: true },
  ],
  spriteVTTFile: undefined,
  fullHDQualityBreak: 1080,
  playbackRate: 1,
  loop: false,
  poster: '',
  onPlayClick: jest.fn(),
  onPauseClick: jest.fn(),
  onTogglePlay: jest.fn(),
  changePlaybackRate: jest.fn(),
  changePlayBackQuality: jest.fn(),
  changeVolume: jest.fn(),
  onMutedClick: jest.fn(),
  changeCurrentTime: jest.fn(),
  requestPictureInPicture: jest.fn(),
  exitPictureInPicture: jest.fn(),
  requestFullscreen: jest.fn(),
  exitFullscreen: jest.fn(),
  onSeeking: jest.fn(),
  onLoopClick: jest.fn(),
  onPreventedClick: jest.fn(),
  kernelMsg: null,
};

const wrap = (ui) => render(<Provider language="en">{ui}</Provider>);

// Helper to get the MobileTopBar settings button (first one rendered in the DOM)
const getTopBarSettingsBtn = (container) => {
  const allSettingsBtns = container.querySelectorAll('button[aria-label="Settings"]');
  // The MobileTopBar button is the first one
  return allSettingsBtns[0];
};

describe('MobilePlayerSkin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    const { container } = wrap(<MobilePlayerSkin {...baseProps} />);
    expect(container.firstChild).not.toBeNull();
  });

  // ─── handleOpenSettings / handleCloseSettings ──────────────────────────────
  describe('handleOpenSettings and handleCloseSettings', () => {
    test('opens settings panel when settings button is clicked', () => {
      const { container } = wrap(<MobilePlayerSkin {...baseProps} />);
      const settingsBtn = getTopBarSettingsBtn(container);
      expect(settingsBtn).toBeTruthy();
      fireEvent.click(settingsBtn);
      // After clicking, MobileSettingsPanel visible=true renders the close button
      expect(screen.getByLabelText('Close')).toBeInTheDocument();
    });

    test('closes settings panel when close button is clicked', () => {
      const { container } = wrap(<MobilePlayerSkin {...baseProps} />);
      // Open settings
      fireEvent.click(getTopBarSettingsBtn(container));
      // Now close
      const closeBtn = screen.getByLabelText('Close');
      fireEvent.click(closeBtn);
      // After closing, the top bar settings button is visible again
      expect(getTopBarSettingsBtn(container)).toBeTruthy();
    });
  });

  // ─── handleChangeSettings ──────────────────────────────────────────────────
  describe('handleChangeSettings', () => {
    test('dispatches changePlaybackRate when speed option is selected', () => {
      const changePlaybackRate = jest.fn();
      const { container } = wrap(
        <MobilePlayerSkin {...baseProps} changePlaybackRate={changePlaybackRate} />,
      );
      // Open settings
      fireEvent.click(getTopBarSettingsBtn(container));
      // Click on speed switch to open speed submenu
      const speedItem = screen.getByText('Speed');
      fireEvent.click(speedItem);
      // Now click a speed option (e.g. "1.5")
      const speedOption = screen.getByText('1.5');
      fireEvent.click(speedOption);
      expect(changePlaybackRate).toHaveBeenCalledWith(1.5);
    });

    test('dispatches changePlayBackQuality when quality option is selected', () => {
      const changePlayBackQuality = jest.fn();
      const { container } = wrap(
        <MobilePlayerSkin {...baseProps} changePlayBackQuality={changePlayBackQuality} />,
      );
      // Open settings
      fireEvent.click(getTopBarSettingsBtn(container));
      // Click on quality switch to open quality submenu
      const qualityItem = screen.getByText('Quality');
      fireEvent.click(qualityItem);
      // Now click a quality option (e.g. "720p")
      const qualityOption = screen.getByText('720p');
      fireEvent.click(qualityOption);
      expect(changePlayBackQuality).toHaveBeenCalledWith(720);
    });
  });

  // ─── handlePlayPauseClick ──────────────────────────────────────────────────
  describe('handlePlayPauseClick', () => {
    test('calls onPlayClick when paused', () => {
      const onPlayClick = jest.fn();
      wrap(
        <MobilePlayerSkin {...baseProps} paused={true} ended={false} onPlayClick={onPlayClick} />,
      );
      // MobileCenterControls renders: aria-label={paused ? i18n.play : i18n.pause}
      const playBtn = screen.getByLabelText('Play');
      fireEvent.click(playBtn);
      expect(onPlayClick).toHaveBeenCalled();
    });

    test('calls onPlayClick when ended (paused=true, ended=true)', () => {
      const onPlayClick = jest.fn();
      wrap(
        <MobilePlayerSkin {...baseProps} paused={true} ended={true} onPlayClick={onPlayClick} />,
      );
      // When paused=true, aria-label is "Play"
      const playBtn = screen.getByLabelText('Play');
      fireEvent.click(playBtn);
      expect(onPlayClick).toHaveBeenCalled();
    });

    test('calls onPauseClick when playing (not paused, not ended)', () => {
      const onPauseClick = jest.fn();
      wrap(
        <MobilePlayerSkin {...baseProps} paused={false} ended={false} onPauseClick={onPauseClick} />,
      );
      // When not paused, aria-label is "Pause"
      const pauseBtn = screen.getByLabelText('Pause');
      fireEvent.click(pauseBtn);
      expect(onPauseClick).toHaveBeenCalled();
    });
  });
});
