import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMobileCenterControls,
  StyledMobilePlayButton,
  StyledMobileNavButton,
  StyledMobileSpinner,
} from './MobileCenterControls.styled';
import { PlayIcon, PauseIcon, PrevIcon, NextIcon } from '../../icons';

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
    <StyledMobileCenterControls visible={visible}>
      {showPrevious && (
        <StyledMobileNavButton
          aria-label={i18n.previous || 'Previous'}
          onClick={handlePrevious}
          disabled={!hasPrevious}
        >
          <PrevIcon />
        </StyledMobileNavButton>
      )}

      {isLoading ? (
        <StyledMobileSpinner onClick={(e) => e.stopPropagation()}>
          <div />
        </StyledMobileSpinner>
      ) : (
        <StyledMobilePlayButton aria-label={paused ? i18n.play : i18n.pause} onClick={handlePlayPause}>
          {paused || ended ? <PlayIcon /> : <PauseIcon />}
        </StyledMobilePlayButton>
      )}

      {showNext && (
        <StyledMobileNavButton aria-label={i18n.next || 'Next'} onClick={handleNext} disabled={!hasNext}>
          <NextIcon />
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
