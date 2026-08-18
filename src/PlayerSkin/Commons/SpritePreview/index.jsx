import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpriteOverlay, StyledSpriteFrame } from '@PlayerSkin/Commons/SpritePreview/SpritePreview.styled';
import { parseSpriteVTT as parseVTT, computeSpriteFrame } from '@playerstack/core';

/**
 * Full-player-area sprite preview.
 * Shown when the user drags the progress bar handle (seeking).
 * Renders one sprite frame scaled to cover the entire player area.
 * Shared between Desktop and Mobile skins.
 */
const SpritePreview = ({ spriteVTTFile, duration, seekTime, visible }) => {
  const [vttArray, setVttArray] = React.useState([]);
  const [sheetSizes, setSheetSizes] = React.useState({});
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!spriteVTTFile) return;
    let cancelled = false;
    (async () => {
      try {
        const vttString = await fetch(spriteVTTFile).then((r) => r.text());
        if (cancelled) return;
        // Resolve relative image paths to absolute using VTT file's base URL
        const baseUrl = spriteVTTFile.substring(0, spriteVTTFile.lastIndexOf('/') + 1);
        const resolved = vttString.replace(/^([^#?\n]+\.(png|jpg|jpeg|webp))/gim, (match) =>
          match.startsWith('http') ? match : `${baseUrl}${match}`,
        );
        const parsed = parseVTT(resolved);
        setVttArray(parsed);

        const urls = [...new Set(parsed.map((item) => item.file))];
        const sizes = {};
        await Promise.all(
          urls.map(
            (url) =>
              new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                  sizes[url] = { w: img.naturalWidth, h: img.naturalHeight };
                  resolve();
                };
                img.onerror = resolve;
                img.src = url;
              }),
          ),
        );
        if (!cancelled) {
          setSheetSizes(sizes);
        }
      } catch (error) {
        console.error('SpritePreview: Error parsing VTT file:', error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [spriteVTTFile]);

  const spriteStyle = React.useMemo(() => {
    if (!visible || vttArray.length === 0 || duration <= 0) return null;

    const container = containerRef.current;
    if (!container) return null;

    const containerW = container.offsetWidth;
    const containerH = container.offsetHeight;
    if (!containerW || !containerH) return null;

    // Convert VTT parsed cues (string coords) to numeric SpriteCue format
    const numericCues = vttArray.map((item) => ({
      from: item.from,
      to: item.to,
      x: Number(item.x),
      y: Number(item.y),
      w: Number(item.w),
      h: Number(item.h),
      file: item.file,
    }));

    const frame = computeSpriteFrame(numericCues, seekTime, { width: containerW, height: containerH }, sheetSizes);

    if (!frame) return null;

    return {
      backgroundImage: `url(${frame.file})`,
      backgroundSize: `${frame.bgW}px ${frame.bgH}px`,
      backgroundPosition: `${frame.bgPosX + frame.offsetX}px ${frame.bgPosY + frame.offsetY}px`,
    };
  }, [visible, vttArray, duration, seekTime, sheetSizes]);

  if (!spriteVTTFile) return null;

  return (
    <StyledSpriteOverlay ref={containerRef} $visible={visible && spriteStyle !== null}>
      {spriteStyle && <StyledSpriteFrame style={spriteStyle} />}
    </StyledSpriteOverlay>
  );
};

SpritePreview.propTypes = {
  spriteVTTFile: PropTypes.string,
  duration: PropTypes.number.isRequired,
  seekTime: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default React.memo(
  SpritePreview,
  (p, n) =>
    p.spriteVTTFile === n.spriteVTTFile &&
    p.duration === n.duration &&
    p.seekTime === n.seekTime &&
    p.visible === n.visible,
);
