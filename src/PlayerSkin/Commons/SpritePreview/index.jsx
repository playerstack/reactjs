import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpriteOverlay, StyledSpriteFrame } from './SpritePreview.styled';
import { parseSpriteVTT as parseVTT } from '@playerstack/core';

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

    for (const item of vttArray) {
      if (seekTime >= item.from && seekTime <= item.to) {
        const frameW = Number(item.w);
        const frameH = Number(item.h);
        const frameX = Number(item.x);
        const frameY = Number(item.y);
        const sheet = sheetSizes[item.file];

        if (!frameW || !frameH || !sheet) return null;

        const scaleX = containerW / frameW;
        const scaleY = containerH / frameH;
        const scale = Math.max(scaleX, scaleY);

        const bgW = sheet.w * scale;
        const bgH = sheet.h * scale;
        const bgPosX = -(frameX * scale);
        const bgPosY = -(frameY * scale);

        const scaledFrameW = frameW * scale;
        const scaledFrameH = frameH * scale;
        const offsetX = (containerW - scaledFrameW) / 2;
        const offsetY = (containerH - scaledFrameH) / 2;

        return {
          backgroundImage: `url(${item.file})`,
          backgroundSize: `${bgW}px ${bgH}px`,
          backgroundPosition: `${bgPosX + offsetX}px ${bgPosY + offsetY}px`,
        };
      }
    }
    return null;
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
