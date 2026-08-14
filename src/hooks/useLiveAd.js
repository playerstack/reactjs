import React from 'react';

/**
 * Hook to manage live stream ad breaks (mid-roll, on-demand).
 *
 * Live ad breaks work differently from VOD ads:
 * - The live stream continues playing (muted) behind the ad overlay
 * - An ad video plays on top as an overlay
 * - When the ad finishes or is skipped, the overlay is removed and the stream unmutes
 * - The viewer doesn't lose any live content — they remain at the live edge
 *
 * This implements the Twitch/YouTube Live model of client-side ad insertion.
 *
 * @param {object} params
 * @param {React.RefObject} params.videoRef - Ref to the live stream video element
 * @returns {object} Live ad state and controls
 */
const useLiveAd = ({ videoRef }) => {
  const [adState, setAdState] = React.useState({
    active: false,
    url: '',
    title: '',
    clickUrl: '',
    buttonText: '',
    skipAfter: 0,
    currentTime: 0,
    duration: 0,
    canSkip: false,
    skipCountdown: 0,
  });

  const adVideoRef = React.useRef(null);
  const adConfigRef = React.useRef(null);
  const timerRef = React.useRef(null);
  const wasMutedRef = React.useRef(false);

  /**
   * Trigger an ad break on demand.
   * Call this when the server/app decides to show a mid-roll ad.
   *
   * @param {object} config
   * @param {string} config.url - Ad video URL (mp4)
   * @param {string} [config.title] - Ad title text
   * @param {string} [config.clickUrl] - URL to open when ad is clicked
   * @param {string} [config.buttonText] - CTA button text
   * @param {number} [config.skipAfter=0] - Seconds before skip is allowed (0 = no skip)
   * @param {function} [config.onStart] - Called when ad starts playing
   * @param {function} [config.onComplete] - Called when ad finishes naturally
   * @param {function} [config.onSkip] - Called when user skips the ad
   * @param {function} [config.onClick] - Called when user clicks the ad CTA
   */
  const triggerAd = React.useCallback(
    (config) => {
      if (!config || !config.url) return;

      adConfigRef.current = config;

      // Mute the live stream (remember previous state)
      const el = videoRef?.current;
      if (el) {
        wasMutedRef.current = el.muted;
        el.muted = true;
      }

      setAdState({
        active: true,
        url: config.url,
        title: config.title || '',
        clickUrl: config.clickUrl || '',
        buttonText: config.buttonText || '',
        skipAfter: config.skipAfter || 0,
        currentTime: 0,
        duration: 0,
        canSkip: config.skipAfter === 0,
        skipCountdown: config.skipAfter || 0,
      });

      config.onStart?.();
    },
    [videoRef],
  );

  // Handle ad time update
  const handleAdTimeUpdate = React.useCallback((e) => {
    const adEl = e.target;
    const currentTime = adEl.currentTime;
    const duration = adEl.duration || 0;
    const skipAfter = adConfigRef.current?.skipAfter || 0;
    const canSkip = skipAfter > 0 && currentTime >= skipAfter;
    const skipCountdown = skipAfter > 0 ? Math.max(0, Math.ceil(skipAfter - currentTime)) : 0;

    setAdState((prev) => ({
      ...prev,
      currentTime,
      duration,
      canSkip,
      skipCountdown,
    }));
  }, []);

  // End the ad break — restore stream audio
  const endAd = React.useCallback(() => {
    const el = videoRef?.current;
    if (el && !wasMutedRef.current) {
      el.muted = false;
    }

    setAdState((prev) => ({ ...prev, active: false }));
    adConfigRef.current = null;
  }, [videoRef]);

  // Handle ad ended naturally
  const handleAdEnded = React.useCallback(() => {
    const config = adConfigRef.current;
    config?.onComplete?.();
    endAd();
  }, [endAd]);

  // Skip the ad
  const skipAd = React.useCallback(() => {
    const config = adConfigRef.current;
    config?.onSkip?.();
    endAd();
  }, [endAd]);

  // Click the ad CTA
  const clickAd = React.useCallback(() => {
    const config = adConfigRef.current;
    if (config?.clickUrl) {
      window.open(config.clickUrl, '_blank', 'noopener,noreferrer');
    }
    config?.onClick?.();
  }, []);

  // Cleanup on unmount
  React.useEffect(() => {
    const timer = timerRef.current;
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return {
    /** Whether an ad is currently active */
    isAdActive: adState.active,
    /** Ad video URL */
    adUrl: adState.url,
    /** Ad title */
    adTitle: adState.title,
    /** Ad CTA button text */
    adButtonText: adState.buttonText,
    /** Current playback time of the ad */
    adCurrentTime: adState.currentTime,
    /** Total duration of the ad */
    adDuration: adState.duration,
    /** Whether the user can skip the ad now */
    canSkip: adState.canSkip,
    /** Seconds remaining before skip is available */
    skipCountdown: adState.skipCountdown,
    /** Trigger an ad break */
    triggerAd,
    /** Skip the current ad */
    skipAd,
    /** Click the ad CTA */
    clickAd,
    /** Handle ad video timeupdate event */
    handleAdTimeUpdate,
    /** Handle ad video ended event */
    handleAdEnded,
    /** Ref for the ad overlay video element */
    adVideoRef,
  };
};

export default useLiveAd;
