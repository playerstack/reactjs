import React from 'react';
import PropTypes from 'prop-types';
import { CAPTION_STYLE_OPTIONS, DEFAULT_CAPTION_STYLE } from '@playerstack/core';
import useAppSelector from '../../../hooks/context/useAppSelector';
import {
  StyledOptionsContainer,
  StyledOptionsHeader,
  StyledOptionsItem,
  StyledOptionsLabel,
  StyledOptionsValue,
  StyledOptionsContent,
} from './CaptionOptions.styled';
import StyledGeneralButton from '../Buttons/StyledGeneralButton';
import { ArrowLeftIcon, ArrowRightIcon } from '@playerstack/core/icons';

/**
 * Caption style options panel (YouTube-style).
 * Allows customizing font, colors, opacity, edge style.
 */
const CaptionOptions = ({ captionStyle, onStyleChange, onClose, isFullscreen }) => {
  const { i18n } = useAppSelector();
  const [subMenu, setSubMenu] = React.useState(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const OPTIONS_MAP = React.useMemo(
    () => [
      { key: 'fontFamily', label: i18n.fontFamily },
      { key: 'fontColor', label: i18n.fontColor },
      { key: 'fontSize', label: i18n.fontSize },
      { key: 'fontOpacity', label: i18n.fontOpacity },
      { key: 'backgroundColor', label: i18n.backgroundColor },
      { key: 'backgroundOpacity', label: i18n.backgroundOpacity },
      { key: 'windowColor', label: i18n.windowColor },
      { key: 'windowOpacity', label: i18n.windowOpacity },
      { key: 'edgeStyle', label: i18n.edgeStyle },
    ],
    [i18n],
  );

  const handleReset = React.useCallback(() => {
    onStyleChange(DEFAULT_CAPTION_STYLE);
  }, [onStyleChange]);

  const handleSelectValue = React.useCallback(
    (key, value) => {
      onStyleChange({ ...captionStyle, [key]: value });
      setSubMenu(null);
    },
    [captionStyle, onStyleChange],
  );

  const getCurrentLabel = React.useCallback(
    (key) => {
      const options = CAPTION_STYLE_OPTIONS[key];
      const current = options?.find((o) => o.value === captionStyle[key]);
      return current?.label || captionStyle[key];
    },
    [captionStyle],
  );

  // Sub-menu for specific option
  if (subMenu) {
    const options = CAPTION_STYLE_OPTIONS[subMenu.key];
    const optionDef = OPTIONS_MAP.find((o) => o.key === subMenu.key);
    return (
      <StyledOptionsContainer isFullscreen={isFullscreen}>
        <StyledOptionsHeader isFullscreen={isFullscreen}>
          <StyledGeneralButton onClick={() => setSubMenu(null)} isFullscreen={isFullscreen} isText>
            <ArrowLeftIcon width={28} height={28} />
            <span>{optionDef?.label}</span>
          </StyledGeneralButton>
        </StyledOptionsHeader>
        <StyledOptionsContent show={show}>
          {options?.map((opt) => (
            <StyledOptionsItem
              key={opt.value}
              selected={captionStyle[subMenu.key] === opt.value}
              onClick={() => handleSelectValue(subMenu.key, opt.value)}
              isFullscreen={isFullscreen}
            >
              {captionStyle[subMenu.key] === opt.value && '✓ '}
              {opt.label}
            </StyledOptionsItem>
          ))}
        </StyledOptionsContent>
      </StyledOptionsContainer>
    );
  }

  // Main options menu
  return (
    <StyledOptionsContainer isFullscreen={isFullscreen}>
      <StyledOptionsHeader isFullscreen={isFullscreen}>
        <StyledGeneralButton onClick={onClose} isFullscreen={isFullscreen} isText>
          <ArrowLeftIcon width={28} height={28} />
          <span>{i18n.captionOptions}</span>
        </StyledGeneralButton>
      </StyledOptionsHeader>
      <StyledOptionsContent show={show}>
        {OPTIONS_MAP.map((opt) => (
          <StyledOptionsItem key={opt.key} onClick={() => setSubMenu(opt)} isFullscreen={isFullscreen}>
            <StyledOptionsLabel>{opt.label}</StyledOptionsLabel>
            <StyledOptionsValue>
              {getCurrentLabel(opt.key)} <ArrowRightIcon width={16} height={16} />
            </StyledOptionsValue>
          </StyledOptionsItem>
        ))}
        <StyledOptionsItem onClick={handleReset} isFullscreen={isFullscreen}>
          <StyledOptionsLabel>{i18n.reset}</StyledOptionsLabel>
        </StyledOptionsItem>
      </StyledOptionsContent>
    </StyledOptionsContainer>
  );
};

CaptionOptions.propTypes = {
  captionStyle: PropTypes.object.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool,
};

export default React.memo(CaptionOptions);
