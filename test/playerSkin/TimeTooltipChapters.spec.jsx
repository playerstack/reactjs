import React from 'react';
import { render } from '@testing-library/react';
import TimeTooltip from '@PlayerSkin/DesktopPlayerSkin/components/TimeSlider/components/TimeTooltip';

describe('TimeTooltip — chapter title integration', () => {
  const makeSliderRef = (width = 400) => ({
    current: { offsetWidth: width },
  });

  const defaultProps = {
    sliderRef: makeSliderRef(),
    duration: 100,
    tooltip: 50,
    showTooltip: true,
    showTooltipOnly: false,
    fullscreen: false,
  };

  test('renders formatted time', () => {
    const { container } = render(<TimeTooltip {...defaultProps} tooltip={90} />);
    expect(container.textContent).toContain('01:30');
  });

  test('does not render chapter title when not provided', () => {
    const { container } = render(<TimeTooltip {...defaultProps} />);
    // Only time text, no extra chapter label
    expect(container.textContent).toBe('00:50');
  });

  test('renders chapter title when provided', () => {
    const { container } = render(<TimeTooltip {...defaultProps} chapterTitle="The Forest" />);
    expect(container.textContent).toContain('The Forest');
    expect(container.textContent).toContain('00:50');
  });

  test('chapter title rendered before time', () => {
    const { container } = render(<TimeTooltip {...defaultProps} chapterTitle="Intro" />);
    const text = container.textContent;
    const titleIndex = text.indexOf('Intro');
    const timeIndex = text.indexOf('00:50');
    expect(titleIndex).toBeLessThan(timeIndex);
  });

  test('does not render chapter title when chapterTitle is empty string', () => {
    const { container } = render(<TimeTooltip {...defaultProps} chapterTitle="" />);
    expect(container.textContent).toBe('00:50');
  });

  test('does not render chapter title when chapterTitle is undefined', () => {
    const { container } = render(<TimeTooltip {...defaultProps} chapterTitle={undefined} />);
    expect(container.textContent).toBe('00:50');
  });

  test('tooltip is hidden when showTooltip is false', () => {
    const { container } = render(<TimeTooltip {...defaultProps} showTooltip={false} />);
    // StyledTooltip has display: none by default, showTooltip=false keeps it hidden
    const tooltip = container.firstChild;
    expect(tooltip.style.display).not.toBe('block');
  });

  test('tooltip is visible when showTooltip is true', () => {
    const { container } = render(<TimeTooltip {...defaultProps} showTooltip={true} />);
    const tooltip = container.firstChild;
    expect(tooltip.style.display).toBe('block');
  });

  test('renders correctly in fullscreen mode', () => {
    const { container } = render(<TimeTooltip {...defaultProps} fullscreen={true} chapterTitle="Main" />);
    expect(container.textContent).toContain('Main');
  });

  test('renders with showTooltipOnly style (no sprite)', () => {
    const { container } = render(<TimeTooltip {...defaultProps} showTooltipOnly={true} chapterTitle="Act 1" />);
    expect(container.textContent).toContain('Act 1');
    expect(container.textContent).toContain('00:50');
  });
});
