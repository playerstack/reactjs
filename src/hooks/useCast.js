import React from 'react';

/**
 * Hook to manage Cast/Presentation functionality.
 *
 * Uses the Presentation API (navigator.presentation) to present video
 * to external displays (Chromecast, smart TVs, secondary monitors).
 *
 * Browser support: Chrome 47+, Edge 79+, Opera.
 * Not supported in Firefox or Safari.
 *
 * @param {object} params
 * @param {React.RefObject} params.videoRef - Ref to the video/audio element
 * @param {boolean} params.disabled - Disable cast (e.g. during ads)
 * @returns {object} { isSupported, castState, promptCast }
 */
const useCast = ({ videoRef, disabled = false }) => {
  const [castState, setCastState] = React.useState('disconnected');
  const presentationRef = React.useRef(null);
  const connectionRef = React.useRef(null);

  const isSupported = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    return 'PresentationRequest' in window || ('remote' in document.createElement('video'));
  }, []);

  const promptCast = React.useCallback(() => {
    const el = videoRef?.current;

    // Try Remote Playback API first (direct video casting)
    if (el && el.remote) {
      el.remote
        .prompt()
        .then(() => {
          setCastState('connected');
        })
        .catch(() => {
          // Fallback to Presentation API
          if ('PresentationRequest' in window) {
            const src = el.currentSrc || el.src;
            if (!src) return;
            const request = new PresentationRequest([src]);
            presentationRef.current = request;
            request
              .start()
              .then((connection) => {
                connectionRef.current = connection;
                setCastState('connected');
                connection.addEventListener('close', () => setCastState('disconnected'));
                connection.addEventListener('terminate', () => setCastState('disconnected'));
              })
              .catch(() => {
                setCastState('disconnected');
              });
          }
        });
      return;
    }

    // No video element or no remote — use Presentation API directly
    if ('PresentationRequest' in window) {
      const src = el?.currentSrc || el?.src || window.location.href;
      const request = new PresentationRequest([src]);
      presentationRef.current = request;
      request
        .start()
        .then((connection) => {
          connectionRef.current = connection;
          setCastState('connected');
          connection.addEventListener('close', () => setCastState('disconnected'));
          connection.addEventListener('terminate', () => setCastState('disconnected'));
        })
        .catch(() => {
          setCastState('disconnected');
        });
    }
  }, [videoRef]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (connectionRef.current) {
        try {
          connectionRef.current.terminate();
        } catch {
          // Already terminated
        }
      }
    };
  }, []);

  // Disconnect when disabled (e.g. ad starts) and block remote playback
  React.useEffect(() => {
    if (disabled) {
      if (connectionRef.current) {
        try {
          connectionRef.current.terminate();
        } catch {
          // Already terminated
        }
        connectionRef.current = null;
        setCastState('disconnected');
      }
      // Disable native remote playback on video element
      const el = videoRef?.current;
      if (el) {
        el.disableRemotePlayback = true;
      }
    } else {
      const el = videoRef?.current;
      if (el) {
        el.disableRemotePlayback = false;
      }
    }
  }, [disabled, videoRef]);

  return {
    isSupported,
    castAvailable: isSupported,
    castState,
    promptCast,
  };
};

export default useCast;
