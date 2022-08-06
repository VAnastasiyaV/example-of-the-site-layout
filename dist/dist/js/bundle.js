/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/button-modal-window-hidden.js":
/*!**********************************************!*\
  !*** ./src/js/button-modal-window-hidden.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pressHiddenModalButton": () => (/* binding */ pressHiddenModalButton)
/* harmony export */ });
/* harmony import */ var _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//button-modal-window-show.js */ "./src/js/button-modal-window-show.js");


let hiddenPopUp = function (modalWindow, modalWindowAside) {
  _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_0__.buttonsMenuFooter.classList.remove('pop-up__footer-buttons');
  _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_0__.buttonMenuLogo.classList.remove('button-logo--pop-up');
  modalWindow.style.display = null;
  modalWindow.classList.add('pop-up__menu--visible');
  modalWindowAside.classList.add('pop-up__menu--visible');
  _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_0__.bodyBlur.classList.remove('body--pop-up');
};

let hiddenModalWindow = function (modalWindow, modalWindowAside) {
  modalWindow.style.display = 'none';
  modalWindowAside.style.display = 'none';
  _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_0__.bodyBlur.classList.remove('body--pop-up');
  _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_0__.popUpBlur.classList.remove('body--pop-up');
};

let hiddenModalButtonClickHandler = function (modalWindow, modalWindowAside) {
  modalWindow.addEventListener('click', function pressHiddenModalButton(event) {
    let targetParent = event.target.parentNode;

    if (event.target.classList.contains('pop-up') || targetParent.getAttribute('id') === 'button-close-pop-up') {
      hiddenPopUp(modalWindow, modalWindowAside);
    }

    if (event.target.classList.contains('modal-window') || targetParent.getAttribute('id') === 'button-close-phone' || targetParent.getAttribute('id') === 'button-close-message') {
      hiddenModalWindow(modalWindow, modalWindowAside);
    }
  });
};

let hiddenModalButtonKeyupHandler = function (modalWindow, modalWindowAside) {
  modalWindow.addEventListener('keyup', event => {
    if (event.code === 'Escape' && modalWindow.classList.contains('pop-up')) {
      hiddenPopUp(modalWindow, modalWindowAside);
    }

    if (event.code === 'Escape' && modalWindow.classList.contains('modal-window')) {
      hiddenModalWindow(modalWindow, modalWindowAside);
    }
  });
};

let pressHiddenModalButton = function (modalWindow, modalWindowAside) {
  for (let i = 0; i < modalWindow.length; i++) {
    hiddenModalButtonKeyupHandler(modalWindow[i], modalWindowAside[i]);
    hiddenModalButtonClickHandler(modalWindow[i], modalWindowAside[i]);
  }
};

/***/ }),

/***/ "./src/js/button-modal-window-show.js":
/*!********************************************!*\
  !*** ./src/js/button-modal-window-show.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bodyBlur": () => (/* binding */ bodyBlur),
/* harmony export */   "buttonMenuLogo": () => (/* binding */ buttonMenuLogo),
/* harmony export */   "buttonsMenuFooter": () => (/* binding */ buttonsMenuFooter),
/* harmony export */   "modalWindows": () => (/* binding */ modalWindows),
/* harmony export */   "modalWindowsAside": () => (/* binding */ modalWindowsAside),
/* harmony export */   "popUpBlur": () => (/* binding */ popUpBlur),
/* harmony export */   "pressShowModalButton": () => (/* binding */ pressShowModalButton),
/* harmony export */   "showModalButtons": () => (/* binding */ showModalButtons)
/* harmony export */ });
let showModalButtons = [document.getElementById('button-menu'), document.getElementById('button-message'), document.getElementById('button-phone')];
let hiddenModalButtons = [document.getElementById('button-close-pop-up'), document.getElementById('button-close-message'), document.getElementById('button-close-phone')];
let modalWindowsAside = [hiddenModalButtons[0].closest('.pop-up__menu'), hiddenModalButtons[1].parentElement, hiddenModalButtons[2].parentElement];
let modalWindows = [];

for (let i = 0; i < modalWindowsAside.length; i++) {
  modalWindows[i] = modalWindowsAside[i].parentElement;
}

let buttonsMenuFooter = document.querySelector('.header__column--aside');
let buttonMenuLogo = document.querySelector('.button-logo');
let bodyBlur = document.querySelector('.body__indent1440');
let popUpBlur = document.querySelector('aside');

let showModalButtonClickHandler = function (showModalButton, modalWindow, modalWindowAside) {
  showModalButton.addEventListener('click', () => {
    if (modalWindow.classList.contains('pop-up')) {
      buttonsMenuFooter.classList.add('pop-up__footer-buttons');
      buttonMenuLogo.classList.add('button-logo--pop-up');
    }

    bodyBlur.classList.add('body--pop-up');
    modalWindow.style.display = 'block';
    modalWindowAside.style.display = 'block';

    if (modalWindow.classList.contains('modal-window')) {
      popUpBlur.classList.add('body--pop-up');
      let inputAutof = modalWindow.querySelector('input');
      inputAutof.focus();
    }
  });
  showModalButton.addEventListener('keyup', event => {
    if (event.code === 'Enter') pressShowModalButton();
  });
};

let pressShowModalButton = function (modalWindow, modalWindowAside, showModalButton) {
  for (let i = 0; i < modalWindow.length; i++) {
    showModalButtonClickHandler(showModalButton[i], modalWindow[i], modalWindowAside[i]);
  }
};

/***/ }),

/***/ "./src/js/button-show-all.js":
/*!***********************************!*\
  !*** ./src/js/button-show-all.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allContents": () => (/* binding */ allContents),
/* harmony export */   "pressShowAllButton": () => (/* binding */ pressShowAllButton),
/* harmony export */   "showAllButtons": () => (/* binding */ showAllButtons)
/* harmony export */ });
let allContents = [document.querySelector('.info__text'), document.querySelector('#cards-brand'), document.querySelector('#card-equipment')];
let showAllButtons = [document.getElementById('button-text'), document.getElementById('button-brands'), document.getElementById('button-equipment')];

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
  showAllButton.addEventListener('keyup', event => {
    if (event.code === 'Enter') ShowAllContentButton();
  });
};

let pressShowAllButton = function (allCont, showAllBut) {
  for (let i = 0; i < allCont.length; i++) {
    showAllButtonClickHandler(showAllBut[i], allCont[i]);
  }
};

/***/ }),

/***/ "./src/js/start-slider.js":
/*!********************************!*\
  !*** ./src/js/start-slider.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mql": () => (/* binding */ mql),
/* harmony export */   "sliderChange": () => (/* binding */ sliderChange),
/* harmony export */   "startSlider": () => (/* binding */ startSlider),
/* harmony export */   "swiper": () => (/* binding */ swiper)
/* harmony export */ });
let mql = window.matchMedia('(max-width: 767.98px)');
let slider = null;
let swiper = el => {
  return new Swiper(el, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      slideToClickedSlide: true
    },
    enable: true,
    slidesPerView: 'auto',
    spaceBetween: 16
  });
};
function startSlider() {
  if (mql.matches) {
    swiper('.cards__container');
    slider = true;
  }
}
let mySwiper;
function sliderChange() {
  if (mql.matches && !slider) {
    swiper('.cards__container');
    slider = true;
    mySwiper = document.querySelector('.cards__container').swiper;
  }

  if (mql.matches && slider) {
    mySwiper.destroy();
    slider = null;
  }
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _start_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-slider.js */ "./src/js/start-slider.js");
/* harmony import */ var _button_show_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//button-show-all.js */ "./src/js/button-show-all.js");
/* harmony import */ var _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//button-modal-window-show.js */ "./src/js/button-modal-window-show.js");
/* harmony import */ var _button_modal_window_hidden_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//button-modal-window-hidden.js */ "./src/js/button-modal-window-hidden.js");





(0,_start_slider_js__WEBPACK_IMPORTED_MODULE_1__.startSlider)();
window.addEventListener('resize', _start_slider_js__WEBPACK_IMPORTED_MODULE_1__.startSlider);
(0,_button_show_all_js__WEBPACK_IMPORTED_MODULE_2__.pressShowAllButton)(_button_show_all_js__WEBPACK_IMPORTED_MODULE_2__.allContents, _button_show_all_js__WEBPACK_IMPORTED_MODULE_2__.showAllButtons);
(0,_button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_3__.pressShowModalButton)(_button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_3__.modalWindows, _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_3__.modalWindowsAside, _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_3__.showModalButtons);
(0,_button_modal_window_hidden_js__WEBPACK_IMPORTED_MODULE_4__.pressHiddenModalButton)(_button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_3__.modalWindows, _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_3__.modalWindowsAside);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map