import { canPlay, isAudioUrl } from '@playerstack/core';
import { lazy, supportsWebKitPresentationMode } from '../utils/player';

export default {
  key: 'core',
  name: 'PlayerCore',
  canPlay: (url, sources) => canPlay(url, sources) && !isAudioUrl(url),
  canEnablePIP: (url) => {
    return canPlay(url) && !isAudioUrl(url) && (document.pictureInPictureEnabled || supportsWebKitPresentationMode());
  },
  lazyPlayer: lazy(() => import('./PlayerCore')),
};
