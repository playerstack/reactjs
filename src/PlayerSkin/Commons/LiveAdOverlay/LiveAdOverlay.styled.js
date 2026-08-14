import styled from 'styled-components';

export const StyledLiveAdContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background: #000;
`;

export const StyledLiveAdVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledLiveAdBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 2px 8px;
  background: rgba(0, 0, 0, 0.7);
  color: #ffc107;
  font-size: 11px;
  font-weight: 600;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StyledLiveAdInfo = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  color: #fff;
  font-size: 13px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  max-width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledLiveAdCTA = styled.button`
  position: absolute;
  bottom: 8px;
  right: 120px;
  padding: 6px 14px;
  background: #fff;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
  }
`;

export const StyledLiveAdSkip = styled.button`
  position: absolute;
  bottom: 8px;
  right: 12px;
  padding: 6px 14px;
  background: ${(props) => (props.$canSkip ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.6)')};
  color: ${(props) => (props.$canSkip ? '#000' : '#fff')};
  font-size: 12px;
  font-weight: 500;
  border: ${(props) => (props.$canSkip ? 'none' : '1px solid rgba(255, 255, 255, 0.4)')};
  border-radius: 3px;
  cursor: ${(props) => (props.$canSkip ? 'pointer' : 'default')};
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    ${(props) => props.$canSkip && 'opacity: 0.85;'}
  }
`;

export const StyledLiveAdProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
`;

export const StyledLiveAdProgressBar = styled.div`
  width: 100%;
  height: 100%;
  background: #ffc107;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.1s linear;
`;
