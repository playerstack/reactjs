import { Component, ReactElement, CSSProperties } from 'react';

import PlayerStack from './lib';
import dashjs from './dashjs';
import hlsjs from './hlsjs';
import flvJs from './flvjs';

export type TActionErrorEventPlayer = (
  error: hlsjs.Events.ERROR | Event,
  data?: hlsjs.ErrorData | null,
  hls?: hlsjs.Hls | flvJs.Player | dashjs.MediaPlayerClass,
  Hls?: typeof hlsjs.Hls | typeof flvJs | typeof dashjs,
) => void;

export interface ISourceProps {
  src: string;
  resolution: number;
}

export interface IChapterProps {
  title: string;
  startTime: number;
}

export interface IHeatmapDataPoint {
  startTime: number;
  endTime: number;
  value: number;
}

export interface IOnProgressProps {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

export type TLanguage = 'es' | 'en';

export interface IBasePlayerStackCommons {
  prevented?: boolean;
  waiting?: boolean;
  playing?: boolean;
  loop?: boolean;
  volume?: number;
  muted?: boolean;
  playbackRate?: number;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  progressInterval?: number;
  playsinline?: boolean;
  pip?: boolean;
  stopOnUnmount?: boolean;
  fallback?: ReactElement;
  language: TLanguage;
  live?: boolean;
  poster?: string;
  spriteVTTFile?: string;
  chapters?: IChapterProps[];
  heatmapData?: IHeatmapDataPoint[];
  onReady?: (player: PlayerStack) => void;
  onStart?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onBuffer?: () => void;
  onBufferEnd?: () => void;
  onEnded?: () => void;
  onEnablePIP?: () => void;
  onDisablePIP?: () => void;
  onError?: TActionErrorEventPlayer;
  onDuration?: (duration: number) => void;
  onSeek?: (seconds: number) => void;
  onProgress?: (state: IOnProgressProps) => void;
  onPlayBackRateChange?: (rate: number) => void;
  onPlayBackQualityChange?: (quality: number | null) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  showNavButtons?: boolean;
}

export interface IBasePlayerStackWithUrlNever {
  sources?: never;
}

export interface IBasePlayerStackWithSourcesNever {
  url?: never;
}

export interface IBasePlayerStackWithUrl {
  url: string;
}

export interface IBasePlayerStackWithSources {
  sources: ISourceProps[];
  fullHDQualityBreak?: number;
}

type TBasePlayerStackProps =
  | (IBasePlayerStackWithUrl & IBasePlayerStackCommons & IBasePlayerStackWithUrlNever)
  | (IBasePlayerStackWithSources & IBasePlayerStackCommons & IBasePlayerStackWithSourcesNever);

export default abstract class BasePlayerStack<P extends TBasePlayerStackProps> extends Component<P, any> {
  static canPlay(url: string): boolean;
  static canEnablePIP(url: string): boolean;

  seekTo(amount: number, type?: 'seconds' | 'fraction'): void;
  getCurrentTime(): number;
  getSecondsLoaded(): number;
  getDuration(): number;
  getInternalPlayer(key?: string): Record<string, any>;
}
