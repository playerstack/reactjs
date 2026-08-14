import React from 'react';
import styled from 'styled-components';

// --- Ad Banner Wrapper (left gadget) — moves down with timeline on autohide ---

const AdBannerWrapperBase = React.forwardRef(({ hiding, isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);
AdBannerWrapperBase.displayName = 'AdBannerWrapper';

export const StyledAdBannerWrapper = styled(AdBannerWrapperBase)`
  position: absolute;
  left: 12px;
  z-index: 10;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  transition: bottom 0.25s cubic-bezier(0.4, 0, 1, 1);
  ${({ hiding, isFullscreen }) =>
    hiding
      ? `
    bottom: 8px;
  `
      : isFullscreen
        ? `
    bottom: 64px;
  `
        : `
    bottom: 44px;
  `}
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    left: 20px;
    gap: 6px;
    font-size: 145% !important;
  `
      : ''}
`;

// --- Ad Banner (left gadget content) ---

export const StyledAdBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 6px 10px;
  pointer-events: auto;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const StyledAdIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const StyledAdInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
`;

export const StyledAdTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
`;

export const StyledAdUrl = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
`;

export const StyledAdButton = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition:
    background 0.2s,
    border-color 0.2s;
  text-shadow: none;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
  }
`;

// --- Skip Wrapper (right side) — stays fixed, no right border, flush to edge ---

const SkipWrapperBase = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);
SkipWrapperBase.displayName = 'SkipWrapper';

export const StyledSkipWrapper = styled(SkipWrapperBase)`
  position: absolute;
  right: 0;
  z-index: 10;
  pointer-events: none;
  line-height: normal;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    bottom: 92px;
  `
      : `
    bottom: 74px;
  `}
`;

// --- Skip Button (visible after countdown) ---

const SkipButton = React.forwardRef(({ canSkip = true, isFullscreen, ...rest }, ref) => <button ref={ref} {...rest} />);
SkipButton.displayName = 'SkipButton';

export const StyledSkipButton = styled(SkipButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 0;
  border-radius: 0;
  font-weight: 400;
  pointer-events: auto;
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;
  text-shadow: none;
  line-height: 1;
  white-space: nowrap;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid #fff;
    border-right: 0;
  }
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
      font-size: 145% !important;
      width: 86px;
      height: 44px;
  `
      : `
      font-size: 15px;
      width: 70px;
      height: 38px;
  `}
`;

// --- Skip Message (countdown before skip available) ---

const StyledSkipMessageBase = React.forwardRef(({ isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);
StyledSkipMessageBase.displayName = 'SkipMessage';

export const StyledSkipMessage = styled(StyledSkipMessageBase)`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 0;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1);
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    height: 50px;
    width: 110px;
  `
      : `
    height: 43px;
    width: 97px;
  `}
`;

const StyledSkipCountdownTextBase = React.forwardRef(({ isFullscreen, ...rest }, ref) => <span ref={ref} {...rest} />);
StyledSkipCountdownTextBase.displayName = 'SkipCountdownText';

export const StyledSkipCountdownText = styled(StyledSkipCountdownTextBase)`
  display: inline-block;
  font-weight: 500;
  text-align: center;
  padding: 0 8px;
  vertical-align: middle;
  white-space: pre;
  color: #fff;
  ${({ isFullscreen }) =>
    isFullscreen
      ? `
    font-size: 20px;
  `
      : `
    font-size: 14px;
  `}
`;

export const StyledSkipPreviewImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  object-fit: fill;
  border-radius: 2px;
  flex-shrink: 0;
`;

// --- Skip Icon (forward arrow) ---

export const StyledSkipIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #fff;
  flex-shrink: 0;
`;

// --- Sponsored label ---

export const StyledSponsoredLabel = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// --- Ad TimeSlider persistent wrapper (stays visible when controls hide) ---

const AdTimeSliderWrapper = React.forwardRef(({ hiding, isFullscreen, ...rest }, ref) => <div ref={ref} {...rest} />);
AdTimeSliderWrapper.displayName = 'AdTimeSliderWrapper';

export const StyledAdTimeSliderWrapper = styled(AdTimeSliderWrapper)`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 9;
  transition: bottom 0.25s cubic-bezier(0.4, 0, 1, 1);
  ${({ hiding, isFullscreen }) =>
    hiding
      ? `
    bottom: -2px;
  `
      : isFullscreen
        ? `
    bottom: 53px;
  `
        : `
    bottom: 35px;
  `}
`;
