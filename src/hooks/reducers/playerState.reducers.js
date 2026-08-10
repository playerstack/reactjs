/**
 * Pure state reducers for player-state transitions.
 *
 * Centralizes state-shaping logic that would otherwise live inline inside
 * hook callbacks. Keeping these as pure module-level functions makes them
 * easy to unit test and reuse across hooks without recreating closures.
 */

/**
 * Computes the next player state on a seek transition.
 *
 * While seeking, the "ended" overlay is cleared so the user sees the frame
 * they are scrubbing to. When the seek is released, playback always resumes
 * from the new position, regardless of whether the player was paused or ended.
 *
 * @param {object} prev - Previous player state.
 * @param {boolean} seeking - Whether a seek is in progress.
 * @returns {object} The next player state.
 */
export const reduceSeekState = (prev, seeking) => ({
  ...prev,
  seeking,
  isEnded: false,
  playing: seeking ? prev.playing : true,
});
