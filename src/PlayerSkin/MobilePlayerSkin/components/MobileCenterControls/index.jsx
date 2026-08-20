import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileCenterControls,
  StyledMobilePlayButton,
  StyledMobileNavButton,
  StyledMobileSpinner,
} from '@PlayerSkin/MobilePlayerSkin/components/MobileCenterControls/MobileCenterControls.styled';
import { mobilePlayIcon, mobilePauseIcon, mobilePrevIcon, mobileNextIcon } from '@playerstack/core/icons/mobile';
import { replayIcon } from '@playerstack/core/icons';
import Icon from '@components/Icon';

const MobileCenterControls = ({
  visible,
  isLoading,
  paused,
  ended,
  onPlayPause,
  onPrevious,
  onNext,
  showNavButtons = false,
  i18n,
}) => {
  const hasPrevious = typeof onPrevious === 'function';
  const hasNext = typeof onNext === 'function';
  const showPrevious = hasPrevious || showNavButtons;
  const showNext = hasNext || showNavButtons;

  const handlePrevious = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (hasPrevious) {
        onPrevious();
      }
    },
    [hasPrevious, onPrevious],
  );

  const handleNext = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (hasNext) {
        onNext();
      }
    },
    [hasNext, onNext],
  );

  const handlePlayPause = React.useCallback(
    (e) => {
      e.stopPropagation();
      onPlayPause();
    },
    [onPlayPause],
  );

  return (
    <StyledMobileCenterControls $visible={visible}>
      {showPrevious && (
        <StyledMobileNavButton aria-label={i18n.previous} onClick={handlePrevious} disabled={!hasPrevious}>
          <Icon icon={mobilePrevIcon} width="100%" height="100%" />
        </StyledMobileNavButton>
      )}

      {isLoading ? (
        <StyledMobileSpinner onClick={(e) => e.stopPropagation()}>
          <div />
        </StyledMobileSpinner>
      ) : (
        <StyledMobilePlayButton aria-label={paused ? i18n.play : i18n.pause} onClick={handlePlayPause}>
          {ended ? (
            <Icon icon={replayIcon} width="100%" height="100%" />
          ) : paused ? (
            <Icon icon={mobilePlayIcon} width="100%" height="100%" />
          ) : (
            <Icon icon={mobilePauseIcon} width="100%" height="100%" />
          )}
        </StyledMobilePlayButton>
      )}

      {showNext && (
        <StyledMobileNavButton aria-label={i18n.next} onClick={handleNext} disabled={!hasNext}>
          <Icon icon={mobileNextIcon} width="100%" height="100%" />
        </StyledMobileNavButton>
      )}
    </StyledMobileCenterControls>
  );
};

MobileCenterControls.propTypes = {
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  ended: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  showNavButtons: PropTypes.bool,
  i18n: PropTypes.shape({
    previous: PropTypes.string,
    next: PropTypes.string,
    play: PropTypes.string,
    pause: PropTypes.string,
  }).isRequired,
};

export default React.memo(MobileCenterControls);
