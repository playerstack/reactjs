import React from 'react';

/**
 * Hook to manage ads overlay state.
 *
 * Tracks elapsed ad time and determines when the skip button should appear.
 * Detects ad video ended to auto-complete.
 * Pauses video on ad click (user opens link).
 *
 * @param {object} params
 * @param {object|null} params.ads - Ads configuration object
 * @param {number} params.currentTime - Current playback time in seconds
 * @param {number} params.duration - Video duration in seconds
 * @param {boolean} params.ended - Whether video has ended
 * @param {function} params.onPauseClick - Callback to pause video
 * @returns {object} Ad state and handlers
 */
const useAds = ({ ads, currentTime, duration, ended, onPauseClick }) => {
  const isAdActive = ads !== null && ads !== undefined;

  // Whether skip button has configurable time (skipAfter is a number)
  const hasSkipTimer = isAdActive && typeof ads.skipAfter === 'number' && ads.skipAfter > 0;

  // Whether user can skip (elapsed time >= skipAfter)
  const canSkip = React.useMemo(() => {
    if (!isAdActive) return false;
    if (!hasSkipTimer) return false;
    return currentTime >= ads.skipAfter;
  }, [isAdActive, hasSkipTimer, currentTime, ads]);

  // Countdown seconds remaining before skip is available
  const skipCountdown = React.useMemo(() => {
    if (!isAdActive || !hasSkipTimer) return 0;
    const remaining = Math.ceil(ads.skipAfter - currentTime);
    return remaining > 0 ? remaining : 0;
  }, [isAdActive, hasSkipTimer, currentTime, ads]);

  // Progress of ad timer (0 to 1) — used for the timeline-as-timer
  // When hasSkipTimer: progress goes from 0 to 1 as currentTime approaches skipAfter
  // When no skip timer: progress is normal timeline (currentTime / duration)
  const adProgress = React.useMemo(() => {
    if (!isAdActive) return 0;
    if (hasSkipTimer) {
      const progress = currentTime / ads.skipAfter;
      return progress > 1 ? 1 : progress;
    }
    // No skip timer — use normal timeline progress
    if (duration > 0) {
      return currentTime / duration;
    }
    return 0;
  }, [isAdActive, hasSkipTimer, currentTime, duration, ads]);

  // Detect ad video ended — call onAdComplete to restore main content
  const adCompletedRef = React.useRef(false);
  React.useEffect(() => {
    if (isAdActive && ended && !adCompletedRef.current) {
      adCompletedRef.current = true;
      if (ads.onAdComplete) {
        ads.onAdComplete();
      }
    }
    // Reset flag when ad becomes inactive
    if (!isAdActive) {
      adCompletedRef.current = false;
    }
  }, [isAdActive, ended, ads]);

  // Block media session seek controls during ads
  React.useEffect(() => {
    if (!isAdActive || typeof navigator === 'undefined' || !navigator.mediaSession) return;

    // Register no-op handlers — overrides browser default seek behavior
    const block = () => {};
    navigator.mediaSession.setActionHandler('seekbackward', block);
    navigator.mediaSession.setActionHandler('seekforward', block);
    navigator.mediaSession.setActionHandler('seekto', block);

    return () => {
      navigator.mediaSession.setActionHandler('seekbackward', null);
      navigator.mediaSession.setActionHandler('seekforward', null);
      navigator.mediaSession.setActionHandler('seekto', null);
    };
  }, [isAdActive]);

  const onSkipClick = React.useCallback(() => {
    if (isAdActive && ads.onSkip) {
      ads.onSkip();
    }
  }, [isAdActive, ads]);

  // Ad click: pause video, then open link (like YouTube/TubeakPlayer)
  const onAdClick = React.useCallback(() => {
    if (isAdActive) {
      // Pause video before navigating
      if (onPauseClick) {
        onPauseClick();
      }
      if (ads.onAdClick) {
        ads.onAdClick();
      }
      if (ads.url) {
        window.open(ads.url, '_blank', 'noopener,noreferrer');
      }
    }
  }, [isAdActive, ads, onPauseClick]);

  return {
    isAdActive,
    hasSkipTimer,
    canSkip,
    skipCountdown,
    adProgress,
    onSkipClick,
    onAdClick,
  };
};

export default useAds;
