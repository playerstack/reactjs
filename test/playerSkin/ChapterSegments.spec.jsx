import React from 'react';
import { render } from '@testing-library/react';
import ChapterSegments from '@PlayerSkin/DesktopPlayerSkin/components/TimeSlider/components/ChapterSegments';

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
    bufferedRanges: [],
    fullscreen: false,
  };

  // The filled bar is always the LAST child of a segment; any buffered bars are
  // rendered before it (multi-range, YouTube-style).
  const filledBarOf = (segment) => segment.children[segment.children.length - 1];

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
    expect(segmentsContainer.children[0].style.width).toBe('30%');
    expect(segmentsContainer.children[1].style.width).toBe('50%');
    expect(segmentsContainer.children[2].style.width).toBe('20%');
  });

  // ─── Fill calculation ─────────────────────────────────────────────────────────

  test('first segment partially filled when currentTime within it', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={15} />);
    const firstSegment = container.firstChild.children[0];
    // fill = (15 - 0) / (30 - 0) * 100 = 50%
    expect(filledBarOf(firstSegment).style.width).toBe('50%');
  });

  test('first segment 100% filled when currentTime past its endTime', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={50} />);
    const firstSegment = container.firstChild.children[0];
    expect(filledBarOf(firstSegment).style.width).toBe('100%');
  });

  test('second segment partially filled at currentTime 55', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={55} />);
    const secondSegment = container.firstChild.children[1];
    // fill = (55 - 30) / (80 - 30) * 100 = 50%
    expect(filledBarOf(secondSegment).style.width).toBe('50%');
  });

  test('all segments 100% filled at end of duration', () => {
    const { container } = render(<ChapterSegments {...defaultProps} currentTime={100} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      expect(filledBarOf(segmentsContainer.children[i]).style.width).toBe('100%');
    }
  });

  // ─── Multi-range buffered calculation ───────────────────────────────────────────

  test('buffered ranges are clipped per segment', () => {
    // One buffered range covering 0..50s.
    const { container } = render(
      <ChapterSegments {...defaultProps} bufferedRanges={[{ start: 0, end: 50 }]} />,
    );

    // Segment 0 (0-30): fully buffered → one bar at left 0%, width 100%.
    const firstSegment = container.firstChild.children[0];
    const buffered1 = firstSegment.children[0];
    expect(buffered1.style.left).toBe('0%');
    expect(buffered1.style.width).toBe('100%');

    // Segment 1 (30-80): buffered 30..50 → (50-30)/(80-30)*100 = 40%.
    const secondSegment = container.firstChild.children[1];
    const buffered2 = secondSegment.children[0];
    expect(buffered2.style.left).toBe('0%');
    expect(buffered2.style.width).toBe('40%');

    // Segment 2 (80-100): no overlap → only the filled bar, no buffered bar.
    const thirdSegment = container.firstChild.children[2];
    expect(thirdSegment.children).toHaveLength(1);
  });

  test('no buffered bars when bufferedRanges is empty', () => {
    const { container } = render(<ChapterSegments {...defaultProps} bufferedRanges={[]} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      // Only the filled bar remains.
      expect(segmentsContainer.children[i].children).toHaveLength(1);
    }
  });

  // ─── hoveredIndex ─────────────────────────────────────────────────────────────

  test('no segment scaled when hoveredIndex not provided', () => {
    const { container } = render(<ChapterSegments {...defaultProps} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
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
