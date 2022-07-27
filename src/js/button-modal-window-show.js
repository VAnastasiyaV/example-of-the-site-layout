export let modalWindows = [
   document.querySelector('.pop-up'),
   document.querySelector('.modal-window'),
   document.querySelector('.modal-window'),
];

export let modalWindowsAside = [
   document.querySelector('.pop-up__menu'),
   document.querySelector('.modal-window__aside'),
   document.querySelector('.modal-window__aside'),
];

export let showModalButtons = [
   document.getElementById('button-menu'),
   document.getElementById('button-message'),
   document.getElementById('button-phone'),
];

export let buttonsMenuFooter = document.querySelector('.header__column--aside');

export let showModalButtonClickHandler = function (
   showModalButton,
   modalWindow,
   modalWindowAside
) {
   showModalButton.addEventListener('click', function pressShowModalButton() {
      if (modalWindow.classList.contains('pop-up')) {
         buttonsMenuFooter.classList.add('pop-up__footer-buttons');
      }
      if (showModalButton == document.querySelector('#button-phone')) {
         modalWindowAside.querySelector('.modal-window__title').textContent =
            'Заказать звонок';
         modalWindowAside.querySelector('[type="email"]').style.display =
            'none';
         modalWindowAside.querySelector('[type="text"]').style.display = 'none';
         modalWindowAside.querySelector(
            '.modal-window__textarea'
         ).style.display = 'none';
      }
      modalWindow.style.display = 'block';
      modalWindowAside.style.display = 'block';
   });
   showModalButton.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') pressShowModalButton();
   });
};
