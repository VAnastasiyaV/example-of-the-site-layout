var mql = window.matchMedia('(max-width: 768px)');
var newSwiper;

if (mql.matches) {
    newSwiper = new Swiper('.swiper-container', {

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

window.addEventListener('resize', () => {

    if (mql.matches && !Swiper.enable) {
        newSwiper = new Swiper('.swiper-container', {

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                slideToClickedSlide: true,
            },

            enable: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
        });

    } else {

        swiper.destroy();
        swiper.disable();
    }
    window.location.reload();
});

var allBrands = document.querySelector('.slider-container');
var openAllBrandsButton = document.querySelector('.button__show');
var closeAllBrandsButton = document.querySelector('.button--hidden');
var containerAllBrands = document.querySelector('.brand');

openAllBrandsButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        document.querySelector('.button__show').click();
    }
});

openAllBrandsButton.addEventListener('click', function () {
    containerAllBrands.classList.add('slider-container--show-all-brands');
    allBrands.classList.add('slider-container--show-all-brands');
    closeAllBrandsButton.classList.add('button--visibility');
    openAllBrandsButton.classList.remove('button--visibility');
    openAllBrandsButton.classList.add('button--hidden');
});

closeAllBrandsButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        document.querySelector('.button--hidden').click();
    }
});

closeAllBrandsButton.addEventListener('click', function () {
    allBrands.classList.remove('slider-container--show-all-brands');
    openAllBrandsButton.classList.remove('button--hidden');
    closeAllBrandsButton.classList.remove('button--visibility');
    containerAllBrands.classList.add('slider-container--show-all-brands');
});

