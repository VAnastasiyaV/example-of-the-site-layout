let allBrands = document.querySelector('.brand__slider-container');
export let showHiddenAllBrandsButton = document.querySelector('.button');
let containerAllBrands = document.querySelector('.brand');

export function pressEntShowHiddenAllBrandsButton(evt) {
    if (evt.keyCode === 13) {
        document.querySelector('.button').click();
    }
}

export function pressShowHiddenAllBrandsButton() {
    if (showHiddenAllBrandsButton.classList.contains('button--arrow')) {
        containerAllBrands.classList.add('brand__slider-container--show-all-brands');
        allBrands.classList.add('brand__slider-container--show-all-brands');
        showHiddenAllBrandsButton.classList.remove('button--arrow');
        showHiddenAllBrandsButton.textContent = 'Скрыть';
        showHiddenAllBrandsButton.classList.add('button--arrow-up');  
       
    } else {
        allBrands.classList.remove('brand__slider-container--show-all-brands');
        showHiddenAllBrandsButton.classList.remove('button--arrow-up');
        showHiddenAllBrandsButton.classList.add('button--arrow');    
        containerAllBrands.classList.remove('brand__slider-container--show-all-brands');
        showHiddenAllBrandsButton.textContent = 'Показать все';
    }    
}


