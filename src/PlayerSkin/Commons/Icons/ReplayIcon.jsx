import React from 'react';
import { compareProps, propTypes } from '@PlayerSkin/Commons/Icons/Icons.constants';

const ReplayIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg height={height} width={width} viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M 18 12.3 L 18 8.5 L 13 13.25 L 18 18 L 18 14.2 C 21.3 14.2 24 16.765 24 19.9 C 24 23.035 21.3 25.6 18 25.6 C 14.7 25.6 12 23.035 12 19.9 L 10 19.9 C 10 24.08 13.6 27.5 18 27.5 C 22.4 27.5 26 24.08 26 19.9 C 26 15.72 22.4 12.3 18 12.3 Z" />
    </svg>
  );
};

ReplayIcon.displayName = 'ReplayIcon';

ReplayIcon.propTypes = propTypes;

export default React.memo(ReplayIcon, compareProps);
