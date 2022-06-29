import {mql, newSwiper} from '/js/start-slider.js';

export function changeSlider() {
    if (mql.matches && !Swiper.enable) {
        newSwiper ('.brand__slider-container');

    } else {
        swiper.destroy();
        swiper.disable();
    }
    window.location.reload();
}

