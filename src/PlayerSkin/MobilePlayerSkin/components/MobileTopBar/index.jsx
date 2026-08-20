import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileTopBar,
  StyledMobileSettingsButton,
} from '@PlayerSkin/MobilePlayerSkin/components/MobileTopBar/MobileTopBar.styled';
import { mobileSettingsGearIcon } from '@playerstack/core/icons/mobile';
import { captionsIcon, captionsActiveIcon, castIcon } from '@playerstack/core/icons';
import Icon from '@components/Icon';

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
          <Icon icon={activeCaption ? captionsActiveIcon : captionsIcon} width={24} height={24} />
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
          <Icon icon={castIcon} width={22} height={22} />
        </StyledMobileSettingsButton>
      )}
      {!hideSettings && (
        <StyledMobileSettingsButton onClick={onOpenSettings} aria-label={settingsLabel}>
          <Icon icon={mobileSettingsGearIcon} width={24} height={24} />
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
