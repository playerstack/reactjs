import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from '@context/index';
import MobileProgressBar from '@PlayerSkin/MobilePlayerSkin/components/MobileBottomBar/MobileProgressBar';

const wrap = (ui) => render(<Provider language="en">{ui}</Provider>);

describe('MobileProgressBar', () => {
  const defaultProps = {
    currentTime: 30,
    duration: 120,
    buffered: 0.5,
    onChange: jest.fn(),
    onSeeking: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  // ─── Rendering and ARIA ───────────────────────────────────────────────────────
  describe('rendering and aria attributes', () => {
    test('renders with role="slider"', () => {
      wrap(<MobileProgressBar {...defaultProps} />);
      expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    test('has correct aria-valuemin', () => {
      wrap(<MobileProgressBar {...defaultProps} />);
      expect(screen.getByRole('slider')).toHaveAttribute('aria-valuemin', '0');
    });

    test('has correct aria-valuemax based on duration', () => {
      wrap(<MobileProgressBar {...defaultProps} duration={120} />);
      expect(screen.getByRole('slider')).toHaveAttribute('aria-valuemax', '120');
    });

    test('has correct aria-valuenow based on currentTime', () => {
      wrap(<MobileProgressBar {...defaultProps} currentTime={30} />);
      expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '30');
    });

    test('has aria-valuetext with formatted time', () => {
      wrap(<MobileProgressBar {...defaultProps} currentTime={90} />);
      expect(screen.getByRole('slider')).toHaveAttribute('aria-valuetext', '01:30');
    });

    test('has aria-label', () => {
      wrap(<MobileProgressBar {...defaultProps} />);
      expect(screen.getByRole('slider')).toHaveAttribute('aria-label', 'Time bar');
    });

    test('has tabIndex 0 for keyboard accessibility', () => {
      wrap(<MobileProgressBar {...defaultProps} />);
      expect(screen.getByRole('slider')).toHaveAttribute('tabindex', '0');
    });

    test('renders buffered progress element', () => {
      const { container } = wrap(<MobileProgressBar {...defaultProps} buffered={0.7} />);
      // Buffered bar width should be 70%
      const elements = container.querySelectorAll('[style]');
      const bufferedEl = Array.from(elements).find((el) => el.style.width === '70%');
      expect(bufferedEl).toBeTruthy();
    });

    test('renders filled progress element based on progress', () => {
      const { container } = wrap(<MobileProgressBar {...defaultProps} currentTime={60} duration={120} />);
      // Progress = 60/120 = 50%
      const elements = container.querySelectorAll('[style]');
      const filledEl = Array.from(elements).find((el) => el.style.width === '50%');
      expect(filledEl).toBeTruthy();
    });

    test('renders handle at correct position', () => {
      const { container } = wrap(<MobileProgressBar {...defaultProps} currentTime={30} duration={120} />);
      // Handle position = 30/120 = 25%
      const elements = container.querySelectorAll('[style]');
      const handleEl = Array.from(elements).find((el) => el.style.left === '25%');
      expect(handleEl).toBeTruthy();
    });
  });

  // ─── Mouse Interaction ────────────────────────────────────────────────────────
  describe('mouse interaction', () => {
    test('calls onChange on mousedown', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      // Mock getBoundingClientRect
      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.mouseDown(slider, { clientX: 100 });

      // fraction = (100 - 0) / 200 = 0.5; newTime = 0.5 * 120 = 60
      expect(onChange).toHaveBeenCalledWith(60);
    });

    test('calls onSeeking(true) on mousedown', () => {
      const onSeeking = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onSeeking={onSeeking} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.mouseDown(slider, { clientX: 50 });
      expect(onSeeking).toHaveBeenCalledWith(true);
    });

    test('calls onChange on mousemove during drag', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.mouseDown(slider, { clientX: 50 });
      onChange.mockClear();

      // Simulate mousemove on document
      fireEvent.mouseMove(document, { clientX: 150 });

      // fraction = 150/200 = 0.75; newTime = 0.75 * 120 = 90
      expect(onChange).toHaveBeenCalledWith(90);
    });

    test('calls onSeeking(false) on mouseup', () => {
      const onSeeking = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onSeeking={onSeeking} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.mouseDown(slider, { clientX: 50 });
      onSeeking.mockClear();

      fireEvent.mouseUp(document);
      expect(onSeeking).toHaveBeenCalledWith(false);
    });

    test('stops responding to mousemove after mouseup', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.mouseDown(slider, { clientX: 50 });
      fireEvent.mouseUp(document);
      onChange.mockClear();

      fireEvent.mouseMove(document, { clientX: 150 });
      expect(onChange).not.toHaveBeenCalled();
    });

    test('clamps fraction to 0 when clientX is before container', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 100,
        width: 200,
        top: 0,
        height: 20,
        right: 300,
        bottom: 20,
      }));

      fireEvent.mouseDown(slider, { clientX: 50 }); // Before left edge
      // fraction = Math.max(0, (50 - 100) / 200) = Math.max(0, -0.25) = 0
      expect(onChange).toHaveBeenCalledWith(0);
    });

    test('clamps fraction to 1 when clientX is after container', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.mouseDown(slider, { clientX: 300 }); // Beyond right edge
      // fraction = Math.min(1, (300 - 0) / 200) = Math.min(1, 1.5) = 1
      expect(onChange).toHaveBeenCalledWith(120); // 1 * 120
    });
  });

  // ─── Touch Interaction ────────────────────────────────────────────────────────
  describe('touch interaction', () => {
    test('calls onChange on touchstart', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.touchStart(slider, { touches: [{ clientX: 100 }] });
      // fraction = 100/200 = 0.5; newTime = 60
      expect(onChange).toHaveBeenCalledWith(60);
    });

    test('calls onSeeking(true) on touchstart', () => {
      const onSeeking = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onSeeking={onSeeking} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.touchStart(slider, { touches: [{ clientX: 50 }] });
      expect(onSeeking).toHaveBeenCalledWith(true);
    });

    test('calls onChange on touchmove during drag', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.touchStart(slider, { touches: [{ clientX: 50 }] });
      onChange.mockClear();

      fireEvent.touchMove(document, { touches: [{ clientX: 150 }] });
      // fraction = 150/200 = 0.75; newTime = 90
      expect(onChange).toHaveBeenCalledWith(90);
    });

    test('calls onSeeking(false) on touchend', () => {
      const onSeeking = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onSeeking={onSeeking} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.touchStart(slider, { touches: [{ clientX: 50 }] });
      onSeeking.mockClear();

      fireEvent.touchEnd(document);
      expect(onSeeking).toHaveBeenCalledWith(false);
    });

    test('stops responding to touchmove after touchend', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.touchStart(slider, { touches: [{ clientX: 50 }] });
      fireEvent.touchEnd(document);
      onChange.mockClear();

      fireEvent.touchMove(document, { touches: [{ clientX: 150 }] });
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  // ─── Edge Cases ───────────────────────────────────────────────────────────────
  describe('edge cases', () => {
    test('does not call onChange when duration is 0', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} duration={0} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.mouseDown(slider, { clientX: 100 });
      expect(onChange).not.toHaveBeenCalled();
    });

    test('progress is 0 when duration is 0', () => {
      const { container } = wrap(
        <MobileProgressBar {...defaultProps} currentTime={50} duration={0} />,
      );
      const elements = container.querySelectorAll('[style]');
      // Both filled width and handle left should be 0%
      const zeroWidthEls = Array.from(elements).filter((el) => el.style.width === '0%');
      expect(zeroWidthEls.length).toBeGreaterThan(0);
    });

    test('works without onSeeking prop', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar currentTime={30} duration={120} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      // Should not throw when onSeeking is undefined
      expect(() => fireEvent.mouseDown(slider, { clientX: 100 })).not.toThrow();
      expect(onChange).toHaveBeenCalled();

      expect(() => fireEvent.mouseUp(document)).not.toThrow();
    });

    test('works without onSeeking prop on touch', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar currentTime={30} duration={120} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      expect(() => fireEvent.touchStart(slider, { touches: [{ clientX: 100 }] })).not.toThrow();
      expect(onChange).toHaveBeenCalled();

      expect(() => fireEvent.touchEnd(document)).not.toThrow();
    });

    test('buffered defaults to 0 when not provided', () => {
      const { container } = wrap(
        <MobileProgressBar currentTime={30} duration={120} onChange={jest.fn()} />,
      );
      const elements = container.querySelectorAll('[style]');
      const zeroWidthEls = Array.from(elements).filter((el) => el.style.width === '0%');
      // buffered bar should be 0%
      expect(zeroWidthEls.length).toBeGreaterThan(0);
    });

    test('handles containerRef being null gracefully (no crash)', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      // Don't mock getBoundingClientRect — let it use default (which returns zeros in jsdom)
      // This tests that fraction calculation works even with zero-width container
      expect(() => fireEvent.mouseDown(slider, { clientX: 100 })).not.toThrow();
    });

    test('touchmove with no touches[0] does not call onChange', () => {
      const onChange = jest.fn();
      wrap(<MobileProgressBar {...defaultProps} onChange={onChange} />);
      const slider = screen.getByRole('slider');

      slider.getBoundingClientRect = jest.fn(() => ({
        left: 0,
        width: 200,
        top: 0,
        height: 20,
        right: 200,
        bottom: 20,
      }));

      fireEvent.touchStart(slider, { touches: [{ clientX: 50 }] });
      onChange.mockClear();

      // touchmove with empty touches array
      fireEvent.touchMove(document, { touches: [] });
      expect(onChange).not.toHaveBeenCalled();
    });

    test('aria-valuemax rounds duration to integer', () => {
      wrap(<MobileProgressBar {...defaultProps} duration={120.7} />);
      expect(screen.getByRole('slider')).toHaveAttribute('aria-valuemax', '121');
    });

    test('aria-valuenow rounds currentTime to integer', () => {
      wrap(<MobileProgressBar {...defaultProps} currentTime={30.6} />);
      expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '31');
    });
  });
});
