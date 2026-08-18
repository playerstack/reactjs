import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Provider } from '@context/index';
import CaptionOptions from '@PlayerSkin/Commons/CaptionOptions';
import { DEFAULT_CAPTION_STYLE, CAPTION_STYLE_OPTIONS } from '@playerstack/core';

const wrapper = ({ children }) => <Provider language="en">{children}</Provider>;

describe('CaptionOptions', () => {
  const baseProps = {
    captionStyle: { ...DEFAULT_CAPTION_STYLE },
    onStyleChange: jest.fn(),
    onClose: jest.fn(),
    isFullscreen: false,
  };

  beforeEach(() => jest.clearAllMocks());

  it('renders main menu with all style options', () => {
    jest.useFakeTimers();
    const { container } = render(<CaptionOptions {...baseProps} />, { wrapper });
    act(() => { jest.advanceTimersByTime(100); });
    // Should show option labels
    expect(container.textContent).toContain('Font family');
    expect(container.textContent).toContain('Font color');
    expect(container.textContent).toContain('Font size');
    expect(container.textContent).toContain('Background color');
    expect(container.textContent).toContain('Character edge style');
    jest.useRealTimers();
  });

  it('shows current value label for each option', () => {
    jest.useFakeTimers();
    const { container } = render(<CaptionOptions {...baseProps} />, { wrapper });
    act(() => { jest.advanceTimersByTime(100); });
    expect(container.textContent).toContain('Proportional Sans-Serif');
    jest.useRealTimers();
  });

  it('calls onClose when back button is clicked in main menu', () => {
    jest.useFakeTimers();
    const { getByText } = render(<CaptionOptions {...baseProps} />, { wrapper });
    act(() => { jest.advanceTimersByTime(100); });
    fireEvent.click(getByText('Options').closest('button'));
    expect(baseProps.onClose).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('opens submenu when clicking an option item', () => {
    jest.useFakeTimers();
    const { getByText, container } = render(<CaptionOptions {...baseProps} />, { wrapper });
    act(() => { jest.advanceTimersByTime(100); });
    fireEvent.click(getByText('Font color').closest('[class]'));
    // Should show font color options from CAPTION_STYLE_OPTIONS
    expect(container.textContent).toContain('White');
    expect(container.textContent).toContain('Yellow');
    expect(container.textContent).toContain('Red');
    jest.useRealTimers();
  });

  it('selects a value in submenu and calls onStyleChange', () => {
    jest.useFakeTimers();
    const { getByText } = render(<CaptionOptions {...baseProps} />, { wrapper });
    act(() => { jest.advanceTimersByTime(100); });
    fireEvent.click(getByText('Font color').closest('[class]'));
    fireEvent.click(getByText('Yellow'));
    expect(baseProps.onStyleChange).toHaveBeenCalledWith({
      ...DEFAULT_CAPTION_STYLE,
      fontColor: '#ffff00',
    });
    jest.useRealTimers();
  });

  it('shows checkmark next to current selected value', () => {
    jest.useFakeTimers();
    const style = { ...DEFAULT_CAPTION_STYLE, fontColor: '#ff0000' };
    const { getByText, container } = render(
      <CaptionOptions {...baseProps} captionStyle={style} />,
      { wrapper },
    );
    act(() => { jest.advanceTimersByTime(100); });
    fireEvent.click(getByText('Font color').closest('[class]'));
    // Red should have checkmark
    expect(container.textContent).toContain('✓ Red');
    jest.useRealTimers();
  });

  it('back button in submenu returns to main menu', () => {
    jest.useFakeTimers();
    const { getByText, container } = render(<CaptionOptions {...baseProps} />, { wrapper });
    act(() => { jest.advanceTimersByTime(100); });
    fireEvent.click(getByText('Font size').closest('[class]'));
    // In submenu, click back button
    fireEvent.click(getByText('Font size').closest('button'));
    // Back to main menu — should show all options again
    expect(container.textContent).toContain('Font family');
    jest.useRealTimers();
  });

  it('reset button calls onStyleChange with DEFAULT_CAPTION_STYLE', () => {
    jest.useFakeTimers();
    const customStyle = { ...DEFAULT_CAPTION_STYLE, fontColor: '#ff0000', fontSize: '200%' };
    const { getByText } = render(
      <CaptionOptions {...baseProps} captionStyle={customStyle} />,
      { wrapper },
    );
    act(() => { jest.advanceTimersByTime(100); });
    fireEvent.click(getByText('Reset'));
    expect(baseProps.onStyleChange).toHaveBeenCalledWith(DEFAULT_CAPTION_STYLE);
    jest.useRealTimers();
  });

  it('renders in fullscreen mode', () => {
    jest.useFakeTimers();
    const { container } = render(<CaptionOptions {...baseProps} isFullscreen={true} />, { wrapper });
    act(() => { jest.advanceTimersByTime(100); });
    expect(container.firstChild).not.toBeNull();
    jest.useRealTimers();
  });

  it('opens edge style submenu', () => {
    jest.useFakeTimers();
    const { getByText, container } = render(<CaptionOptions {...baseProps} />, { wrapper });
    act(() => { jest.advanceTimersByTime(100); });
    fireEvent.click(getByText('Character edge style').closest('[class]'));
    expect(container.textContent).toContain('Drop Shadow');
    expect(container.textContent).toContain('Raised');
    expect(container.textContent).toContain('None');
    jest.useRealTimers();
  });
});
