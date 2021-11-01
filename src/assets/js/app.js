import { Navigation, Pagination, Swiper, } from 'swiper';
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/collapse';
import 'bootstrap/js/src/tab';

import multirange from 'multirange/multirange'

multirange.init()

Swiper.use([Navigation, Pagination])

new Swiper('.quiz-modal__swiper', {
    spaceBetween: 200,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.quiz-modal__pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.quiz__next',
        prevEl: '.quiz__prev',
    }
});

new Swiper('.documentation-slider__swiper', {
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.documentation-slider__next',
        prevEl: '.documentation-slider__prev',
    }
});
