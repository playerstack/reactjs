import React from 'react';
import PropTypes from 'prop-types';

import { StyledSliderContainer } from './Volume.styled';
import StyledGeneralButton from '../../../Commons/Buttons/StyledGeneralButton';
import Tooltip from '../../../Commons/Tooltip';
import VolumeSlider from '../Controls/components/VolumeSlider';
import { useAppSelector } from '../../../../context/index';
import useVolumeButton from '../../../../hooks/useVolumeButton';
import { sliderWidth as sliderWith } from '@playerstack/core';
import { StyledVolumePercentTooltip } from './VolumePercentTooltip.styled';

const Volume = ({ fullscreen, isMuted, volume, forceMuted, changeVolume, onMutedClick }) => {
  const state = useAppSelector();
  const [sliderHovering, setSliderHovering] = React.useState(false);

  const { titleMemorized, renderIcon, handleOnClick, handleChange } = useVolumeButton({
    fullscreen,
    isMuted,
    volume,
    forceMuted,
    changeVolume,
    onMutedClick,
  });

  const handleSliderEnter = React.useCallback(() => setSliderHovering(true), []);
  const handleSliderLeave = React.useCallback(() => {
    if (!state.volumeSliding) setSliderHovering(false);
  }, [state.volumeSliding]);

  // Hide when drag ends
  React.useEffect(() => {
    if (!state.volumeSliding) setSliderHovering(false);
  }, [state.volumeSliding]);

  const showTooltip = sliderHovering || state.volumeSliding;
  const effectiveVolume = isMuted ? 0 : volume;
  // Tooltip position: thumb is at (volume * sliderWidth) from left of slider
  // SliderContainer has Tooltip wrapper (~36-54px) + slider. Tooltip wrapper width = button size.
  // We position relative to StyledSliderContainer which wraps everything.
  const buttonWidth = fullscreen ? 54 : 36;
  const tooltipLeft = buttonWidth + effectiveVolume * sliderWith(fullscreen);

  return (
    <StyledSliderContainer isSliding={state.volumeSliding} isFullscreen={fullscreen}>
      <Tooltip label={titleMemorized} fullscreen={fullscreen} disabled={state.volumeSliding || sliderHovering}>
        <StyledGeneralButton
          type="button"
          aria-label={titleMemorized}
          onClick={handleOnClick}
          isFullscreen={fullscreen}
          isFakeDisabled={forceMuted}
        >
          {renderIcon()}
        </StyledGeneralButton>
      </Tooltip>
      <VolumeSlider
        fullscreen={fullscreen}
        value={effectiveVolume * 100}
        isDisabled={forceMuted}
        onChange={handleChange}
        onMouseEnter={handleSliderEnter}
        onMouseLeave={handleSliderLeave}
      />
      {showTooltip && !forceMuted && (
        <StyledVolumePercentTooltip style={{ left: `${tooltipLeft}px` }} $fullscreen={fullscreen}>
          {Math.round(effectiveVolume * 100)}%
        </StyledVolumePercentTooltip>
      )}
    </StyledSliderContainer>
  );
};

Volume.propTypes = {
  fullscreen: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  onMutedClick: PropTypes.func.isRequired,
  forceMuted: PropTypes.bool.isRequired,
  changeVolume: PropTypes.func.isRequired,
};

export default React.memo(
  Volume,
  (p, n) =>
    p.fullscreen === n.fullscreen &&
    p.isMuted === n.isMuted &&
    p.volume === n.volume &&
    p.forceMuted === n.forceMuted &&
    p.onMutedClick === n.onMutedClick &&
    p.changeVolume === n.changeVolume,
);
