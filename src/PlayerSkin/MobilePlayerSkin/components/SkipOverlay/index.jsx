import React from 'react';
import PropTypes from 'prop-types';

import { StyledSkipOverlay, StyledSkipIconContainer, StyledSkipText, StyledSkipTapArea } from './SkipOverlay.styled';
import { SkipChevronIcon } from '../../icons';

const SkipOverlay = ({ skipState, onTapLeft, onTapRight, i18n }) => {
  const secondsLabel = i18n?.seconds || 'seconds';

  const handleTapLeft = React.useCallback(
    (e) => {
      e.stopPropagation();
      onTapLeft();
    },
    [onTapLeft],
  );

  const handleTapRight = React.useCallback(
    (e) => {
      e.stopPropagation();
      onTapRight();
    },
    [onTapRight],
  );

  return (
    <>
      <StyledSkipTapArea direction="backward" onClick={handleTapLeft} aria-label="Skip backward" />
      <StyledSkipTapArea direction="forward" onClick={handleTapRight} aria-label="Skip forward" />

      {skipState.visible && skipState.direction === 'backward' && (
        <StyledSkipOverlay direction="backward">
          <StyledSkipIconContainer direction="backward">
            <SkipChevronIcon />
            <SkipChevronIcon />
            <SkipChevronIcon />
          </StyledSkipIconContainer>
          <StyledSkipText>
            {skipState.seconds} {secondsLabel}
          </StyledSkipText>
        </StyledSkipOverlay>
      )}

      {skipState.visible && skipState.direction === 'forward' && (
        <StyledSkipOverlay direction="forward">
          <StyledSkipIconContainer direction="forward">
            <SkipChevronIcon />
            <SkipChevronIcon />
            <SkipChevronIcon />
          </StyledSkipIconContainer>
          <StyledSkipText>
            {skipState.seconds} {secondsLabel}
          </StyledSkipText>
        </StyledSkipOverlay>
      )}
    </>
  );
};

SkipOverlay.propTypes = {
  skipState: PropTypes.shape({
    direction: PropTypes.oneOf(['forward', 'backward', null]),
    visible: PropTypes.bool.isRequired,
    seconds: PropTypes.number.isRequired,
  }).isRequired,
  onTapLeft: PropTypes.func.isRequired,
  onTapRight: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    seconds: PropTypes.string,
  }),
};

export default React.memo(SkipOverlay);
