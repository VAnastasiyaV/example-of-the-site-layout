import '../scss/style.scss';
import { startSlider } from './start-slider.js';

import {
   pressShowAllButton,
   allContents,
   showAllButtons,
} from './/button-show-all.js';

import {
   pressShowModalButton,
   modalWindows,
   modalWindowsAside,
   showModalButtons,
} from './/button-modal-window-show.js';
import { pressHiddenModalButton } from './/button-modal-window-hidden.js';

startSlider();
window.addEventListener('resize', startSlider);
pressShowAllButton(allContents, showAllButtons);
pressShowModalButton(modalWindows, modalWindowsAside, showModalButtons);
pressHiddenModalButton(modalWindows, modalWindowsAside);
