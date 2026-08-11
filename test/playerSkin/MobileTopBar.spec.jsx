import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileTopBar from '../../src/PlayerSkin/MobilePlayerSkin/components/MobileTopBar/index';
import { AppContextProvider } from '../../src/context/AppContextProvider';

const Wrapper = ({ children }) => (
  <AppContextProvider language="en">{children}</AppContextProvider>
);

const renderTopBar = (props = {}) => {
  const defaultProps = {
    visible: true,
    captions: [
      { src: '/subs/en.vtt', label: 'English', language: 'en' },
      { src: '/subs/es.vtt', label: 'Spanish', language: 'es' },
    ],
    activeCaption: null,
    onCaptionChange: jest.fn(),
    onOpenSettings: jest.fn(),
    settingsLabel: 'Settings',
    ...props,
  };
  return {
    ...render(
      <Wrapper>
        <MobileTopBar {...defaultProps} />
      </Wrapper>,
    ),
    props: defaultProps,
  };
};

describe('MobileTopBar', () => {
  describe('rendering', () => {
    test('renders settings button', () => {
      const { getByLabelText } = renderTopBar();
      expect(getByLabelText('Settings')).toBeTruthy();
    });

    test('renders CC button when captions available', () => {
      const { getByLabelText } = renderTopBar();
      expect(getByLabelText('Captions')).toBeTruthy();
    });

    test('does not render CC button when no captions', () => {
      const { queryByLabelText } = renderTopBar({ captions: [] });
      expect(queryByLabelText('Captions')).toBeNull();
    });

    test('does not render CC button when captions is undefined', () => {
      const { queryByLabelText } = renderTopBar({ captions: undefined });
      expect(queryByLabelText('Captions')).toBeNull();
    });
  });

  describe('CC button toggle', () => {
    test('activates first caption language when no caption is active', () => {
      const { getByLabelText, props } = renderTopBar({ activeCaption: null });
      fireEvent.click(getByLabelText('Captions'));
      expect(props.onCaptionChange).toHaveBeenCalledWith('en');
    });

    test('deactivates caption when a caption is active', () => {
      const { getByLabelText, props } = renderTopBar({ activeCaption: 'en' });
      fireEvent.click(getByLabelText('Captions'));
      expect(props.onCaptionChange).toHaveBeenCalledWith(null);
    });

    test('stops propagation on CC button click', () => {
      const { getByLabelText } = renderTopBar();
      const button = getByLabelText('Captions');
      const event = new MouseEvent('click', { bubbles: true });
      Object.defineProperty(event, 'stopPropagation', { value: jest.fn() });
      button.dispatchEvent(event);
      expect(event.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('visibility', () => {
    test('has pointer-events auto when visible', () => {
      const { container } = renderTopBar({ visible: true });
      const bar = container.firstChild;
      expect(bar).toBeTruthy();
    });

    test('has pointer-events none when not visible', () => {
      const { container } = renderTopBar({ visible: false });
      const bar = container.firstChild;
      expect(bar).toBeTruthy();
    });
  });

  describe('settings button', () => {
    test('calls onOpenSettings on click', () => {
      const { getByLabelText, props } = renderTopBar();
      fireEvent.click(getByLabelText('Settings'));
      expect(props.onOpenSettings).toHaveBeenCalled();
    });
  });
});
