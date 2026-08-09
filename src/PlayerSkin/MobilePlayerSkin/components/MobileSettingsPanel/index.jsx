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
import { SettingsGearIcon, SpeedIcon, CloseIcon, BackIcon } from '../../icons';
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

const MobileSettingsPanel = ({ visible, qualities, playbackRate, onChangeSettings, onClose }) => {
  const { i18n } = useAppSelector();
  const [subMenu, setSubMenu] = React.useState(null); // null | 'quality' | 'speed'
  const [selectedQuality, setSelectedQuality] = React.useState(null); // null = auto

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
      setSelectedQuality(value === 0 ? null : String(value));
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
          <StyledIconButton $position="left" aria-label="Settings">
            <SettingsGearIcon />
          </StyledIconButton>
        ) : (
          <StyledIconButton $position="left" onClick={handleBack} aria-label="Back">
            <BackIcon />
          </StyledIconButton>
        )}
        <StyledHeaderTitle>
          {!isSubMenuOpen
            ? i18n.settings || 'Configuración'
            : subMenu === 'quality'
              ? i18n.quality || 'Calidad'
              : i18n.speed || 'Velocidad'}
        </StyledHeaderTitle>
        <StyledIconButton $position="right" onClick={handleClose} aria-label="Close">
          <CloseIcon />
        </StyledIconButton>
      </StyledSettingsHeader>

      {/* Main page — slides left when submenu opens */}
      <StyledMainPage hidden={isSubMenuOpen}>
        <StyledSwitchesGrid>
          {qualities.length > 0 && (
            <StyledSwitchItem onClick={() => setSubMenu('quality')}>
              <StyledSwitchIcon>
                <SettingsGearIcon />
              </StyledSwitchIcon>
              <StyledSwitchLabel>{i18n.quality || 'Calidad'}</StyledSwitchLabel>
              <StyledSwitchValue>
                {selectedQuality === null
                  ? 'Auto'
                  : qualities.find((q) => q.value === selectedQuality)?.label || selectedQuality}
              </StyledSwitchValue>
            </StyledSwitchItem>
          )}
          <StyledSwitchItem onClick={() => setSubMenu('speed')}>
            <StyledSwitchIcon>
              <SpeedIcon />
            </StyledSwitchIcon>
            <StyledSwitchLabel>{i18n.speed || 'Velocidad'}</StyledSwitchLabel>
            <StyledSwitchValue>{currentSpeedLabel}</StyledSwitchValue>
          </StyledSwitchItem>
        </StyledSwitchesGrid>
      </StyledMainPage>

      {/* Sub page — slides in from right */}
      <StyledSubPage $visible={isSubMenuOpen}>
        <StyledSubContent>
          {subMenu === 'quality' && (
            <StyledOptionList>
              {qualities.map((q) => (
                <StyledOptionItem key={q.value} active={q.value === selectedQuality} onClick={handleQualityClick(q.value)}>
                  {q.label}
                </StyledOptionItem>
              ))}
              <StyledOptionItem active={selectedQuality === null} onClick={handleQualityClick(0)}>
                auto
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
        </StyledSubContent>
      </StyledSubPage>
    </StyledSettingsOverlay>
  );
};

MobileSettingsPanel.propTypes = {
  visible: PropTypes.bool.isRequired,
  qualities: PropTypes.array.isRequired,
  playbackRate: PropTypes.number.isRequired,
  onChangeSettings: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(MobileSettingsPanel);
