import '../scss/style.scss';
import { startSlider } from './/start-slider.js';
startSlider();
import { changeSlider } from './/change-slider.js';
window.addEventListener('resize', changeSlider);
import {
   addButtonClickHandler,
   allContents,
   showAllButtons,
} from './/button-show-all.js';
for (let i = 0; i < allContents.length; i++) {
   addButtonClickHandler(showAllButtons[i], allContents[i]);
}
import {
   showModalButtonClickHandler,
   modalWindows,
   modalWindowsAside,
   showModalButtons,
} from './/button-modal-window-show.js';
for (let i = 0; i < modalWindows.length; i++) {
   showModalButtonClickHandler(
      showModalButtons[i],
      modalWindows[i],
      modalWindowsAside[i]
   );
}

import { hiddenModalButtonClickHandler } from './/button-modal-window-hidden.js';
for (let i = 0; i < modalWindows.length; i++) {
   hiddenModalButtonClickHandler(modalWindows[i], modalWindowsAside[i]);
}
