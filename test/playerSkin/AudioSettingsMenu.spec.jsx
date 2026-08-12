import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';
import AudioSettingsMenu from '../../src/PlayerSkin/AudioPlayerSkin/components/AudioSettingsMenu';

const wrapper = ({ children }) => <AppContextProvider language="en">{children}</AppContextProvider>;

describe('AudioSettingsMenu', () => {
  const baseProps = {
    playbackRate: 1,
    changePlaybackRate: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  it('renders settings button', () => {
    const { getByLabelText } = render(<AudioSettingsMenu {...baseProps} />, { wrapper });
    expect(getByLabelText('Settings')).toBeTruthy();
  });

  it('opens main menu on button click', () => {
    const { getByLabelText, getAllByText } = render(<AudioSettingsMenu {...baseProps} />, { wrapper });
    fireEvent.click(getByLabelText('Settings'));
    expect(getAllByText('Speed').length).toBeGreaterThan(0);
  });

  it('shows Normal label when playbackRate is 1', () => {
    const { getByLabelText, container } = render(<AudioSettingsMenu {...baseProps} playbackRate={1} />, { wrapper });
    fireEvent.click(getByLabelText('Settings'));
    expect(container.textContent).toContain('Normal');
  });

  it('shows speed value when playbackRate is not 1', () => {
    const { getByLabelText, container } = render(<AudioSettingsMenu {...baseProps} playbackRate={1.5} />, { wrapper });
    fireEvent.click(getByLabelText('Settings'));
    expect(container.textContent).toContain('1.5x');
  });

  it('opens speed submenu', () => {
    jest.useFakeTimers();
    const { getByLabelText, getAllByText, getByText } = render(<AudioSettingsMenu {...baseProps} />, { wrapper });
    fireEvent.click(getByLabelText('Settings'));
    // Click first Speed element (main menu item)
    fireEvent.click(getAllByText('Speed')[0].closest('button'));
    act(() => { jest.runAllTimers(); });
    // Speed options visible
    expect(getByText('0.5')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    jest.useRealTimers();
  });

  it('calls changePlaybackRate when speed option selected', () => {
    jest.useFakeTimers();
    const { getByLabelText, getAllByText, getByText } = render(<AudioSettingsMenu {...baseProps} />, { wrapper });
    fireEvent.click(getByLabelText('Settings'));
    fireEvent.click(getAllByText('Speed')[0].closest('button'));
    act(() => { jest.runAllTimers(); });
    fireEvent.click(getByText('2'));
    expect(baseProps.changePlaybackRate).toHaveBeenCalledWith(2);
    jest.useRealTimers();
  });

  it('closes menu on second button click', () => {
    const { getByLabelText } = render(<AudioSettingsMenu {...baseProps} />, { wrapper });
    fireEvent.click(getByLabelText('Settings'));
    expect(getByLabelText('Settings').getAttribute('aria-expanded')).toBe('true');
    fireEvent.click(getByLabelText('Settings'));
    expect(getByLabelText('Settings').getAttribute('aria-expanded')).toBe('false');
  });

  it('go back from submenu', () => {
    jest.useFakeTimers();
    const { getByLabelText, getAllByText } = render(<AudioSettingsMenu {...baseProps} />, { wrapper });
    fireEvent.click(getByLabelText('Settings'));
    fireEvent.click(getAllByText('Speed')[0].closest('button'));
    act(() => { jest.runAllTimers(); });
    // Click back header (submenu Speed header)
    fireEvent.click(getAllByText('Speed')[1]);
    act(() => { jest.advanceTimersByTime(200); });
    expect(getByLabelText('Settings')).toBeTruthy();
    jest.useRealTimers();
  });
});
