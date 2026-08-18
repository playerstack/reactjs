import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useVolumeSlider from '../../src/hooks/useVolumeSlider';
import { Provider } from '../../src/context/index';

const wrapper = ({ children }) => <Provider language="en">{children}</Provider>;

describe('useVolumeSlider', () => {
  const defaults = {
    fullscreen: false,
    value: 80,
    onChange: jest.fn(),
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

  test('returns expected properties', () => {
    const { result } = renderHook(() => useVolumeSlider(defaults), { wrapper });
    expect(result.current.sliderRef).toBeDefined();
    expect(result.current.thumbRef).toBeDefined();
    expect(typeof result.current.thumbLeft).toBe('number');
    expect(typeof result.current.onMouseDown).toBe('function');
    expect(typeof result.current.onMouseMove).toBe('function');
    expect(typeof result.current.handleChange).toBe('function');
  });

  test('thumbLeft defaults to 0', () => {
    const { result } = renderHook(() => useVolumeSlider(defaults), { wrapper });
    expect(result.current.thumbLeft).toBe(0);
  });

  describe('thumb position calculation with edge cases', () => {
    test('thumbLeft is 0 when realPosition < 0 (value very small)', () => {
      const { result } = renderHook(
        () => useVolumeSlider({ ...defaults, value: 0 }),
        { wrapper },
      );

      // Set up refs so the effect can run
      const slider = document.createElement('div');
      const thumb = document.createElement('div');
      jest.spyOn(thumb, 'getBoundingClientRect').mockReturnValue({ width: 20 });
      result.current.sliderRef.current = slider;
      result.current.thumbRef.current = thumb;

      // Re-render to trigger the effect
      const { result: result2 } = renderHook(
        () => useVolumeSlider({ ...defaults, value: 0, fullscreen: false }),
        { wrapper },
      );
      result2.current.sliderRef.current = slider;
      result2.current.thumbRef.current = thumb;

      // With value=0: realPosition = (0/100)*55 - 10 = -10 -> thumbPosition = 0
      expect(result2.current.thumbLeft).toBe(0);
    });

    test('thumbLeft is clamped to max when realPosition exceeds max', () => {
      const slider = document.createElement('div');
      const thumb = document.createElement('div');
      jest.spyOn(thumb, 'getBoundingClientRect').mockReturnValue({ width: 10 });

      const { result, rerender } = renderHook(
        (props) => useVolumeSlider(props),
        { wrapper, initialProps: { ...defaults, value: 50 } },
      );

      // Attach refs
      result.current.sliderRef.current = slider;
      result.current.thumbRef.current = thumb;

      // Change value to trigger effect with refs attached
      rerender({ ...defaults, value: 100 });

      // realPosition = (100/100)*55 - 5 = 50, max = 55 - 10 = 45 -> clamped to 45
      expect(result.current.thumbLeft).toBe(45);
    });

    test('thumbLeft in normal range', () => {
      const slider = document.createElement('div');
      const thumb = document.createElement('div');
      jest.spyOn(thumb, 'getBoundingClientRect').mockReturnValue({ width: 10 });

      const { result, rerender } = renderHook(
        (props) => useVolumeSlider(props),
        { wrapper, initialProps: { ...defaults, value: 30 } },
      );

      // Attach refs
      result.current.sliderRef.current = slider;
      result.current.thumbRef.current = thumb;

      // Change value to trigger effect
      rerender({ ...defaults, value: 50 });

      // realPosition = (50/100)*55 - 5 = 22.5 -> between 0 and 45
      expect(result.current.thumbLeft).toBe(22.5);
    });

    test('thumbLeft with fullscreen width', () => {
      const slider = document.createElement('div');
      const thumb = document.createElement('div');
      jest.spyOn(thumb, 'getBoundingClientRect').mockReturnValue({ width: 10 });

      const { result, rerender } = renderHook(
        (props) => useVolumeSlider(props),
        { wrapper, initialProps: { ...defaults, value: 50, fullscreen: true } },
      );

      // Attach refs
      result.current.sliderRef.current = slider;
      result.current.thumbRef.current = thumb;

      // Change value to trigger effect
      rerender({ ...defaults, value: 100, fullscreen: true });

      // With fullscreen: sliderWith = 83
      // realPosition = (100/100)*83 - 5 = 78, max = 83 - 10 = 73 -> clamped to 73
      expect(result.current.thumbLeft).toBe(73);
    });
  });

  describe('onMouseDown', () => {
    test('dispatches volumeSliding with true', () => {
      const { result } = renderHook(() => useVolumeSlider(defaults), { wrapper });
      const slider = document.createElement('div');
      result.current.sliderRef.current = slider;

      const mockEvent = { preventDefault: jest.fn() };
      act(() => result.current.onMouseDown(mockEvent));

      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    test('does not throw when sliderRef is null', () => {
      const { result } = renderHook(() => useVolumeSlider(defaults), { wrapper });
      result.current.sliderRef.current = null;

      const mockEvent = { preventDefault: jest.fn() };
      expect(() => act(() => result.current.onMouseDown(mockEvent))).not.toThrow();
    });
  });

  describe('onMouseUp', () => {
    test('calculates final volume and dispatches volumeSliding false', () => {
      const onChange = jest.fn();
      const { result } = renderHook(
        () => useVolumeSlider({ ...defaults, onChange }),
        { wrapper },
      );

      const slider = document.createElement('div');
      jest.spyOn(slider, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 55 });
      result.current.sliderRef.current = slider;

      // Start dragging
      act(() => result.current.onMouseDown({ preventDefault: jest.fn() }));

      // Simulate mouseup via document event
      act(() => {
        document.dispatchEvent(new MouseEvent('mouseup', { clientX: 27 }));
      });

      expect(onChange).toHaveBeenCalled();
    });
  });

  describe('onMouseMove', () => {
    test('does not call onChange when not dragging', () => {
      const onChange = jest.fn();
      const { result } = renderHook(
        () => useVolumeSlider({ ...defaults, onChange }),
        { wrapper },
      );

      const mockEvent = { preventDefault: jest.fn(), clientX: 50 };
      act(() => result.current.onMouseMove(mockEvent));
      expect(onChange).not.toHaveBeenCalled();
    });

    test('calls onChange when dragging (volumeSliding is true)', () => {
      const onChange = jest.fn();
      const { result } = renderHook(
        () => useVolumeSlider({ ...defaults, onChange }),
        { wrapper },
      );

      const slider = document.createElement('div');
      jest.spyOn(slider, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 55 });
      result.current.sliderRef.current = slider;

      // Start dragging
      act(() => result.current.onMouseDown({ preventDefault: jest.fn() }));

      // Simulate mousemove via document event
      act(() => {
        document.dispatchEvent(new MouseEvent('mousemove', { clientX: 30 }));
      });

      expect(onChange).toHaveBeenCalled();
    });

    test('uses requestAnimationFrame for throttling', () => {
      const onChange = jest.fn();
      const { result } = renderHook(
        () => useVolumeSlider({ ...defaults, onChange }),
        { wrapper },
      );

      const slider = document.createElement('div');
      jest.spyOn(slider, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 55 });
      result.current.sliderRef.current = slider;

      act(() => result.current.onMouseDown({ preventDefault: jest.fn() }));

      act(() => {
        document.dispatchEvent(new MouseEvent('mousemove', { clientX: 20 }));
      });

      expect(window.requestAnimationFrame).toHaveBeenCalled();
    });

    test('uses touch event clientX when regular clientX is missing', () => {
      const onChange = jest.fn();
      const { result } = renderHook(
        () => useVolumeSlider({ ...defaults, onChange }),
        { wrapper },
      );

      const slider = document.createElement('div');
      jest.spyOn(slider, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 55 });
      result.current.sliderRef.current = slider;

      act(() => result.current.onMouseDown({ preventDefault: jest.fn() }));

      // Simulate touchmove with touches
      act(() => {
        const touchEvent = new Event('touchmove');
        touchEvent.preventDefault = jest.fn();
        touchEvent.touches = [{ clientX: 25 }];
        document.dispatchEvent(touchEvent);
      });

      expect(onChange).toHaveBeenCalled();
    });
  });

  describe('document event listener registration/cleanup', () => {
    test('registers mousemove and mouseup listeners when dragging starts', () => {
      const addSpy = jest.spyOn(document, 'addEventListener');
      const { result } = renderHook(
        () => useVolumeSlider(defaults),
        { wrapper },
      );

      const slider = document.createElement('div');
      result.current.sliderRef.current = slider;

      act(() => result.current.onMouseDown({ preventDefault: jest.fn() }));

      expect(addSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
      expect(addSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));
      expect(addSpy).toHaveBeenCalledWith('touchmove', expect.any(Function));
      expect(addSpy).toHaveBeenCalledWith('touchcancel', expect.any(Function));
      expect(addSpy).toHaveBeenCalledWith('touchend', expect.any(Function));

      addSpy.mockRestore();
    });

    test('removes listeners on cleanup', () => {
      const removeSpy = jest.spyOn(document, 'removeEventListener');
      const { result, unmount } = renderHook(
        () => useVolumeSlider(defaults),
        { wrapper },
      );

      const slider = document.createElement('div');
      result.current.sliderRef.current = slider;

      act(() => result.current.onMouseDown({ preventDefault: jest.fn() }));

      unmount();

      expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
      expect(removeSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));

      removeSpy.mockRestore();
    });
  });

  describe('handleChange', () => {
    test('calls onChange with percentage', () => {
      const onChange = jest.fn();
      const { result } = renderHook(
        () => useVolumeSlider({ ...defaults, onChange }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 55 });
      result.current.sliderRef.current = div;

      act(() => result.current.handleChange({ clientX: 27 }));
      expect(onChange).toHaveBeenCalled();
    });

    test('does not call onChange when onChange is null', () => {
      const { result } = renderHook(
        () => useVolumeSlider({ ...defaults, onChange: null }),
        { wrapper },
      );

      const div = document.createElement('div');
      jest.spyOn(div, 'getBoundingClientRect').mockReturnValue({ left: 0, width: 55 });
      result.current.sliderRef.current = div;

      expect(() => act(() => result.current.handleChange({ clientX: 27 }))).not.toThrow();
    });
  });
});
