export let mql = window.matchMedia('(max-width: 767.98px)');

export let newSwiper = (el) => {
    return new Swiper(el, {
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        slideToClickedSlide: true,
    },
    enable: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
});
}

 export function startSwiper() {
    if (mql.matches) {
newSwiper ('.brand__slider-container');
}
}



