import React from 'react';
import PropTypes from 'prop-types';

import StyledGeneralButton from '@PlayerSkin/Commons/Buttons/StyledGeneralButton';
import Tooltip from '@PlayerSkin/Commons/Tooltip';
import { captionsIcon, captionsActiveIcon } from '@playerstack/core/icons';
import Icon from '@components/Icon';
import { useAppSelector } from '@context/index';
import { buildIconProps } from '@playerstack/core';

/**
 * Quick toggle button for captions.
 * - Single click: toggle captions on/off (uses last active or first available language)
 * - Icon highlights when captions are active
 */
const CaptionsButton = ({ fullscreen, captions, activeCaption, onCaptionChange }) => {
  const { i18n } = useAppSelector();
  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);
  const lastActiveLangRef = React.useRef(null);

  // Track last active language for re-enable
  React.useEffect(() => {
    if (activeCaption) {
      lastActiveLangRef.current = activeCaption;
    }
  }, [activeCaption]);

  const handleClick = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (activeCaption) {
        // Turn off
        onCaptionChange(null);
      } else {
        // Turn on: use last active or first available
        const lang = lastActiveLangRef.current || (captions[0]?.language ?? null);
        if (lang) {
          onCaptionChange(lang);
        }
      }
    },
    [activeCaption, captions, onCaptionChange],
  );

  if (!captions || captions.length === 0) return null;

  return (
    <Tooltip label={i18n.captions} fullscreen={fullscreen}>
      <StyledGeneralButton type="button" aria-label={i18n.captions} onClick={handleClick} isFullscreen={fullscreen}>
        <Icon icon={activeCaption ? captionsActiveIcon : captionsIcon} {...iconProps} />
      </StyledGeneralButton>
    </Tooltip>
  );
};

CaptionsButton.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  captions: PropTypes.array,
  activeCaption: PropTypes.string,
  onCaptionChange: PropTypes.func.isRequired,
};

export default React.memo(
  CaptionsButton,
  (p, n) =>
    p.fullscreen === n.fullscreen &&
    p.captions === n.captions &&
    p.activeCaption === n.activeCaption &&
    p.onCaptionChange === n.onCaptionChange,
);
