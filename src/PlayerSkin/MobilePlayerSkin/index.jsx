import React from 'react';
import PropTypes from 'prop-types';

import { StyledMobilePlayerSkin, StyledOverlay } from './MobilePlayerSkin.styled';
import { StyledOverlayPoster, StyledPoster } from '../Commons/SharedStyles';

import MobileTopBar from './components/MobileTopBar';
import MobileCenterControls from './components/MobileCenterControls';
import MobileBottomBar from './components/MobileBottomBar';
import SkipOverlay from './components/SkipOverlay';
import MobileSettingsPanel from './components/MobileSettingsPanel';
import MobileSpritePreview from './components/MobileSpritePreview';
import ContextMenu from '../Commons/ContextMenu';
import TopState from '../Commons/TopState';
import PreventedTip from '../Commons/PreventedTip';

import useMobileAutoHide from '../../hooks/useMobileAutoHide';
import useDoubleTapSkip from '../../hooks/useDoubleTapSkip';
import usePlayerSkinWrapped from '../../hooks/usePlayerSkinWrapped';
import useAppDispatch from '../../hooks/context/useAppDispatch';
import useAppSelector from '../../hooks/context/useAppSelector';
import useChapters from '../../hooks/useChapters';
import useCaptions from '../../hooks/useCaptions';
import useAds from '../../hooks/useAds';
import useCast from '../../hooks/useCast';
import CaptionOverlay from '../Commons/CaptionOverlay';
import LiveAdOverlay from '../Commons/LiveAdOverlay';
import useLiveDVR from '../../hooks/useLiveDVR';
import useLiveAd from '../../hooks/useLiveAd';
import AdsOverlay from '../Commons/AdsOverlay';

const MobilePlayerSkin = React.forwardRef(
  (
    {
      videoRef,
      playerRef,
      live = false,
      liveDVR = false,
      hasResource = false,
      hasAudio,
      prevented,
      loading,
      paused,
      ended,
      seeking,
      waiting,
      duration,
      buffered = null,
      currentTime,
      muted,
      volume,
      pictureInPictureEnabled,
      pip,
      fullscreen,
      qualities,
      spriteVTTFile,
      chapters,
      heatmapData,
      fullHDQualityBreak,
      playbackRate,
      playbackQuality,
      loop,
      poster,
      captions,
      activeCaption,
      onCaptionChange,
      onPlayClick,
      onPauseClick,
      onTogglePlay,
      changePlaybackRate,
      changePlayBackQuality,
      changeVolume,
      onMutedClick,
      changeCurrentTime,
      requestPictureInPicture,
      exitPictureInPicture,
      requestFullscreen,
      exitFullscreen,
      onSeeking,
      onLoopClick,
      onPreventedClick,
      onPrevious,
      onNext,
      showNavButtons,
      ads = null,
      kernelMsg = null,
      liveAd = null,
    },
    ref,
  ) => {
    const dispatch = useAppDispatch();
    const { i18n } = useAppSelector();
    const contextMenuRef = React.useRef(null);

    const { controlsVisible, toggleControls, showControls, hideControls } = useMobileAutoHide({
      hasResource,
      loading,
      prevented,
      paused,
      ended,
      waiting,
      seeking,
    });

    const { skipState, handleTapLeft, handleTapRight } = useDoubleTapSkip({
      currentTime,
      duration,
      changeCurrentTime,
      showControls: toggleControls,
    });

    const { isAdActive, hasSkipTimer, canSkip, skipCountdown, adProgress, onSkipClick, onAdClick } = useAds({
      ads,
      currentTime,
      duration,
      paused,
      ended,
      onPauseClick,
    });

    const { contextMenuItems, contextMenuPosition, handleContextMenu } = usePlayerSkinWrapped({
      fullscreen,
      contextMenuRef,
      pip,
      loop,
      pictureInPictureEnabled,
      requestPictureInPicture,
      exitPictureInPicture,
      onLoopClick,
      adMode: isAdActive,
    });

    const { segments, getChapterAtTime } = useChapters({ chapters, duration });

    const { cues, captionStyle } = useCaptions({
      captions,
      activeCaption,
    });

    const {
      hasDVR,
      isAtLiveEdge,
      offsetDisplay,
      sliderDuration,
      sliderPosition,
      seekToLiveEdge,
      seekToSliderPosition,
    } = useLiveDVR({ videoRef, live, currentTime });

    // Live DVR: track visual slider position during drag without seeking on every move
    const [liveDragPosition, setLiveDragPosition] = React.useState(null);
    const liveSeeking = React.useRef(false);
    const liveDragPositionRef = React.useRef(null);

    const handleLiveDVRChange = React.useCallback(
      (sliderPos) => {
        if (liveSeeking.current) {
          setLiveDragPosition(sliderPos);
          liveDragPositionRef.current = sliderPos;
        } else {
          setLiveDragPosition(sliderPos);
          liveDragPositionRef.current = sliderPos;
          seekToSliderPosition(sliderPos);
        }
      },
      [seekToSliderPosition],
    );

    const handleLiveDVRSeeking = React.useCallback(
      (isSeeking) => {
        liveSeeking.current = isSeeking;
        if (!isSeeking && liveDragPositionRef.current !== null) {
          seekToSliderPosition(liveDragPositionRef.current);
        }
        onSeeking(isSeeking);
      },
      [seekToSliderPosition, onSeeking],
    );

    // Clear the pinned visual position once the video catches up
    React.useEffect(() => {
      if (liveDragPosition !== null && !liveSeeking.current) {
        if (Math.abs(sliderPosition - liveDragPosition) < 2) {
          setLiveDragPosition(null);
          liveDragPositionRef.current = null;
        }
      }
    }, [sliderPosition, liveDragPosition]);

    const {
      isAdActive: isLiveAdActive,
      adUrl,
      adTitle,
      adButtonText,
      adCurrentTime,
      adDuration,
      canSkip: liveCanSkip,
      skipCountdown: liveSkipCountdown,
      triggerAd,
      skipAd,
      clickAd,
      handleAdTimeUpdate,
      handleAdEnded,
      adVideoRef,
    } = useLiveAd({ videoRef });

    // Trigger ad when liveAd prop changes to a non-null config
    const prevLiveAdRef = React.useRef(null);
    React.useEffect(() => {
      if (liveAd && liveAd !== prevLiveAdRef.current) {
        triggerAd(liveAd);
      }
      prevLiveAdRef.current = liveAd;
    }, [liveAd, triggerAd]);

    const { isSupported: castSupported, castState, promptCast } = useCast({ videoRef, disabled: isAdActive });

    React.useEffect(() => {
      dispatch({
        videoRef,
        playerRef,
      });
    }, [videoRef, playerRef, dispatch]);

    React.useImperativeHandle(
      ref,
      () => ({
        showControls,
        hideControls,
        triggerAd,
      }),
      [showControls, hideControls, triggerAd],
    );

    const handleChangeSettings = React.useCallback(
      ({ quality, speed }) => {
        if (speed) {
          changePlaybackRate(Number(speed.value ?? 1));
        }
        if (quality) {
          const parsed = Number(quality.value);
          changePlayBackQuality(Number.isNaN(parsed) ? 0 : parsed);
        }
      },
      [changePlaybackRate, changePlayBackQuality],
    );

    const [settingsPanelVisible, setSettingsPanelVisible] = React.useState(false);

    const handleOpenSettings = React.useCallback((e) => {
      e.stopPropagation();
      setSettingsPanelVisible(true);
    }, []);

    const handleCloseSettings = React.useCallback(() => {
      setSettingsPanelVisible(false);
    }, []);

    const handlePlayPauseClick = React.useCallback(() => {
      if (paused || ended) {
        onPlayClick();
      } else {
        onPauseClick();
      }
    }, [paused, ended, onPlayClick, onPauseClick]);

    const isLoading = (waiting || (seeking && !spriteVTTFile) || loading) && !paused && !ended;

    return (
      <StyledMobilePlayerSkin onContextMenu={handleContextMenu} onClick={toggleControls}>
        <PreventedTip
          hasResource={hasResource}
          prevented={prevented}
          paused={paused}
          muted={muted}
          currentTime={currentTime}
          onClick={onPreventedClick}
        />

        {poster && (
          <StyledOverlayPoster
            style={{
              opacity: currentTime <= 0 || ended ? 1 : 0,
            }}
          >
            <StyledPoster
              style={{
                backgroundImage: `url(${poster})`,
              }}
            />
          </StyledOverlayPoster>
        )}

        <ContextMenu
          ref={contextMenuRef}
          fullscreen={fullscreen}
          position={contextMenuPosition}
          menuItems={contextMenuItems}
        />

        {/* Full-area sprite preview when seeking via progress bar (YouTube mobile style) */}
        {spriteVTTFile && (
          <MobileSpritePreview
            spriteVTTFile={spriteVTTFile}
            duration={duration}
            seekTime={currentTime}
            visible={seeking}
          />
        )}

        {/* Dark overlay when controls visible */}
        <StyledOverlay $visible={controlsVisible && hasResource && !ended && !prevented} />

        {/* Double-tap skip areas — disabled during ads */}
        {!isAdActive && (
          <SkipOverlay skipState={skipState} onTapLeft={handleTapLeft} onTapRight={handleTapRight} i18n={i18n} />
        )}

        {/* Caption overlay — after skip areas so it wins at same z-index */}
        {activeCaption && cues.length > 0 && (
          <CaptionOverlay
            cues={cues}
            currentTime={currentTime}
            captionStyle={captionStyle}
            isFullscreen={fullscreen}
            controlsVisible={paused || ended || loading || waiting}
          />
        )}

        {/* Live ad overlay — plays on top of the stream */}
        {live && (
          <LiveAdOverlay
            active={isLiveAdActive}
            url={adUrl}
            title={adTitle}
            buttonText={adButtonText}
            currentTime={adCurrentTime}
            duration={adDuration}
            canSkip={liveCanSkip}
            skipCountdown={liveSkipCountdown}
            onSkip={skipAd}
            onClick={clickAd}
            onTimeUpdate={handleAdTimeUpdate}
            onEnded={handleAdEnded}
            adVideoRef={adVideoRef}
          />
        )}

        {/* Settings button — top right */}
        <MobileTopBar
          visible={controlsVisible && !settingsPanelVisible}
          captions={captions}
          activeCaption={activeCaption}
          onCaptionChange={onCaptionChange}
          onOpenSettings={handleOpenSettings}
          settingsLabel={i18n.settings}
          captionsLabel={i18n.captions}
          hideSettings={
            (live && qualities.length === 0 && (!captions || captions.length === 0)) ||
            (isAdActive && qualities.length === 0 && (!captions || captions.length === 0))
          }
          showCast={castSupported && !isAdActive}
          castState={castState}
          onCastClick={promptCast}
        />

        {/* Mobile settings panel (fullscreen overlay) */}
        <MobileSettingsPanel
          visible={settingsPanelVisible}
          qualities={qualities}
          captions={captions}
          activeCaption={activeCaption}
          playbackRate={playbackRate}
          playbackQuality={playbackQuality}
          onChangeSettings={handleChangeSettings}
          onCaptionChange={onCaptionChange}
          onClose={handleCloseSettings}
          adMode={isAdActive}
        />

        {/* Center controls: Prev | Play/Pause | Next */}
        <MobileCenterControls
          visible={controlsVisible && !settingsPanelVisible}
          isLoading={isLoading}
          paused={paused}
          ended={ended}
          onPlayPause={handlePlayPauseClick}
          onPrevious={onPrevious}
          onNext={onNext}
          showNavButtons={showNavButtons}
          i18n={i18n}
        />

        {/* Bottom bar: Time | Progress | Fullscreen — all in one row */}
        <MobileBottomBar
          visible={controlsVisible && !settingsPanelVisible}
          live={live}
          liveDVR={liveDVR}
          currentTime={currentTime}
          duration={duration}
          buffered={buffered}
          fullscreen={fullscreen}
          chapters={isAdActive ? [] : segments}
          heatmapData={isAdActive ? [] : heatmapData}
          getChapterAtTime={getChapterAtTime}
          i18n={i18n}
          onChangeCurrentTime={isAdActive ? () => {} : changeCurrentTime}
          onSeeking={isAdActive ? () => {} : onSeeking}
          onRequestFullscreen={requestFullscreen}
          onExitFullscreen={exitFullscreen}
          hasDVR={hasDVR}
          isAtLiveEdge={isAtLiveEdge}
          offsetDisplay={offsetDisplay}
          sliderDuration={sliderDuration}
          sliderPosition={liveDragPosition !== null ? liveDragPosition : sliderPosition}
          seekToLiveEdge={seekToLiveEdge}
          seekToSliderPosition={handleLiveDVRChange}
          onLiveDVRSeeking={handleLiveDVRSeeking}
          adMode={isAdActive}
        />

        {/* Ads overlay */}
        {isAdActive && (
          <AdsOverlay
            ads={ads}
            canSkip={canSkip}
            skipCountdown={skipCountdown}
            hasSkipTimer={hasSkipTimer}
            adProgress={adProgress}
            onSkipClick={onSkipClick}
            onAdClick={onAdClick}
            hiding={!controlsVisible}
            poster={poster}
            menuOpen={false}
            fullscreen={false}
          />
        )}

        {/* Mobile renders its own loading spinner in the center play button,
            so TopState only handles kernel/error messages here. */}
        <TopState hasResource={hasResource} kernelMsg={kernelMsg} />
      </StyledMobilePlayerSkin>
    );
  },
);

MobilePlayerSkin.displayName = 'MobilePlayerSkin';

MobilePlayerSkin.propTypes = {
  spriteVTTFile: PropTypes.string,
  videoRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(HTMLVideoElement) })])
    .isRequired,
  playerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement) })])
    .isRequired,
  prevented: PropTypes.bool,
  waiting: PropTypes.bool,
  live: PropTypes.bool.isRequired,
  hasResource: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  ended: PropTypes.bool.isRequired,
  seeking: PropTypes.bool.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  buffered: PropTypes.number.isRequired || null,
  currentTime: PropTypes.number.isRequired,
  changeCurrentTime: PropTypes.func.isRequired,
  muted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  changeVolume: PropTypes.func.isRequired,
  onMutedClick: PropTypes.func.isRequired,
  changePlaybackRate: PropTypes.func.isRequired,
  changePlayBackQuality: PropTypes.func.isRequired,
  pictureInPictureEnabled: PropTypes.bool.isRequired,
  pip: PropTypes.bool.isRequired,
  requestPictureInPicture: PropTypes.func.isRequired,
  exitPictureInPicture: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  qualities: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      isFullHD: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  playbackRate: PropTypes.number.isRequired,
  loop: PropTypes.bool.isRequired,
  requestFullscreen: PropTypes.func.isRequired,
  exitFullscreen: PropTypes.func.isRequired,
  onLoopClick: PropTypes.func.isRequired,
  onPreventedClick: PropTypes.func.isRequired,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  showNavButtons: PropTypes.bool,
  kernelMsg: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    }),
    PropTypes.oneOf([undefined]),
  ]),
  fullHDQualityBreak: PropTypes.number,
  poster: PropTypes.string.isRequired,
  hasAudio: PropTypes.bool,
  captions: PropTypes.array,
  activeCaption: PropTypes.string,
  onCaptionChange: PropTypes.func,
};

export default React.memo(
  MobilePlayerSkin,
  (p, n) =>
    p.spriteVTTFile === n.spriteVTTFile &&
    p.chapters === n.chapters &&
    p.videoRef === n.videoRef &&
    p.playerRef === n.playerRef &&
    p.live === n.live &&
    p.hasResource === n.hasResource &&
    p.hasAudio === n.hasAudio &&
    p.loading === n.loading &&
    p.prevented === n.prevented &&
    p.paused === n.paused &&
    p.ended === n.ended &&
    p.seeking === n.seeking &&
    p.waiting === n.waiting &&
    p.duration === n.duration &&
    p.currentTime === n.currentTime &&
    p.buffered === n.buffered &&
    p.muted === n.muted &&
    p.volume === n.volume &&
    p.pictureInPictureEnabled === n.pictureInPictureEnabled &&
    p.pip === n.pip &&
    p.fullscreen === n.fullscreen &&
    p.qualities === n.qualities &&
    p.playbackRate === n.playbackRate &&
    p.playbackQuality === n.playbackQuality &&
    p.loop === n.loop &&
    p.kernelMsg === n.kernelMsg &&
    p.fullHDQualityBreak === n.fullHDQualityBreak &&
    p.poster === n.poster &&
    p.onPauseClick === n.onPauseClick &&
    p.onPlayClick === n.onPlayClick &&
    p.onTogglePlay === n.onTogglePlay &&
    p.changeCurrentTime === n.changeCurrentTime &&
    p.onMutedClick === n.onMutedClick &&
    p.changeVolume === n.changeVolume &&
    p.changePlaybackRate === n.changePlaybackRate &&
    p.changePlayBackQuality === n.changePlayBackQuality &&
    p.requestPictureInPicture === n.requestPictureInPicture &&
    p.exitPictureInPicture === n.exitPictureInPicture &&
    p.requestFullscreen === n.requestFullscreen &&
    p.exitFullscreen === n.exitFullscreen &&
    p.onSeeking === n.onSeeking &&
    p.onLoopClick === n.onLoopClick &&
    p.onPreventedClick === n.onPreventedClick &&
    p.onPrevious === n.onPrevious &&
    p.onNext === n.onNext &&
    p.showNavButtons === n.showNavButtons &&
    p.captions === n.captions &&
    p.activeCaption === n.activeCaption &&
    p.onCaptionChange === n.onCaptionChange &&
    p.ads === n.ads,
);
