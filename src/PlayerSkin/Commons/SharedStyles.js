import styled from 'styled-components';

export const StyledOverlayPoster = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
`;

export const StyledPoster = styled.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;
