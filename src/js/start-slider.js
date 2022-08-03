export let mql = window.matchMedia('(max-width: 767.98px)');
let slider = null;

export let swiper = (el) => {
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
      swiper('.cards__container');
      slider = true;
   }
}

let mySwiper;
export function sliderChange() {
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
