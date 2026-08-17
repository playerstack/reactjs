import React from 'react';
import PropTypes from 'prop-types';

import StyledGeneralButton from '../../../../../Commons/Buttons/StyledGeneralButton';
import Tooltip from '../../../../../Commons/Tooltip';
import { PreviousTrackIcon, NextTrackIcon } from '@playerstack/core/icons';
import { buildIconProps } from '@playerstack/core';
import useAppSelector from '../../../../../../hooks/context/useAppSelector';

export const PreviousButton = React.memo(({ fullscreen, onPrevious, showNavButtons = false }) => {
  const { i18n } = useAppSelector();
  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  const hasPrevious = typeof onPrevious === 'function';
  if (!hasPrevious && !showNavButtons) return null;

  return (
    <Tooltip label={i18n.previous} fullscreen={fullscreen}>
      <StyledGeneralButton
        type="button"
        aria-label={i18n.previous}
        onClick={hasPrevious ? onPrevious : undefined}
        isFullscreen={fullscreen}
        isFakeDisabled={!hasPrevious}
      >
        <PreviousTrackIcon {...iconProps} />
      </StyledGeneralButton>
    </Tooltip>
  );
});

PreviousButton.displayName = 'PreviousButton';

PreviousButton.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  onPrevious: PropTypes.func,
  showNavButtons: PropTypes.bool,
};

export const NextButton = React.memo(({ fullscreen, onNext, showNavButtons = false }) => {
  const { i18n } = useAppSelector();
  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  const hasNext = typeof onNext === 'function';
  if (!hasNext && !showNavButtons) return null;

  return (
    <Tooltip label={i18n.next} fullscreen={fullscreen}>
      <StyledGeneralButton
        type="button"
        aria-label={i18n.next}
        onClick={hasNext ? onNext : undefined}
        isFullscreen={fullscreen}
        isFakeDisabled={!hasNext}
      >
        <NextTrackIcon {...iconProps} />
      </StyledGeneralButton>
    </Tooltip>
  );
});

NextButton.displayName = 'NextButton';

NextButton.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  onNext: PropTypes.func,
  showNavButtons: PropTypes.bool,
};
