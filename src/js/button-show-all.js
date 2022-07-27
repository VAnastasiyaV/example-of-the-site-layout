export let allContents = [
   document.querySelector('.about__text'),
   document.querySelector('#cards-brand'),
   document.querySelector('#card-equipment'),
];

export let showAllButtons = [
   document.getElementById('button-text'),
   document.getElementById('button-brands'),
   document.getElementById('button-equipment'),
];

export let addButtonClickHandler = function (showAllButton, allContent) {
   showAllButton.addEventListener('click', function pressShowAllButton() {
      if (showAllButton.classList.contains('button--arrow')) {
         allContent.classList.add('cards__slider-container--show-all');
         showAllButton.classList.remove('button--arrow');
         showAllButton.textContent = 'Скрыть';
         showAllButton.classList.add('button--arrow-up');
      } else {
         allContent.classList.remove('cards__slider-container--show-all');
         showAllButton.classList.remove('button--arrow-up');
         showAllButton.classList.add('button--arrow');
         if (allContent == document.querySelector('.about__text')) {
            showAllButton.textContent = 'Читать далее';
         } else {
            showAllButton.textContent = 'Показать все';
         }
      }
   });
   showAllButton.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') pressShowAllButton();
   });
};
