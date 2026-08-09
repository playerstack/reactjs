import React from 'react';
import { compareProps, propTypes } from './Icons.constants';

const PreviousTrackIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg height={height} width={width} viewBox="0 0 36 36" fill="currentColor">
      {/* Skip previous: vertical bar on left + triangle pointing left */}
      <rect x="10" y="11" width="2.5" height="14" rx="0.5" />
      <path d="M 25 11.5 L 25 24.5 C 25 24.8 24.8 24.9 24.6 24.75 L 14.5 18.25 C 14.3 18.1 14.3 17.9 14.5 17.75 L 24.6 11.25 C 24.8 11.1 25 11.2 25 11.5 Z" />
    </svg>
  );
};

PreviousTrackIcon.displayName = 'PreviousTrackIcon';

PreviousTrackIcon.propTypes = propTypes;

export default React.memo(PreviousTrackIcon, compareProps);
