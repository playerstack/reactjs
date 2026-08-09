import corePlayer from '../../src/core/index';

describe('core/index - canEnablePIP', () => {
  const originalPiPEnabled = Object.getOwnPropertyDescriptor(document, 'pictureInPictureEnabled');

  afterEach(() => {
    // Restore original property
    if (originalPiPEnabled) {
      Object.defineProperty(document, 'pictureInPictureEnabled', originalPiPEnabled);
    } else {
      delete document.pictureInPictureEnabled;
    }
  });

  test('returns true when canPlay returns true AND document.pictureInPictureEnabled is true', () => {
    Object.defineProperty(document, 'pictureInPictureEnabled', { value: true, writable: true, configurable: true });
    // Use a URL that canPlay recognizes (mp4 extension)
    expect(corePlayer.canEnablePIP('https://example.com/video.mp4')).toBe(true);
  });

  test('returns false when canPlay returns false', () => {
    Object.defineProperty(document, 'pictureInPictureEnabled', { value: true, writable: true, configurable: true });
    // Use a URL that canPlay does NOT recognize
    expect(corePlayer.canEnablePIP('https://example.com/page.html')).toBe(false);
  });

  test('returns false when document.pictureInPictureEnabled is false and no webkit support', () => {
    Object.defineProperty(document, 'pictureInPictureEnabled', { value: false, writable: true, configurable: true });
    expect(corePlayer.canEnablePIP('https://example.com/video.mp4')).toBeFalsy();
  });

  test('returns true for HLS url when PIP is enabled', () => {
    Object.defineProperty(document, 'pictureInPictureEnabled', { value: true, writable: true, configurable: true });
    expect(corePlayer.canEnablePIP('https://example.com/stream.m3u8')).toBe(true);
  });

  test('returns true for DASH url when PIP is enabled', () => {
    Object.defineProperty(document, 'pictureInPictureEnabled', { value: true, writable: true, configurable: true });
    expect(corePlayer.canEnablePIP('https://example.com/manifest.mpd')).toBe(true);
  });

  test('returns false for empty URL', () => {
    Object.defineProperty(document, 'pictureInPictureEnabled', { value: true, writable: true, configurable: true });
    expect(corePlayer.canEnablePIP('')).toBe(false);
  });

  // Verify canPlay export works correctly as well
  describe('canPlay', () => {
    test('returns true for mp4 URL', () => {
      expect(corePlayer.canPlay('video.mp4')).toBe(true);
    });

    test('returns true for m3u8 URL', () => {
      expect(corePlayer.canPlay('stream.m3u8')).toBe(true);
    });

    test('returns false for unknown extension', () => {
      expect(corePlayer.canPlay('file.txt')).toBe(false);
    });
  });
});
