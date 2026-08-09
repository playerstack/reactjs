import React from 'react';
import PropTypes from 'prop-types';

import StyledGeneralButton from '../../../../../Commons/Buttons/StyledGeneralButton';
import PreviousTrackIcon from '../../../../../Commons/Icons/PreviousTrackIcon';
import NextTrackIcon from '../../../../../Commons/Icons/NextTrackIcon';
import { buildIconProps } from '../../../../DesktopPlayerSkin.constants';
import useAppSelector from '../../../../../../hooks/context/useAppSelector';

export const PreviousButton = React.memo(({ fullscreen, onPrevious, showNavButtons = false }) => {
  const { i18n } = useAppSelector();
  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  const hasPrevious = typeof onPrevious === 'function';
  if (!hasPrevious && !showNavButtons) return null;

  return (
    <StyledGeneralButton
      type="button"
      aria-label={i18n.previous || 'Previous'}
      title={i18n.previous || 'Previous'}
      onClick={hasPrevious ? onPrevious : undefined}
      isFullscreen={fullscreen}
      isTooltipActive
      isFakeDisabled={!hasPrevious}
    >
      <PreviousTrackIcon {...iconProps} />
    </StyledGeneralButton>
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
    <StyledGeneralButton
      type="button"
      aria-label={i18n.next || 'Next'}
      title={i18n.next || 'Next'}
      onClick={hasNext ? onNext : undefined}
      isFullscreen={fullscreen}
      isTooltipActive
      isFakeDisabled={!hasNext}
    >
      <NextTrackIcon {...iconProps} />
    </StyledGeneralButton>
  );
});

NextButton.displayName = 'NextButton';

NextButton.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  onNext: PropTypes.func,
  showNavButtons: PropTypes.bool,
};
