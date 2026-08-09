import React from 'react';
import { compareProps, propTypes } from './Icons.constants';

const NextTrackIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg height={height} width={width} viewBox="0 0 36 36" fill="currentColor">
      {/* Skip next: triangle pointing right + vertical bar on right */}
      <path d="M 11 11.5 L 11 24.5 C 11 24.8 11.2 24.9 11.4 24.75 L 21.5 18.25 C 21.7 18.1 21.7 17.9 21.5 17.75 L 11.4 11.25 C 11.2 11.1 11 11.2 11 11.5 Z" />
      <rect x="23.5" y="11" width="2.5" height="14" rx="0.5" />
    </svg>
  );
};

NextTrackIcon.displayName = 'NextTrackIcon';

NextTrackIcon.propTypes = propTypes;

export default React.memo(NextTrackIcon, compareProps);
