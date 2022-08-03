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
/* harmony export */   "hiddenModalButtonClickHandler": () => (/* binding */ hiddenModalButtonClickHandler)
/* harmony export */ });
/* harmony import */ var _button_modal_window_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-modal-window-show */ "./src/js/button-modal-window-show.js");

let hiddenModalButtonClickHandler = function (modalWindow, modalWindowAside) {
  modalWindow.addEventListener('click', function pressHiddenModalButton(event) {
    console.log(event.target);

    if (event.target.classList.contains('pop-up') || event.target.getAttribute('id') === 'button-close-pop-up') {
      _button_modal_window_show__WEBPACK_IMPORTED_MODULE_0__.buttonsMenuFooter.classList.remove('pop-up__footer-buttons');
      modalWindow.style.display = null;
      modalWindow.classList.add('pop-up__menu--visible');
      modalWindowAside.classList.add('pop-up__menu--visible');
    }

    if (event.target.classList.contains('modal-window') || event.target.getAttribute('id') === 'button-close-modal') {
      modalWindowAside.querySelector('.modal-window__title').textContent = 'Обратная связь';
      modalWindowAside.querySelector('[type="email"]').style.display = 'block';
      modalWindowAside.querySelector('[type="text"]').style.display = 'block';
      modalWindowAside.querySelector('.modal-window__textarea').style.display = 'block';
      modalWindow.style.display = 'none';
      modalWindowAside.style.display = 'none';
    }
  });
};

/***/ }),

/***/ "./src/js/button-modal-window-show.js":
/*!********************************************!*\
  !*** ./src/js/button-modal-window-show.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonsMenuFooter": () => (/* binding */ buttonsMenuFooter),
/* harmony export */   "modalWindows": () => (/* binding */ modalWindows),
/* harmony export */   "modalWindowsAside": () => (/* binding */ modalWindowsAside),
/* harmony export */   "showModalButtonClickHandler": () => (/* binding */ showModalButtonClickHandler),
/* harmony export */   "showModalButtons": () => (/* binding */ showModalButtons)
/* harmony export */ });
let modalWindows = [document.querySelector('.pop-up'), document.querySelector('.modal-window'), document.querySelector('.modal-window')];
let modalWindowsAside = [document.querySelector('.pop-up__menu'), document.querySelector('.modal-window__aside'), document.querySelector('.modal-window__aside')];
let showModalButtons = [document.getElementById('button-menu'), document.getElementById('button-message'), document.getElementById('button-phone')];
let buttonsMenuFooter = document.querySelector('.header__column--aside');
let showModalButtonClickHandler = function (showModalButton, modalWindow, modalWindowAside) {
  showModalButton.addEventListener('click', function pressShowModalButton() {
    if (modalWindow.classList.contains('pop-up')) {
      buttonsMenuFooter.classList.add('pop-up__footer-buttons');
    }

    if (showModalButton == document.querySelector('#button-phone')) {
      modalWindowAside.querySelector('.modal-window__title').textContent = 'Заказать звонок';
      modalWindowAside.querySelector('[type="email"]').style.display = 'none';
      modalWindowAside.querySelector('[type="text"]').style.display = 'none';
      modalWindowAside.querySelector('.modal-window__textarea').style.display = 'none';
    }

    modalWindow.style.display = 'block';
    modalWindowAside.style.display = 'block';
  });
  showModalButton.addEventListener('keyup', event => {
    if (event.code === 'Enter') pressShowModalButton();
  });
};

/***/ }),

/***/ "./src/js/button-show-all.js":
/*!***********************************!*\
  !*** ./src/js/button-show-all.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButtonClickHandler": () => (/* binding */ addButtonClickHandler),
/* harmony export */   "allContents": () => (/* binding */ allContents),
/* harmony export */   "showAllButtons": () => (/* binding */ showAllButtons)
/* harmony export */ });
let allContents = [document.querySelector('.about__text'), document.querySelector('#cards-brand'), document.querySelector('#card-equipment')];
let showAllButtons = [document.getElementById('button-text'), document.getElementById('button-brands'), document.getElementById('button-equipment')];
let addButtonClickHandler = function (showAllButton, allContent) {
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
  showAllButton.addEventListener('keyup', event => {
    if (event.code === 'Enter') pressShowAllButton();
  });
};

/***/ }),

/***/ "./src/js/change-slider.js":
/*!*********************************!*\
  !*** ./src/js/change-slider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeSlider": () => (/* binding */ changeSlider)
/* harmony export */ });
let mq = window.matchMedia('(width: 768px)');
let mqm = window.matchMedia('(width: 767.98px)');
function changeSlider() {
  if (mqm.matches) {
    swiper.enable();
  }

  if (mq.matches) {
    swiper.disable();
  }
}

/***/ }),

/***/ "./src/js/start-slider.js":
/*!********************************!*\
  !*** ./src/js/start-slider.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mql": () => (/* binding */ mql),
/* harmony export */   "newSwiper": () => (/* binding */ newSwiper),
/* harmony export */   "startSlider": () => (/* binding */ startSlider)
/* harmony export */ });
let mql = window.matchMedia('(max-width: 767.98px)');
let newSwiper = el => {
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
    newSwiper('.cards__slider-container');
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
/* harmony import */ var _start_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//start-slider.js */ "./src/js/start-slider.js");
/* harmony import */ var _change_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//change-slider.js */ "./src/js/change-slider.js");
/* harmony import */ var _button_show_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//button-show-all.js */ "./src/js/button-show-all.js");
/* harmony import */ var _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//button-modal-window-show.js */ "./src/js/button-modal-window-show.js");
/* harmony import */ var _button_modal_window_hidden_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//button-modal-window-hidden.js */ "./src/js/button-modal-window-hidden.js");



(0,_start_slider_js__WEBPACK_IMPORTED_MODULE_1__.startSlider)();
window.addEventListener('resize', _change_slider_js__WEBPACK_IMPORTED_MODULE_2__.changeSlider);


for (let i = 0; i < _button_show_all_js__WEBPACK_IMPORTED_MODULE_3__.allContents.length; i++) {
  (0,_button_show_all_js__WEBPACK_IMPORTED_MODULE_3__.addButtonClickHandler)(_button_show_all_js__WEBPACK_IMPORTED_MODULE_3__.showAllButtons[i], _button_show_all_js__WEBPACK_IMPORTED_MODULE_3__.allContents[i]);
}



for (let i = 0; i < _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__.modalWindows.length; i++) {
  (0,_button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__.showModalButtonClickHandler)(_button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__.showModalButtons[i], _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__.modalWindows[i], _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__.modalWindowsAside[i]);
}



for (let i = 0; i < _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__.modalWindows.length; i++) {
  (0,_button_modal_window_hidden_js__WEBPACK_IMPORTED_MODULE_5__.hiddenModalButtonClickHandler)(_button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__.modalWindows[i], _button_modal_window_show_js__WEBPACK_IMPORTED_MODULE_4__.modalWindowsAside[i]);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map