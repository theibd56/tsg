import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";
import { Mask, MaskInput } from "maska"

import './sass/_app.scss';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css/bundle';

new MaskInput("[data-maska]") // for masked input

//fancybox (может конфликтовать)
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const offerSlider = new Swiper('.offer-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 200,
    loop: false,
    effect: "fade",
    navigation: {
        prevEl: '.offer-slider__prev',
        nextEl: '.offer-slider__next',
    },
    pagination: {
        el: '.offer-slider__pagination',
        clickable: true,
    },
    on: {
        init: function () {
            updateFill(this);
        },
        slideChange: function () {
            updateFill(this);
        }
    }
})

const productsSlider = new Swiper('.products-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    loop: false,
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 1.8,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    on: {
        slideChangeTransitionStart: function () {
            const totalSlides = this.slides.length;

            this.slides.forEach((slide, index) => {
                const fillPercentage = (index + 1) / totalSlides * 100;
                slide.style.setProperty('--fill-percentage', `${fillPercentage}%`);

                slide.style.setProperty('clip-path', `inset(0 ${100 - fillPercentage}% 0 0)`);
            });
        },
        slideChangeTransitionEnd: function () {}
    }
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
        300: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
        },
    },
})

function updateFill(swiper) {
    const totalSlides = swiper.slides.length;

    swiper.slides.forEach((slide, index) => {
        const fillElement = slide.querySelector('.fill');
        const fillPercentage = ((index + 1) / totalSlides) * 100;
        fillElement.style.width = `${fillPercentage}%`;
    });
}

