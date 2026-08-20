import React from 'react';
import { render } from '@testing-library/react';
import { skipAdIcon, castIcon } from '@playerstack/core/icons';
import Icon from '@components/Icon';

// Icons are now framework-agnostic descriptor objects rendered through the
// generic <Icon> component. These tests verify the descriptors render valid SVG.

describe('skipAdIcon', () => {
  test('renders SVG with the requested dimensions', () => {
    const { container } = render(<Icon icon={skipAdIcon} width={24} height={24} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
  });

  test('accepts custom dimensions', () => {
    const { container } = render(<Icon icon={skipAdIcon} width={32} height={32} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('32');
    expect(svg.getAttribute('height')).toBe('32');
  });

  test('has correct viewBox', () => {
    const { container } = render(<Icon icon={skipAdIcon} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('viewBox')).toBe('11 10 14 16');
  });

  test('contains a path element', () => {
    const { container } = render(<Icon icon={skipAdIcon} />);
    expect(container.querySelector('path')).toBeTruthy();
  });
});

describe('castIcon', () => {
  test('renders SVG with the requested dimensions', () => {
    const { container } = render(<Icon icon={castIcon} width={24} height={24} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
  });

  test('accepts custom dimensions', () => {
    const { container } = render(<Icon icon={castIcon} width={20} height={20} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('20');
    expect(svg.getAttribute('height')).toBe('20');
  });

  test('renders path elements', () => {
    const { container } = render(<Icon icon={castIcon} />);
    expect(container.querySelectorAll('path').length).toBeGreaterThan(0);
  });

  test('has viewBox 0 0 24 24', () => {
    const { container } = render(<Icon icon={castIcon} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('viewBox')).toBe('0 0 24 24');
  });
});
