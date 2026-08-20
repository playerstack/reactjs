import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useDoubleTapSkip } from '@hooks/useDoubleTapSkip';

describe('useDoubleTapSkip', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  const defaultProps = {
    currentTime: 30,
    duration: 120,
    changeCurrentTime: jest.fn(),
    showControls: jest.fn(),
  };

  const getHook = (overrides = {}) =>
    renderHook(() => useDoubleTapSkip({ ...defaultProps, ...overrides }));

  test('returns skipState, handleTapLeft, and handleTapRight', () => {
    const { result } = getHook();
    expect(result.current.skipState).toEqual({ direction: null, visible: false, seconds: 0 });
    expect(typeof result.current.handleTapLeft).toBe('function');
    expect(typeof result.current.handleTapRight).toBe('function');
  });

  // ─── Single Tap Left ──────────────────────────────────────────────────────────
  describe('single tap left', () => {
    test('calls showControls after delay and does NOT skip', () => {
      const showControls = jest.fn();
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ showControls, changeCurrentTime });

      act(() => result.current.handleTapLeft());

      // Before delay: no skip, no showControls
      expect(changeCurrentTime).not.toHaveBeenCalled();
      expect(showControls).not.toHaveBeenCalled();

      // After DOUBLE_TAP_DELAY (300ms)
      act(() => jest.advanceTimersByTime(300));

      expect(showControls).toHaveBeenCalledTimes(1);
      expect(changeCurrentTime).not.toHaveBeenCalled();
      expect(result.current.skipState).toEqual({ direction: null, visible: false, seconds: 0 });
    });

    test('does not throw when showControls is null', () => {
      const { result } = getHook({ showControls: null });

      act(() => result.current.handleTapLeft());
      expect(() => act(() => jest.advanceTimersByTime(300))).not.toThrow();
    });
  });

  // ─── Single Tap Right ─────────────────────────────────────────────────────────
  describe('single tap right', () => {
    test('calls showControls after delay and does NOT skip', () => {
      const showControls = jest.fn();
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ showControls, changeCurrentTime });

      act(() => result.current.handleTapRight());

      expect(changeCurrentTime).not.toHaveBeenCalled();
      expect(showControls).not.toHaveBeenCalled();

      act(() => jest.advanceTimersByTime(300));

      expect(showControls).toHaveBeenCalledTimes(1);
      expect(changeCurrentTime).not.toHaveBeenCalled();
    });

    test('does not throw when showControls is null', () => {
      const { result } = getHook({ showControls: null });

      act(() => result.current.handleTapRight());
      expect(() => act(() => jest.advanceTimersByTime(300))).not.toThrow();
    });
  });

  // ─── Double Tap Left (Skip Backward) ──────────────────────────────────────────
  describe('double tap left', () => {
    test('skips backward by 10 seconds', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 30, duration: 120, changeCurrentTime });

      act(() => result.current.handleTapLeft());
      act(() => result.current.handleTapLeft());

      expect(changeCurrentTime).toHaveBeenCalledWith(20); // 30 - 10
      expect(result.current.skipState).toEqual({
        direction: 'backward',
        visible: true,
        seconds: 10,
      });
    });

    test('does not skip below 0 (clamps to 0)', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 5, duration: 120, changeCurrentTime });

      act(() => result.current.handleTapLeft());
      act(() => result.current.handleTapLeft());

      expect(changeCurrentTime).toHaveBeenCalledWith(0); // Math.max(0, 5 - 10)
    });

    test('does not call showControls on double tap', () => {
      const showControls = jest.fn();
      const { result } = getHook({ showControls });

      act(() => result.current.handleTapLeft());
      act(() => result.current.handleTapLeft());

      // showControls timer should be cleared
      act(() => jest.advanceTimersByTime(300));
      expect(showControls).not.toHaveBeenCalled();
    });
  });

  // ─── Double Tap Right (Skip Forward) ──────────────────────────────────────────
  describe('double tap right', () => {
    test('skips forward by 10 seconds', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 30, duration: 120, changeCurrentTime });

      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      expect(changeCurrentTime).toHaveBeenCalledWith(40); // 30 + 10
      expect(result.current.skipState).toEqual({
        direction: 'forward',
        visible: true,
        seconds: 10,
      });
    });

    test('does not skip beyond duration (clamps to duration)', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 115, duration: 120, changeCurrentTime });

      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      expect(changeCurrentTime).toHaveBeenCalledWith(120); // Math.min(120, 115 + 10)
    });

    test('does not call showControls on double tap', () => {
      const showControls = jest.fn();
      const { result } = getHook({ showControls });

      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      act(() => jest.advanceTimersByTime(300));
      expect(showControls).not.toHaveBeenCalled();
    });
  });

  // ─── Rapid Triple Tap (Accumulate Seconds) ────────────────────────────────────
  describe('rapid triple tap', () => {
    test('accumulates seconds on consecutive double taps in same direction', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 50, duration: 120, changeCurrentTime });

      // First double tap right → skip to 60, display 10s
      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      expect(result.current.skipState.seconds).toBe(10);
      expect(result.current.skipState.direction).toBe('forward');

      // Third tap starts a new single-tap cycle, fourth tap triggers another double
      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      // Should accumulate: 10 + 10 = 20
      expect(result.current.skipState.seconds).toBe(20);
      expect(result.current.skipState.direction).toBe('forward');
    });

    test('resets accumulated seconds when direction changes', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 50, duration: 120, changeCurrentTime });

      // Double tap right
      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());
      expect(result.current.skipState.seconds).toBe(10);
      expect(result.current.skipState.direction).toBe('forward');

      // Double tap left (opposite direction)
      act(() => result.current.handleTapLeft());
      act(() => result.current.handleTapLeft());
      expect(result.current.skipState.seconds).toBe(10); // Reset, not accumulated
      expect(result.current.skipState.direction).toBe('backward');
    });
  });

  // ─── Skip Display Duration ────────────────────────────────────────────────────
  describe('skip display duration', () => {
    test('skipState becomes invisible after SKIP_DISPLAY_DURATION (1000ms)', () => {
      const { result } = getHook();

      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      expect(result.current.skipState.visible).toBe(true);

      act(() => jest.advanceTimersByTime(1000));

      expect(result.current.skipState).toEqual({ direction: null, visible: false, seconds: 0 });
    });

    test('resets hide timer on consecutive skips', () => {
      const { result } = getHook();

      // First double tap
      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      // Advance only partially
      act(() => jest.advanceTimersByTime(500));
      expect(result.current.skipState.visible).toBe(true);

      // Second double tap resets timer
      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      // After another 500ms the first timer would have fired, but it was reset
      act(() => jest.advanceTimersByTime(500));
      expect(result.current.skipState.visible).toBe(true);

      // Full 1000ms from last skip
      act(() => jest.advanceTimersByTime(500));
      expect(result.current.skipState.visible).toBe(false);
    });
  });

  // ─── Edge Cases ───────────────────────────────────────────────────────────────
  describe('edge cases', () => {
    test('does not skip when duration is 0', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 0, duration: 0, changeCurrentTime });

      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      expect(changeCurrentTime).not.toHaveBeenCalled();
      expect(result.current.skipState.visible).toBe(false);
    });

    test('does not skip when duration is NaN', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 0, duration: NaN, changeCurrentTime });

      act(() => result.current.handleTapLeft());
      act(() => result.current.handleTapLeft());

      expect(changeCurrentTime).not.toHaveBeenCalled();
    });

    test('currentTime at 0 boundary — backward clamps to 0', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 0, duration: 120, changeCurrentTime });

      act(() => result.current.handleTapLeft());
      act(() => result.current.handleTapLeft());

      expect(changeCurrentTime).toHaveBeenCalledWith(0);
    });

    test('currentTime at duration boundary — forward clamps to duration', () => {
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ currentTime: 120, duration: 120, changeCurrentTime });

      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      expect(changeCurrentTime).toHaveBeenCalledWith(120);
    });
  });

  // ─── Mixed Tap Interactions ────────────────────────────────────────────────────
  describe('mixed tap interactions', () => {
    test('single tap left then single tap right independently', () => {
      const showControls = jest.fn();
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ showControls, changeCurrentTime });

      act(() => result.current.handleTapLeft());
      act(() => result.current.handleTapRight());

      // Let the left single-tap timer fire (right tap does not cancel left timer)
      act(() => jest.advanceTimersByTime(300));

      expect(showControls).toHaveBeenCalledTimes(2); // Both single-tap fallbacks fire
      expect(changeCurrentTime).not.toHaveBeenCalled();
    });

    test('double tap then single tap on same side resets count', () => {
      const showControls = jest.fn();
      const changeCurrentTime = jest.fn();
      const { result } = getHook({ showControls, changeCurrentTime });

      // Double tap right → skip forward
      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());
      expect(changeCurrentTime).toHaveBeenCalledTimes(1);

      // Single tap right → should call showControls after delay
      act(() => result.current.handleTapRight());
      act(() => jest.advanceTimersByTime(300));
      expect(showControls).toHaveBeenCalledTimes(1);
    });
  });

  // ─── Cleanup on Unmount ───────────────────────────────────────────────────────
  describe('cleanup on unmount', () => {
    test('clears all timers on unmount', () => {
      const spyClearTimeout = jest.spyOn(global, 'clearTimeout');
      const { result, unmount } = getHook();

      // Trigger timers
      act(() => result.current.handleTapLeft());
      act(() => result.current.handleTapRight());

      unmount();

      // Should have called clearTimeout for tapTimerLeft, tapTimerRight, hideTimer
      expect(spyClearTimeout).toHaveBeenCalled();
      spyClearTimeout.mockRestore();
    });

    test('does not throw when unmounting with pending skip display', () => {
      const { result, unmount } = getHook();

      act(() => result.current.handleTapRight());
      act(() => result.current.handleTapRight());

      expect(() => unmount()).not.toThrow();
    });
  });
});
