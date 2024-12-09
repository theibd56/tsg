import Swiper from 'swiper/bundle';

import './sass/_app.scss';
import 'swiper/css/bundle';

const productsSlider = new Swiper('.products-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    loop: false,
    breakpoints: {
        // 300: {
        //     slidesPerView: 2.25,
        // },
        // 576: {
        //     slidesPerView: 3,
        // },
        // 992: {
        //     slidesPerView: 4,
        // },
    },
})
