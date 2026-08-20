import React from 'react';
import PropTypes from 'prop-types';

import StyledGeneralButton from '@PlayerSkin/Commons/Buttons/StyledGeneralButton';
import Tooltip from '@PlayerSkin/Commons/Tooltip';
import { fullscreenIcon, unfullscreenIcon } from '@playerstack/core/icons';
import Icon from '@components/Icon';
import { buildIconProps } from '@playerstack/core';
import { useAppSelector } from '@context/index';

const FullscreenButton = ({ fullscreen, requestFullscreen, exitFullscreen }) => {
  const { i18n } = useAppSelector();
  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  return fullscreen ? (
    <Tooltip label={i18n.exitFullScreenMode} fullscreen>
      <StyledGeneralButton type="button" aria-label={i18n.exitFullScreenMode} onClick={exitFullscreen} isFullscreen>
        <Icon icon={unfullscreenIcon} {...iconProps} />
      </StyledGeneralButton>
    </Tooltip>
  ) : (
    <Tooltip label={i18n.fullScreen}>
      <StyledGeneralButton type="button" aria-label={i18n.fullScreen} onClick={requestFullscreen}>
        <Icon icon={fullscreenIcon} {...iconProps} />
      </StyledGeneralButton>
    </Tooltip>
  );
};

FullscreenButton.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  requestFullscreen: PropTypes.func.isRequired,
  exitFullscreen: PropTypes.func.isRequired,
};

export default React.memo(
  FullscreenButton,
  (p, n) =>
    p.fullscreen === n.fullscreen &&
    p.requestFullscreen === n.requestFullscreen &&
    p.exitFullscreen === n.exitFullscreen,
);
