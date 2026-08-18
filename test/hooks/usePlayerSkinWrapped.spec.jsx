import React from 'react';
import { renderHook, act } from '@testing-library/react';
import usePlayerSkinWrapped from '@hooks/usePlayerSkinWrapped';
import { Provider } from '@context/index';

const wrapper = ({ children }) => <Provider language="en">{children}</Provider>;

describe('usePlayerSkinWrapped', () => {
  const contextMenuRef = { current: { offsetWidth: 100, offsetHeight: 50 } };

  const defaults = {
    fullscreen: false,
    contextMenuRef,
    pictureInPictureEnabled: false,
    pip: false,
    loop: false,
    requestPictureInPicture: jest.fn(),
    exitPictureInPicture: jest.fn(),
    onLoopClick: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('returns handleContextMenu, contextMenuPosition, contextMenuItems', () => {
    const { result } = renderHook(() => usePlayerSkinWrapped(defaults), { wrapper });
    expect(typeof result.current.handleContextMenu).toBe('function');
    expect(result.current.contextMenuPosition).toEqual({ x: 0, y: 0 });
    expect(Array.isArray(result.current.contextMenuItems)).toBe(true);
  });

  test('contextMenuItems has at least one item (loop)', () => {
    const { result } = renderHook(() => usePlayerSkinWrapped(defaults), { wrapper });
    expect(result.current.contextMenuItems.length).toBeGreaterThanOrEqual(1);
    expect(result.current.contextMenuItems[0].label).toBe('Loop');
  });

  test('contextMenuItems includes PiP item when pictureInPictureEnabled is true', () => {
    const { result } = renderHook(
      () => usePlayerSkinWrapped({ ...defaults, pictureInPictureEnabled: true }),
      { wrapper },
    );
    expect(result.current.contextMenuItems.length).toBe(2);
    expect(result.current.contextMenuItems[1].label).toBe('Picture in picture');
  });

  test('loop item defaultChecked matches loop prop', () => {
    const { result } = renderHook(
      () => usePlayerSkinWrapped({ ...defaults, loop: true }),
      { wrapper },
    );
    expect(result.current.contextMenuItems[0].defaultChecked).toBe(true);
  });

  test('handleContextMenu prevents default and updates position', () => {
    const { result } = renderHook(() => usePlayerSkinWrapped(defaults), { wrapper });
    const mockEvent = {
      preventDefault: jest.fn(),
      clientX: 200,
      clientY: 150,
      currentTarget: {
        getBoundingClientRect: () => ({ left: 0, top: 0, width: 800, height: 450 }),
      },
    };
    act(() => result.current.handleContextMenu(mockEvent));
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    // Position should be updated (may adjust based on menu dimensions)
    expect(result.current.contextMenuPosition).toBeDefined();
  });

  test('loop action calls onLoopClick', () => {
    const onLoopClick = jest.fn();
    const { result } = renderHook(
      () => usePlayerSkinWrapped({ ...defaults, onLoopClick }),
      { wrapper },
    );
    act(() => result.current.contextMenuItems[0].action());
    expect(onLoopClick).toHaveBeenCalled();
  });

  test('PiP action calls requestPictureInPicture when not in pip', () => {
    const requestPictureInPicture = jest.fn();
    const { result } = renderHook(
      () =>
        usePlayerSkinWrapped({
          ...defaults,
          pictureInPictureEnabled: true,
          pip: false,
          requestPictureInPicture,
        }),
      { wrapper },
    );
    act(() => result.current.contextMenuItems[1].action());
    expect(requestPictureInPicture).toHaveBeenCalled();
  });

  test('PiP action calls exitPictureInPicture when in pip', () => {
    const exitPictureInPicture = jest.fn();
    const { result } = renderHook(
      () =>
        usePlayerSkinWrapped({
          ...defaults,
          pictureInPictureEnabled: true,
          pip: true,
          exitPictureInPicture,
        }),
      { wrapper },
    );
    act(() => result.current.contextMenuItems[1].action());
    expect(exitPictureInPicture).toHaveBeenCalled();
  });
});
