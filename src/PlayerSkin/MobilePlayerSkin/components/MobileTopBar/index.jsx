import React from 'react';
import PropTypes from 'prop-types';

import { StyledMobileTopBar, StyledMobileSettingsButton } from './MobileTopBar.styled';
import { SettingsGearIcon } from '../../icons';
import CaptionsIcon from '../../../Commons/Icons/CaptionsIcon';

const MobileTopBar = ({
  visible,
  captions,
  activeCaption,
  onCaptionChange,
  onOpenSettings,
  settingsLabel,
  captionsLabel,
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
      <StyledMobileSettingsButton onClick={onOpenSettings} aria-label={settingsLabel}>
        <SettingsGearIcon />
      </StyledMobileSettingsButton>
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
