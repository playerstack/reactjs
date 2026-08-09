import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useMobileAutoHide from '../../src/hooks/useMobileAutoHide';

describe('useMobileAutoHide', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  const defaultProps = {
    hasResource: true,
    loading: false,
    prevented: false,
    paused: false,
    ended: false,
    waiting: false,
    seeking: false,
  };

  const getHook = (overrides = {}) =>
    renderHook(() => useMobileAutoHide({ ...defaultProps, ...overrides }));

  // ─── Initial State ────────────────────────────────────────────────────────────
  describe('initial state', () => {
    test('controls are visible initially', () => {
      const { result } = getHook();
      expect(result.current.controlsVisible).toBe(true);
    });

    test('returns toggleControls, showControls, hideControls functions', () => {
      const { result } = getHook();
      expect(typeof result.current.toggleControls).toBe('function');
      expect(typeof result.current.showControls).toBe('function');
      expect(typeof result.current.hideControls).toBe('function');
    });
  });

  // ─── toggleControls ───────────────────────────────────────────────────────────
  describe('toggleControls', () => {
    test('hides controls when currently visible and playing', () => {
      const { result } = getHook();

      expect(result.current.controlsVisible).toBe(true);
      act(() => result.current.toggleControls());
      expect(result.current.controlsVisible).toBe(false);
    });

    test('shows controls when currently hidden and starts hide timer', () => {
      const { result } = getHook();

      // First hide
      act(() => result.current.toggleControls());
      expect(result.current.controlsVisible).toBe(false);

      // Then show
      act(() => result.current.toggleControls());
      expect(result.current.controlsVisible).toBe(true);

      // Should auto-hide after HIDE_DELAY (3000ms)
      act(() => jest.advanceTimersByTime(3000));
      expect(result.current.controlsVisible).toBe(false);
    });

    test('does not start hide timer when shouldStayVisible (paused)', () => {
      const { result } = getHook({ paused: true });

      // Hide then show
      act(() => result.current.toggleControls());
      act(() => result.current.toggleControls());

      // Should NOT auto-hide
      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });
  });

  // ─── showControls ─────────────────────────────────────────────────────────────
  describe('showControls', () => {
    test('makes controls visible', () => {
      const { result } = getHook();

      // First hide
      act(() => result.current.toggleControls());
      expect(result.current.controlsVisible).toBe(false);

      // Then show
      act(() => result.current.showControls());
      expect(result.current.controlsVisible).toBe(true);
    });

    test('starts hide timer when playing', () => {
      const { result } = getHook();

      act(() => result.current.showControls());
      expect(result.current.controlsVisible).toBe(true);

      act(() => jest.advanceTimersByTime(3000));
      expect(result.current.controlsVisible).toBe(false);
    });

    test('does not start hide timer when shouldStayVisible', () => {
      const { result } = getHook({ paused: true });

      act(() => result.current.showControls());
      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });
  });

  // ─── hideControls ─────────────────────────────────────────────────────────────
  describe('hideControls', () => {
    test('hides controls when playing', () => {
      const { result } = getHook();

      expect(result.current.controlsVisible).toBe(true);
      act(() => result.current.hideControls());
      expect(result.current.controlsVisible).toBe(false);
    });

    test('does not hide controls when paused (shouldStayVisible)', () => {
      const { result } = getHook({ paused: true });

      act(() => result.current.hideControls());
      expect(result.current.controlsVisible).toBe(true);
    });

    test('does not hide controls when ended (shouldStayVisible)', () => {
      const { result } = getHook({ ended: true });

      act(() => result.current.hideControls());
      expect(result.current.controlsVisible).toBe(true);
    });

    test('does not hide controls when loading (shouldStayVisible)', () => {
      const { result } = getHook({ loading: true });

      act(() => result.current.hideControls());
      expect(result.current.controlsVisible).toBe(true);
    });

    test('does not hide controls when waiting (shouldStayVisible)', () => {
      const { result } = getHook({ waiting: true });

      act(() => result.current.hideControls());
      expect(result.current.controlsVisible).toBe(true);
    });

    test('stops hide timer when called', () => {
      const spyClearTimeout = jest.spyOn(global, 'clearTimeout');
      const { result } = getHook();

      act(() => result.current.hideControls());
      expect(spyClearTimeout).toHaveBeenCalled();
      spyClearTimeout.mockRestore();
    });
  });

  // ─── shouldStayVisible conditions ─────────────────────────────────────────────
  describe('shouldStayVisible conditions', () => {
    test('controls stay visible when hasResource is false', () => {
      const { result } = getHook({ hasResource: false });

      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });

    test('controls stay visible when loading is true', () => {
      const { result } = getHook({ loading: true });

      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });

    test('controls stay visible when prevented is true', () => {
      const { result } = getHook({ prevented: true });

      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });

    test('controls stay visible when paused is true', () => {
      const { result } = getHook({ paused: true });

      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });

    test('controls stay visible when ended is true', () => {
      const { result } = getHook({ ended: true });

      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });

    test('controls stay visible when waiting is true', () => {
      const { result } = getHook({ waiting: true });

      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });

    test('forces controls visible when transitioning to shouldStayVisible', () => {
      const { result, rerender } = renderHook(
        (props) => useMobileAutoHide(props),
        { initialProps: defaultProps },
      );

      // Hide controls while playing
      act(() => result.current.toggleControls());
      expect(result.current.controlsVisible).toBe(false);

      // Transition to paused - should force visible
      rerender({ ...defaultProps, paused: true });
      expect(result.current.controlsVisible).toBe(true);
    });
  });

  // ─── Auto-hide timer when playing ─────────────────────────────────────────────
  describe('auto-hide timer when playing', () => {
    test('auto-hides after HIDE_DELAY (3000ms) when playing', () => {
      const { result } = getHook();

      expect(result.current.controlsVisible).toBe(true);
      act(() => jest.advanceTimersByTime(3000));
      expect(result.current.controlsVisible).toBe(false);
    });

    test('does not auto-hide before HIDE_DELAY', () => {
      const { result } = getHook();

      act(() => jest.advanceTimersByTime(2999));
      expect(result.current.controlsVisible).toBe(true);
    });

    test('resets hide timer on showControls call', () => {
      const { result } = getHook();

      // Advance partially
      act(() => jest.advanceTimersByTime(2000));
      expect(result.current.controlsVisible).toBe(true);

      // Show controls resets timer
      act(() => result.current.showControls());

      // After another 2000ms (total 4000 from start) - should still be visible because timer was reset
      act(() => jest.advanceTimersByTime(2000));
      expect(result.current.controlsVisible).toBe(true);

      // Full 3000ms from showControls call
      act(() => jest.advanceTimersByTime(1000));
      expect(result.current.controlsVisible).toBe(false);
    });
  });

  // ─── Seeking end behavior ─────────────────────────────────────────────────────
  describe('seeking end behavior', () => {
    test('starts hide timer when seeking ends while playing', () => {
      const { result, rerender } = renderHook(
        (props) => useMobileAutoHide(props),
        { initialProps: { ...defaultProps, seeking: true } },
      );

      expect(result.current.controlsVisible).toBe(true);

      // End seeking while playing
      rerender({ ...defaultProps, seeking: false });

      // Should auto-hide after HIDE_DELAY
      act(() => jest.advanceTimersByTime(3000));
      expect(result.current.controlsVisible).toBe(false);
    });

    test('does not start hide timer when seeking ends while paused', () => {
      const { result, rerender } = renderHook(
        (props) => useMobileAutoHide(props),
        { initialProps: { ...defaultProps, seeking: true, paused: true } },
      );

      // End seeking while paused
      rerender({ ...defaultProps, seeking: false, paused: true });

      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });

    test('does not start hide timer when seeking ends while ended', () => {
      const { result, rerender } = renderHook(
        (props) => useMobileAutoHide(props),
        { initialProps: { ...defaultProps, seeking: true, ended: true } },
      );

      rerender({ ...defaultProps, seeking: false, ended: true });

      act(() => jest.advanceTimersByTime(5000));
      expect(result.current.controlsVisible).toBe(true);
    });
  });

  // ─── Timer Cleanup on Unmount ─────────────────────────────────────────────────
  describe('timer cleanup on unmount', () => {
    test('clears timeout on unmount', () => {
      const spyClearTimeout = jest.spyOn(global, 'clearTimeout');
      const { unmount } = getHook();

      unmount();
      expect(spyClearTimeout).toHaveBeenCalled();
      spyClearTimeout.mockRestore();
    });

    test('does not throw when unmounting with active timer', () => {
      const { result, unmount } = getHook();

      act(() => result.current.showControls());
      expect(() => unmount()).not.toThrow();
    });
  });
});
