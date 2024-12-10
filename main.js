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

const reviewSlider = new Swiper('.review-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    loop: false,
    navigation: {
        prevEl: '.review-slider__prev',
        nextEl: '.review-slider__next',
    },
    pagination: {
        el: '.review-slider__pagination',
        clickable: true,
    },
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

