import React from 'react';
import PropTypes from 'prop-types';
import { getActiveCues, hexToRgba, getEdgeStyleCSS } from '@playerstack/core';
import { StyledCaptionContainer, StyledCaptionText, StyledCaptionWindow } from './CaptionOverlay.styled';
import useAppSelector from '../../../hooks/context/useAppSelector';

// Max Y when controls visible (% from top). Timeline area is ~last 18%.
const MAX_Y_CONTROLS_VISIBLE = 78;
// Max Y when controls hidden (allow near bottom with padding)
const MAX_Y_CONTROLS_HIDDEN = 92;

const CaptionOverlay = ({ cues, currentTime, captionStyle, isFullscreen, controlsVisible }) => {
  const containerRef = React.useRef(null);
  const { hiding } = useAppSelector();
  const areControlsVisible = controlsVisible || !hiding;

  const maxY = areControlsVisible ? MAX_Y_CONTROLS_VISIBLE : MAX_Y_CONTROLS_HIDDEN;

  const [position, setPosition] = React.useState({ x: 50, y: MAX_Y_CONTROLS_VISIBLE });
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartRef = React.useRef({ x: 0, y: 0, startX: 0, startY: 0 });

  const activeCues = React.useMemo(() => {
    if (!cues || cues.length === 0) return [];
    return getActiveCues(cues, currentTime);
  }, [cues, currentTime]);

  const onDragStart = React.useCallback(
    (e) => {
      e.preventDefault();
      const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      dragStartRef.current = { x: clientX, y: clientY, startX: position.x, startY: position.y };
      setIsDragging(true);
    },
    [position],
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

      // Hard limit: never beyond maxY (timeline boundary)
      const newX = Math.max(halfW, Math.min(100 - halfW, dragStartRef.current.startX + deltaX));
      const newY = Math.max(2, Math.min(maxY, dragStartRef.current.startY + deltaY));

      setPosition({ x: newX, y: newY });
    },
    [isDragging, maxY],
  );

  const onDragEnd = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  // When controls hide/show, clamp existing position to new maxY
  React.useEffect(() => {
    setPosition((prev) => ({
      ...prev,
      y: Math.min(prev.y, maxY),
    }));
  }, [maxY]);

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
