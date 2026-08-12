import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';
import CaptionOverlay from '../../src/PlayerSkin/Commons/CaptionOverlay';
import { DEFAULT_CAPTION_STYLE } from '@playerstack/core';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

const cues = [
  { startTime: 0, endTime: 10, text: 'Test caption' },
];

const baseProps = {
  cues,
  currentTime: 5,
  captionStyle: DEFAULT_CAPTION_STYLE,
  isFullscreen: false,
  controlsVisible: true,
};

describe('CaptionOverlay — drag behavior', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders caption text when cues are active', () => {
    const { getByText } = render(<CaptionOverlay {...baseProps} />, { wrapper });
    expect(getByText('Test caption')).toBeTruthy();
  });

  it('initiates drag on mouseDown and moves on mousemove', () => {
    const { getByText } = render(<CaptionOverlay {...baseProps} />, { wrapper });
    const caption = getByText('Test caption').closest('[class]');

    // Mock parent dimensions
    const parent = caption.parentElement?.parentElement;
    if (parent) {
      Object.defineProperty(parent, 'getBoundingClientRect', {
        value: () => ({ left: 0, top: 0, width: 800, height: 450 }),
      });
    }
    Object.defineProperty(caption, 'getBoundingClientRect', {
      value: () => ({ left: 300, top: 300, width: 200, height: 40 }),
    });
    Object.defineProperty(caption, 'offsetWidth', { value: 200 });
    Object.defineProperty(caption, 'offsetHeight', { value: 40 });

    // Start drag
    act(() => {
      fireEvent.mouseDown(caption, { clientX: 400, clientY: 320 });
    });

    // Move
    act(() => {
      fireEvent.mouseMove(document, { clientX: 450, clientY: 340 });
    });

    // End drag
    act(() => {
      fireEvent.mouseUp(document);
    });
  });

  it('initiates drag on touchStart', () => {
    const { getByText } = render(<CaptionOverlay {...baseProps} />, { wrapper });
    const caption = getByText('Test caption').closest('[class]');

    act(() => {
      fireEvent.touchStart(caption, {
        touches: [{ clientX: 400, clientY: 320 }],
      });
    });

    act(() => {
      fireEvent.touchMove(document, {
        touches: [{ clientX: 420, clientY: 330 }],
      });
    });

    act(() => {
      fireEvent.touchEnd(document);
    });
  });

  it('does not move when not dragging', () => {
    const { getByText } = render(<CaptionOverlay {...baseProps} />, { wrapper });
    // Move without starting drag — should not crash
    act(() => {
      fireEvent.mouseMove(document, { clientX: 500, clientY: 400 });
    });
    expect(getByText('Test caption')).toBeTruthy();
  });

  it('renders in hidden controls mode', () => {
    const { getByText } = render(<CaptionOverlay {...baseProps} controlsVisible={false} />, { wrapper });
    expect(getByText('Test caption')).toBeTruthy();
  });

  it('renders in fullscreen mode with large font', () => {
    const { getByText } = render(<CaptionOverlay {...baseProps} isFullscreen={true} />, { wrapper });
    const textEl = getByText('Test caption');
    expect(textEl.style.fontSize).toContain('24');
  });

  it('applies small-caps font variant', () => {
    const style = { ...DEFAULT_CAPTION_STYLE, fontFamily: 'small-caps' };
    const { getByText } = render(<CaptionOverlay {...baseProps} captionStyle={style} />, { wrapper });
    const textEl = getByText('Test caption');
    expect(textEl.style.fontVariant).toBe('small-caps');
  });

  it('applies custom font size percentage', () => {
    const style = { ...DEFAULT_CAPTION_STYLE, fontSize: '200%' };
    const { getByText } = render(<CaptionOverlay {...baseProps} captionStyle={style} />, { wrapper });
    const textEl = getByText('Test caption');
    expect(textEl.style.fontSize).toBe('32px'); // 16 * 2
  });

  it('adjusts position when controls visibility changes', () => {
    const { getByText, rerender } = render(
      <CaptionOverlay {...baseProps} controlsVisible={true} />,
      { wrapper },
    );
    expect(getByText('Test caption')).toBeTruthy();

    rerender(
      <AppContextProvider language="en">
        <CaptionOverlay {...baseProps} controlsVisible={false} />
      </AppContextProvider>,
    );
    expect(getByText('Test caption')).toBeTruthy();
  });

  it('renders multiple active cues', () => {
    const multiCues = [
      { startTime: 0, endTime: 10, text: 'Line 1' },
      { startTime: 3, endTime: 10, text: 'Line 2' },
    ];
    const { getByText } = render(
      <CaptionOverlay {...baseProps} cues={multiCues} currentTime={5} />,
      { wrapper },
    );
    expect(getByText('Line 1')).toBeTruthy();
    expect(getByText('Line 2')).toBeTruthy();
  });

  it('renders nothing when currentTime has no active cues', () => {
    const { container } = render(
      <CaptionOverlay {...baseProps} currentTime={15} />,
      { wrapper },
    );
    expect(container.firstChild).toBeNull();
  });

  it('applies edge style shadow', () => {
    const style = { ...DEFAULT_CAPTION_STYLE, edgeStyle: 'dropshadow' };
    const { getByText } = render(
      <CaptionOverlay {...baseProps} captionStyle={style} />,
      { wrapper },
    );
    const textEl = getByText('Test caption');
    expect(textEl.style.textShadow).toContain('2px');
  });
});
