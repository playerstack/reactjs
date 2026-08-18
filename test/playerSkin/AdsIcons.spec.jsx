import React from 'react';
import { render } from '@testing-library/react';
import SkipAdIcon from '@PlayerSkin/Commons/Icons/SkipAdIcon';
import CastIcon from '@PlayerSkin/Commons/Icons/CastIcon';

describe('SkipAdIcon', () => {
  test('renders SVG with default dimensions', () => {
    const { container } = render(<SkipAdIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
  });

  test('accepts custom dimensions', () => {
    const { container } = render(<SkipAdIcon width={32} height={32} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('32');
    expect(svg.getAttribute('height')).toBe('32');
  });

  test('has correct viewBox', () => {
    const { container } = render(<SkipAdIcon />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('viewBox')).toBe('11 10 14 16');
  });

  test('contains path element', () => {
    const { container } = render(<SkipAdIcon />);
    const path = container.querySelector('path');
    expect(path).toBeTruthy();
  });
});

describe('CastIcon', () => {
  test('renders SVG with default dimensions', () => {
    const { container } = render(<CastIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
  });

  test('accepts custom dimensions', () => {
    const { container } = render(<CastIcon width={20} height={20} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('20');
    expect(svg.getAttribute('height')).toBe('20');
  });

  test('renders disconnected state by default', () => {
    const { container } = render(<CastIcon />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBeGreaterThan(0);
  });

  test('renders connected state when connected=true', () => {
    const { container } = render(<CastIcon connected={true} />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBeGreaterThan(0);
  });

  test('has viewBox 0 0 24 24', () => {
    const { container } = render(<CastIcon />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('viewBox')).toBe('0 0 24 24');
  });
});
