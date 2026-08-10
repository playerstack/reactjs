import React from 'react';

import { indexBy } from '../../utils';
import useDeepCompareMemoize from '../../hooks/useDeepCompareMemoize';
import { getRecommendedVideoQuality, measureNetworkSpeedGeneratedFile } from '../MediaPlayer.contants';

const usePlayerProxy = ({
  onBuffer,
  onBufferEnd,
  onDisablePIP,
  onDuration,
  onEnablePIP,
  onEnded,
  onError,
  onPause,
  onPlay,
  onPlayBackQualityChange,
  onPlayBackRateChange,
  onProgress,
  onReady,
  onSeek,
  onStart,
  onLoaded,
  onMount,
  updateState,
  playerState,
  extraProps: { url, sources, fullHDQualityBreak, prevented },
}) => {
  const [autoVideoUrl, setAutoVideoUrl] = React.useState(null);

  // Consumers often pass `sources` as an inline array, producing a new reference
  // on every render. Stabilize it with a single deep comparison so downstream
  // memos/effects rely on cheap reference equality and don't re-run needlessly.
  const stableSources = useDeepCompareMemoize(sources);

  // Index sources by resolution once per real source change — reused by both the
  // auto-quality effect and the videoUrl memo.
  const sourcesByResolution = React.useMemo(
    () => (stableSources.length > 0 ? indexBy(stableSources, 'resolution') : null),
    [stableSources],
  );

  // Stable ref for updateState to prevent infinite re-render loops.
  // updateState (React setState) is stable by React's contract, but its identity
  // can change when passed through intermediate components. Using a ref avoids
  // re-triggering the network speed useEffect on every render.
  const updateStateRef = React.useRef(updateState);
  updateStateRef.current = updateState;

  // Keep all consumer callbacks in refs so the proxy object stays stable
  const callbacksRef = React.useRef({
    onBuffer,
    onBufferEnd,
    onDisablePIP,
    onDuration,
    onEnablePIP,
    onEnded,
    onError,
    onPause,
    onPlay,
    onPlayBackQualityChange,
    onPlayBackRateChange,
    onProgress,
    onReady,
    onSeek,
    onStart,
    onLoaded,
    onMount,
  });
  callbacksRef.current = {
    onBuffer,
    onBufferEnd,
    onDisablePIP,
    onDuration,
    onEnablePIP,
    onEnded,
    onError,
    onPause,
    onPlay,
    onPlayBackQualityChange,
    onPlayBackRateChange,
    onProgress,
    onReady,
    onSeek,
    onStart,
    onLoaded,
    onMount,
  };

  // Keep reactive values in refs for the proxy closures
  const preventedRef = React.useRef(prevented);
  preventedRef.current = prevented;
  const seekingRef = React.useRef(playerState.seeking);
  seekingRef.current = playerState.seeking;

  // Warn once when fullHDQualityBreak doesn't match any available resolution.
  React.useEffect(() => {
    if (!sourcesByResolution) return;
    if (fullHDQualityBreak !== undefined && !(fullHDQualityBreak in sourcesByResolution)) {
      const resolutions = Object.keys(sourcesByResolution).join(', ');
      console.error(
        `PlayerStack: Invalid fullHDQualityBreak value "${fullHDQualityBreak}". Accepted resolutions are: ${resolutions}. Falling back to highest available.`,
      );
    }
  }, [sourcesByResolution, fullHDQualityBreak]);

  // Auto-select the best quality via a network speed measurement, once per source set.
  // Runs only when sources change (stableSources), never on unrelated re-renders,
  // so it can't override a quality the user picked manually.
  React.useEffect(() => {
    if (!sourcesByResolution) {
      setAutoVideoUrl(null);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const speed = await measureNetworkSpeedGeneratedFile();
        if (cancelled) return;
        const availableResolutions = Object.keys(sourcesByResolution).map(Number);
        const recommendedQuality = getRecommendedVideoQuality(speed || 0, availableResolutions);
        const fallback = stableSources[0];

        if (speed !== null && recommendedQuality) {
          setAutoVideoUrl(sourcesByResolution[recommendedQuality]?.src ?? fallback.src);
          autoResolutionRef.current = recommendedQuality;
          updateStateRef.current((prev) => ({ ...prev, playbackQuality: recommendedQuality }));
        } else {
          setAutoVideoUrl(fallback.src);
          autoResolutionRef.current = fallback.resolution;
          updateStateRef.current((prev) => ({ ...prev, playbackQuality: fallback.resolution }));
        }
      } catch {
        if (cancelled) return;
        const fallback = stableSources[0];
        setAutoVideoUrl(fallback.src);
        autoResolutionRef.current = fallback.resolution;
        updateStateRef.current((prev) => ({ ...prev, playbackQuality: fallback.resolution }));
      }
    })();
    return () => {
      cancelled = true;
    };
    // stableSources is the source of truth; sourcesByResolution derives from it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableSources]);

  // Store the auto-determined resolution so we can restore it when user re-selects "Auto"
  const autoResolutionRef = React.useRef(null);

  const { playbackQuality } = playerState;

  // When user switches back to auto (playbackQuality === 0), restore the auto-determined resolution
  React.useEffect(() => {
    if (playbackQuality === 0 && autoResolutionRef.current !== null) {
      updateStateRef.current((prev) => ({ ...prev, playbackQuality: autoResolutionRef.current }));
    }
  }, [playbackQuality]);

  const videoUrl = React.useMemo(() => {
    if (!sourcesByResolution) {
      return url;
    }
    // playbackQuality === 0 means "auto" — use the auto-selected URL
    if (playbackQuality === null || playbackQuality === undefined || playbackQuality === 0) {
      return autoVideoUrl ?? stableSources[0].src;
    }
    return sourcesByResolution[playbackQuality]?.src ?? stableSources[0].src;
  }, [url, stableSources, sourcesByResolution, playbackQuality, autoVideoUrl]);

  // Build proxy object once — uses refs to always read latest callback/state
  const proxyMemorized = React.useMemo(
    () => ({
      onBuffer: (...args) => {
        if (callbacksRef.current.onBuffer) {
          callbacksRef.current.onBuffer(...args);
        }
      },
      onBufferEnd: (...args) => {
        if (callbacksRef.current.onBufferEnd) {
          callbacksRef.current.onBufferEnd(...args);
        }
      },
      onDisablePIP: (e) => {
        if (callbacksRef.current.onDisablePIP) {
          callbacksRef.current.onDisablePIP(e);
        }
        updateStateRef.current((prev) => ({ ...prev, isPIP: false }));
      },
      onDuration: (duration) => {
        if (callbacksRef.current.onDuration) {
          callbacksRef.current.onDuration(duration);
        }
        updateStateRef.current((prev) => ({ ...prev, duration: duration }));
      },
      onEnablePIP: (e) => {
        if (callbacksRef.current.onEnablePIP) {
          callbacksRef.current.onEnablePIP(e);
        }
        updateStateRef.current((prev) => ({ ...prev, isPIP: true }));
      },
      onEnded: (e) => {
        if (callbacksRef.current.onEnded) {
          callbacksRef.current.onEnded(e);
        }
        updateStateRef.current((prev) => ({ ...prev, isEnded: true }));
      },
      onError: (e, data, hls, HLS) => {
        if (callbacksRef.current.onError) {
          callbacksRef.current.onError(e, data, hls, HLS);
        }
        // Skip recoverable errors that hls.js handles internally
        const skipErrors = ['networkError'];
        const recoverableDetails = [
          'bufferStalledError',
          'bufferNudgeOnStall',
          'bufferAppendError',
          'fragParsingError',
        ];
        const isRecoverable =
          skipErrors.includes(data?.type) ||
          (data?.type === 'mediaError' && recoverableDetails.includes(data?.details));
        if (!isRecoverable) {
          updateStateRef.current((prev) => ({
            ...prev,
            kernelError: data
              ? {
                  type: data?.type || 'UnknownError',
                  detail: data?.error?.message || 'Something was wrong with the playback. Please try again.',
                }
              : null,
            isLoading: false,
            playing: false,
          }));
        }
      },
      onPause: (e) => {
        if (callbacksRef.current.onPause) {
          callbacksRef.current.onPause(e);
        }
        updateStateRef.current((prev) => ({ ...prev, playing: false }));
      },
      onPlay: (e) => {
        if (callbacksRef.current.onPlay) {
          callbacksRef.current.onPlay(e);
        }
        updateStateRef.current((prev) => {
          // During quality switch, hasAudio check may fire before audio metadata loads.
          // Preserve previous hasAudio=true to avoid false "no sound" state.
          const audioFromEvent = e?.hasAudio ?? false;
          const resolvedHasAudio = preventedRef.current ? true : audioFromEvent || prev.hasAudio || false;
          return {
            ...prev,
            playing: true,
            isEnded: false,
            hasAudio: resolvedHasAudio,
          };
        });
      },
      onPlayBackQualityChange: (quality) => {
        if (callbacksRef.current.onPlayBackQualityChange) {
          callbacksRef.current.onPlayBackQualityChange(quality);
        }
        updateStateRef.current((prev) => ({ ...prev, playbackQuality: quality }));
      },
      onPlayBackRateChange: (rate) => {
        if (callbacksRef.current.onPlayBackRateChange) {
          callbacksRef.current.onPlayBackRateChange(rate);
        }
        updateStateRef.current((prev) => ({ ...prev, playbackRate: rate }));
      },
      onProgress: (state) => {
        if (callbacksRef.current.onProgress) {
          callbacksRef.current.onProgress(state);
        }
        if (!seekingRef.current) {
          updateStateRef.current((prev) => ({ ...prev, played: state.playedSeconds, loaded: state.loaded }));
        }
      },
      onReady: (e) => {
        if (callbacksRef.current.onReady) {
          callbacksRef.current.onReady(e);
        }
        updateStateRef.current((prev) => ({ ...prev, isLoading: false }));
      },
      onSeek: (time) => {
        if (callbacksRef.current.onSeek) {
          callbacksRef.current.onSeek(time);
        }
        updateStateRef.current((prev) => ({ ...prev, seek: time }));
      },
      onStart: () => {
        if (callbacksRef.current.onStart) {
          callbacksRef.current.onStart();
        }
      },
      onLoaded: (...args) => {
        if (callbacksRef.current.onLoaded) {
          callbacksRef.current.onLoaded(...args);
        }
      },
      onMount: (...args) => {
        if (callbacksRef.current.onMount) {
          callbacksRef.current.onMount(...args);
        }
      },
    }),
    // Empty deps — stable forever, reads current values from refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    ...proxyMemorized,
    videoUrl: videoUrl ?? autoVideoUrl,
  };
};

export default usePlayerProxy;
