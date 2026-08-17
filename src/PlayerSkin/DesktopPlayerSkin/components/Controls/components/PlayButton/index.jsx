import React from 'react';
import PropTypes from 'prop-types';

import StyledGeneralButton from '../../../../../Commons/Buttons/StyledGeneralButton';
import Tooltip from '../../../../../Commons/Tooltip';
import { PauseIcon, PlayIcon, ReplayIcon } from '@playerstack/core/icons';
import { buildIconProps } from '@playerstack/core';
import useAppSelector from '../../../../../../hooks/context/useAppSelector';

const PlayButton = ({ fullscreen, paused, ended, onPlayClick, onPauseClick }) => {
  const { i18n } = useAppSelector();
  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  if (ended) {
    return (
      <Tooltip label={i18n.replay} fullscreen={fullscreen}>
        <StyledGeneralButton type="button" aria-label={i18n.replay} onClick={onPlayClick} isFullscreen={fullscreen}>
          <ReplayIcon {...iconProps} />
        </StyledGeneralButton>
      </Tooltip>
    );
  }

  return paused ? (
    <Tooltip label={i18n.play} fullscreen={fullscreen}>
      <StyledGeneralButton type="button" aria-label={i18n.play} onClick={onPlayClick} isFullscreen={fullscreen}>
        <PlayIcon {...iconProps} />
      </StyledGeneralButton>
    </Tooltip>
  ) : (
    <Tooltip label={i18n.pause} fullscreen={fullscreen}>
      <StyledGeneralButton type="button" aria-label={i18n.pause} onClick={onPauseClick} isFullscreen={fullscreen}>
        <PauseIcon {...iconProps} />
      </StyledGeneralButton>
    </Tooltip>
  );
};

PlayButton.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  ended: PropTypes.bool.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
};

export default React.memo(
  PlayButton,
  (p, n) =>
    p.fullscreen === n.fullscreen &&
    p.paused === n.paused &&
    p.ended === n.ended &&
    p.onPlayClick === n.onPlayClick &&
    p.onPauseClick === n.onPauseClick,
);
