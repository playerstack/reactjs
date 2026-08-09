import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpriteOverlay, StyledSpriteFrame } from './MobileSpritePreview.styled';
import { parseVTT } from '../../../DesktopPlayerSkin/components/TimeSlider/utils';

/**
 * Full-player-area sprite preview for mobile.
 * Shown when the user drags the progress bar handle.
 * Renders one sprite frame scaled to cover the entire player area.
 */
const MobileSpritePreview = ({ spriteVTTFile, duration, seekTime, visible }) => {
  const [vttArray, setVttArray] = React.useState([]);
  const [sheetSizes, setSheetSizes] = React.useState({}); // { [url]: { w, h } }
  const containerRef = React.useRef(null);

  // Fetch and parse VTT file once
  React.useEffect(() => {
    if (!spriteVTTFile) return;
    let cancelled = false;
    (async () => {
      try {
        const vttString = await fetch(spriteVTTFile).then((r) => r.text());
        if (cancelled) return;
        const parsed = parseVTT(vttString);
        setVttArray(parsed);

        // Preload each unique sprite sheet image to get natural dimensions
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
        console.error('MobileSpritePreview: Error parsing VTT file:', error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [spriteVTTFile]);

  // Compute background style: scale sprite sheet so ONE frame covers the container
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

        // Scale: make one frame cover container (cover behavior)
        const scaleX = containerW / frameW;
        const scaleY = containerH / frameH;
        const scale = Math.max(scaleX, scaleY);

        // Scaled sheet dimensions
        const bgW = sheet.w * scale;
        const bgH = sheet.h * scale;

        // Scaled frame offset into the sheet
        const bgPosX = -(frameX * scale);
        const bgPosY = -(frameY * scale);

        // Center offset (when frame aspect != container aspect)
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

MobileSpritePreview.propTypes = {
  spriteVTTFile: PropTypes.string,
  duration: PropTypes.number.isRequired,
  seekTime: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default React.memo(
  MobileSpritePreview,
  (p, n) =>
    p.spriteVTTFile === n.spriteVTTFile &&
    p.duration === n.duration &&
    p.seekTime === n.seekTime &&
    p.visible === n.visible,
);
