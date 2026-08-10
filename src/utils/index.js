import { omit as coreOmit } from '@playerstack/core';

// Re-export framework-agnostic utilities from @playerstack/core
export { isMediaStream, isBlobUrl, formatTime, indexBy } from '@playerstack/core';

/**
 * Omit keys from an object. Accepts multiple arrays of keys (variadic).
 * Maintains backward compatibility with the original signature.
 */
export function omit(object, ...arrays) {
  const keys = [].concat(...arrays);
  return coreOmit(object, keys);
}

/**
 * Merge an array of refs into a single ref.
 * @param {Array<React.Ref | React.MutableRefObject>} refs - Array of refs.
 * @returns {function} - Merged ref function.
 * @description React-specific utility for merging refs.
 */
export function mergeRefs(refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    });
  };
}
