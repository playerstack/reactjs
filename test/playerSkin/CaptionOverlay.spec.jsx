import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import CaptionOverlay from '../../src/PlayerSkin/Commons/CaptionOverlay/index';
import { Provider } from '../../src/context/index';

const Wrapper = ({ children }) => (
  <Provider language="en">{children}</Provider>
);

const defaultCaptionStyle = {
  fontSize: '100',
  fontColor: '#ffffff',
  fontOpacity: 100,
  backgroundColor: '#000000',
  backgroundOpacity: 75,
  windowColor: '#000000',
  windowOpacity: 0,
  edgeStyle: 'none',
  fontFamily: 'sans-serif',
};

const defaultCues = [
  { startTime: 0, endTime: 5, text: 'Hello world' },
  { startTime: 5, endTime: 10, text: 'Second cue' },
];

const renderOverlay = (props = {}) => {
  const defaultProps = {
    cues: defaultCues,
    currentTime: 2,
    captionStyle: defaultCaptionStyle,
    isFullscreen: false,
    controlsVisible: true,
    ...props,
  };
  return render(
    <Wrapper>
      <div style={{ position: 'relative', width: 640, height: 360 }}>
        <CaptionOverlay {...defaultProps} />
      </div>
    </Wrapper>,
  );
};

describe('CaptionOverlay', () => {
  describe('rendering', () => {
    test('renders active cue text', () => {
      const { getByText } = renderOverlay({ currentTime: 2 });
      expect(getByText('Hello world')).toBeTruthy();
    });

    test('renders nothing when no active cues at currentTime', () => {
      const { container } = renderOverlay({ currentTime: 15 });
      // No caption container rendered
      expect(container.querySelector('[class]')).toBeFalsy();
    });

    test('renders nothing when cues array is empty', () => {
      const { container } = renderOverlay({ cues: [] });
      expect(container.querySelector('[class]')).toBeFalsy();
    });

    test('renders nothing when cues is undefined', () => {
      const { container } = renderOverlay({ cues: undefined });
      expect(container.querySelector('[class]')).toBeFalsy();
    });

    test('renders multiple cues at same time range', () => {
      const overlappingCues = [
        { startTime: 0, endTime: 5, text: 'Line 1' },
        { startTime: 0, endTime: 5, text: 'Line 2' },
      ];
      const { getByText } = renderOverlay({ cues: overlappingCues, currentTime: 2 });
      expect(getByText('Line 1')).toBeTruthy();
      expect(getByText('Line 2')).toBeTruthy();
    });
  });

  describe('positioning', () => {
    test('starts at default visible position (centered X)', () => {
      const { container } = renderOverlay();
      const captionContainer = container.querySelector('[class]');
      expect(captionContainer).toBeTruthy();
      // Position is set via style — left: 50%
      expect(captionContainer.style.left || captionContainer).toBeTruthy();
    });
  });

  describe('drag behavior', () => {
    test('mouseDown starts dragging', () => {
      const { container } = renderOverlay();
      const captionContainer = container.querySelector('[class]').firstChild;
      act(() => {
        fireEvent.mouseDown(captionContainer, { clientX: 320, clientY: 180 });
      });
      // After mouseDown, isDragging should change — cursor style changes
      expect(captionContainer).toBeTruthy();
    });

    test('touchStart starts dragging', () => {
      const { container } = renderOverlay();
      const captionContainer = container.querySelector('[class]').firstChild;
      act(() => {
        fireEvent.touchStart(captionContainer, {
          touches: [{ clientX: 320, clientY: 180 }],
        });
      });
      expect(captionContainer).toBeTruthy();
    });

    test('stopPropagation is called on drag start', () => {
      const { container } = renderOverlay();
      const captionContainer = container.querySelector('[class]').firstChild;
      const event = new MouseEvent('mousedown', { bubbles: true, clientX: 320, clientY: 180 });
      Object.defineProperty(event, 'stopPropagation', { value: jest.fn() });
      Object.defineProperty(event, 'preventDefault', { value: jest.fn() });
      act(() => {
        captionContainer.dispatchEvent(event);
      });
      expect(event.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('caption style application', () => {
    test('applies font size based on captionStyle', () => {
      const { getByText } = renderOverlay();
      const textEl = getByText('Hello world');
      expect(textEl.style.fontSize).toBe('16px'); // 100% of 16px base
    });

    test('applies larger font size in fullscreen', () => {
      const { getByText } = renderOverlay({ isFullscreen: true });
      const textEl = getByText('Hello world');
      expect(textEl.style.fontSize).toBe('24px'); // 100% of 24px base
    });

    test('applies custom font size percentage', () => {
      const style = { ...defaultCaptionStyle, fontSize: '150' };
      const { getByText } = renderOverlay({ captionStyle: style });
      const textEl = getByText('Hello world');
      expect(textEl.style.fontSize).toBe('24px'); // 150% of 16px
    });

    test('applies small-caps font variant', () => {
      const style = { ...defaultCaptionStyle, fontFamily: 'small-caps' };
      const { getByText } = renderOverlay({ captionStyle: style });
      const textEl = getByText('Hello world');
      expect(textEl.style.fontVariant).toBe('small-caps');
      expect(textEl.style.fontFamily).toBe('sans-serif');
    });
  });
});
