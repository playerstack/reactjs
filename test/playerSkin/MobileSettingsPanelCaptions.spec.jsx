import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileSettingsPanel from '../../src/PlayerSkin/MobilePlayerSkin/components/MobileSettingsPanel/index';
import { AppContextProvider } from '../../src/context/AppContextProvider';

const Wrapper = ({ children }) => (
  <AppContextProvider language="en">{children}</AppContextProvider>
);

const renderPanel = (props = {}) => {
  const defaultProps = {
    visible: true,
    qualities: [],
    captions: [
      { src: '/en.vtt', label: 'English', language: 'en' },
      { src: '/es.vtt', label: 'Spanish', language: 'es' },
    ],
    activeCaption: null,
    playbackRate: 1,
    onChangeSettings: jest.fn(),
    onCaptionChange: jest.fn(),
    onClose: jest.fn(),
    ...props,
  };
  return {
    ...render(
      <Wrapper>
        <MobileSettingsPanel {...defaultProps} />
      </Wrapper>,
    ),
    props: defaultProps,
  };
};

describe('MobileSettingsPanel — Captions', () => {
  test('shows Captions switch item when captions are provided', () => {
    const { getByText } = renderPanel();
    expect(getByText('Captions')).toBeTruthy();
  });

  test('does not show Captions switch item when captions is empty', () => {
    const { queryByText } = renderPanel({ captions: [] });
    // "Captions" should not appear as a switch item (only as a potential i18n key)
    const elements = document.querySelectorAll('[class]');
    const captionsSwitch = Array.from(elements).find(
      (el) => el.textContent === 'Captions' && el.tagName !== 'SPAN',
    );
    // With no captions, the Captions switch should not render
    expect(queryByText('Captions')).toBeNull();
  });

  test('shows "Off" as current caption value when no caption active', () => {
    const { getByText } = renderPanel({ activeCaption: null });
    expect(getByText('Off')).toBeTruthy();
  });

  test('shows active caption label as current value', () => {
    const { getByText } = renderPanel({ activeCaption: 'es' });
    expect(getByText('Spanish')).toBeTruthy();
  });

  test('opens captions submenu on click', () => {
    const { getByText } = renderPanel();
    fireEvent.click(getByText('Captions'));
    // After opening submenu, should show "Off" and caption options
    expect(getByText('English')).toBeTruthy();
    expect(getByText('Spanish')).toBeTruthy();
  });

  test('calls onCaptionChange with language when selecting a caption', () => {
    const { getByText, props } = renderPanel();
    fireEvent.click(getByText('Captions'));
    fireEvent.click(getByText('Spanish'));
    expect(props.onCaptionChange).toHaveBeenCalledWith('es');
  });

  test('calls onCaptionChange with null when selecting Off', () => {
    const { getByText, getAllByText, props } = renderPanel({ activeCaption: 'en' });
    fireEvent.click(getByText('Captions'));
    // There might be multiple "Off" — use getAllByText and click the one in the submenu
    const offButtons = getAllByText('Off');
    fireEvent.click(offButtons[offButtons.length - 1]);
    expect(props.onCaptionChange).toHaveBeenCalledWith(null);
  });

  test('calls onClose after selecting a caption', () => {
    const { getByText, props } = renderPanel();
    fireEvent.click(getByText('Captions'));
    fireEvent.click(getByText('English'));
    expect(props.onClose).toHaveBeenCalled();
  });

  test('shows header title "Captions" when in captions submenu', () => {
    const { getByText, getAllByText } = renderPanel();
    fireEvent.click(getByText('Captions'));
    // Header should show "Captions"
    const captionElements = getAllByText('Captions');
    expect(captionElements.length).toBeGreaterThanOrEqual(1);
  });
});
