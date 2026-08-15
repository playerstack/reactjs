import React from 'react';

import useVolume from './useVolume';
import useFullscreen from './useFullscreen';
import { buildSettingsLabel } from '@playerstack/core';
import useAppSelector from './context/useAppSelector';
import { eventsKeyCodes, keyMappings } from '@playerstack/core';
import { reduceSeekState } from '@playerstack/core';

const usePlayerSkinWrapper = ({
  ref,
  playerRef,
  url,
  player,
  fullHDQualityBreak,
  sources,
  prevented,
  muted,
  updateState,
  ads,
}) => {
  const { i18n } = useAppSelector();
  const videoRef = React.useRef(null);
  const playerSkinRef = React.useRef(null);
  const updateFullscreenState = React.useCallback(
    ({ fullscreen }) => {
      updateState((prev) => ({
        ...prev,
        isFullScreen: fullscreen,
      }));
    },
    [updateState],
  );

  const { requestFullscreen, exitFullscreen, requestToggleFullscreen } = useFullscreen({
    updateState: updateFullscreenState,
    videoRef,
    playerRef,
  });

  const qualities = React.useMemo(() => {
    if (sources.length > 0) {
      return sources.map((source) => ({
        label: buildSettingsLabel({
          label: 'quality',
          value: source.resolution.toString(),
          i18n: i18n,
        }),
        value: source.resolution.toString(),
        isFullHD: fullHDQualityBreak !== undefined && source.resolution >= fullHDQualityBreak,
      }));
    }
    return [];
  }, [sources, fullHDQualityBreak, i18n]);

  const { onMutedClick, changeVolume, updateVolumeWithCallback } = useVolume({
    prevented,
    muted,
    videoRef,
    src: url,
    updateState: ({ muted, volume }) =>
      updateState((prev) => ({
        ...prev,
        isMuted: muted ?? false,
        volume: volume ?? 0,
      })),
  });

  const changeCurrentTime = React.useCallback(
    (time) => {
      if (!player) {
        return;
      }

      updateState((prev) => ({ ...prev, played: time }));
      player.seekTo(time);
    },
    [player, updateState],
  );

  const updateCurrentTimeWithCallback = React.useCallback(
    (callback) => {
      if (!player) {
        return;
      }
      const currenTime = player.getCurrentTime() || 0;
      const duration = player.getDuration() || 0;
      const newCurrentTime = callback(currenTime, duration);
      changeCurrentTime(newCurrentTime);
    },
    [player, changeCurrentTime],
  );

  // Use refs for frequently-changing callbacks to keep memorizedProps stable
  const onMutedClickRef = React.useRef(onMutedClick);
  onMutedClickRef.current = onMutedClick;
  const changeCurrentTimeRef = React.useRef(changeCurrentTime);
  changeCurrentTimeRef.current = changeCurrentTime;
  const memorizedProps = React.useMemo(() => {
    return {
      onPlayClick: () => updateState((prev) => ({ ...prev, playing: true })),
      onPauseClick: () => updateState((prev) => ({ ...prev, playing: false })),
      onTogglePlay: () =>
        updateState((prev) => ({
          ...prev,
          playing: !prev.playing,
        })),
      changePlaybackRate: (rate) => updateState((prev) => ({ ...prev, playbackRate: rate })),
      changePlayBackQuality: (quality) => {
        updateState((prev) => ({ ...prev, playbackQuality: quality }));
      },
      requestPictureInPicture: () => updateState((prev) => ({ ...prev, isPIP: true })),
      exitPictureInPicture: () => updateState((prev) => ({ ...prev, isPIP: false })),
      onSeeking: (seeking) => updateState((prev) => reduceSeekState(prev, seeking)),
      onMutedClick: () => onMutedClickRef.current(),
      onLoopClick: () => updateState((prev) => ({ ...prev, loop: !prev.loop })),
      onCaptionChange: (language) => updateState((prev) => ({ ...prev, activeCaption: language })),
      onPreventedClick: () => updateState((prev) => ({ ...prev, isMuted: false, volume: 1 })),
      changeCurrentTime: (time) => changeCurrentTimeRef.current(time),
    };
    // updateState is stable (React setState), refs handle the rest
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateState]);

  const handleKeyDown = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const keyMapping = eventsKeyCodes[e.which || e.keyCode] || keyMappings[e.key];
      if (!player) {
        return;
      }

      // Block seeking when ads are active (timeline not draggable)
      const isAdActive = ads !== null && ads !== undefined;
      if (isAdActive) {
        if (keyMapping === 'ARROW_LEFT_KEY' || keyMapping === 'ARROW_RIGHT_KEY') {
          return;
        }
      }

      playerSkinRef.current?.showControls();

      switch (keyMapping) {
        case 'SPACE_KEY': {
          updateState((prev) => ({ ...prev, playing: !prev.playing }));
          break;
        }
        case 'F_KEY': {
          requestToggleFullscreen();
          break;
        }
        case 'MUTE_KEY': {
          onMutedClick();
          break;
        }
        case 'ARROW_LEFT_KEY': {
          updateCurrentTimeWithCallback((currentTime) => {
            const newTime = currentTime - 5;
            return newTime < 0 ? 0 : newTime;
          });
          break;
        }
        case 'ARROW_RIGHT_KEY': {
          updateCurrentTimeWithCallback((currentTime, duration) => {
            const newTime = currentTime + 5;
            return newTime >= duration ? duration : newTime;
          });
          break;
        }
        case 'ARROW_UP_KEY': {
          updateVolumeWithCallback((lastVolume) => {
            const newVolume = lastVolume + 0.1;
            return newVolume >= 1 ? 1 : newVolume;
          });
          break;
        }
        case 'ARROW_DOWN_KEY': {
          updateVolumeWithCallback((lastVolume) => {
            const newVolume = lastVolume - 0.1;
            return newVolume < 0 ? 0 : newVolume;
          });
          break;
        }
        default: {
          break;
        }
      }
    },
    [
      player,
      ads,
      updateState,
      requestToggleFullscreen,
      onMutedClick,
      updateCurrentTimeWithCallback,
      updateVolumeWithCallback,
    ],
  );

  React.useImperativeHandle(ref, () => ({
    handleKeyDown,
  }));

  React.useEffect(() => {
    videoRef.current = player?.getPlayer() ?? null;
  }, [player]);

  return {
    playerSkinRef,
    videoRef,
    qualities,
    memorizedProps,
    handleKeyDown,
    requestFullscreen,
    exitFullscreen,
    changeVolume,
  };
};

export default usePlayerSkinWrapper;
