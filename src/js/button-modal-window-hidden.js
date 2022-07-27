import { buttonsMenuFooter } from './button-modal-window-show';

export let hiddenModalButtonClickHandler = function (
   modalWindow,
   modalWindowAside
) {
   modalWindow.addEventListener(
      'click',
      function pressHiddenModalButton(event) {
         console.log(event.target);

         if (
            event.target.classList.contains('pop-up') ||
            event.target.getAttribute('id') === 'button-close-pop-up'
         ) {
            buttonsMenuFooter.classList.remove('pop-up__footer-buttons');
            modalWindow.style.display = null;
            modalWindow.classList.add('pop-up__menu--visible');
            modalWindowAside.classList.add('pop-up__menu--visible');
         }
         if (
            event.target.classList.contains('modal-window') ||
            event.target.getAttribute('id') === 'button-close-modal'
         ) {
            modalWindowAside.querySelector('.modal-window__title').textContent =
               'Обратная связь';
            modalWindowAside.querySelector('[type="email"]').style.display =
               'block';
            modalWindowAside.querySelector('[type="text"]').style.display =
               'block';
            modalWindowAside.querySelector(
               '.modal-window__textarea'
            ).style.display = 'block';
            modalWindow.style.display = 'none';
            modalWindowAside.style.display = 'none';
         }
      }
   );
};
