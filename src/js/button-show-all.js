export let allContents = [
   document.querySelector('.info__text'),
   document.querySelector('#cards-brand'),
   document.querySelector('#card-equipment'),
];

export let showAllButtons = [
   document.getElementById('button-text'),
   document.getElementById('button-brands'),
   document.getElementById('button-equipment'),
];

let showAllButtonClickHandler = function (showAllButton, allContent) {
   showAllButton.addEventListener('click', function ShowAllContentButton() {
      if (showAllButton.classList.contains('button--arrow')) {
         allContent.classList.toggle('cards__container--show-all');
         showAllButton.classList.toggle('button--arrow');
         showAllButton.textContent = 'Скрыть';
         showAllButton.classList.toggle('button--arrow-up');
      } else {
         allContent.classList.toggle('cards__container--show-all');
         showAllButton.classList.toggle('button--arrow-up');
         showAllButton.classList.toggle('button--arrow');
         if (allContent == document.querySelector('.about__text')) {
            showAllButton.textContent = 'Читать далее';
         } else {
            showAllButton.textContent = 'Показать все';
         }
      }
   });
   showAllButton.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') ShowAllContentButton();
   });
};

export let pressShowAllButton = function (allCont, showAllBut) {
   for (let i = 0; i < allCont.length; i++) {
      showAllButtonClickHandler(showAllBut[i], allCont[i]);
   }
};
