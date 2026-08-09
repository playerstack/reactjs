import React from 'react';
import { render } from '@testing-library/react';
import ChapterSegments from '../../src/PlayerSkin/DesktopPlayerSkin/components/TimeSlider/components/ChapterSegments';

describe('ChapterSegments', () => {
  const baseSegments = [
    { title: 'Intro', startTime: 0, endTime: 30, startPercent: 0, endPercent: 30 },
    { title: 'Main', startTime: 30, endTime: 80, startPercent: 30, endPercent: 80 },
    { title: 'Outro', startTime: 80, endTime: 100, startPercent: 80, endPercent: 100 },
  ];

  const defaultProps = {
    segments: baseSegments,
    currentTime: 0,
    duration: 100,
    bufferedScaleX: 0,
    fullscreen: false,
  };

  // ─── Rendering ────────────────────────────────────────────────────────────────

  test('renders null when segments is empty', () => {
    const { container } = render(<ChapterSegments {...defaultProps} segments={[]} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders null when duration is 0', () => {
    const { container } = render(<ChapterSegments {...defaultProps} duration={0} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders correct number of segments', () => {
    const { container } = render(<ChapterSegments {...defaultProps} />);
    // Container > segments
    const segmentsContainer = container.firstChild;
    expect(segmentsContainer.children).toHaveLength(3);
  });

  test('each segment has title attribute', () => {
    const { container } = render(<ChapterSegments {...defaultProps} />);
    const segmentsContainer = container.firstChild;
    expect(segmentsContainer.children[0]).toHaveAttribute('title', 'Intro');
    expect(segmentsContainer.children[1]).toHaveAttribute('title', 'Main');
    expect(segmentsContainer.children[2]).toHaveAttribute('title', 'Outro');
  });

  test('segment widths are proportional to duration', () => {
    const { container } = render(<ChapterSegments {...defaultProps} />);
    const segmentsContainer = container.firstChild;
    // Intro: (30-0)/100 = 30%
    expect(segmentsContainer.children[0].style.width).toBe('30%');
    // Main: (80-30)/100 = 50%
    expect(segmentsContainer.children[1].style.width).toBe('50%');
    // Outro: (100-80)/100 = 20%
    expect(segmentsContainer.children[2].style.width).toBe('20%');
  });

  // ─── Fill calculation ─────────────────────────────────────────────────────────

  test('no segments filled when currentTime is 0', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={0} />);
    const segmentsContainer = container.firstChild;
    // Each segment has 2 children: buffered + filled
    const filledBars = Array.from(segmentsContainer.querySelectorAll('[style]')).filter(
      (el) => el.style.width && el.parentElement !== segmentsContainer,
    );
    const nonZeroFilled = filledBars.filter((el) => el.style.width !== '0%');
    // Only segment 0 might have 0% fill at time 0
    expect(nonZeroFilled.length).toBe(0);
  });

  test('first segment partially filled when currentTime within it', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={15} />);
    const firstSegment = container.firstChild.children[0];
    // fill = (15 - 0) / (30 - 0) * 100 = 50%
    const filledBar = firstSegment.children[1]; // second child is filled
    expect(filledBar.style.width).toBe('50%');
  });

  test('first segment 100% filled when currentTime past its endTime', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={50} />);
    const firstSegment = container.firstChild.children[0];
    const filledBar = firstSegment.children[1];
    expect(filledBar.style.width).toBe('100%');
  });

  test('second segment partially filled at currentTime 55', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={55} />);
    const secondSegment = container.firstChild.children[1];
    // fill = (55 - 30) / (80 - 30) * 100 = 50%
    const filledBar = secondSegment.children[1];
    expect(filledBar.style.width).toBe('50%');
  });

  test('all segments 100% filled at end of duration', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={100} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      const filledBar = segmentsContainer.children[i].children[1];
      expect(filledBar.style.width).toBe('100%');
    }
  });

  // ─── Buffered calculation ─────────────────────────────────────────────────────

  test('buffered bar width calculated correctly', () => {
    // bufferedScaleX = 0.5 means buffered up to 50s
    const { container } = render(<ChapterSegments {...defaultProps} bufferedScaleX={0.5} />);
    const firstSegment = container.firstChild.children[0];
    // bufferedTime = 0.5 * 100 = 50; first segment ends at 30, so 100%
    const bufferedBar = firstSegment.children[0];
    expect(bufferedBar.style.width).toBe('100%');

    const secondSegment = container.firstChild.children[1];
    // bufferedTime 50, segment 30-80: (50-30)/(80-30)*100 = 40%
    const bufferedBar2 = secondSegment.children[0];
    expect(bufferedBar2.style.width).toBe('40%');

    const thirdSegment = container.firstChild.children[2];
    // bufferedTime 50 < startTime 80: 0%
    const bufferedBar3 = thirdSegment.children[0];
    expect(bufferedBar3.style.width).toBe('0%');
  });

  test('no buffered when bufferedScaleX is 0', () => {
    const { container } = render(<ChapterSegments {...defaultProps} bufferedScaleX={0} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      const bufferedBar = segmentsContainer.children[i].children[0];
      expect(bufferedBar.style.width).toBe('0%');
    }
  });

  // ─── hoveredIndex ─────────────────────────────────────────────────────────────

  test('no segment scaled when hoveredIndex not provided', () => {
    const { container } = render(<ChapterSegments {...defaultProps} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      // No isHovered prop means no scaleY transform in class
      expect(segmentsContainer.children[i]).not.toHaveStyle('transform: scaleY(2)');
    }
  });

  test('no segment scaled when hoveredIndex is -1', () => {
    const { container } = render(<ChapterSegments {...defaultProps} hoveredIndex={-1} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      expect(segmentsContainer.children[i]).not.toHaveStyle('transform: scaleY(2)');
    }
  });

  // ─── Fullscreen ───────────────────────────────────────────────────────────────

  test('renders without error in fullscreen mode', () => {
    const { container } = render(<ChapterSegments {...defaultProps} fullscreen={true} />);
    expect(container.firstChild).toBeTruthy();
    expect(container.firstChild.children).toHaveLength(3);
  });
});
