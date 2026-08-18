import React from 'react';
import { render } from '@testing-library/react';
import MobileChapterSegments from '@PlayerSkin/MobilePlayerSkin/components/MobileBottomBar/MobileChapterSegments';

describe('MobileChapterSegments', () => {
  const baseSegments = [
    { title: 'Intro', startTime: 0, endTime: 30 },
    { title: 'Main', startTime: 30, endTime: 80 },
    { title: 'Outro', startTime: 80, endTime: 100 },
  ];

  const defaultProps = {
    segments: baseSegments,
    currentTime: 0,
    duration: 100,
    buffered: 0,
  };

  test('renders null when segments is empty', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} segments={[]} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders null when duration is 0', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} duration={0} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders correct number of segments', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} />);
    const segmentsContainer = container.firstChild;
    expect(segmentsContainer.children).toHaveLength(3);
  });

  test('segment widths proportional to duration', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} />);
    const segmentsContainer = container.firstChild;
    expect(segmentsContainer.children[0].style.width).toBe('30%');
    expect(segmentsContainer.children[1].style.width).toBe('50%');
    expect(segmentsContainer.children[2].style.width).toBe('20%');
  });

  test('first segment partially filled', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} currentTime={15} />);
    const firstSegment = container.firstChild.children[0];
    // (15-0)/(30-0)*100 = 50%
    const filledBar = firstSegment.children[1];
    expect(filledBar.style.width).toBe('50%');
  });

  test('first segment fully filled when currentTime past it', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} currentTime={40} />);
    const firstSegment = container.firstChild.children[0];
    const filledBar = firstSegment.children[1];
    expect(filledBar.style.width).toBe('100%');
  });

  test('buffered calculation correct', () => {
    // buffered = 0.5 means bufferedTime = 50
    const { container } = render(<MobileChapterSegments {...defaultProps} buffered={0.5} />);
    const firstSegment = container.firstChild.children[0];
    // bufferedTime 50 >= endTime 30: 100%
    expect(firstSegment.children[0].style.width).toBe('100%');

    const secondSegment = container.firstChild.children[1];
    // (50-30)/(80-30)*100 = 40%
    expect(secondSegment.children[0].style.width).toBe('40%');

    const thirdSegment = container.firstChild.children[2];
    // 50 < 80: 0%
    expect(thirdSegment.children[0].style.width).toBe('0%');
  });

  test('all segments fully filled at end', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} currentTime={100} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      expect(segmentsContainer.children[i].children[1].style.width).toBe('100%');
    }
  });

  test('no fill when currentTime is 0', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} currentTime={0} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      expect(segmentsContainer.children[i].children[1].style.width).toBe('0%');
    }
  });

  test('handles null buffered', () => {
    const { container } = render(<MobileChapterSegments {...defaultProps} buffered={null} />);
    const segmentsContainer = container.firstChild;
    for (let i = 0; i < segmentsContainer.children.length; i++) {
      expect(segmentsContainer.children[i].children[0].style.width).toBe('0%');
    }
  });
});
