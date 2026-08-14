import PropTypes, { node } from 'prop-types';
import { en, es } from '@playerstack/core';

const i18n = { en, es };
const { string, bool, number, array, oneOfType, shape, object, func } = PropTypes;

const availableLanguages = Object.keys(i18n);

/**
 * Props shared by both video and audio player types.
 */
const commonPropTypes = {
  url: string,
  playing: bool,
  loop: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  progressInterval: number,
  playsinline: bool,
  language: PropTypes.oneOf(availableLanguages),
  stopOnUnmount: bool,
  fallback: node,
  waiting: bool,
  prevented: bool,
  wrapper: oneOfType([string, func, shape({ render: func.isRequired })]),
  skinMode: PropTypes.oneOf(['auto', 'mobile', 'desktop']),
  config: shape({
    attributes: object,
    tracks: array,
    forceHLS: bool,
    forceSafariHLS: bool,
    forceDisableHls: bool,
    forceDASH: bool,
    forceFLV: bool,
    hlsOptions: object,
    hlsVersion: string,
    dashVersion: string,
    flvVersion: string,
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onPlayBackRateChange: func,
  onProgress: func,
  onPrevious: func,
  onNext: func,
  showNavButtons: bool,
};

/**
 * Props exclusive to video player type.
 */
const videoPropTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      resolution: PropTypes.number.isRequired,
    }).isRequired,
  ),
  fullHDQualityBreak: PropTypes.number,
  spriteVTTFile: PropTypes.string,
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startTime: PropTypes.number.isRequired,
    }),
  ),
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      kind: PropTypes.string,
    }),
  ),
  heatmapData: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
  live: bool,
  liveDVR: bool,
  liveAd: object,
  poster: string,
  pip: bool,
  onPlayBackQualityChange: func,
  onEnablePIP: func,
  onDisablePIP: func,
};

/**
 * Props exclusive to audio player type.
 */
const audioPropTypes = {
  /** Title displayed in the audio player skin */
  title: string,
  /** Artist/author name displayed in the audio player skin */
  artist: string,
  /** Cover art URL for the audio player */
  poster: string,
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      kind: PropTypes.string,
    }),
  ),
};

export const propTypes = {
  viewType: PropTypes.oneOf(['video', 'audio']),
  ...commonPropTypes,
  // Include all props (both audio and video) for runtime flexibility.
  // Discriminated prop validation happens via TypeScript types at compile time.
  ...videoPropTypes,
  ...audioPropTypes,
};

const noop = () => {};

export const defaultProps = {
  viewType: 'video',
  url: '',
  sources: [],
  chapters: [],
  captions: [],
  heatmapData: [],
  playing: false,
  loop: false,
  live: false,
  liveDVR: false,
  liveAd: null,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  fallback: null,
  waiting: false,
  prevented: false,
  wrapper: 'div',
  skinMode: 'auto',
  language: availableLanguages[0],
  poster: '',
  title: '',
  artist: '',
  config: {
    attributes: {},
    tracks: [],
    forceHLS: false,
    forceDASH: false,
    forceFLV: false,
    hlsOptions: {},
    hlsVersion: '1.5.7',
    dashVersion: '4.7.4',
    flvVersion: '1.6.2',
    forceDisableHls: false,
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onPlayBackRateChange: noop,
  onPlayBackQualityChange: noop,
  onProgress: noop,
  onEnablePIP: noop,
  onDisablePIP: noop,
};
