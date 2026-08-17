import styled, { css, keyframes } from 'styled-components';

// --- Animations ---

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// --- Main container: overlays the player but does NOT hide the stream ---

export const StyledLiveAdContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.3s ease-out forwards;

  ${({ $exiting }) =>
    $exiting &&
    css`
      animation: ${fadeOut} 0.4s ease-in forwards;
      pointer-events: none;
    `}
`;

// --- Ad video: fills the player area, plays on top ---

export const StyledLiveAdVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
  z-index: 1;
`;

// --- Top bar: "AD" badge + ad info ---

export const StyledLiveAdTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  z-index: 3;
  pointer-events: none;
`;

// --- "AD" badge (Twitch style: yellow background, bold text) ---

export const StyledLiveAdBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 3px 6px;
  background: #f5c518;
  color: #000;
  font-size: 11px;
  font-weight: 700;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  line-height: 1;
  user-select: none;
`;

// --- Ad title/advertiser info (left of top bar) ---

export const StyledLiveAdInfo = styled.span`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;
  user-select: none;
`;

// --- Bottom area: contains CTA, skip, and progress ---

export const StyledLiveAdBottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 3;
  pointer-events: none;
`;

// --- Bottom actions row (CTA + Live Stream badge + Skip) ---

export const StyledLiveAdActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 12px 8px;
  gap: 8px;
  pointer-events: auto;
`;

// --- "Live Stream" pill (shows the stream continues) ---

export const StyledLiveStreamBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  background: rgba(30, 30, 30, 0.85);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  border-radius: 3px;
  user-select: none;
  pointer-events: none;
  margin-right: auto;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e91916;
    flex-shrink: 0;
  }
`;

// --- CTA button ("Visit site") ---

export const StyledLiveAdCTA = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: #fff;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 0.15s;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }
`;

// --- Skip button (Twitch-style: right side, filled when active) ---

export const StyledLiveAdSkip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 3px;
  white-space: nowrap;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s;

  ${({ $canSkip }) =>
    $canSkip
      ? css`
          background: rgba(255, 255, 255, 0.95);
          color: #000;
          border: none;
          cursor: pointer;

          &:hover {
            background: #fff;
          }
        `
      : css`
          background: rgba(0, 0, 0, 0.6);
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.35);
          cursor: default;
        `}
`;

// --- Progress bar container (yellow, bottom edge) ---

export const StyledLiveAdProgress = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
`;

// --- Progress bar fill (yellow like Twitch/YouTube) ---

export const StyledLiveAdProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5c518;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.25s linear;
`;
