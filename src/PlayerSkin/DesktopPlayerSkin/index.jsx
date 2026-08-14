import React from 'react';

import PreventedTip from './components/PreventedTip';
import PlayState from './components/PlayState';
import TopState from './components/TopState';

import {
  StyledBezelTextVolume,
  StyledBezelTextVolumeWrapper,
  StyledOverlayPoster,
  StyledPlayerSkin,
  StyledPoster,
} from './DesktopPlayerSkin.styled';
import { eventsKeyCodes, keyMappings } from './DesktopPlayerSkin.constants';
import Controls from './components/Controls';
import ControlBar from './components/ControlBar';
import TimeSlider from './components/TimeSlider';
import Volume from './components/Volume';
import PlayTime from './components/PlayTime';
import PlayButton from './components/Controls/components/PlayButton';
import { PreviousButton, NextButton } from './components/Controls/components/NavButtons';
import FullscreenButton from './components/Controls/components/FullscreenButton';

import useAutoHide from '../../hooks/useAutoHide';
import SpritePreview from '../Commons/SpritePreview';
import SettingsButton from './components/Controls/components/SettingsButton';
import CaptionsButton from './components/Controls/components/CaptionsButton';
import usePlayerSkinWrapped from '../../hooks/usePlayerSkinWrapped';
import useAppDispatch from '../../hooks/context/useAppDispatch';
import ContextMenu from './components/ContextMenu';
import CaptionOverlay from '../Commons/CaptionOverlay';
import LiveAdOverlay from '../Commons/LiveAdOverlay';
import useCaptions from '../../hooks/useCaptions';
import useChapters from '../../hooks/useChapters';
import useLiveDVR from '../../hooks/useLiveDVR';
import useLiveAd from '../../hooks/useLiveAd';

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
      buffered = null,
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
      kernelMsg = null,
      liveAd = null,
    },
    ref,
  ) => {
    const dispatch = useAppDispatch();

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

    const { contextMenuItems, contextMenuPosition, handleContextMenu } = usePlayerSkinWrapped({
      fullscreen,
      contextMenuRef,
      pip,
      loop,
      pictureInPictureEnabled,
      requestPictureInPicture,
      exitPictureInPicture,
      onLoopClick,
    });

    const { getChapterAtTime } = useChapters({ chapters, duration });
    const activeChapter = React.useMemo(() => getChapterAtTime(currentTime), [getChapterAtTime, currentTime]);

    const { cues, captionStyle, updateCaptionStyle } = useCaptions({
      captions,
      activeCaption,
    });

    const {
      hasDVR,
      isAtLiveEdge,
      offsetDisplay,
      sliderDuration,
      sliderPosition,
      seekableStart,
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
          // During drag: only update visual position
          setLiveDragPosition(sliderPos);
          liveDragPositionRef.current = sliderPos;
        } else {
          // Direct click: keep visual position until video catches up
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
          // Drag ended: do the actual seek, keep visual position pinned
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
      isAdActive,
      adUrl,
      adTitle,
      adButtonText,
      adCurrentTime,
      adDuration,
      canSkip,
      skipCountdown,
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
        {live && (
          <LiveAdOverlay
            active={isAdActive}
            url={adUrl}
            title={adTitle}
            buttonText={adButtonText}
            currentTime={adCurrentTime}
            duration={adDuration}
            canSkip={canSkip}
            skipCountdown={skipCountdown}
            onSkip={skipAd}
            onClick={clickAd}
            onTimeUpdate={handleAdTimeUpdate}
            onEnded={handleAdEnded}
            adVideoRef={adVideoRef}
          />
        )}
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
        <Controls>
          {false === live && (
            <TimeSlider
              spriteVTTFile={spriteVTTFile}
              chapters={chapters}
              heatmapData={heatmapData}
              currentTime={currentTime}
              duration={duration}
              buffered={buffered}
              onChange={changeCurrentTime}
              onSeeking={onSeeking}
              fullscreen={fullscreen}
              disabled={false}
              adMode={false}
            />
          )}
          {live && liveDVR && (
            <TimeSlider
              spriteVTTFile={spriteVTTFile}
              chapters={[]}
              heatmapData={[]}
              currentTime={liveDragPosition !== null ? liveDragPosition : sliderPosition}
              duration={sliderDuration || 1}
              buffered={null}
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
                />
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
