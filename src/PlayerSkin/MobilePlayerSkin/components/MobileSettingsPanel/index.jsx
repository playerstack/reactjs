import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledSettingsOverlay,
  StyledSettingsHeader,
  StyledHeaderTitle,
  StyledIconButton,
  StyledSwitchesGrid,
  StyledSwitchItem,
  StyledSwitchIcon,
  StyledSwitchLabel,
  StyledSwitchValue,
  StyledSubPage,
  StyledSubContent,
  StyledOptionItem,
  StyledOptionList,
  StyledMainPage,
} from './MobileSettingsPanel.styled';
import {
  MobileSettingsGearIcon,
  MobileSpeedIcon,
  MobileCloseIcon,
  MobileBackIcon,
  MobileCaptionsIcon,
} from '@playerstack/core/icons/mobile';
import useAppSelector from '../../../../hooks/context/useAppSelector';

const SPEED_OPTIONS = [
  { label: '2', value: 2 },
  { label: '1.5', value: 1.5 },
  { label: '1.25', value: 1.25 },
  { label: 'Normal', value: 1 },
  { label: '0.75', value: 0.75 },
  { label: '0.5', value: 0.5 },
  { label: '0.25', value: 0.25 },
];

const MobileSettingsPanel = ({
  visible,
  qualities,
  captions,
  activeCaption,
  playbackRate,
  playbackQuality,
  onChangeSettings,
  onCaptionChange,
  onClose,
  adMode = false,
}) => {
  const { i18n } = useAppSelector();
  const [subMenu, setSubMenu] = React.useState(null); // null | 'quality' | 'speed' | 'captions'
  const [isAutoQuality, setIsAutoQuality] = React.useState(true);
  const [selectedQuality, setSelectedQuality] = React.useState(null); // null = auto

  // Sync selectedQuality when auto-selection updates playbackQuality
  React.useEffect(() => {
    if (playbackQuality == null || playbackQuality === 0 || qualities.length === 0) return;
    const qualityStr = playbackQuality.toString();
    const matchingQuality = qualities.find((q) => q.value === qualityStr);
    if (matchingQuality && isAutoQuality) {
      setSelectedQuality(qualityStr);
    }
  }, [playbackQuality, qualities]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = React.useCallback(
    (e) => {
      e.stopPropagation();
      setSubMenu(null);
      onClose();
    },
    [onClose],
  );

  const handleBack = React.useCallback((e) => {
    e.stopPropagation();
    setSubMenu(null);
  }, []);

  const handleQualityClick = React.useCallback(
    (value) => (e) => {
      e.stopPropagation();
      onChangeSettings({ quality: { value: String(value) } });
      if (value === 0) {
        setIsAutoQuality(true);
        // Keep selectedQuality as the current auto-resolved resolution
        // (don't set to null so the label shows the resolution)
      } else {
        setIsAutoQuality(false);
        setSelectedQuality(String(value));
      }
      setSubMenu(null);
      onClose();
    },
    [onChangeSettings, onClose],
  );

  const handleSpeedClick = React.useCallback(
    (value) => (e) => {
      e.stopPropagation();
      onChangeSettings({ speed: { value: String(value) } });
      setSubMenu(null);
      onClose();
    },
    [onChangeSettings, onClose],
  );

  const handleCaptionClick = React.useCallback(
    (language) => (e) => {
      e.stopPropagation();
      onCaptionChange(language);
      setSubMenu(null);
      onClose();
    },
    [onCaptionChange, onClose],
  );

  const currentCaptionLabel = React.useMemo(() => {
    if (!activeCaption || !captions || captions.length === 0) return i18n.off;
    const found = captions.find((c) => c.language === activeCaption);
    return found ? found.label : i18n.off;
  }, [activeCaption, captions, i18n]);

  const currentSpeedLabel = React.useMemo(() => {
    const found = SPEED_OPTIONS.find((s) => s.value === playbackRate);
    return found ? found.label : 'Normal';
  }, [playbackRate]);

  // Reset submenu when panel opens
  React.useEffect(() => {
    if (visible) {
      setSubMenu(null);
    }
  }, [visible]);

  const isSubMenuOpen = subMenu !== null;

  return (
    <StyledSettingsOverlay $visible={visible} onClick={(e) => e.stopPropagation()}>
      {/* Header — always rendered, content changes based on subMenu state */}
      <StyledSettingsHeader>
        {!isSubMenuOpen ? (
          <StyledIconButton $position="left" aria-label={i18n.settings}>
            <MobileSettingsGearIcon />
          </StyledIconButton>
        ) : (
          <StyledIconButton $position="left" onClick={handleBack} aria-label={i18n.back}>
            <MobileBackIcon />
          </StyledIconButton>
        )}
        <StyledHeaderTitle>
          {!isSubMenuOpen
            ? i18n.settings
            : subMenu === 'quality'
              ? i18n.quality
              : subMenu === 'captions'
                ? i18n.captions
                : i18n.speed}
        </StyledHeaderTitle>
        <StyledIconButton $position="right" onClick={handleClose} aria-label={i18n.close}>
          <MobileCloseIcon />
        </StyledIconButton>
      </StyledSettingsHeader>

      {/* Main page — slides left when submenu opens */}
      <StyledMainPage hidden={isSubMenuOpen}>
        <StyledSwitchesGrid>
          {qualities.length > 0 && (
            <StyledSwitchItem onClick={() => setSubMenu('quality')}>
              <StyledSwitchIcon>
                <MobileSettingsGearIcon />
              </StyledSwitchIcon>
              <StyledSwitchLabel>{i18n.quality}</StyledSwitchLabel>
              <StyledSwitchValue>
                {isAutoQuality
                  ? selectedQuality
                    ? `${i18n.auto} (${selectedQuality}p)`
                    : i18n.auto
                  : qualities.find((q) => q.value === selectedQuality)?.label || selectedQuality}
              </StyledSwitchValue>
            </StyledSwitchItem>
          )}
          {!adMode && (
            <StyledSwitchItem onClick={() => setSubMenu('speed')}>
              <StyledSwitchIcon>
                <MobileSpeedIcon />
              </StyledSwitchIcon>
              <StyledSwitchLabel>{i18n.speed}</StyledSwitchLabel>
              <StyledSwitchValue>{currentSpeedLabel}</StyledSwitchValue>
            </StyledSwitchItem>
          )}
          {captions && captions.length > 0 && (
            <StyledSwitchItem onClick={() => setSubMenu('captions')}>
              <StyledSwitchIcon>
                <MobileCaptionsIcon />
              </StyledSwitchIcon>
              <StyledSwitchLabel>{i18n.captions}</StyledSwitchLabel>
              <StyledSwitchValue>{currentCaptionLabel}</StyledSwitchValue>
            </StyledSwitchItem>
          )}
        </StyledSwitchesGrid>
      </StyledMainPage>

      {/* Sub page — slides in from right */}
      <StyledSubPage $visible={isSubMenuOpen}>
        <StyledSubContent>
          {subMenu === 'quality' && (
            <StyledOptionList>
              {qualities.map((q) => (
                <StyledOptionItem
                  key={q.value}
                  active={!isAutoQuality && q.value === selectedQuality}
                  onClick={handleQualityClick(q.value)}
                >
                  {q.label}
                </StyledOptionItem>
              ))}
              <StyledOptionItem active={isAutoQuality} onClick={handleQualityClick(0)}>
                {i18n.auto}
              </StyledOptionItem>
            </StyledOptionList>
          )}
          {subMenu === 'speed' && (
            <StyledOptionList>
              {SPEED_OPTIONS.map((s) => (
                <StyledOptionItem key={s.value} active={s.value === playbackRate} onClick={handleSpeedClick(s.value)}>
                  {s.label}
                </StyledOptionItem>
              ))}
            </StyledOptionList>
          )}
          {subMenu === 'captions' && (
            <StyledOptionList>
              <StyledOptionItem active={activeCaption === null} onClick={handleCaptionClick(null)}>
                {i18n.off}
              </StyledOptionItem>
              {(captions || []).map((c) => (
                <StyledOptionItem
                  key={c.language}
                  active={activeCaption === c.language}
                  onClick={handleCaptionClick(c.language)}
                >
                  {c.label}
                </StyledOptionItem>
              ))}
            </StyledOptionList>
          )}
        </StyledSubContent>
      </StyledSubPage>
    </StyledSettingsOverlay>
  );
};

MobileSettingsPanel.propTypes = {
  visible: PropTypes.bool.isRequired,
  qualities: PropTypes.array.isRequired,
  captions: PropTypes.array,
  activeCaption: PropTypes.string,
  playbackRate: PropTypes.number.isRequired,
  playbackQuality: PropTypes.number,
  onChangeSettings: PropTypes.func.isRequired,
  onCaptionChange: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(MobileSettingsPanel);
