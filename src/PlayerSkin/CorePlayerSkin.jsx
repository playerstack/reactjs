import React from 'react';
import PropTypes from 'prop-types';

import { isMobile } from '@playerstack/core';

import {
  PlayerstackMediaController,
  PlayerstackPlayButton,
  PlayerstackVolume,
  PlayerstackTimeSlider,
  PlayerstackPlayTime,
  PlayerstackSettings,
  PlayerstackFullscreenButton,
  PlayerstackCaptions,
  PlayerstackChapters,
  PlayerstackHeatmap,
  PlayerstackContextMenu,
  PlayerstackSpinner,
  PlayerstackPlayState,
  PlayerstackTopState,
  PlayerstackPreventedTip,
  PlayerstackAdOverlay,
  PlayerstackLiveIndicator,
  PlayerstackDoubleTap,
  PlayerstackNavButtons,
} from '@adapter/elements';
import { useCoreMediaBridge } from '@hooks/useCoreMediaBridge';

/**
 * `CorePlayerSkin` renders the reactjs player UI by COMPOSING Core's `playerstack-*`
 * UI_Elements (through the React_Adapter) inside a `playerstack-media-controller`,
 * replacing the former Desktop/Mobile `PlayerSkin` subtree (tasks 14.3/14.7; the old
 * subtree and its CSS-in-JS were removed in task 14.4).
 *
 * Data flow (interim bridge, preserving Functional_Parity):
 *   - The `playerstack-media-controller` owns the shared reactive store. `useCoreMediaBridge`
 *     mirrors the existing React playback state INTO that store every render, so the Core
 *     elements reflect the same playing/time/volume/etc. as the previous skin (Req 9.1, 9.2).
 *   - Each interactive Core element exposes its request events as React `on*` callbacks
 *     (via `createReactElement`); those are wired to the EXISTING playback handlers
 *     (`onPlayClick`, `changeCurrentTime`, `changeVolume`, `changePlaybackRate`,
 *     `requestFullscreen`/`exitFullscreen`, `onLoopClick`, `onPreventedClick`, ...), so
 *     play/pause/seek/volume/fullscreen/pip/rate/quality/loop/ad-skip keep working with the
 *     same names, signatures and defaults (Req 21.6, 21.9, 21.10).
 *   - Rich props (captions source, chapters markers, heatmapData, sprite/timelens
 *     `spriteVTTFile`, ads config with `onSkip`/`onAdClick`/`onAdComplete`, i18n `language`,
 *     quality options) are fed to the elements through the adapter's property setters
 *     (`captionsSrc`, `chapters`, `heatmapData`, `spriteData`, `ads`, `i18n`,
 *     `qualityOptions`) (Req 21.7, 21.8).
 *   - Keyboard shortcuts (Space/F/M/Arrows) stay handled by the existing `handleKeyDown`
 *     wired on the player container in `MediaPlayerSkin` (Req 21.9); this component does not
 *     re-implement them.
 *
 * Styling arrives from Core's Style_Auto_Injection (each element adopts the Style_Layer on
 * connect); the consumer imports no CSS (Req 9.6). The former styled-components CSS was ported
 * to Core's `playerstack.css` (task 14.6) and the old styled subtree deleted (task 14.4).
 */
const CorePlayerSkin = React.forwardRef((props, ref) => {
  const {
    live = false,
    liveDVR = false,
    loading,
    paused,
    ended,
    seeking,
    waiting,
    duration,
    bufferedRanges = [],
    currentTime,
    muted,
    volume,
    pip,
    fullscreen,
    qualities = [],
    captions,
    activeCaption,
    spriteVTTFile,
    chapters,
    heatmapData,
    playbackRate,
    playbackQuality,
    loop,
    language,
    ads = null,
    kernelMsg = null,
    skinMode,
    onPlayClick,
    onPauseClick,
    changePlaybackRate,
    changePlayBackQuality,
    changeVolume,
    onMutedClick,
    changeCurrentTime,
    requestPictureInPicture,
    exitPictureInPicture,
    requestFullscreen,
    exitFullscreen,
    onLoopClick,
    onCaptionChange,
    onPreventedClick,
    onPrevious,
    onNext,
    showNavButtons = false,
  } = props;

  const controllerRef = React.useRef(null);

  // Preserve the imperative surface the previous skins exposed to the wrapper hook
  // (`showControls`/`hideControls`/`triggerAd`). Auto-hide is now driven by Core's
  // Style_Layer/state, so these are safe no-ops that keep the existing optional-chained
  // calls in `usePlayerSkinWrapper.handleKeyDown` working without changing behavior.
  React.useImperativeHandle(
    ref,
    () => ({
      showControls: () => {},
      hideControls: () => {},
      triggerAd: () => {},
    }),
    [],
  );

  const useMobileSkin = skinMode === 'mobile' || (skinMode !== 'desktop' && isMobile);

  // Mirror the current React playback state into the Core store so every subscribed
  // UI_Element reflects it (interim bridge; see the hook's rationale).
  useCoreMediaBridge({
    controllerRef,
    state: {
      currentTime,
      duration,
      loaded: bufferedRanges.length > 0 ? bufferedRanges[bufferedRanges.length - 1].end : 0,
      bufferedRanges,
      paused,
      muted,
      volume,
      playbackRate,
      playbackQuality,
      loop,
      pip,
      fullscreen,
      ended,
      seeking,
      loading,
      buffering: waiting,
      kernelMsg,
      activeCaption,
    },
  });

  // --- Request handlers wired to the existing playback handlers (Functional_Parity) ---

  const handlePlayRequest = React.useCallback(() => onPlayClick?.(), [onPlayClick]);
  const handlePauseRequest = React.useCallback(() => onPauseClick?.(), [onPauseClick]);
  const handleSeekRequest = React.useCallback(
    (event) => {
      const time = event?.detail?.time;
      if (typeof time === 'number') {
        changeCurrentTime?.(time);
      }
    },
    [changeCurrentTime],
  );
  const handleVolumeRequest = React.useCallback(
    (event) => {
      const nextVolume = event?.detail?.volume;
      if (typeof nextVolume === 'number') {
        changeVolume?.(nextVolume);
      }
    },
    [changeVolume],
  );
  const handleMuteRequest = React.useCallback(() => onMutedClick?.(), [onMutedClick]);
  const handleUnmuteRequest = React.useCallback(() => onMutedClick?.(), [onMutedClick]);
  const handleRateRequest = React.useCallback(
    (event) => {
      const rate = event?.detail?.rate;
      if (typeof rate === 'number') {
        changePlaybackRate?.(rate);
      }
    },
    [changePlaybackRate],
  );
  const handleQualityRequest = React.useCallback(
    (event) => {
      const value = event?.detail?.value;
      const parsed = Number(value);
      changePlayBackQuality?.(Number.isNaN(parsed) ? 0 : parsed);
    },
    [changePlayBackQuality],
  );
  const handleEnterFullscreenRequest = React.useCallback(() => requestFullscreen?.(), [requestFullscreen]);
  const handleExitFullscreenRequest = React.useCallback(() => exitFullscreen?.(), [exitFullscreen]);
  const handleEnterPipRequest = React.useCallback(() => requestPictureInPicture?.(), [requestPictureInPicture]);
  const handleExitPipRequest = React.useCallback(() => exitPictureInPicture?.(), [exitPictureInPicture]);
  const handleLoopRequest = React.useCallback(() => onLoopClick?.(), [onLoopClick]);

  // Prev/next navigation (GAP 2/5, Req 21.1): the `playerstack-nav-buttons` element emits
  // `playerstack-prev-request`/`playerstack-next-request`, surfaced by the adapter as
  // `onPrevRequest`/`onNextRequest`. They are wired to the player's public `onPrevious`/`onNext`
  // callbacks, preserving their (no-arg) signatures.
  const handlePrevRequest = React.useCallback(() => onPrevious?.(), [onPrevious]);
  const handleNextRequest = React.useCallback(() => onNext?.(), [onNext]);

  // Caption selection (GAP 1, Req 21.1): the `playerstack-captions` element emits
  // `playerstack-caption-request` (detail `{ value }`) via its `selectCaption(value)` method,
  // surfaced by the adapter as `onCaptionRequest`. The selected track `value` is forwarded to
  // the existing public `onCaptionChange(language)` handler, preserving its signature.
  const handleCaptionRequest = React.useCallback(
    (event) => {
      const value = event?.detail?.value;
      if (value !== undefined) {
        onCaptionChange?.(value);
      }
    },
    [onCaptionChange],
  );

  // Ad callbacks preserved from the `ads` config so onSkip/onAdClick/onAdComplete fire.
  const handleAdSkip = React.useCallback(() => ads?.onSkip?.(), [ads]);
  const handleAdClick = React.useCallback(() => ads?.onAdClick?.(), [ads]);

  // --- Rich props for the property-setter channel of the elements ---

  // Quality options fed to `playerstack-settings` (defaults preserved from `qualities`).
  const qualityOptions = React.useMemo(
    () =>
      qualities.map((quality) => ({
        label: quality.label,
        value: quality.value,
        isFullHD: quality.isFullHD,
      })),
    [qualities],
  );

  // Timelens sprite data hint. The parsed VTT + sheet sizing is resolved by the adapter/skin
  // layer; here we forward the file reference so the slider enables the timelens affordance.
  const spriteData = React.useMemo(() => (spriteVTTFile ? { file: spriteVTTFile } : null), [spriteVTTFile]);

  const showTimeSlider = !live || liveDVR;

  const controlsExtra = (
    <>
      {captions && captions.length > 0 && (
        <PlayerstackCaptions captionsSrc={activeCaption ? captions : null} onCaptionRequest={handleCaptionRequest} />
      )}
      <PlayerstackSettings
        qualityOptions={qualityOptions}
        i18n={language ? { language } : null}
        onRateRequest={handleRateRequest}
        onQualityRequest={handleQualityRequest}
      />
      <PlayerstackFullscreenButton
        onEnterFullscreenRequest={handleEnterFullscreenRequest}
        onExitFullscreenRequest={handleExitFullscreenRequest}
      />
    </>
  );

  return (
    <PlayerstackMediaController ref={controllerRef} data-skin-mode={useMobileSkin ? 'mobile' : 'desktop'}>
      {/* Overlays (Commons — Table 21-C) */}
      <PlayerstackPreventedTip language={language} onClick={onPreventedClick} />
      <PlayerstackSpinner />
      {!useMobileSkin && <PlayerstackPlayState onPlayRequest={handlePlayRequest} onPauseRequest={handlePauseRequest} />}
      <PlayerstackTopState language={language} />

      {chapters && chapters.length > 0 && <PlayerstackChapters chapters={chapters} />}
      {heatmapData && heatmapData.length > 0 && <PlayerstackHeatmap heatmapData={heatmapData} />}

      {activeCaption && captions && captions.length > 0 && <PlayerstackCaptions captionsSrc={captions} />}

      {ads && <PlayerstackAdOverlay ads={ads} onAdSkip={handleAdSkip} onAdClick={handleAdClick} />}

      {live && <PlayerstackLiveIndicator onSeekRequest={handleSeekRequest} />}

      {useMobileSkin && <PlayerstackDoubleTap onSeekRequest={handleSeekRequest} />}

      {/* Right-click context menu (loop / PiP / fullscreen) */}
      <PlayerstackContextMenu
        i18n={language ? { language } : null}
        onLoopRequest={handleLoopRequest}
        onEnterPipRequest={handleEnterPipRequest}
        onExitPipRequest={handleExitPipRequest}
        onEnterFullscreenRequest={handleEnterFullscreenRequest}
        onExitFullscreenRequest={handleExitFullscreenRequest}
      />

      {/* Progress slider (Timelens + chapters + tooltip) — desktop and mobile */}
      {showTimeSlider && (
        <PlayerstackTimeSlider
          sprite-vtt-file={spriteVTTFile}
          spriteData={spriteData}
          onSeekRequest={handleSeekRequest}
        />
      )}

      {/* Bottom control bar (Table 21-A / 21-B) */}
      {/* Prev/next nav cluster — desktop control bar, gated by the public `showNavButtons` prop. */}
      {showNavButtons && !useMobileSkin && (
        <PlayerstackNavButtons onPrevRequest={handlePrevRequest} onNextRequest={handleNextRequest} />
      )}
      <PlayerstackPlayButton onPlayRequest={handlePlayRequest} onPauseRequest={handlePauseRequest} />
      <PlayerstackVolume
        onMuteRequest={handleMuteRequest}
        onUnmuteRequest={handleUnmuteRequest}
        onVolumeRequest={handleVolumeRequest}
      />
      <PlayerstackPlayTime />
      {controlsExtra}

      {/* Kept in the tree so onTogglePlay parity is preserved for the mobile center overlay */}
      {useMobileSkin && (
        <>
          {/* Prev/next nav cluster — mobile center controls, gated by `showNavButtons` (parity
              with the previous skin, which showed prev/next around the center play control). */}
          {showNavButtons && (
            <PlayerstackNavButtons onPrevRequest={handlePrevRequest} onNextRequest={handleNextRequest} />
          )}
          <PlayerstackPlayState onPlayRequest={handlePlayRequest} onPauseRequest={handlePauseRequest} />
        </>
      )}
    </PlayerstackMediaController>
  );
});

CorePlayerSkin.displayName = 'CorePlayerSkin';

CorePlayerSkin.propTypes = {
  live: PropTypes.bool,
  liveDVR: PropTypes.bool,
  hasAudio: PropTypes.bool,
  prevented: PropTypes.bool,
  loading: PropTypes.bool,
  paused: PropTypes.bool,
  ended: PropTypes.bool,
  seeking: PropTypes.bool,
  waiting: PropTypes.bool,
  duration: PropTypes.number,
  bufferedRanges: PropTypes.array,
  currentTime: PropTypes.number,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  pip: PropTypes.bool,
  fullscreen: PropTypes.bool,
  qualities: PropTypes.array,
  captions: PropTypes.array,
  activeCaption: PropTypes.string,
  spriteVTTFile: PropTypes.string,
  chapters: PropTypes.array,
  heatmapData: PropTypes.array,
  fullHDQualityBreak: PropTypes.number,
  playbackRate: PropTypes.number,
  playbackQuality: PropTypes.number,
  loop: PropTypes.bool,
  language: PropTypes.string,
  ads: PropTypes.object,
  kernelMsg: PropTypes.object,
  skinMode: PropTypes.oneOf(['auto', 'mobile', 'desktop']),
  onPlayClick: PropTypes.func,
  onPauseClick: PropTypes.func,
  onTogglePlay: PropTypes.func,
  changePlaybackRate: PropTypes.func,
  changePlayBackQuality: PropTypes.func,
  changeVolume: PropTypes.func,
  onMutedClick: PropTypes.func,
  changeCurrentTime: PropTypes.func,
  requestPictureInPicture: PropTypes.func,
  exitPictureInPicture: PropTypes.func,
  requestFullscreen: PropTypes.func,
  exitFullscreen: PropTypes.func,
  onSeeking: PropTypes.func,
  onLoopClick: PropTypes.func,
  onCaptionChange: PropTypes.func,
  onPreventedClick: PropTypes.func,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  showNavButtons: PropTypes.bool,
};

export default CorePlayerSkin;
