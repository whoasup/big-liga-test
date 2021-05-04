import {
  ieFix
} from './utils/ie-fix';
import {
  iosVhFix
} from './utils/ios-vh-fix';

import {
  initContent
} from './modules/init-content';
import {
  initPreloader
} from './modules/init-preloader';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

window.addEventListener('load', () => {
  initPreloader(initContent);
});
