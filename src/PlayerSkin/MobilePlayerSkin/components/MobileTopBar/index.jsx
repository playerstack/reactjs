import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileTopBar,
  StyledMobileSettingsButton,
} from '@PlayerSkin/MobilePlayerSkin/components/MobileTopBar/MobileTopBar.styled';
import { MobileSettingsGearIcon as SettingsGearIcon } from '@playerstack/core/icons/mobile';
import { CaptionsIcon, CastIcon } from '@playerstack/core/icons';

const MobileTopBar = ({
  visible,
  captions,
  activeCaption,
  onCaptionChange,
  onOpenSettings,
  settingsLabel,
  captionsLabel,
  hideSettings = false,
  showCast = false,
  castState = 'disconnected',
  onCastClick,
}) => {
  const hasCaptions = captions && captions.length > 0;

  const handleCaptionToggle = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (activeCaption) {
        onCaptionChange(null);
      } else if (captions && captions.length > 0) {
        onCaptionChange(captions[0].language);
      }
    },
    [activeCaption, captions, onCaptionChange],
  );

  return (
    <StyledMobileTopBar $visible={visible}>
      {hasCaptions && (
        <StyledMobileSettingsButton onClick={handleCaptionToggle} aria-label={captionsLabel || 'Captions'}>
          <CaptionsIcon width={24} height={24} active={!!activeCaption} />
        </StyledMobileSettingsButton>
      )}
      {showCast && (
        <StyledMobileSettingsButton
          onClick={(e) => {
            e.stopPropagation();
            onCastClick();
          }}
          aria-label="Google Cast"
          style={{ opacity: castState === 'connected' ? 1 : 0.7 }}
        >
          <CastIcon width={22} height={22} connected={castState === 'connected'} />
        </StyledMobileSettingsButton>
      )}
      {!hideSettings && (
        <StyledMobileSettingsButton onClick={onOpenSettings} aria-label={settingsLabel}>
          <SettingsGearIcon />
        </StyledMobileSettingsButton>
      )}
    </StyledMobileTopBar>
  );
};

MobileTopBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  captions: PropTypes.array,
  activeCaption: PropTypes.string,
  onCaptionChange: PropTypes.func,
  onOpenSettings: PropTypes.func.isRequired,
  settingsLabel: PropTypes.string.isRequired,
};

export default React.memo(MobileTopBar);
