import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SkipOverlay from '@PlayerSkin/MobilePlayerSkin/components/SkipOverlay';

// Minimal styled-components mock (already handled by test infra)
jest.mock('../../src/PlayerSkin/MobilePlayerSkin/components/SkipOverlay/SkipOverlay.styled', () => ({
  StyledSkipOverlay: ({ children, ...props }) => <div data-testid="skip-overlay" {...props}>{children}</div>,
  StyledSkipIconContainer: ({ children, ...props }) => <div data-testid="skip-icon-container" {...props}>{children}</div>,
  StyledSkipText: ({ children }) => <span data-testid="skip-text">{children}</span>,
  StyledSkipTapArea: ({ children, onClick, ...props }) => (
    <div data-testid={`tap-area-${props.direction}`} onClick={onClick}>{children}</div>
  ),
}));

// The generic Icon renders SVG from a descriptor; stub it so the chevrons are
// identifiable by test id.
jest.mock('@components/Icon', () => () => <svg data-testid="chevron" />);

describe('SkipOverlay', () => {
  const defaultProps = {
    skipState: { direction: null, visible: false, seconds: 0 },
    onTapLeft: jest.fn(),
    onTapRight: jest.fn(),
    i18n: { seconds: 'seconds', skipBackward: 'Skip backward', skipForward: 'Skip forward' },
  };

  it('renders tap areas for left and right', () => {
    const { getByTestId } = render(<SkipOverlay {...defaultProps} />);
    expect(getByTestId('tap-area-backward')).toBeTruthy();
    expect(getByTestId('tap-area-forward')).toBeTruthy();
  });

  it('does not render overlay when not visible', () => {
    const { queryByTestId } = render(<SkipOverlay {...defaultProps} />);
    expect(queryByTestId('skip-overlay')).toBeNull();
  });

  it('renders backward overlay when visible and direction is backward', () => {
    const props = {
      ...defaultProps,
      skipState: { direction: 'backward', visible: true, seconds: 10 },
    };
    const { getAllByTestId, getByTestId } = render(<SkipOverlay {...props} />);
    expect(getByTestId('skip-text').textContent).toContain('10');
    expect(getByTestId('skip-text').textContent).toContain('seconds');
    expect(getAllByTestId('chevron').length).toBe(3);
  });

  it('renders forward overlay when visible and direction is forward', () => {
    const props = {
      ...defaultProps,
      skipState: { direction: 'forward', visible: true, seconds: 20 },
    };
    const { getByTestId } = render(<SkipOverlay {...props} />);
    expect(getByTestId('skip-text').textContent).toContain('20');
  });

  it('calls onTapLeft with stopPropagation on left tap', () => {
    const onTapLeft = jest.fn();
    const { getByTestId } = render(<SkipOverlay {...defaultProps} onTapLeft={onTapLeft} />);
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'stopPropagation', { value: jest.fn() });
    fireEvent(getByTestId('tap-area-backward'), event);
    expect(onTapLeft).toHaveBeenCalled();
  });

  it('calls onTapRight with stopPropagation on right tap', () => {
    const onTapRight = jest.fn();
    const { getByTestId } = render(<SkipOverlay {...defaultProps} onTapRight={onTapRight} />);
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'stopPropagation', { value: jest.fn() });
    fireEvent(getByTestId('tap-area-forward'), event);
    expect(onTapRight).toHaveBeenCalled();
  });

  it('uses default labels when i18n is undefined', () => {
    const props = {
      skipState: { direction: 'forward', visible: true, seconds: 10 },
      onTapLeft: jest.fn(),
      onTapRight: jest.fn(),
      i18n: undefined,
    };
    const { getByTestId } = render(<SkipOverlay {...props} />);
    expect(getByTestId('skip-text').textContent).toContain('seconds');
  });
});
