import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useTimeSlider from '../../src/hooks/useTimeSlider';
import { Provider } from '../../src/context/index';

const wrapper = ({ children }) => <Provider language="en">{children}</Provider>;

const makeTimelensRef = () => ({
  current: {
    handleTimelens: jest.fn(),
    setShowTimelens: jest.fn(),
  },
});

describe('useTimeSlider', () => {
  const defaults = {
    timelensRef: makeTimelensRef(),
    currentTime: 0,
    duration: 100,
    onChange: jest.fn(),
    onSeeking: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb();
      return 1;
    });
    jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
  });

  afterEach(() => {
    window.requestAnimationFrame.mockRestore();
    window.cancelAnimationFrame.mockRestore();
  });

  test('returns expected refs and handlers', () => {
    const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
    expect(result.current.sliderRef).toBeDefined();
    expect(result.current.handleRef).toBeDefined();
    expect(typeof result.current.onClick).toBe('function');
    expect(typeof result.current.onMouseDown).toBe('function');
    expect(typeof result.current.onMouseEnter).toBe('function');
    expect(typeof result.current.onMouseLeave).toBe('function');
    expect(typeof result.current.onSliderMouseMove).toBe('function');
    expect(typeof result.current.onSliderMouseOver).toBe('function');
  });

  test('showTooltip defaults to false', () => {
    const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
    expect(result.current.showTooltip).toBe(false);
  });

  test('timeSliderSliding defaults to false', () => {
    const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
    expect(result.current.timeSliderSliding).toBe(false);
  });

  describe('onMouseEnter / onMouseLeave timelens interaction', () => {
    test('onMouseEnter sets showTooltip to true and calls handleTimelens', () => {
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef }),
        { wrapper },
      );
      const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
      act(() => result.current.onMouseEnter(mockEvent));
      expect(result.current.showTooltip).toBe(true);
      expect(timelensRef.current.handleTimelens).toHaveBeenCalledWith(mockEvent);
    });

    test('onMouseLeave sets showTooltip to false and calls setShowTimelens(false)', () => {
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef }),
        { wrapper },
      );
      const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
      act(() => result.current.onMouseEnter(mockEvent));
      act(() => result.current.onMouseLeave());
      expect(result.current.showTooltip).toBe(false);
      expect(timelensRef.current.setShowTimelens).toHaveBeenCalledWith(false);
    });

    test('onMouseEnter does nothing if timelensRef.current is null', () => {
      const timelensRef = { current: null };
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef }),
        { wrapper },
      );
      const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
      act(() => result.current.onMouseEnter(mockEvent));
      expect(result.current.showTooltip).toBe(true);
    });

    test('onMouseLeave does nothing if timelensRef.current is null', () => {
      const timelensRef = { current: null };
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef }),
        { wrapper },
      );
      act(() => result.current.onMouseLeave());
      expect(result.current.showTooltip).toBe(false);
    });
  });

  describe('onSliderMouseMove tooltip calculation', () => {
    test('updates tooltip value based on mouse position', () => {
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef, duration: 200 }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 400 });
      result.current.sliderRef.current = div;

      // Set rect first via onSliderMouseOver
      act(() => result.current.onSliderMouseOver({ preventDefault: jest.fn(), clientX: 50 }));

      // Move to half of the slider
      act(() => result.current.onSliderMouseMove({ preventDefault: jest.fn(), clientX: 200 }));

      // tooltip should be duration/2 = 100
      expect(result.current.timeSliderState.tooltip).toBe(100);
    });

    test('calls timelensRef.handleTimelens on move', () => {
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      act(() => result.current.onSliderMouseOver({ preventDefault: jest.fn(), clientX: 50 }));
      act(() => result.current.onSliderMouseMove({ preventDefault: jest.fn(), clientX: 250 }));

      expect(timelensRef.current.handleTimelens).toHaveBeenCalled();
    });
  });

  describe('onResize debounce behavior', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('window resize updates timeSliderRect after debounce', () => {
      const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 10, width: 600 });
      result.current.sliderRef.current = div;

      // Trigger resize
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      // Before debounce completes, rect should not have updated
      // After debounce (100ms)
      act(() => {
        jest.advanceTimersByTime(100);
      });

      // The onResize should have been called and updated rect (we can verify indirectly
      // by checking that getBoundingClientRect was called)
      expect(div.getBoundingClientRect).toHaveBeenCalled();
    });

    test('multiple resize events debounce to single update', () => {
      const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });

      const div = document.createElement('div');
      const spy = jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      // Fire multiple resize events rapidly
      act(() => {
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('resize'));
      });

      act(() => {
        jest.advanceTimersByTime(100);
      });

      // Should only call getBoundingClientRect once due to debounce
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('resize cleanup clears timer on unmount', () => {
      const { result, unmount } = renderHook(() => useTimeSlider(defaults), { wrapper });

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      unmount();

      // Should not throw after unmount
      act(() => {
        jest.advanceTimersByTime(200);
      });
    });
  });

  describe('window resize event registration/cleanup', () => {
    test('adds resize listener on mount', () => {
      const addSpy = jest.spyOn(window, 'addEventListener');
      renderHook(() => useTimeSlider(defaults), { wrapper });
      expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function));
      addSpy.mockRestore();
    });

    test('removes resize listener on unmount', () => {
      const removeSpy = jest.spyOn(window, 'removeEventListener');
      const { unmount } = renderHook(() => useTimeSlider(defaults), { wrapper });
      unmount();
      expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
      removeSpy.mockRestore();
    });
  });

  describe('trackTranslateX useMemo recalculation', () => {
    test('trackTranslateX returns object with track and handle', () => {
      const { result } = renderHook(() => useTimeSlider(defaults), { wrapper });
      expect(result.current.trackTranslateX).toHaveProperty('track');
      expect(result.current.trackTranslateX).toHaveProperty('handle');
    });

    test('trackTranslateX updates when currentTime changes', () => {
      const { result, rerender } = renderHook(
        (props) => useTimeSlider(props),
        { wrapper, initialProps: { ...defaults, currentTime: 0 } },
      );

      const initial = result.current.trackTranslateX;

      // Set up a slider with width so translateX can be calculated
      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      act(() => result.current.onSliderMouseOver({ preventDefault: jest.fn(), clientX: 50 }));

      rerender({ ...defaults, currentTime: 50 });

      const updated = result.current.trackTranslateX;
      // After changing currentTime, translateX values should change
      expect(updated.track).not.toBe(initial.track);
    });

    test('trackTranslateX uses timeSliderState.value when sliding', () => {
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef, duration: 100 }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      // Start dragging
      act(() => result.current.onMouseDown({ preventDefault: jest.fn(), clientX: 250 }));
      expect(result.current.timeSliderSliding).toBe(true);

      // The trackTranslateX should use the slider value
      expect(result.current.trackTranslateX).toBeDefined();
    });
  });

  describe('onSliderMouseOver', () => {
    test('sets rect and calls handleTimelens', () => {
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef }),
        { wrapper },
      );
      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 10, width: 400 });
      result.current.sliderRef.current = div;

      const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
      act(() => result.current.onSliderMouseOver(mockEvent));
      expect(timelensRef.current.handleTimelens).toHaveBeenCalledWith(mockEvent);
    });

    test('does nothing if sliderRef is null', () => {
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef }),
        { wrapper },
      );
      result.current.sliderRef.current = null;

      const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
      expect(() => act(() => result.current.onSliderMouseOver(mockEvent))).not.toThrow();
    });
  });

  describe('onClick', () => {
    test('calls onChange and onSeeking(false)', () => {
      const onChange = jest.fn();
      const onSeeking = jest.fn();
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, onChange, onSeeking, timelensRef }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      const mockEvent = {
        preventDefault: jest.fn(),
        currentTarget: div,
        clientX: 250,
      };
      jest.spyOn(mockEvent.currentTarget, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });

      act(() => result.current.onClick(mockEvent));
      expect(onChange).toHaveBeenCalled();
      expect(onSeeking).toHaveBeenCalledWith(false);
      expect(timelensRef.current.handleTimelens).toHaveBeenCalled();
    });
  });

  describe('onMouseDown', () => {
    test('sets timeSliderSliding and dispatches timeSliding', () => {
      const timelensRef = makeTimelensRef();
      const onSeeking = jest.fn();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef, onSeeking }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
      act(() => result.current.onMouseDown(mockEvent));
      expect(result.current.timeSliderSliding).toBe(true);
      expect(onSeeking).toHaveBeenCalledWith(true);
      expect(timelensRef.current.handleTimelens).toHaveBeenCalled();
    });

    test('does nothing if sliderRef is null', () => {
      const onSeeking = jest.fn();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, onSeeking }),
        { wrapper },
      );
      result.current.sliderRef.current = null;

      const mockEvent = { preventDefault: jest.fn(), clientX: 100 };
      act(() => result.current.onMouseDown(mockEvent));
      expect(result.current.timeSliderSliding).toBe(false);
      expect(onSeeking).not.toHaveBeenCalled();
    });
  });

  describe('full drag flow: mouseDown → mouseMove → mouseUp', () => {
    test('complete drag sequence calls onChange', () => {
      const onChange = jest.fn();
      const onSeeking = jest.fn();
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, onChange, onSeeking, timelensRef, duration: 100 }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      // mouseDown
      act(() => result.current.onMouseDown({ preventDefault: jest.fn(), clientX: 100 }));
      expect(result.current.timeSliderSliding).toBe(true);

      // mouseMove via document
      act(() => {
        document.dispatchEvent(new MouseEvent('mousemove', { clientX: 250 }));
      });

      // mouseUp via document
      act(() => {
        document.dispatchEvent(new MouseEvent('mouseup', { clientX: 250 }));
      });

      expect(onChange).toHaveBeenCalled();
      expect(onSeeking).toHaveBeenCalledWith(false);
    });

    test('document listeners are cleaned up when sliding stops', () => {
      const removeSpy = jest.spyOn(document, 'removeEventListener');
      const timelensRef = makeTimelensRef();
      const { result } = renderHook(
        () => useTimeSlider({ ...defaults, timelensRef }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 500 });
      result.current.sliderRef.current = div;

      // Start dragging
      act(() => result.current.onMouseDown({ preventDefault: jest.fn(), clientX: 100 }));

      // Stop dragging via mouseup
      act(() => {
        document.dispatchEvent(new MouseEvent('mouseup', { clientX: 200 }));
      });

      expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
      expect(removeSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));

      removeSpy.mockRestore();
    });
  });
});
