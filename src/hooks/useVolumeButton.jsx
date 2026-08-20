import React from 'react';

import { mutedIcon, unmutedIcon } from '@playerstack/core/icons';
import Icon from '@components/Icon';
import { useAppSelector } from '@context/index';
import { buildIconProps } from '@playerstack/core';

const useVolumeButton = ({ fullscreen, isMuted, volume, forceMuted, changeVolume, onMutedClick }) => {
  const state = useAppSelector();

  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);
  const isMutedMemorized = React.useMemo(() => {
    return isMuted === true || volume === 0 || forceMuted;
  }, [isMuted, volume, forceMuted]);

  const renderIcon = React.useCallback(() => {
    if (isMutedMemorized) {
      return <Icon icon={mutedIcon} {...iconProps} />;
    }
    return <Icon icon={unmutedIcon} {...iconProps} />;
  }, [isMutedMemorized, iconProps]);

  const titleMemorized = React.useMemo(() => {
    if (forceMuted) {
      return state.i18n.thisVideoHasNoSound;
    } else if (isMutedMemorized) {
      return state.i18n.activateSound;
    }
    return state.i18n.mute;
  }, [isMutedMemorized, forceMuted, state.i18n]);

  const handleChange = React.useCallback(
    (v) => {
      if (forceMuted === false) {
        changeVolume(v / 100);
      }
    },
    [changeVolume, forceMuted],
  );

  const handleOnClick = React.useCallback(() => {
    if (forceMuted === false) {
      onMutedClick(isMutedMemorized);
    }
  }, [onMutedClick, isMutedMemorized, forceMuted]);

  return {
    titleMemorized,
    renderIcon,
    handleOnClick,
    handleChange,
  };
};

export default useVolumeButton;
