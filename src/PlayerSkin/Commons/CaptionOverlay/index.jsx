import React from 'react';
import PropTypes from 'prop-types';
import { getActiveCues, hexToRgba, getEdgeStyleCSS } from '@playerstack/core';
import {
  StyledCaptionContainer,
  StyledCaptionText,
  StyledCaptionWindow,
} from '@PlayerSkin/Commons/CaptionOverlay/CaptionOverlay.styled';
import { useAppSelector, useAppDispatch } from '@context/index';

// Max Y when controls visible (% from top). Give same padding as hidden state above timeline.
const MAX_Y_CONTROLS_VISIBLE = 74;
// Max Y when controls hidden (allow near bottom with padding)
const MAX_Y_CONTROLS_HIDDEN = 88;
// Default resting Y when controls are visible
const DEFAULT_Y_CONTROLS_VISIBLE = 74;
// Default resting Y when controls are hidden (bottom with reasonable padding)
const DEFAULT_Y_CONTROLS_HIDDEN = 88;
// Min Y — prevents caption from overlapping top bar buttons (settings gear)
const MIN_Y = 12;
// Min/Max Y for center zone — prevents overlapping center play button area
const CENTER_ZONE_MIN_Y = 42;
const CENTER_ZONE_MAX_Y = 58;
const CENTER_ZONE_MIN_X = 40;
const CENTER_ZONE_MAX_X = 60;

const CaptionOverlay = ({ cues, currentTime, captionStyle, isFullscreen, controlsVisible }) => {
  const containerRef = React.useRef(null);
  const { hiding } = useAppSelector();
  const dispatch = useAppDispatch();
  const areControlsVisible = controlsVisible || !hiding;

  const maxY = areControlsVisible ? MAX_Y_CONTROLS_VISIBLE : MAX_Y_CONTROLS_HIDDEN;

  const [position, setPosition] = React.useState({ x: 50, y: DEFAULT_Y_CONTROLS_VISIBLE });
  const [isDragging, setIsDragging] = React.useState(false);
  // Track whether the user has manually dragged the caption
  const userDraggedRef = React.useRef(false);
  const dragStartRef = React.useRef({ x: 0, y: 0, startX: 0, startY: 0 });

  const activeCues = React.useMemo(() => {
    if (!cues || cues.length === 0) return [];
    return getActiveCues(cues, currentTime);
  }, [cues, currentTime]);

  const onDragStart = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      dragStartRef.current = { x: clientX, y: clientY, startX: position.x, startY: position.y };
      setIsDragging(true);
      dispatch({ type: 'captionDragging', payload: true });
    },
    [position, dispatch],
  );

  const onDragMove = React.useCallback(
    (e) => {
      if (!isDragging || !containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;

      const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      const parentRect = parent.getBoundingClientRect();
      const captionRect = containerRef.current.getBoundingClientRect();

      const halfW = (captionRect.width / 2 / parentRect.width) * 100;

      const deltaX = ((clientX - dragStartRef.current.x) / parentRect.width) * 100;
      const deltaY = ((clientY - dragStartRef.current.y) / parentRect.height) * 100;

      // Hard limit: never beyond maxY (timeline boundary) or above MIN_Y (top bar)
      let newX = Math.max(halfW, Math.min(100 - halfW, dragStartRef.current.startX + deltaX));
      let newY = Math.max(MIN_Y, Math.min(maxY, dragStartRef.current.startY + deltaY));

      // Push caption out of center play button zone when controls are visible
      if (areControlsVisible && containerRef.current) {
        const captionH = (containerRef.current.offsetHeight / parentRect.height) * 100;
        const captionW = (containerRef.current.offsetWidth / parentRect.width) * 100;
        const captionTop = newY;
        const captionBottom = newY + captionH;
        const captionLeft = newX - captionW / 2;
        const captionRight = newX + captionW / 2;

        const overlapsCenter =
          captionRight > CENTER_ZONE_MIN_X &&
          captionLeft < CENTER_ZONE_MAX_X &&
          captionBottom > CENTER_ZONE_MIN_Y &&
          captionTop < CENTER_ZONE_MAX_Y;

        if (overlapsCenter) {
          // Push vertically to the nearest edge of the center zone
          const distToTop = captionBottom - CENTER_ZONE_MIN_Y;
          const distToBottom = CENTER_ZONE_MAX_Y - captionTop;
          if (distToTop <= distToBottom) {
            newY = CENTER_ZONE_MIN_Y - captionH;
          } else {
            newY = CENTER_ZONE_MAX_Y;
          }
          // Clamp again after push
          newY = Math.max(MIN_Y, Math.min(maxY, newY));
        }
      }

      setPosition({ x: newX, y: newY });
    },
    [isDragging, maxY, areControlsVisible],
  );

  const onDragEnd = React.useCallback(() => {
    setIsDragging(false);
    dispatch({ type: 'captionDragging', payload: false });
    // If user drops the caption near the default resting zone (within 6% of maxY),
    // treat it as "snapped back" and re-enable auto-positioning.
    setPosition((prev) => {
      const threshold = 6;
      const nearBottom = prev.y >= maxY - threshold;
      userDraggedRef.current = !nearBottom;
      return prev;
    });
  }, [maxY, dispatch]);

  // When controls hide/show, move captions to appropriate resting position.
  // If user has manually dragged, only clamp to stay within bounds.
  React.useEffect(() => {
    setPosition((prev) => {
      if (userDraggedRef.current) {
        // Only clamp: keep user's chosen position but don't exceed maxY
        return { ...prev, y: Math.min(prev.y, maxY) };
      }
      // Auto-move to default resting position for current controls state
      const targetY = areControlsVisible ? DEFAULT_Y_CONTROLS_VISIBLE : DEFAULT_Y_CONTROLS_HIDDEN;
      return { ...prev, y: targetY };
    });
  }, [maxY, areControlsVisible]);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', onDragMove);
      document.addEventListener('mouseup', onDragEnd);
      document.addEventListener('touchmove', onDragMove);
      document.addEventListener('touchend', onDragEnd);
    }
    return () => {
      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup', onDragEnd);
      document.removeEventListener('touchmove', onDragMove);
      document.removeEventListener('touchend', onDragEnd);
    };
  }, [isDragging, onDragMove, onDragEnd]);

  if (activeCues.length === 0) return null;

  const fontSizeValue = parseInt(captionStyle.fontSize) / 100;
  const baseFontSize = isFullscreen ? 24 : 16;
  const computedFontSize = `${baseFontSize * fontSizeValue}px`;
  const textColor = hexToRgba(captionStyle.fontColor, captionStyle.fontOpacity);
  const bgColor = hexToRgba(captionStyle.backgroundColor, captionStyle.backgroundOpacity);
  const winColor = hexToRgba(captionStyle.windowColor, captionStyle.windowOpacity);
  const edgeShadow = getEdgeStyleCSS(captionStyle.edgeStyle, 'rgba(0,0,0,0.8)');

  const fontFamilyStyle =
    captionStyle.fontFamily === 'small-caps'
      ? { fontFamily: 'sans-serif', fontVariant: 'small-caps' }
      : { fontFamily: captionStyle.fontFamily, fontVariant: 'normal' };

  return (
    <StyledCaptionContainer
      ref={containerRef}
      positionX={position.x}
      positionY={position.y}
      onMouseDown={onDragStart}
      onTouchStart={onDragStart}
      isDragging={isDragging}
    >
      <StyledCaptionWindow backgroundColor={winColor}>
        {activeCues.map((cue, index) => (
          <StyledCaptionText
            key={`${cue.startTime}-${index}`}
            style={{
              fontSize: computedFontSize,
              color: textColor,
              backgroundColor: bgColor,
              textShadow: edgeShadow,
              ...fontFamilyStyle,
            }}
          >
            {cue.text}
          </StyledCaptionText>
        ))}
      </StyledCaptionWindow>
    </StyledCaptionContainer>
  );
};

CaptionOverlay.propTypes = {
  cues: PropTypes.array,
  currentTime: PropTypes.number.isRequired,
  captionStyle: PropTypes.object.isRequired,
  isFullscreen: PropTypes.bool,
  controlsVisible: PropTypes.bool,
};

export default React.memo(CaptionOverlay);
