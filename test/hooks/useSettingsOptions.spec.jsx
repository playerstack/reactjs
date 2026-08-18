import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useSettingsOptions from '../../src/hooks/useSettingsOptions';
import { Provider } from '../../src/context/index';

const wrapper = ({ children }) => <Provider language="en">{children}</Provider>;

const qualityOptions = [
  { label: '1080p', value: '1080', isFullHD: true },
  { label: '720p', value: '720', isFullHD: false },
];

describe('useSettingsOptions', () => {
  const defaults = {
    live: false,
    fullHDQualityBreak: 1080,
    qualities: qualityOptions,
    playbackRate: 1,
    changeSettings: jest.fn(),
    fullscreen: false,
  };

  beforeEach(() => jest.clearAllMocks());

  test('returns expected properties', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    expect(result.current.dropdownRef).toBeDefined();
    expect(result.current.settings).toBeDefined();
    expect(result.current.values).toBeDefined();
    expect(result.current.settingsOptions).toBeDefined();
    expect(typeof result.current.handleButtonClick).toBe('function');
    expect(typeof result.current.handleMenuClick).toBe('function');
    expect(typeof result.current.handleMenuItemClick).toBe('function');
    expect(typeof result.current.handleGoBack).toBe('function');
  });

  test('initial settings has generalMenu, speed, quality as false', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    expect(result.current.settings.generalMenu).toBe(false);
    expect(result.current.settings.speed).toBe(false);
    expect(result.current.settings.quality).toBe(false);
  });

  test('settingsOptions includes speed when not live', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const speedOption = result.current.settingsOptions.find((o) => o.value === 'speed');
    expect(speedOption).toBeDefined();
  });

  test('settingsOptions excludes speed when live', () => {
    const { result } = renderHook(() => useSettingsOptions({ ...defaults, live: true }), { wrapper });
    const speedOption = result.current.settingsOptions.find((o) => o.value === 'speed');
    expect(speedOption).toBeUndefined();
  });

  test('settingsOptions includes quality when qualityOptions provided', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const qualOption = result.current.settingsOptions.find((o) => o.value === 'quality');
    expect(qualOption).toBeDefined();
  });

  test('handleButtonClick toggles generalMenu', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const mockEvent = { stopPropagation: jest.fn() };
    act(() => result.current.handleButtonClick(mockEvent));
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  test('handleMenuItemClick opens submenu for given item', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    act(() => result.current.handleMenuItemClick('speed'));
    expect(result.current.settings.speed).toBe(true);
    expect(result.current.settings.generalMenu).toBe(false);
  });

  test('handleGoBack returns a function that resets to general menu', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    act(() => result.current.handleMenuItemClick('speed'));
    const goBack = result.current.handleGoBack('speed');
    act(() => goBack());
    expect(result.current.settings.generalMenu).toBe(true);
    expect(result.current.settings.speed).toBe(false);
  });

  test('handleMenuClick returns a function that updates values', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const handler = result.current.handleMenuClick('speed');
    act(() => handler('1.5'));
    expect(result.current.values.speed.value).toBe('1.5');
  });

  test('handleMenuClick marks quality as fullHD when above threshold', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const handler = result.current.handleMenuClick('quality');
    act(() => handler('1080'));
    expect(result.current.values.quality.isFullHD).toBe(true);
  });

  test('values.speed label is Normal for playbackRate 1', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    expect(result.current.values.speed.label).toBe('Normal');
  });

  test('iconProps adjusts for fullscreen', () => {
    const { result } = renderHook(
      () => useSettingsOptions({ ...defaults, fullscreen: true }),
      { wrapper },
    );
    expect(result.current.iconProps.width).toBe(54);
  });

  test('changeSettings is called when values change via user interaction', () => {
    const changeSettings = jest.fn();
    const { result } = renderHook(() => useSettingsOptions({ ...defaults, changeSettings }), { wrapper });
    // Simulate user changing speed
    const handler = result.current.handleMenuClick('speed');
    act(() => handler('1.5'));
    expect(changeSettings).toHaveBeenCalled();
  });
});

describe('useSettingsOptions — auto quality', () => {
  const defaults = {
    live: false,
    fullHDQualityBreak: 1080,
    qualities: [
      { label: '1080p', value: '1080', isFullHD: true },
      { label: '720p', value: '720', isFullHD: false },
    ],
    playbackRate: 1,
    playbackQuality: null,
    changeSettings: jest.fn(),
    fullscreen: false,
  };

  const wrapper = ({ children }) => <Provider language="en">{children}</Provider>;

  beforeEach(() => jest.clearAllMocks());

  test('initial quality value is "0" (auto)', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    expect(result.current.values.quality.value).toBe('0');
  });

  test('syncs auto label when playbackQuality changes to non-zero', () => {
    const { result, rerender } = renderHook((props) => useSettingsOptions(props), {
      wrapper,
      initialProps: defaults,
    });

    // Simulate auto-selection resolving to 720
    rerender({ ...defaults, playbackQuality: 720 });

    expect(result.current.values.quality.value).toBe('0');
    expect(result.current.values.quality.label).toContain('720p');
    expect(result.current.values.quality.label).toContain('Auto');
  });

  test('does not sync when playbackQuality is 0', () => {
    const { result, rerender } = renderHook((props) => useSettingsOptions(props), {
      wrapper,
      initialProps: { ...defaults, playbackQuality: 720 },
    });

    const labelBefore = result.current.values.quality.label;
    rerender({ ...defaults, playbackQuality: 0 });
    // Should not change to "Auto (0p)"
    expect(result.current.values.quality.label).toBe(labelBefore);
  });

  test('handleMenuClick with "0" sets auto label with current quality', () => {
    const { result, rerender } = renderHook((props) => useSettingsOptions(props), {
      wrapper,
      initialProps: { ...defaults, playbackQuality: 720 },
    });

    // Select manual quality first
    const handler = result.current.handleMenuClick('quality');
    act(() => handler('1080'));
    expect(result.current.values.quality.value).toBe('1080');

    // Now re-render with playbackQuality still at 1080 (since we selected it)
    rerender({ ...defaults, playbackQuality: 1080 });

    // Switch back to auto
    const handler2 = result.current.handleMenuClick('quality');
    act(() => handler2('0'));

    expect(result.current.values.quality.value).toBe('0');
    expect(result.current.values.quality.label).toContain('1080p');
  });

  test('handleMenuClick with "0" and no current quality shows plain Auto', () => {
    const { result } = renderHook(() => useSettingsOptions({ ...defaults, playbackQuality: null }), { wrapper });

    const handler = result.current.handleMenuClick('quality');
    act(() => handler('0'));

    expect(result.current.values.quality.value).toBe('0');
    expect(result.current.values.quality.label).toBe('Auto');
  });

  test('handleMenuClick with manual quality sets isAutoQuality false', () => {
    const { result, rerender } = renderHook((props) => useSettingsOptions(props), {
      wrapper,
      initialProps: { ...defaults, playbackQuality: 720 },
    });

    const handler = result.current.handleMenuClick('quality');
    act(() => handler('1080'));

    // Changing playbackQuality externally should NOT override manual selection
    rerender({ ...defaults, playbackQuality: 720 });
    expect(result.current.values.quality.value).toBe('1080');
    expect(result.current.values.quality.label).toBe('1080p');
  });

  test('does not sync when qualities array is empty', () => {
    const { result, rerender } = renderHook((props) => useSettingsOptions(props), {
      wrapper,
      initialProps: { ...defaults, qualities: [], playbackQuality: null },
    });

    rerender({ ...defaults, qualities: [], playbackQuality: 720 });
    // Should not update label since no qualities available
    expect(result.current.values.quality.value).toBe('0');
  });
});

describe('useSettingsOptions — captions and click-outside', () => {
  const defaults = {
    live: false,
    fullHDQualityBreak: 1080,
    qualities: qualityOptions,
    playbackRate: 1,
    changeSettings: jest.fn(),
    fullscreen: false,
    captions: [
      { language: 'en', label: 'English' },
      { language: 'es', label: 'Spanish' },
    ],
    activeCaption: null,
    onCaptionChange: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('settingsOptions includes captions when captions provided', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const captionOption = result.current.settingsOptions.find((o) => o.value === 'captions');
    expect(captionOption).toBeDefined();
  });

  test('handleMenuClick with captions value calls onCaptionChange', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    act(() => {
      const captionHandler = result.current.handleMenuClick('captions');
      captionHandler('en');
    });
    expect(defaults.onCaptionChange).toHaveBeenCalledWith('en');
  });

  test('handleMenuClick with captions "off" calls onCaptionChange(null)', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    act(() => {
      const captionHandler = result.current.handleMenuClick('captions');
      captionHandler('off');
    });
    expect(defaults.onCaptionChange).toHaveBeenCalledWith(null);
  });

  test('handleMenuClick with captions updates values label', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    act(() => {
      const captionHandler = result.current.handleMenuClick('captions');
      captionHandler('es');
    });
    expect(result.current.values.captions.label).toBe('Spanish');
    expect(result.current.values.captions.value).toBe('es');
  });

  test('handleButtonClick toggles generalMenu and stops propagation', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    const mockEvent = { stopPropagation: jest.fn() };
    act(() => {
      result.current.handleButtonClick(mockEvent);
    });
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(result.current.settings.generalMenu).toBe(true);
  });

  test('handleButtonClick closes menu when submenu was open', () => {
    const { result } = renderHook(() => useSettingsOptions(defaults), { wrapper });
    // Open submenu first
    act(() => {
      result.current.handleMenuItemClick('speed');
    });
    expect(result.current.settings.speed).toBe(true);
    // Click button should close
    const mockEvent = { stopPropagation: jest.fn() };
    act(() => {
      result.current.handleButtonClick(mockEvent);
    });
    expect(result.current.settings.speed).toBe(false);
  });

  test('captionOptions is empty when no captions prop', () => {
    const { result } = renderHook(
      () => useSettingsOptions({ ...defaults, captions: undefined }),
      { wrapper },
    );
    const captionOption = result.current.settingsOptions.find((o) => o.value === 'captions');
    expect(captionOption).toBeUndefined();
  });
});
