export let showModalButtons = [
   document.getElementById('button-menu'),
   document.getElementById('button-message'),
   document.getElementById('button-phone'),
];

let hiddenModalButtons = [
   document.getElementById('button-close-pop-up'),
   document.getElementById('button-close-message'),
   document.getElementById('button-close-phone'),
];

export let modalWindowsAside = [
   hiddenModalButtons[0].closest('.pop-up__menu'),
   hiddenModalButtons[1].parentElement,
   hiddenModalButtons[2].parentElement,
];

export let modalWindows = [];

for (let i = 0; i < modalWindowsAside.length; i++) {
   modalWindows[i] = modalWindowsAside[i].parentElement;
}

export let buttonsMenuFooter = document.querySelector('.header__column--aside');
export let buttonMenuLogo = document.querySelector('.button-logo');
export let bodyBlur = document.querySelector('.body__indent1440');

let showModalButtonClickHandler = function (
   showModalButton,
   modalWindow,
   modalWindowAside
) {
   showModalButton.addEventListener('click', () => {
      if (modalWindow.classList.contains('pop-up')) {
         buttonsMenuFooter.classList.add('pop-up__footer-buttons');
         buttonMenuLogo.classList.add('button-logo--pop-up');
      }
      bodyBlur.classList.add('body--pop-up');
      modalWindow.style.display = 'block';
      modalWindowAside.style.display = 'block';
      if (modalWindow.classList.contains('modal-window')) {
         let inputAutof = modalWindow.querySelector('input');
         inputAutof.focus();
      }
   });

   showModalButton.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') pressShowModalButton();
   });
};

export let pressShowModalButton = function (
   modalWindow,
   modalWindowAside,
   showModalButton
) {
   for (let i = 0; i < modalWindow.length; i++) {
      showModalButtonClickHandler(
         showModalButton[i],
         modalWindow[i],
         modalWindowAside[i]
      );
   }
};
