/**
 * Web DVR adapter for HTMLMediaElement.
 * Provides seekable range, current time, seeking, and time update subscription
 * via the video element's native APIs.
 *
 * @param {React.RefObject<HTMLMediaElement>} videoRef
 * @returns {import('@playerstack/core/adapters').DVRAdapter}
 */
export function createWebDVRAdapter(videoRef) {
  return {
    getSeekableRange: () => {
      const el = videoRef.current;
      if (!el || !el.seekable || el.seekable.length === 0) return null;
      return {
        start: el.seekable.start(0),
        end: el.seekable.end(el.seekable.length - 1),
      };
    },
    getCurrentTime: () => videoRef.current?.currentTime ?? 0,
    seekTo: (time) => {
      if (videoRef.current) videoRef.current.currentTime = time;
    },
    onTimeUpdate: (callback) => {
      const el = videoRef.current;
      if (el) {
        el.addEventListener('timeupdate', callback);
        el.addEventListener('progress', callback);
      }
      return () => {
        if (el) {
          el.removeEventListener('timeupdate', callback);
          el.removeEventListener('progress', callback);
        }
      };
    },
  };
}
