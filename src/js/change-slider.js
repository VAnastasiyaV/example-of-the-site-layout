let mq = window.matchMedia('(width: 768px)');
let mqm = window.matchMedia('(width: 767.98px)');

export function changeSlider() {
   if (mqm.matches) {
      swiper.enable();
   }
   if (mq.matches) {
      swiper.disable();
   }
}
