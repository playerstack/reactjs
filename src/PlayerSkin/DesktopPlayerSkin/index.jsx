import React from 'react';

import PreventedTip from '@PlayerSkin/DesktopPlayerSkin/components/PreventedTip';
import PlayState from '@PlayerSkin/DesktopPlayerSkin/components/PlayState';
import TopState from '@PlayerSkin/DesktopPlayerSkin/components/TopState';

import {
  StyledBezelTextVolume,
  StyledBezelTextVolumeWrapper,
  StyledOverlayPoster,
  StyledPlayerSkin,
  StyledPoster,
  StyledControlsBackdrop,
} from '@PlayerSkin/DesktopPlayerSkin/DesktopPlayerSkin.styled';
import { eventsKeyCodes, keyMappings } from '@playerstack/core';
import Controls from '@PlayerSkin/DesktopPlayerSkin/components/Controls';
import ControlBar from '@PlayerSkin/DesktopPlayerSkin/components/ControlBar';
import TimeSlider from '@PlayerSkin/DesktopPlayerSkin/components/TimeSlider';
import Volume from '@PlayerSkin/DesktopPlayerSkin/components/Volume';
import PlayTime from '@PlayerSkin/DesktopPlayerSkin/components/PlayTime';
import PlayButton from '@PlayerSkin/DesktopPlayerSkin/components/Controls/components/PlayButton';
import { PreviousButton, NextButton } from '@PlayerSkin/DesktopPlayerSkin/components/Controls/components/NavButtons';
import FullscreenButton from '@PlayerSkin/DesktopPlayerSkin/components/Controls/components/FullscreenButton';

import useAutoHide from '@hooks/useAutoHide';
import SpritePreview from '@PlayerSkin/Commons/SpritePreview';
import SettingsButton from '@PlayerSkin/DesktopPlayerSkin/components/Controls/components/SettingsButton';
import CaptionsButton from '@PlayerSkin/DesktopPlayerSkin/components/Controls/components/CaptionsButton';
import usePlayerSkinWrapped from '@hooks/usePlayerSkinWrapped';
import { useAppDispatch, useAppSelector } from '@context/index';
import ContextMenu from '@PlayerSkin/DesktopPlayerSkin/components/ContextMenu';
import CaptionOverlay from '@PlayerSkin/Commons/CaptionOverlay';
import LiveAdOverlay from '@PlayerSkin/Commons/LiveAdOverlay';
import useCaptions from '@hooks/useCaptions';
import { useChapters } from '@hooks/useChapters';
import { useLiveDVR } from '@hooks/useLiveDVR';
import { createWebDVRAdapter } from '@utils/dvrAdapter';
import useLiveAd from '@hooks/useLiveAd';
import { useAds } from '@hooks/useAds';
import { webAdsPlatform } from '@utils/adsPlatform';
import useCast from '@hooks/useCast';
import AdsOverlay from '@PlayerSkin/Commons/AdsOverlay';
import { StyledAdTimeSliderWrapper } from '@PlayerSkin/Commons/AdsOverlay/AdsOverlay.styled';
import { castIcon } from '@playerstack/core/icons';
import Icon from '@components/Icon';
import Tooltip from '@PlayerSkin/Commons/Tooltip';
import StyledGeneralButton from '@PlayerSkin/Commons/Buttons/StyledGeneralButton';

const DesktopPlayerSkin = React.forwardRef(
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
      bufferedRanges = [],
      currentTime,
      muted,
      volume,
      pictureInPictureEnabled,
      pip,
      fullscreen,
      qualities,
      captions,
      activeCaption,
      spriteVTTFile,
      chapters,
      heatmapData,
      fullHDQualityBreak,
      playbackRate,
      playbackQuality,
      loop,
      poster,
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
      onCaptionChange,
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
    const { hiding, menuVisible, subMenuVisible } = useAppSelector();

    const [showBezel, setShowBezel] = React.useState(false);
    const timerRef = React.useRef();
    const contextMenuRef = React.useRef(null);

    const { showControls, hideControls } = useAutoHide({
      hasResource,
      loading,
      prevented,
      paused,
      ended,
      waiting,
      seeking,
      kernelMsg,
    });

    // VOD ads system
    const {
      isAdActive,
      hasSkipTimer,
      canSkip: vodCanSkip,
      skipCountdown: vodSkipCountdown,
      adProgress,
      onSkipClick,
      onAdClick,
    } = useAds({
      ads,
      currentTime,
      duration,
      paused,
      ended,
      onPauseClick,
      platform: webAdsPlatform,
    });

    const { contextMenuItems, contextMenuPosition, handleContextMenu } = usePlayerSkinWrapped({
      fullscreen,
      contextMenuRef,
      pip,
      loop,
      live: live || liveDVR,
      pictureInPictureEnabled,
      requestPictureInPicture,
      exitPictureInPicture,
      onLoopClick,
      adMode: isAdActive,
    });

    // No-op for handlers disabled during ads
    const noop = React.useCallback(() => {}, []);

    const { isSupported: castSupported, castState, promptCast } = useCast({ videoRef, disabled: isAdActive });

    const { getChapterAtTime } = useChapters({ chapters, duration });
    const activeChapter = React.useMemo(() => getChapterAtTime(currentTime), [getChapterAtTime, currentTime]);

    const { cues, captionStyle, updateCaptionStyle } = useCaptions({
      captions,
      activeCaption,
    });

    // Live DVR system
    const dvrAdapter = React.useMemo(() => (videoRef ? createWebDVRAdapter(videoRef) : null), [videoRef]);

    const {
      dvrState,
      isAtLiveEdge,
      liveOffset: offsetDisplay,
      seekToLive: seekToLiveEdge,
      seekToDVRPosition: seekToSliderPosition,
    } = useLiveDVR({ adapter: dvrAdapter, liveDVR: live, playing: !paused });

    const hasDVR = dvrState?.hasDVR ?? false;
    const sliderDuration = dvrState?.sliderDuration ?? 0;
    const sliderPosition = dvrState?.sliderPosition ?? 0;

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

    // Live ad overlay system (Twitch-style: stream muted, not paused)
    const {
      isActive: isLiveAdActive,
      isExiting: isLiveAdExiting,
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

    // Trigger live ad when liveAd prop changes to a non-null config
    const prevLiveAdRef = React.useRef(null);
    React.useEffect(() => {
      if (liveAd && liveAd !== prevLiveAdRef.current) {
        triggerAd(liveAd);
      }
      prevLiveAdRef.current = liveAd;
    }, [liveAd, triggerAd]);

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

    React.useEffect(() => {
      if (playerRef.current) {
        const playerElement = playerRef.current;
        const handleKeyDown = (e) => {
          const keyMapping = eventsKeyCodes[e.which || e.keyCode] || keyMappings[e.key];
          clearTimeout(timerRef.current);
          if (keyMapping === 'ARROW_UP_KEY' || keyMapping === 'ARROW_DOWN_KEY') {
            setShowBezel(true);
            timerRef.current = setTimeout(() => setShowBezel(false), 2000);
          } else {
            setShowBezel(false);
          }
        };
        playerElement.addEventListener('keydown', handleKeyDown);

        return () => {
          clearTimeout(timerRef.current);
          playerElement.removeEventListener('keydown', handleKeyDown);
        };
      }
    }, [muted, volume, playerRef]);

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

    return (
      <StyledPlayerSkin
        onContextMenu={handleContextMenu}
        onMouseLeave={hideControls}
        onMouseMove={showControls}
        onTouchStart={showControls}
        onMouseEnter={showControls}
        onClick={showControls}
      >
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
        <StyledBezelTextVolumeWrapper>
          <StyledBezelTextVolume
            style={{
              display: showBezel ? 'inline-block' : 'none',
            }}
          >
            {Math.round(volume * 100)}%
          </StyledBezelTextVolume>
        </StyledBezelTextVolumeWrapper>
        <ContextMenu
          ref={contextMenuRef}
          fullscreen={fullscreen}
          position={contextMenuPosition}
          menuItems={contextMenuItems}
        />
        {/* Full-area sprite preview when seeking via timeline (same as mobile) */}
        {spriteVTTFile && (
          <SpritePreview spriteVTTFile={spriteVTTFile} duration={duration} seekTime={currentTime} visible={seeking} />
        )}
        {activeCaption && cues.length > 0 && (
          <CaptionOverlay
            cues={cues}
            currentTime={currentTime}
            captionStyle={captionStyle}
            isFullscreen={fullscreen}
            controlsVisible={paused || ended || loading || waiting}
          />
        )}
        {/* Live ad overlay — stream continues muted behind (Twitch-style) */}
        {live && (
          <LiveAdOverlay
            isActive={isLiveAdActive}
            isExiting={isLiveAdExiting}
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
        {/* VOD ads: PlayState conditional rendering */}
        {!isAdActive && (
          <PlayState
            hasResource={hasResource}
            loading={loading}
            paused={paused}
            ended={ended}
            waiting={waiting}
            seeking={seeking}
            kernelMsg={kernelMsg}
            onClick={onTogglePlay}
          />
        )}
        {isAdActive && (
          <PlayState
            hasResource={hasResource}
            loading={loading}
            paused={paused}
            ended={false}
            waiting={false}
            seeking={false}
            kernelMsg={kernelMsg}
            onClick={onTogglePlay}
          />
        )}
        <StyledControlsBackdrop style={{ opacity: hiding ? 0 : 1 }} />
        {/* VOD ad timeline (disabled, shows progress) */}
        {isAdActive && false === live && (
          <StyledAdTimeSliderWrapper hiding={hiding} isFullscreen={fullscreen}>
            <TimeSlider
              spriteVTTFile=""
              chapters={[]}
              heatmapData={[]}
              currentTime={currentTime}
              duration={duration}
              onChange={noop}
              onSeeking={noop}
              fullscreen={fullscreen}
              disabled={true}
              adMode={true}
            />
          </StyledAdTimeSliderWrapper>
        )}
        {/* VOD ads overlay */}
        {isAdActive && (
          <AdsOverlay
            ads={ads}
            canSkip={vodCanSkip}
            skipCountdown={vodSkipCountdown}
            hasSkipTimer={hasSkipTimer}
            adProgress={adProgress}
            onSkipClick={onSkipClick}
            onAdClick={onAdClick}
            hiding={hiding}
            poster={poster}
            menuOpen={menuVisible || subMenuVisible}
            fullscreen={fullscreen}
          />
        )}
        <Controls>
          {/* VOD timeline */}
          {false === live && !isAdActive && (
            <TimeSlider
              spriteVTTFile={spriteVTTFile}
              chapters={chapters}
              heatmapData={heatmapData}
              currentTime={currentTime}
              duration={duration}
              bufferedRanges={bufferedRanges}
              onChange={changeCurrentTime}
              onSeeking={onSeeking}
              fullscreen={fullscreen}
              disabled={false}
              adMode={false}
            />
          )}
          {/* Live DVR timeline */}
          {live && liveDVR && (
            <TimeSlider
              spriteVTTFile={spriteVTTFile}
              chapters={[]}
              heatmapData={[]}
              currentTime={liveDragPosition !== null ? liveDragPosition : sliderPosition}
              duration={sliderDuration || 1}
              onChange={handleLiveDVRChange}
              onSeeking={handleLiveDVRSeeking}
              fullscreen={fullscreen}
              disabled={!hasDVR}
              adMode={false}
              live={true}
              isAtLiveEdge={isAtLiveEdge}
            />
          )}
          <ControlBar
            extra={
              <>
                <CaptionsButton
                  fullscreen={fullscreen}
                  captions={captions}
                  activeCaption={activeCaption}
                  onCaptionChange={onCaptionChange}
                />
                <SettingsButton
                  live={live}
                  qualities={qualities}
                  captions={captions}
                  activeCaption={activeCaption}
                  playbackRate={playbackRate}
                  playbackQuality={playbackQuality}
                  fullscreen={fullscreen}
                  fullHDQualityBreak={fullHDQualityBreak}
                  changeSettings={handleChangeSettings}
                  onCaptionChange={onCaptionChange}
                  captionStyle={captionStyle}
                  onCaptionStyleChange={updateCaptionStyle}
                  adMode={isAdActive}
                />
                {castSupported && !isAdActive && (
                  <Tooltip label="Google Cast" fullscreen={fullscreen}>
                    <StyledGeneralButton
                      onClick={promptCast}
                      aria-label="Google Cast"
                      isFullscreen={fullscreen}
                      style={{ opacity: castState === 'connected' ? 1 : 0.8 }}
                    >
                      <Icon icon={castIcon} width={fullscreen ? 28 : 20} height={fullscreen ? 28 : 20} />
                    </StyledGeneralButton>
                  </Tooltip>
                )}
                <FullscreenButton
                  fullscreen={fullscreen}
                  requestFullscreen={requestFullscreen}
                  exitFullscreen={exitFullscreen}
                />
              </>
            }
            fullscreen={fullscreen}
          >
            <PreviousButton fullscreen={fullscreen} onPrevious={onPrevious} showNavButtons={showNavButtons} />
            <PlayButton
              fullscreen={fullscreen}
              paused={paused}
              ended={ended}
              onPauseClick={onPauseClick}
              onPlayClick={onPlayClick}
            />
            <NextButton fullscreen={fullscreen} onNext={onNext} showNavButtons={showNavButtons} />
            <Volume
              fullscreen={fullscreen}
              isMuted={muted}
              forceMuted={!hasAudio}
              volume={volume}
              onMutedClick={onMutedClick}
              changeVolume={changeVolume}
            />
            <PlayTime
              live={live}
              currentTime={currentTime}
              duration={duration}
              chapterTitle={activeChapter?.title}
              isAtLiveEdge={liveDVR ? isAtLiveEdge : true}
              offsetDisplay={liveDVR ? offsetDisplay : ''}
              onLiveClick={liveDVR ? seekToLiveEdge : undefined}
            />
          </ControlBar>
        </Controls>
        <TopState hasResource={hasResource} loading={loading} kernelMsg={kernelMsg} />
      </StyledPlayerSkin>
    );
  },
);

DesktopPlayerSkin.displayName = 'DesktopPlayerSkin';

export default DesktopPlayerSkin;
