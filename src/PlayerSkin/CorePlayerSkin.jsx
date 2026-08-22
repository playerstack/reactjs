import React from 'react';
import PropTypes from 'prop-types';

import { isMobile } from '@playerstack/core';
import { mobileSettingsGearIcon } from '@playerstack/core/icons/mobile';

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
  PlayerstackMobileSettings,
  PlayerstackIcon,
} from '@adapter/elements';
import { useCoreMediaBridge } from '@hooks/useCoreMediaBridge';
import { useCoreAutoHide } from '@hooks/useCoreAutoHide';

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
  // Imperative handle to the mobile settings panel element so the top-bar gear can open it.
  const mobileSettingsRef = React.useRef(null);
  const openMobileSettings = React.useCallback(() => {
    mobileSettingsRef.current?.open_?.();
  }, []);

  // An ad is active whenever the player passes an `ads` config (parity with the original
  // `isAdActive`/`adMode` derived from `useAds`). Drives the ad-mode gating below: the time-slider
  // becomes the yellow ad progress bar, chapters are suppressed, and speed is not changeable.
  const isAdActive = ads != null;

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

  // Auto-hide (parity with the former `useAutoHide`): the controls stay visible while the user
  // must see them — paused, ended, loading, buffering(waiting), seeking, prevented, or a kernel
  // status message — and otherwise fade out after an idle delay, revealing again on any pointer
  // movement. Reflects `data-hiding` on the controller host, which the Style_Layer fades on.
  const shouldStayVisible =
    !!paused || !!ended || !!loading || !!waiting || !!seeking || !!props.prevented || kernelMsg != null;
  useCoreAutoHide({ controllerRef, shouldStayVisible });

  // Reflect ad-active on the controller host so the Style_Layer's `playerstack-media-controller
  // [data-ad-active]` rules resolve — this is the SINGLE hook that drives the ad-mode slider
  // styling (yellow played fill, hidden handle, default cursor). It pairs with the `adMode`
  // property passed to the time-slider/settings elements, which own the JS-side gating
  // (chapters suppressed, speed dropped). Kept in an effect so no DOM is mutated during render.
  React.useEffect(() => {
    const controller = controllerRef.current;
    if (!controller) return;
    if (isAdActive) {
      controller.setAttribute('data-ad-active', 'true');
    } else {
      controller.removeAttribute('data-ad-active');
    }
  }, [isAdActive]);

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
        adMode={isAdActive}
        onRateRequest={handleRateRequest}
        onQualityRequest={handleQualityRequest}
      />
      <PlayerstackFullscreenButton
        onEnterFullscreenRequest={handleEnterFullscreenRequest}
        onExitFullscreenRequest={handleExitFullscreenRequest}
      />
    </>
  );

  // ── Mobile skin layout ──────────────────────────────────────────────────────
  // A dedicated composition (parity with the original MobilePlayerSkin): a dark scrim, a
  // top-right settings/captions cluster, centered prev·play·next controls, and a bottom bar with
  // time + inline progress + fullscreen. It reuses the SAME Core elements as desktop but arranges
  // them in the mobile `[part='mobile-*']` wrappers the Style_Layer positions. Overlays (spinner,
  // prevented tip, captions, ad, top-state, context menu) stay shared.
  if (useMobileSkin) {
    return (
      <PlayerstackMediaController ref={controllerRef} data-skin-mode="mobile">
        <PlayerstackPreventedTip language={language} onClick={onPreventedClick} />
        <PlayerstackSpinner />
        <PlayerstackTopState language={language} />

        {activeCaption && captions && captions.length > 0 && <PlayerstackCaptions captionsSrc={captions} />}
        {ads && <PlayerstackAdOverlay ads={ads} onAdSkip={handleAdSkip} onAdClick={handleAdClick} />}

        <PlayerstackContextMenu
          i18n={language ? { language } : null}
          adMode={isAdActive}
          live={live}
          onLoopRequest={handleLoopRequest}
          onEnterPipRequest={handleEnterPipRequest}
          onExitPipRequest={handleExitPipRequest}
        />

        {/* Double-tap skip zones (disabled during ads). */}
        {!isAdActive && <PlayerstackDoubleTap onSeekRequest={handleSeekRequest} />}

        {/* Dark scrim shown while controls are visible. */}
        <div className="playerstack-mobile-overlay" part="mobile-overlay" />

        {/* Top bar: settings gear opening the full-surface panel. Hidden when there is nothing
            to configure (parity: original `hideSettings` when no qualities/captions during
            ad/live). */}
        {!(isAdActive && qualityOptions.length === 0 && (!captions || captions.length === 0)) &&
          !(live && qualityOptions.length === 0 && (!captions || captions.length === 0)) && (
            <div className="playerstack-mobile-top-bar" part="mobile-top-bar">
              <button type="button" aria-label="Settings" onClick={openMobileSettings}>
                <PlayerstackIcon icon={mobileSettingsGearIcon} width="24" height="24" />
              </button>
            </div>
          )}

        {/* Center controls: Prev · Play/Pause · Next. */}
        <div className="playerstack-mobile-center-controls" part="mobile-center-controls">
          {showNavButtons && (
            <PlayerstackNavButtons onPrevRequest={handlePrevRequest} onNextRequest={handleNextRequest} />
          )}
          <PlayerstackPlayState onPlayRequest={handlePlayRequest} onPauseRequest={handlePauseRequest} />
        </div>

        {/* Bottom bar: time · progress · fullscreen (single row). */}
        <div className="playerstack-mobile-bottom-bar" part="mobile-bottom-bar">
          <PlayerstackPlayTime />
          {showTimeSlider && (
            <PlayerstackTimeSlider
              sprite-vtt-file={spriteVTTFile}
              spriteData={spriteData}
              chapters={!isAdActive && chapters && chapters.length > 0 ? chapters : null}
              adMode={isAdActive}
              onSeekRequest={handleSeekRequest}
            />
          )}
          <PlayerstackFullscreenButton
            onEnterFullscreenRequest={handleEnterFullscreenRequest}
            onExitFullscreenRequest={handleExitFullscreenRequest}
          />
        </div>

        {/* Full-surface settings panel (quality / speed / captions), opened by the top-bar gear. */}
        <PlayerstackMobileSettings
          ref={mobileSettingsRef}
          qualityOptions={qualityOptions}
          captions={captions && captions.length > 0 ? captions : null}
          i18n={language ? { language } : null}
          adMode={isAdActive}
          onRateRequest={handleRateRequest}
          onQualityRequest={handleQualityRequest}
          onCaptionRequest={handleCaptionRequest}
        />
      </PlayerstackMediaController>
    );
  }

  return (
    <PlayerstackMediaController ref={controllerRef} data-skin-mode={useMobileSkin ? 'mobile' : 'desktop'}>
      {/* Overlays (Commons — Table 21-C) */}
      <PlayerstackPreventedTip language={language} onClick={onPreventedClick} />
      <PlayerstackSpinner />
      {!useMobileSkin && <PlayerstackPlayState onPlayRequest={handlePlayRequest} onPauseRequest={handlePauseRequest} />}
      <PlayerstackTopState language={language} />

      {heatmapData && heatmapData.length > 0 && <PlayerstackHeatmap heatmapData={heatmapData} />}

      {activeCaption && captions && captions.length > 0 && <PlayerstackCaptions captionsSrc={captions} />}

      {ads && <PlayerstackAdOverlay ads={ads} onAdSkip={handleAdSkip} onAdClick={handleAdClick} />}

      {live && <PlayerstackLiveIndicator onSeekRequest={handleSeekRequest} />}

      {useMobileSkin && <PlayerstackDoubleTap onSeekRequest={handleSeekRequest} />}

      {/* Right-click context menu (loop / PiP / fullscreen) */}
      <PlayerstackContextMenu
        i18n={language ? { language } : null}
        adMode={isAdActive}
        live={live}
        onLoopRequest={handleLoopRequest}
        onEnterPipRequest={handleEnterPipRequest}
        onExitPipRequest={handleExitPipRequest}
      />

      {/* Progress slider (Timelens + chapter segments + tooltip) — desktop and mobile. The
          chapter markers are fed to the slider too so it renders the chapter SEGMENT dividers
          over the timeline (parity with the original ChapterSegments), in addition to the
          `PlayerstackChapters` title read-out above. */}
      {showTimeSlider && (
        <PlayerstackTimeSlider
          sprite-vtt-file={spriteVTTFile}
          spriteData={spriteData}
          chapters={!isAdActive && chapters && chapters.length > 0 ? chapters : null}
          adMode={isAdActive}
          onSeekRequest={handleSeekRequest}
        />
      )}

      {/* Bottom control bar (Table 21-A / 21-B). In the light-DOM model the controls that
          form the horizontal bottom bar are wrapped in a single `.playerstack-controls`
          container so Core's Style_Layer can pin + lay them out as one row (the overlays,
          time-slider, chapters, heatmap, captions-overlay, context-menu, play-state,
          spinner, prevented-tip, top-state, ad-overlay and double-tap stay direct children
          of the controller so they overlay the stage). */}
      <div className="playerstack-controls">
        {/* Left cluster: transport + volume + time read-out (pinned to the left, matching
            the previous skin's ControlBar layout). */}
        <div className="playerstack-controls-left">
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
          {/* Active chapter title read-out — INLINE in the control bar after the time (parity
              with the original StyledChapterIndicator ` · {title}`), not an absolute corner. */}
          {chapters && chapters.length > 0 && <PlayerstackChapters chapters={chapters} />}
        </div>
        {/* Right cluster: captions + settings + fullscreen (pinned to the right). */}
        <div className="playerstack-controls-right">{controlsExtra}</div>
      </div>

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
