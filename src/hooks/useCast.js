import React from 'react';

/**
 * Hook to manage remote video playback (Cast/AirPlay).
 *
 * Strategy:
 * 1. Try the Remote Playback API (video.remote.prompt()) — the standard for
 *    casting video to Chromecast/AirPlay. Works when the video has a direct
 *    http(s) src or when the browser can resolve the media source.
 * 2. Fall back to the Presentation API (PresentationRequest) — presents the
 *    current page on an external display. Required for MSE/blob-based streams
 *    (HLS/DASH live) where Remote Playback cannot resolve the source.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Remote_Playback_API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API
 * @see https://googlechrome.github.io/samples/presentation-api/cast.html
 *
 * @param {object} params
 * @param {React.RefObject} params.videoRef - Ref to the video element
 * @param {boolean} params.disabled - Disable cast (e.g. during ads)
 * @returns {object} { isSupported, castAvailable, castState, promptCast }
 */
const useCast = ({ videoRef, disabled = false }) => {
  const [castState, setCastState] = React.useState('disconnected');
  const [available, setAvailable] = React.useState(false);
  const watchIdRef = React.useRef(null);
  const presentationConnectionRef = React.useRef(null);

  const hasRemotePlayback = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    return 'remote' in document.createElement('video');
  }, []);

  const hasPresentationAPI = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    return 'PresentationRequest' in window;
  }, []);

  const isSupported = hasRemotePlayback || hasPresentationAPI;

  // --- Remote Playback: sync state from events ---
  React.useEffect(() => {
    const el = videoRef?.current;
    if (!el || !el.remote) return;

    const remote = el.remote;
    const handleConnecting = () => setCastState('connecting');
    const handleConnect = () => setCastState('connected');
    const handleDisconnect = () => setCastState('disconnected');

    remote.addEventListener('connecting', handleConnecting);
    remote.addEventListener('connect', handleConnect);
    remote.addEventListener('disconnect', handleDisconnect);

    setCastState(remote.state || 'disconnected');

    return () => {
      remote.removeEventListener('connecting', handleConnecting);
      remote.removeEventListener('connect', handleConnect);
      remote.removeEventListener('disconnect', handleDisconnect);
    };
  }, [videoRef]);

  // --- Remote Playback: watch device availability ---
  React.useEffect(() => {
    const el = videoRef?.current;
    if (!el || !el.remote || disabled) {
      // If no Remote Playback but Presentation API exists, assume available
      if (hasPresentationAPI && !disabled) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
      return;
    }

    const remote = el.remote;

    remote
      .watchAvailability((isAvailable) => {
        setAvailable(isAvailable);
      })
      .then((id) => {
        watchIdRef.current = id;
      })
      .catch(() => {
        // watchAvailability not supported — assume available and let
        // prompt() show the device picker (standard fallback per MDN)
        setAvailable(true);
      });

    return () => {
      if (watchIdRef.current !== null) {
        remote.cancelWatchAvailability(watchIdRef.current).catch(() => {});
        watchIdRef.current = null;
      }
    };
  }, [videoRef, disabled, hasPresentationAPI]);

  // --- Presentation API fallback ---
  const promptPresentation = React.useCallback(() => {
    if (!('PresentationRequest' in window)) return;

    // Use the current page URL — the browser will present/cast the tab
    const url = window.location.href;
    if (!url || url.length === 0) return;

    try {
      const request = new window.PresentationRequest([url]);
      request
        .start()
        .then((connection) => {
          presentationConnectionRef.current = connection;
          setCastState('connected');
          connection.addEventListener('close', () => {
            presentationConnectionRef.current = null;
            setCastState('disconnected');
          });
          connection.addEventListener('terminate', () => {
            presentationConnectionRef.current = null;
            setCastState('disconnected');
          });
        })
        .catch(() => {
          setCastState('disconnected');
        });
    } catch {
      // PresentationRequest constructor can throw for invalid URLs
      setCastState('disconnected');
    }
  }, []);

  // --- Main prompt function ---
  const promptCast = React.useCallback(() => {
    const el = videoRef?.current;

    // Try Remote Playback API first
    if (el && el.remote) {
      el.remote
        .prompt()
        .then(() => {
          setCastState('connected');
        })
        .catch(() => {
          // Remote Playback failed (e.g. MSE/blob source) — fall back
          // to Presentation API which presents the page/tab
          promptPresentation();
        });
      return;
    }

    // No Remote Playback support — use Presentation API directly
    promptPresentation();
  }, [videoRef, promptPresentation]);

  // --- Disable remote playback during ads ---
  React.useEffect(() => {
    const el = videoRef?.current;
    if (!el) return;
    el.disableRemotePlayback = disabled;
  }, [disabled, videoRef]);

  // --- Cleanup on unmount ---
  React.useEffect(() => {
    return () => {
      if (presentationConnectionRef.current) {
        try {
          presentationConnectionRef.current.terminate();
        } catch {
          // Already terminated
        }
      }
    };
  }, []);

  return {
    isSupported,
    castAvailable: isSupported && available,
    castState,
    promptCast,
  };
};

export default useCast;
