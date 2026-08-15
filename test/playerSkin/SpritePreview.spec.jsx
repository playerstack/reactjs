import React from 'react';
import { render } from '@testing-library/react';

jest.mock('@playerstack/core', () => ({
  ...jest.requireActual('@playerstack/core'),
  parseSpriteVTT: jest.fn(() => [
    { from: 0, to: 5, file: 'sprite.jpg', x: '0', y: '0', w: '160', h: '90' },
    { from: 5, to: 10, file: 'sprite.jpg', x: '160', y: '0', w: '160', h: '90' },
    { from: 10, to: 15, file: 'sprite.jpg', x: '320', y: '0', w: '160', h: '90' },
  ]),
  getSDK: jest.fn(),
}));

import SpritePreview from '../../src/PlayerSkin/Commons/SpritePreview';

// Mock fetch for VTT file loading
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    text: () => Promise.resolve('WEBVTT\n\n00:00:00.000 --> 00:00:05.000\nsprite.jpg#xywh=0,0,160,90'),
  }),
);

describe('SpritePreview', () => {
  const baseProps = {
    spriteVTTFile: 'https://example.com/sprites.vtt',
    currentTime: 3,
    duration: 60,
    sliderRef: { current: { getBoundingClientRect: () => ({ width: 600, left: 0 }) } },
    showPreview: true,
    isFullscreen: false,
  };

  test('renders without crashing', () => {
    const { container } = render(<SpritePreview {...baseProps} />);
    expect(container).toBeDefined();
  });

  test('renders nothing when showPreview is false', () => {
    const { container } = render(<SpritePreview {...baseProps} showPreview={false} />);
    expect(container).toBeDefined();
  });

  test('renders nothing without spriteVTTFile', () => {
    const { container } = render(<SpritePreview {...baseProps} spriteVTTFile="" />);
    expect(container).toBeDefined();
  });

  test('renders nothing when duration is 0', () => {
    const { container } = render(<SpritePreview {...baseProps} duration={0} />);
    expect(container).toBeDefined();
  });
});
