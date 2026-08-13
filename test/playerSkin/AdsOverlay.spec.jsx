import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AdsOverlay from '../../src/PlayerSkin/Commons/AdsOverlay';
import { AppContextProvider } from '../../src/context/AppContextProvider';

const Wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

const baseProps = {
  ads: {
    title: 'Test Ad',
    url: 'https://example.com',
    buttonText: 'Visit site',
    icon: 'https://example.com/icon.png',
    skipAfter: 5,
  },
  canSkip: false,
  skipCountdown: 5,
  hasSkipTimer: true,
  adProgress: 0,
  onSkipClick: jest.fn(),
  onAdClick: jest.fn(),
  hiding: false,
  poster: 'https://example.com/poster.jpg',
  menuOpen: false,
  fullscreen: false,
};

describe('AdsOverlay', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders null when ads is null', () => {
    const { container } = render(
      <Wrapper>
        <AdsOverlay {...baseProps} ads={null} />
      </Wrapper>,
    );
    expect(container.innerHTML).toBe('');
  });

  test('renders ad banner with title and URL', () => {
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} />
      </Wrapper>,
    );
    expect(screen.getByText('Test Ad')).toBeTruthy();
    expect(screen.getByText('example.com')).toBeTruthy();
  });

  test('renders button text', () => {
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} />
      </Wrapper>,
    );
    expect(screen.getByText('Visit site')).toBeTruthy();
  });

  test('renders icon image when provided', () => {
    const { container } = render(
      <Wrapper>
        <AdsOverlay {...baseProps} />
      </Wrapper>,
    );
    const img = container.querySelector('img[src="https://example.com/icon.png"]');
    expect(img).toBeTruthy();
  });

  test('does not render icon when not provided', () => {
    const ads = { ...baseProps.ads, icon: undefined };
    const { container } = render(
      <Wrapper>
        <AdsOverlay {...baseProps} ads={ads} />
      </Wrapper>,
    );
    const imgs = container.querySelectorAll('img[src="https://example.com/icon.png"]');
    expect(imgs.length).toBe(0);
  });

  test('renders skip countdown when canSkip is false', () => {
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} canSkip={false} skipCountdown={3} />
      </Wrapper>,
    );
    expect(screen.getByText('3')).toBeTruthy();
  });

  test('renders skip button when canSkip is true', () => {
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} canSkip={true} skipCountdown={0} />
      </Wrapper>,
    );
    expect(screen.getByText('Skip')).toBeTruthy();
  });

  test('calls onSkipClick when skip button clicked', () => {
    const onSkipClick = jest.fn();
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} canSkip={true} skipCountdown={0} onSkipClick={onSkipClick} />
      </Wrapper>,
    );
    fireEvent.click(screen.getByText('Skip'));
    expect(onSkipClick).toHaveBeenCalledTimes(1);
  });

  test('calls onAdClick when banner clicked', () => {
    const onAdClick = jest.fn();
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} onAdClick={onAdClick} />
      </Wrapper>,
    );
    fireEvent.click(screen.getByText('Test Ad'));
    expect(onAdClick).toHaveBeenCalledTimes(1);
  });

  test('does not render skip block when hasSkipTimer is false', () => {
    const { container } = render(
      <Wrapper>
        <AdsOverlay {...baseProps} hasSkipTimer={false} />
      </Wrapper>,
    );
    expect(screen.queryByText('Skip')).toBeNull();
    expect(screen.queryByText('5')).toBeNull();
  });

  test('renders poster in skip preview when canSkip is false', () => {
    const { container } = render(
      <Wrapper>
        <AdsOverlay {...baseProps} canSkip={false} poster="https://example.com/poster.jpg" />
      </Wrapper>,
    );
    const posterImg = container.querySelector('img[src="https://example.com/poster.jpg"]');
    expect(posterImg).toBeTruthy();
  });

  test('renders sponsored label', () => {
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} />
      </Wrapper>,
    );
    expect(screen.getByText(/Sponsored/)).toBeTruthy();
  });

  test('extracts hostname from URL for display', () => {
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} />
      </Wrapper>,
    );
    expect(screen.getByText('example.com')).toBeTruthy();
  });

  test('uses raw URL when parsing fails', () => {
    const ads = { ...baseProps.ads, url: 'invalid-url' };
    render(
      <Wrapper>
        <AdsOverlay {...baseProps} ads={ads} />
      </Wrapper>,
    );
    expect(screen.getByText('invalid-url')).toBeTruthy();
  });
});
