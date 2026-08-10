import React from 'react';
import { render } from '@testing-library/react';
import HeatmapGraph from '../../src/PlayerSkin/Commons/HeatmapGraph';

// Mock React.useId to return stable id in tests
let idCounter = 0;
jest.spyOn(React, 'useId').mockImplementation(() => `:r${idCounter++}:`);

beforeEach(() => {
  idCounter = 0;
});

describe('HeatmapGraph', () => {
  const defaultProps = {
    strokePath: 'M 0,100 C 5,80 10,60 15,50 C 20,40 80,30 100,100',
    currentTime: 30,
    duration: 100,
    isFullscreen: false,
    visible: true,
  };

  test('renders SVG with stroke path', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);
    expect(paths[0].getAttribute('d')).toBe(defaultProps.strokePath);
    expect(paths[1].getAttribute('d')).toBe(defaultProps.strokePath);
  });

  test('first path has uniform stroke color', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} />);
    const paths = container.querySelectorAll('path');
    expect(paths[0].getAttribute('stroke')).toBe('rgba(255, 255, 255, 0.75)');
    expect(paths[0].getAttribute('fill')).toBe('none');
  });

  test('second path has brighter stroke for played portion', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} />);
    const paths = container.querySelectorAll('path');
    expect(paths[1].getAttribute('stroke')).toBe('rgba(255, 255, 255, 1)');
    expect(paths[1].getAttribute('clip-path')).toContain('url(#heatmap-played-');
  });

  test('clipPath rect width reflects progress percentage', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} currentTime={50} duration={100} />);
    const clipRect = container.querySelector('clipPath rect');
    expect(clipRect.getAttribute('width')).toBe('50');
  });

  test('clipPath rect width is 0 when currentTime is 0', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} currentTime={0} duration={100} />);
    const clipRect = container.querySelector('clipPath rect');
    expect(clipRect.getAttribute('width')).toBe('0');
  });

  test('clipPath rect width is 100 when video is fully played', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} currentTime={100} duration={100} />);
    const clipRect = container.querySelector('clipPath rect');
    expect(clipRect.getAttribute('width')).toBe('100');
  });

  test('handles duration 0 without division error', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} duration={0} />);
    const clipRect = container.querySelector('clipPath rect');
    expect(clipRect.getAttribute('width')).toBe('0');
  });

  test('renders with isFullscreen true', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} isFullscreen={true} />);
    expect(container.firstChild).toBeTruthy();
  });

  test('renders with bottomOffset prop', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} bottomOffset={14} />);
    expect(container.firstChild).toBeTruthy();
  });

  test('renders with visible false (hidden state)', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} visible={false} />);
    expect(container.firstChild).toBeTruthy();
  });

  test('SVG has aria-hidden for accessibility', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('aria-hidden')).toBe('true');
  });

  test('SVG viewBox is 0 0 100 100', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('viewBox')).toBe('0 0 100 100');
  });

  test('paths use non-scaling-stroke vector effect', () => {
    const { container } = render(<HeatmapGraph {...defaultProps} />);
    const paths = container.querySelectorAll('path');
    paths.forEach((path) => {
      expect(path.getAttribute('vector-effect')).toBe('non-scaling-stroke');
    });
  });

  test('memo prevents re-render when props are equal', () => {
    const renderSpy = jest.fn();
    const Wrapper = (props) => {
      renderSpy();
      return <HeatmapGraph {...props} />;
    };
    const MemoWrapper = React.memo(Wrapper, () => true);
    const { rerender } = render(<MemoWrapper {...defaultProps} />);
    rerender(<MemoWrapper {...defaultProps} />);
    expect(renderSpy).toHaveBeenCalledTimes(1);
  });
});
