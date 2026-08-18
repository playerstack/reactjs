import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from '../../src/context/index';
import PlayTime from '../../src/PlayerSkin/DesktopPlayerSkin/components/PlayTime';

const wrap = (ui) => render(<Provider language="en">{ui}</Provider>);

describe('PlayTime — chapter title indicator', () => {
  const defaultProps = {
    live: false,
    duration: 120,
    currentTime: 30,
  };

  test('renders time without chapter title by default', () => {
    wrap(<PlayTime {...defaultProps} />);
    const timer = screen.getByRole('timer');
    expect(timer.textContent).toContain('00:30');
    expect(timer.textContent).toContain('02:00');
    expect(timer.textContent).not.toContain('·');
  });

  test('renders chapter title with dot separator when provided', () => {
    wrap(<PlayTime {...defaultProps} chapterTitle="Intro" />);
    const timer = screen.getByRole('timer');
    expect(timer.textContent).toContain('· Intro');
  });

  test('does not render separator when chapterTitle is undefined', () => {
    wrap(<PlayTime {...defaultProps} chapterTitle={undefined} />);
    const timer = screen.getByRole('timer');
    expect(timer.textContent).not.toContain('·');
  });

  test('does not render separator when chapterTitle is empty string', () => {
    wrap(<PlayTime {...defaultProps} chapterTitle="" />);
    const timer = screen.getByRole('timer');
    expect(timer.textContent).not.toContain('·');
  });

  test('renders live indicator when live is true, no chapter', () => {
    wrap(<PlayTime {...defaultProps} live={true} />);
    const timer = screen.getByRole('timer');
    expect(timer.textContent).toContain('Live');
  });

  test('chapter title still renders alongside live mode', () => {
    wrap(<PlayTime {...defaultProps} live={true} chapterTitle="Stream Part 1" />);
    const timer = screen.getByRole('timer');
    expect(timer.textContent).toContain('· Stream Part 1');
  });

  test('formats currentTime correctly', () => {
    wrap(<PlayTime {...defaultProps} currentTime={3661} duration={7200} />);
    const timer = screen.getByRole('timer');
    expect(timer.textContent).toContain('1:01:01');
  });
});
