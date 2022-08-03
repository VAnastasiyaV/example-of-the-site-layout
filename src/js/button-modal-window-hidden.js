import {
   buttonsMenuFooter,
   buttonMenuLogo,
   bodyBlur,
} from './/button-modal-window-show.js';

let hiddenPopUp = function (modalWindow, modalWindowAside) {
   buttonsMenuFooter.classList.remove('pop-up__footer-buttons');
   buttonMenuLogo.classList.remove('button-logo--pop-up');
   modalWindow.style.display = null;
   modalWindow.classList.add('pop-up__menu--visible');
   modalWindowAside.classList.add('pop-up__menu--visible');
   bodyBlur.classList.remove('body--pop-up');
};

let hiddenModalWindow = function (modalWindow, modalWindowAside) {
   modalWindow.style.display = 'none';
   modalWindowAside.style.display = 'none';
   bodyBlur.classList.remove('body--pop-up');
};

let hiddenModalButtonClickHandler = function (modalWindow, modalWindowAside) {
   modalWindow.addEventListener(
      'click',
      function pressHiddenModalButton(event) {
         console.log(event.target);
         let targetParent = event.target.parentNode;

         if (
            event.target.classList.contains('pop-up') ||
            targetParent.getAttribute('id') === 'button-close-pop-up'
         ) {
            hiddenPopUp(modalWindow, modalWindowAside);
         }
         if (
            event.target.classList.contains('modal-window') ||
            targetParent.getAttribute('id') === 'button-close-phone' ||
            targetParent.getAttribute('id') === 'button-close-message'
         ) {
            hiddenModalWindow(modalWindow, modalWindowAside);
         }
      }
   );
};

let hiddenModalButtonKeyupHandler = function (modalWindow, modalWindowAside) {
   modalWindow.addEventListener('keyup', (event) => {
      if (event.code === 'Escape' && modalWindow.classList.contains('pop-up')) {
         hiddenPopUp(modalWindow, modalWindowAside);
      }
      if (
         event.code === 'Escape' &&
         modalWindow.classList.contains('modal-window')
      ) {
         hiddenModalWindow(modalWindow, modalWindowAside);
      }
   });
};

export let pressHiddenModalButton = function (modalWindow, modalWindowAside) {
   for (let i = 0; i < modalWindow.length; i++) {
      hiddenModalButtonKeyupHandler(modalWindow[i], modalWindowAside[i]);
      hiddenModalButtonClickHandler(modalWindow[i], modalWindowAside[i]);
   }
};
