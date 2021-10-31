import { Swiper, Navigation, Pagination, } from 'swiper';

Swiper.use([Navigation, Pagination])

import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/collapse';

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
