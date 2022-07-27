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
};

export function startSlider() {
   if (mql.matches) {
      newSwiper('.cards__slider-container');
   }
}
