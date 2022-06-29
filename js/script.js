import {startSwiper} from '/js/start-slider.js';
startSwiper();
import {changeSlider} from '/js/switch-slider.js';
window.addEventListener('resize', changeSlider);
import {showHiddenAllBrandsButton, pressEntShowHiddenAllBrandsButton, pressShowHiddenAllBrandsButton} from '/js/button-show-hidden-brands.js';
showHiddenAllBrandsButton.addEventListener('keydown', pressEntShowHiddenAllBrandsButton);
showHiddenAllBrandsButton.addEventListener('click', pressShowHiddenAllBrandsButton);
