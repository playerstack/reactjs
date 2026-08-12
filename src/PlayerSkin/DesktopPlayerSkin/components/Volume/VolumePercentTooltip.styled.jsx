import styled from 'styled-components';

export const StyledVolumePercentTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  transform: translateX(-50%);
  margin-bottom: 4px;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 4px 8px;
  white-space: nowrap;
  font-weight: 500;
  color: #fff;
  pointer-events: none;
  z-index: 10;
  ${({ $fullscreen }) =>
    $fullscreen
      ? `
    font-size: 130%;
  `
      : `
    font-size: 90%;
  `}
`;
