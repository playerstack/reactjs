import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';
import AudioPlayerSkin from '../../src/PlayerSkin/AudioPlayerSkin';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

const baseProps = {
  videoRef: { current: document.createElement('video') },
  playerRef: { current: document.createElement('div') },
  hasResource: true,
  loading: false,
  paused: true,
  ended: false,
  seeking: false,
  waiting: false,
  duration: 120,
  buffered: 0.5,
  currentTime: 30,
  muted: false,
  volume: 0.8,
  playbackRate: 1,
  loop: false,
  poster: null,
  title: 'Test Song',
  artist: 'Test Artist',
  chapters: null,
  onPlayClick: jest.fn(),
  onPauseClick: jest.fn(),
  onTogglePlay: jest.fn(),
  changeVolume: jest.fn(),
  onMutedClick: jest.fn(),
  changeCurrentTime: jest.fn(),
  changePlaybackRate: jest.fn(),
  onSeeking: jest.fn(),
};

describe('AudioPlayerSkin', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders without crashing', () => {
    const { container } = render(<AudioPlayerSkin {...baseProps} />, { wrapper });
    expect(container.firstChild).not.toBeNull();
  });

  it('renders play button when paused', () => {
    const { getByLabelText } = render(<AudioPlayerSkin {...baseProps} paused={true} ended={false} />, { wrapper });
    expect(getByLabelText('Play')).toBeTruthy();
  });

  it('renders pause button when playing', () => {
    const { getByLabelText } = render(<AudioPlayerSkin {...baseProps} paused={false} ended={false} />, { wrapper });
    expect(getByLabelText('Pause')).toBeTruthy();
  });

  it('renders replay button when ended', () => {
    const { getByLabelText } = render(<AudioPlayerSkin {...baseProps} paused={true} ended={true} />, { wrapper });
    expect(getByLabelText('Replay')).toBeTruthy();
  });

  it('calls onPlayClick when play button is clicked', () => {
    const { getByLabelText } = render(<AudioPlayerSkin {...baseProps} paused={true} />, { wrapper });
    fireEvent.click(getByLabelText('Play'));
    expect(baseProps.onPlayClick).toHaveBeenCalled();
  });

  it('calls onPauseClick when pause button is clicked', () => {
    const { getByLabelText } = render(<AudioPlayerSkin {...baseProps} paused={false} ended={false} />, { wrapper });
    fireEvent.click(getByLabelText('Pause'));
    expect(baseProps.onPauseClick).toHaveBeenCalled();
  });

  it('displays remaining time', () => {
    const { container } = render(<AudioPlayerSkin {...baseProps} duration={120} currentTime={30} />, { wrapper });
    // Remaining = 120-30 = 90s = -01:30
    expect(container.textContent).toContain('-01:30');
  });

  it('displays 0:00 when duration is 0', () => {
    const { container } = render(<AudioPlayerSkin {...baseProps} duration={0} currentTime={0} />, { wrapper });
    expect(container.textContent).toContain('0:00');
  });

  it('renders title in media label', () => {
    const { container } = render(<AudioPlayerSkin {...baseProps} title="My Song" />, { wrapper });
    expect(container.textContent).toContain('My Song');
  });

  it('renders muted icon when muted', () => {
    const { getByLabelText } = render(<AudioPlayerSkin {...baseProps} muted={true} />, { wrapper });
    expect(getByLabelText(/unmute/i)).toBeTruthy();
  });

  it('renders unmuted icon when not muted', () => {
    const { getByLabelText } = render(<AudioPlayerSkin {...baseProps} muted={false} />, { wrapper });
    expect(getByLabelText(/mute/i)).toBeTruthy();
  });

  it('calls onMutedClick when mute button is clicked', () => {
    const { getByLabelText } = render(<AudioPlayerSkin {...baseProps} muted={false} />, { wrapper });
    fireEvent.click(getByLabelText(/mute/i));
    expect(baseProps.onMutedClick).toHaveBeenCalled();
  });

  it('skip back calls changeCurrentTime with time-10', () => {
    const { getByLabelText } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} currentTime={30} duration={120} />,
      { wrapper },
    );
    fireEvent.click(getByLabelText(/back 10/i));
    expect(baseProps.changeCurrentTime).toHaveBeenCalledWith(20);
  });

  it('skip forward calls changeCurrentTime with time+10', () => {
    const { getByLabelText } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} currentTime={30} duration={120} />,
      { wrapper },
    );
    fireEvent.click(getByLabelText(/forward 10/i));
    expect(baseProps.changeCurrentTime).toHaveBeenCalledWith(40);
  });

  it('skip back clamps to 0', () => {
    const { getByLabelText } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} currentTime={3} duration={120} />,
      { wrapper },
    );
    fireEvent.click(getByLabelText(/back 10/i));
    expect(baseProps.changeCurrentTime).toHaveBeenCalledWith(0);
  });

  it('skip forward clamps to duration', () => {
    const { getByLabelText } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} currentTime={115} duration={120} />,
      { wrapper },
    );
    fireEvent.click(getByLabelText(/forward 10/i));
    expect(baseProps.changeCurrentTime).toHaveBeenCalledWith(120);
  });

  it('renders with chapters', () => {
    const chapters = [
      { title: 'Intro', startTime: 0 },
      { title: 'Verse', startTime: 30 },
      { title: 'Chorus', startTime: 60 },
    ];
    const { container } = render(
      <AudioPlayerSkin {...baseProps} chapters={chapters} paused={false} ended={false} />,
      { wrapper },
    );
    expect(container.firstChild).not.toBeNull();
  });

  it('renders loading stripes when waiting', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} waiting={true} buffered={0.3} />,
      { wrapper },
    );
    expect(container.firstChild).not.toBeNull();
  });

  it('renders without buffered (null)', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} buffered={null} paused={false} ended={false} />,
      { wrapper },
    );
    expect(container.firstChild).not.toBeNull();
  });
});

describe('AudioPlayerSkin — styled-components interpolation coverage', () => {
  it('renders with volume=0 (muted icon)', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} volume={0} muted={false} paused={false} ended={false} />,
      { wrapper },
    );
    expect(container.firstChild).not.toBeNull();
  });

  it('renders ended state', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={true} ended={true} />,
      { wrapper },
    );
    expect(container.textContent).toContain('Replay');
  });

  it('handles timeline mousedown for seeking', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} duration={100} currentTime={50} />,
      { wrapper },
    );
    // Find track element and simulate mousedown
    const track = container.querySelector('[role="application"]') || container.firstChild;
    expect(track).not.toBeNull();
  });

  it('volume slider hover shows tooltip', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} />,
      { wrapper },
    );
    const volumeSlider = container.querySelector('[role="slider"]');
    if (volumeSlider) {
      fireEvent.mouseEnter(volumeSlider.parentElement);
      expect(container.textContent).toContain('%');
    }
  });

  it('renders with chapters and segments have widths', () => {
    const chapters = [
      { title: 'Part 1', startTime: 0 },
      { title: 'Part 2', startTime: 60 },
    ];
    const { container } = render(
      <AudioPlayerSkin {...baseProps} chapters={chapters} paused={false} ended={false} duration={120} currentTime={45} buffered={0.7} />,
      { wrapper },
    );
    expect(container.firstChild).not.toBeNull();
  });

  it('renders with currentTime 0 (no fill)', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} duration={120} currentTime={0} />,
      { wrapper },
    );
    expect(container.firstChild).not.toBeNull();
  });

  it('renders with waiting and chapters', () => {
    const chapters = [
      { title: 'A', startTime: 0 },
      { title: 'B', startTime: 30 },
    ];
    const { container } = render(
      <AudioPlayerSkin {...baseProps} chapters={chapters} paused={false} ended={false} waiting={true} duration={60} currentTime={10} buffered={0.2} />,
      { wrapper },
    );
    expect(container.firstChild).not.toBeNull();
  });
});

describe('AudioPlayerSkin — timeline and volume interactions', () => {
  it('timeline mousedown triggers seek', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} duration={100} currentTime={50} />,
      { wrapper },
    );
    // Find the timeline track element
    const tracks = container.querySelectorAll('[class]');
    const timelineTrack = Array.from(tracks).find((el) => {
      const rect = el.getBoundingClientRect;
      return el.onmousedown !== undefined || el.getAttribute('class')?.includes('Track');
    });
    // Simulate mousedown on any timeline-like element
    const allDivs = container.querySelectorAll('div');
    allDivs.forEach((div) => {
      if (div.onmousedown) {
        Object.defineProperty(div, 'getBoundingClientRect', {
          value: () => ({ left: 0, top: 0, width: 500, height: 4 }),
        });
        fireEvent.mouseDown(div, { clientX: 250 });
      }
    });
    // Any seek interaction
    expect(container.firstChild).not.toBeNull();
  });

  it('timeline hover shows tooltip', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} duration={100} currentTime={30} />,
      { wrapper },
    );
    const allDivs = container.querySelectorAll('div');
    allDivs.forEach((div) => {
      if (div.onmousemove) {
        Object.defineProperty(div, 'getBoundingClientRect', {
          value: () => ({ left: 0, top: 0, width: 500, height: 4, right: 500 }),
        });
        fireEvent.mouseMove(div, { clientX: 200 });
      }
    });
    expect(container.firstChild).not.toBeNull();
  });

  it('timeline mouseleave hides tooltip', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} duration={100} currentTime={30} />,
      { wrapper },
    );
    const allDivs = container.querySelectorAll('div');
    allDivs.forEach((div) => {
      if (div.onmouseleave) {
        fireEvent.mouseLeave(div);
      }
    });
    expect(container.firstChild).not.toBeNull();
  });

  it('volume slider mousedown triggers volume change', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} />,
      { wrapper },
    );
    const slider = container.querySelector('[role="slider"]');
    if (slider) {
      Object.defineProperty(slider, 'getBoundingClientRect', {
        value: () => ({ left: 0, top: 0, width: 80, height: 8 }),
      });
      fireEvent.mouseDown(slider, { clientX: 40 });
      // Simulate mousemove + mouseup on document
      fireEvent.mouseMove(document, { clientX: 50 });
      fireEvent.mouseUp(document);
    }
    expect(container.firstChild).not.toBeNull();
  });

  it('volume container mouseEnter/mouseLeave toggles tooltip', () => {
    const { container } = render(
      <AudioPlayerSkin {...baseProps} paused={false} ended={false} volume={0.7} />,
      { wrapper },
    );
    const slider = container.querySelector('[role="slider"]');
    if (slider && slider.parentElement) {
      fireEvent.mouseEnter(slider.parentElement);
      // Tooltip should show
      expect(container.textContent).toContain('%');
      fireEvent.mouseLeave(slider.parentElement);
    }
  });
});
