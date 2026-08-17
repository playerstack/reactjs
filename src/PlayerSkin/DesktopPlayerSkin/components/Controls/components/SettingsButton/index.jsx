import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownContentValue,
  StyledDropdownItem,
  StyledDropdownList,
  StyledDropdownOverlay,
  StyledDropdownTitle,
  StyledDropdownValue,
} from './SettingsButton.styled';
import StyledGeneralButton from '../../../../../Commons/Buttons/StyledGeneralButton';
import Tooltip from '../../../../../Commons/Tooltip';
import { SettingsIcon, ArrowRightIcon } from '@playerstack/core/icons';
import CaptionOptions from '../../../../../Commons/CaptionOptions';
import { StyledDropdownOverlayScrolled } from './DropdownOverlay/DropdownOverlay.styled';
import useAppSelector from '../../../../../../hooks/context/useAppSelector';
import useSettingsOptions from '../../../../../../hooks/useSettingsOptions';

const SettingsButton = ({
  live,
  qualities,
  captions,
  activeCaption,
  playbackRate,
  playbackQuality,
  fullHDQualityBreak,
  changeSettings,
  onCaptionChange,
  captionStyle,
  onCaptionStyleChange,
  fullscreen,
  adMode = false,
}) => {
  const { i18n } = useAppSelector();
  const [showCaptionOptions, setShowCaptionOptions] = React.useState(false);

  const {
    dropdownRef,
    settings,
    values,
    iconProps,
    settingsOptions,
    handleButtonClick,
    handleMenuItemClick,
    handleMenuClick,
    handleGoBack,
  } = useSettingsOptions({
    live,
    fullHDQualityBreak,
    qualities,
    captions,
    activeCaption,
    playbackRate,
    playbackQuality,
    changeSettings,
    onCaptionChange,
    fullscreen,
    adMode,
  });

  // Close CaptionOptions when settings menu closes (click outside)
  React.useEffect(() => {
    if (!settings.captions && showCaptionOptions) {
      setShowCaptionOptions(false);
    }
  }, [settings.captions, showCaptionOptions]);

  // Hide settings button entirely if no options available (e.g., ad mode with no quality/captions)
  if (settingsOptions.length === 0) {
    return null;
  }

  return (
    <StyledDropdownContainer ref={dropdownRef}>
      <Tooltip label={i18n.settings} fullscreen={fullscreen}>
        <StyledDropdownButton
          type="button"
          aria-label={i18n.settings}
          aria-expanded={settings.generalMenu}
          onClick={handleButtonClick}
          isFullscreen={fullscreen}
          isFullHD={values.quality?.isFullHD}
          isExpanded={settings.generalMenu}
        >
          <SettingsIcon {...iconProps} />
        </StyledDropdownButton>
      </Tooltip>
      <StyledDropdownOverlay
        hiding={settings.generalMenu}
        singleOption={live || (qualities.length === 0 && (!captions || captions.length === 0))}
        isFullscreen={fullscreen}
      >
        <StyledDropdownList>
          {settingsOptions.map((item, i) => (
            <StyledDropdownItem key={i}>
              <StyledGeneralButton onClick={() => handleMenuItemClick(item.value)} isFullscreen={fullscreen} isText>
                <StyledDropdownTitle>{item.label}</StyledDropdownTitle>
                <StyledDropdownContentValue>
                  <StyledDropdownValue>{values[item.value]?.label}</StyledDropdownValue>
                  <ArrowRightIcon width={28} height={28} />
                </StyledDropdownContentValue>
              </StyledGeneralButton>
            </StyledDropdownItem>
          ))}
        </StyledDropdownList>
      </StyledDropdownOverlay>
      {settingsOptions.map((item, i) => (
        <StyledDropdownOverlayScrolled
          key={i}
          hiding={settings[item.value] && !(item.value === 'captions' && showCaptionOptions)}
          title={item.label}
          options={item.options}
          value={values[item.value]?.value}
          isFullscreen={fullscreen}
          onClick={
            item.value === 'captions'
              ? (value) => {
                  if (value === '__options__') {
                    setShowCaptionOptions(true);
                  } else {
                    handleMenuClick(item.value)(value);
                  }
                }
              : handleMenuClick(item.value)
          }
          goBack={handleGoBack(item.value)}
          showOptionsButton={item.value === 'captions'}
          onOptionsClick={(e) => {
            e.stopPropagation();
            setShowCaptionOptions(true);
          }}
        />
      ))}
      {showCaptionOptions && captionStyle && (
        <CaptionOptions
          captionStyle={captionStyle}
          onStyleChange={onCaptionStyleChange}
          onClose={() => {
            setShowCaptionOptions(false);
            // Re-show captions submenu
            handleMenuItemClick('captions');
          }}
          isFullscreen={fullscreen}
        />
      )}
    </StyledDropdownContainer>
  );
};

SettingsButton.propTypes = {
  live: PropTypes.bool.isRequired,
  qualities: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  captions: PropTypes.array,
  playbackRate: PropTypes.number.isRequired,
  playbackQuality: PropTypes.number,
  fullHDQualityBreak: PropTypes.number,
  changeSettings: PropTypes.func.isRequired,
  onCaptionChange: PropTypes.func,
  fullscreen: PropTypes.bool.isRequired,
};

export default React.memo(
  SettingsButton,
  (p, n) =>
    p.live === n.live &&
    p.qualities === n.qualities &&
    p.captions === n.captions &&
    p.activeCaption === n.activeCaption &&
    p.playbackRate === n.playbackRate &&
    p.playbackQuality === n.playbackQuality &&
    p.fullHDQualityBreak === n.fullHDQualityBreak &&
    p.changeSettings === n.changeSettings &&
    p.onCaptionChange === n.onCaptionChange &&
    p.captionStyle === n.captionStyle &&
    p.onCaptionStyleChange === n.onCaptionStyleChange &&
    p.fullscreen === n.fullscreen &&
    p.adMode === n.adMode,
);
