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


const rangeInputs = document.querySelectorAll('.range-inputs')
for (let range of rangeInputs) {
    const sliders = range.querySelectorAll('input[type=range]')
    const inputs = range.querySelectorAll('input[type=number]')

    for (const input of inputs) {
        input.addEventListener('input', (event) => {
            sliders[0].value = `${inputs[0].value},${inputs[1].value}`;
        })
    }

    for (const slider of sliders) {
        slider.addEventListener('input', (event) => {
            const valArray = sliders[0].value.split(',');
            inputs[0].value = valArray[0]
            inputs[1].value = valArray[1]
        })
    }
}