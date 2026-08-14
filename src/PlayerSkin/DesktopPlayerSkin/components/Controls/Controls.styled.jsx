import React from 'react';
import styled from 'styled-components';

const Controls = React.forwardRef(({ hiding, menuOpen, ...rest }, ref) => <div ref={ref} {...rest} />);

Controls.displayName = 'Controls';

export const StyledControls = styled(Controls)`
  display: flex;
  bottom: 0;
  position: absolute;
  width: 100%;
  transition: opacity 0.3s;
  ${({ menuOpen }) => (menuOpen ? 'z-index: 20;' : '')}
  ${({ hiding }) => {
    return hiding
      ? `
      opacity: 0;
    `
      : `
      opacity: 1;
    `;
  }}
`;
