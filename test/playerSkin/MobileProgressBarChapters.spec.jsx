import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';
import MobileProgressBar from '../../src/PlayerSkin/MobilePlayerSkin/components/MobileBottomBar/MobileProgressBar';

const wrap = (ui) => render(<AppContextProvider language="en">{ui}</AppContextProvider>);

describe('MobileProgressBar — chapters integration', () => {
  const chapters = [
    { title: 'Intro', startTime: 0, endTime: 30 },
    { title: 'Main', startTime: 30, endTime: 80 },
    { title: 'Outro', startTime: 80, endTime: 100 },
  ];

  const defaultProps = {
    currentTime: 0,
    duration: 100,
    buffered: 0,
    onChange: jest.fn(),
    onSeeking: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders chapter segments when chapters provided', () => {
    const { container } = wrap(<MobileProgressBar {...defaultProps} chapters={chapters} />);
    // Should have MobileChapterSegments rendered (container with 3 segment divs)
    const slider = screen.getByRole('slider');
    // Standard track/buffered/filled should NOT be present
    // Instead we have chapter segments container
    const segmentChildren = slider.querySelectorAll('[style*="width"]');
    // 3 segments + their children (buffered+filled each) + handle
    expect(segmentChildren.length).toBeGreaterThan(3);
  });

  test('renders standard progress bar when chapters not provided', () => {
    const { container } = wrap(<MobileProgressBar {...defaultProps} />);
    const slider = screen.getByRole('slider');
    // Handle should be at left: 0%
    const handle = slider.querySelector('[style*="left: 0%"]');
    expect(handle).toBeTruthy();
  });

  test('renders standard progress bar when chapters is empty', () => {
    const { container } = wrap(<MobileProgressBar {...defaultProps} chapters={[]} />);
    const slider = screen.getByRole('slider');
    const handle = slider.querySelector('[style*="left: 0%"]');
    expect(handle).toBeTruthy();
  });

  test('handle still rendered with chapters', () => {
    const { container } = wrap(<MobileProgressBar {...defaultProps} chapters={chapters} currentTime={50} />);
    const slider = screen.getByRole('slider');
    // Handle at 50% position
    const handle = slider.querySelector('[style*="left: 50%"]');
    expect(handle).toBeTruthy();
  });

  test('interaction still works with chapters', () => {
    const onChange = jest.fn();
    wrap(<MobileProgressBar {...defaultProps} chapters={chapters} onChange={onChange} />);
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
    // fraction = 0.5, newTime = 50
    expect(onChange).toHaveBeenCalledWith(50);
  });

  test('onSeeking called with chapters present', () => {
    const onSeeking = jest.fn();
    wrap(<MobileProgressBar {...defaultProps} chapters={chapters} onSeeking={onSeeking} />);
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
});
