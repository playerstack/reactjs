import { canPlay } from '@playerstack/core';
import { supportsWebKitPresentationMode } from '@playerstack/core';
import { lazy } from '../utils/player';

export default {
  key: 'core',
  name: 'PlayerCore',
  canPlay: canPlay,
  canEnablePIP: (url) => {
    return canPlay(url) && (document.pictureInPictureEnabled || supportsWebKitPresentationMode());
  },
  lazyPlayer: lazy(() => import('./PlayerCore')),
};
