import React from 'react';

/**
 * Possible phases of a live ad break.
 *
 * idle     — no ad active
 * playing  — ad video is playing, stream is muted
 * exiting  — ad finished/skipped, fade-out animation in progress
 *
 * Transition flow: idle -> playing -> exiting -> idle
 */
const PHASE = {
  IDLE: 'idle',
  PLAYING: 'playing',
  EXITING: 'exiting',
};

/** Duration of exit animation in ms. Must match CSS transition. */
const EXIT_DURATION_MS = 400;

/**
 * Hook to manage live stream ad breaks (mid-roll, on-demand).
 *
 * Implements Twitch-style client-side ad insertion:
 * - Stream continues playing (muted) behind ad overlay
 * - Ad video plays as overlay
 * - On end/skip: exit animation runs, then stream unmutes
 * - Viewer never loses live content — stays at live edge
 *
 * All lifecycle state lives here. Component renders declaratively from returned state.
 *
 * @param {object} params
 * @param {React.RefObject} params.videoRef - Ref to live stream video element
 */
const useLiveAd = ({ videoRef }) => {
  const [phase, setPhase] = React.useState(PHASE.IDLE);
  const [adMedia, setAdMedia] = React.useState({
    url: '',
    title: '',
    clickUrl: '',
    buttonText: '',
    skipAfter: 0,
  });
  const [progress, setProgress] = React.useState({
    currentTime: 0,
    duration: 0,
  });

  const adVideoRef = React.useRef(null);
  const adConfigRef = React.useRef(null);
  const wasMutedRef = React.useRef(false);
  const exitTimerRef = React.useRef(null);

  /**
   * While ad is active, suppress native 'pause' events on the live stream.
   *
   * Problem: when the ad overlay covers the stream video, the browser may
   * pause the occluded video (power saving) or HLS buffer stalls can fire
   * native pause. This propagates through PlayerCore → PlayerProxy → React state,
   * freezing `playerState.played` and setting `playing=false`.
   *
   * Solution: during ad phase, intercept 'pause' on the stream element in capture
   * phase, stop propagation, and immediately re-play. This keeps the stream
   * running at the live edge so there's no "jump back" when the ad ends.
   */
  React.useEffect(() => {
    if (phase === PHASE.IDLE) return;

    const el = videoRef?.current;
    if (!el) return;

    const suppressPause = (e) => {
      e.stopImmediatePropagation();
      // Re-play immediately — the stream must keep running
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    };

    // Capture phase ensures we fire before PlayerCore's bubble listener
    el.addEventListener('pause', suppressPause, true);

    return () => {
      el.removeEventListener('pause', suppressPause, true);
    };
  }, [phase, videoRef]);

  // Derived state
  const skipAfter = adMedia.skipAfter || 0;
  const canSkip = phase === PHASE.PLAYING && skipAfter > 0 && progress.currentTime >= skipAfter;
  const skipCountdown =
    phase === PHASE.PLAYING && skipAfter > 0 ? Math.max(0, Math.ceil(skipAfter - progress.currentTime)) : 0;

  /**
   * End the ad break — restore stream audio and ensure playback continues.
   *
   * The stream may have been paused by the browser (e.g. occluded video,
   * buffer stall on HLS). We force play() after unmuting to guarantee
   * the viewer returns to the live edge, not a frozen frame.
   */
  const restoreStream = React.useCallback(() => {
    const el = videoRef?.current;
    if (el) {
      if (!wasMutedRef.current) {
        el.muted = false;
      }
      // Force play — browser may have paused the occluded/muted stream
      const playPromise = el.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(() => {
          // Autoplay blocked — stream will resume on next user interaction
        });
      }
    }

    // Release ad video resources
    const adEl = adVideoRef.current;
    if (adEl) {
      adEl.pause();
      adEl.removeAttribute('src');
      adEl.load();
    }

    setPhase(PHASE.IDLE);
    setProgress({ currentTime: 0, duration: 0 });
    adConfigRef.current = null;
  }, [videoRef]);

  /**
   * Begin exit phase — starts fade-out, schedules stream restoration.
   * Idempotent: calling multiple times won't stack timers.
   */
  const beginExit = React.useCallback(() => {
    if (exitTimerRef.current) return; // already exiting

    setPhase(PHASE.EXITING);

    exitTimerRef.current = setTimeout(() => {
      exitTimerRef.current = null;
      restoreStream();
    }, EXIT_DURATION_MS);
  }, [restoreStream]);

  /**
   * Trigger an ad break on demand.
   *
   * @param {object} config
   * @param {string} config.url - Ad video URL (mp4)
   * @param {string} [config.title] - Ad title text
   * @param {string} [config.clickUrl] - URL to open on CTA click
   * @param {string} [config.buttonText] - CTA button text
   * @param {number} [config.skipAfter=0] - Seconds before skip allowed (0 = no skip)
   * @param {function} [config.onStart] - Called when ad starts playing
   * @param {function} [config.onComplete] - Called when ad finishes naturally
   * @param {function} [config.onSkip] - Called when user skips
   * @param {function} [config.onClick] - Called when user clicks CTA
   */
  const triggerAd = React.useCallback(
    (config) => {
      if (!config || !config.url) return;
      // Don't interrupt an active ad or exit animation
      if (phase !== PHASE.IDLE) return;

      adConfigRef.current = config;

      // Mute live stream (remember previous state)
      const el = videoRef?.current;
      if (el) {
        wasMutedRef.current = el.muted;
        el.muted = true;
      }

      setAdMedia({
        url: config.url,
        title: config.title || '',
        clickUrl: config.clickUrl || '',
        buttonText: config.buttonText || '',
        skipAfter: config.skipAfter || 0,
      });
      setProgress({ currentTime: 0, duration: 0 });
      setPhase(PHASE.PLAYING);

      config.onStart?.();
    },
    [videoRef, phase],
  );

  // Handle ad video timeupdate — update progress
  const handleAdTimeUpdate = React.useCallback((e) => {
    const adEl = e.target;
    setProgress({
      currentTime: adEl.currentTime,
      duration: adEl.duration || 0,
    });
  }, []);

  // Handle ad video ended naturally
  const handleAdEnded = React.useCallback(() => {
    adConfigRef.current?.onComplete?.();
    beginExit();
  }, [beginExit]);

  // Skip ad
  const skipAd = React.useCallback(() => {
    if (phase !== PHASE.PLAYING) return;
    adConfigRef.current?.onSkip?.();
    beginExit();
  }, [phase, beginExit]);

  // Click CTA
  const clickAd = React.useCallback(() => {
    const config = adConfigRef.current;
    if (config?.clickUrl) {
      window.open(config.clickUrl, '_blank', 'noopener,noreferrer');
    }
    config?.onClick?.();
  }, []);

  // Cleanup on unmount — cancel pending exit timer, restore stream
  React.useEffect(() => {
    const videoEl = videoRef?.current;
    return () => {
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
      // If unmounting during ad, unmute stream
      if (videoEl && !wasMutedRef.current) {
        videoEl.muted = false;
      }
    };
    // Only on unmount — refs captured at mount time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    /** Current phase: 'idle' | 'playing' | 'exiting' */
    phase,
    /** Whether overlay should render (playing or exiting) */
    isActive: phase !== PHASE.IDLE,
    /** Whether exit animation is in progress */
    isExiting: phase === PHASE.EXITING,
    /** Ad video URL */
    adUrl: adMedia.url,
    /** Ad title */
    adTitle: adMedia.title,
    /** Ad CTA button text */
    adButtonText: adMedia.buttonText,
    /** Current playback time of ad */
    adCurrentTime: progress.currentTime,
    /** Total duration of ad */
    adDuration: progress.duration,
    /** Whether user can skip now */
    canSkip,
    /** Seconds remaining before skip available */
    skipCountdown,
    /** Trigger an ad break */
    triggerAd,
    /** Skip current ad */
    skipAd,
    /** Click CTA */
    clickAd,
    /** Handle ad video timeupdate */
    handleAdTimeUpdate,
    /** Handle ad video ended */
    handleAdEnded,
    /** Ref for ad video element */
    adVideoRef,
  };
};

export default useLiveAd;
