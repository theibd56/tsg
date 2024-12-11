import Swiper from 'swiper/bundle';

import './sass/_app.scss';
import 'swiper/css/bundle';

const offerSlider = new Swiper('.offer-slider .swiper', {
    slidesPerView: 1,
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
    on: {
        slideChangeTransitionStart: function () {
            const totalSlides = this.slides.length;

            // Update each slide's fill based on its index
            this.slides.forEach((slide, index) => {
                const fillPercentage = (index + 1) / totalSlides * 100; // Calculate fill percentage
                slide.style.setProperty('--fill-percentage', `${fillPercentage}%`); // Set custom property

                // Update the clip-path for the filled part
                slide.style.setProperty('clip-path', `inset(0 ${100 - fillPercentage}% 0 0)`);
            });
        },
        slideChangeTransitionEnd: function () {
            // Optionally, you can add any additional logic here
        }
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

function updateFill(swiper) {
    const totalSlides = swiper.slides.length;

    swiper.slides.forEach((slide, index) => {
        const fillElement = slide.querySelector('.fill');
        const fillPercentage = ((index + 1) / totalSlides) * 100; // Calculate fill percentage
        fillElement.style.width = `${fillPercentage}%`; // Set the width of the fill element
    });
}

