import Swiper from 'swiper/swiper-bundle.js';

let quizModal = document.getElementById('quiz-modal')


quizModal.addEventListener('shown.bs.modal', function() {

    const swiper = new Swiper('.swiper', {
        spaceBetween: 200,
        allowTouchMove: false,
        observer: true,
        observeParents: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.quiz-btn-next',
            prevEl: '.quiz-btn-prev',
        }
    });
    // let btnNextArray = document.getElementsByClassName('quiz-btn-next')
    // let btnPrevArray = document.getElementsByClassName('quiz-btn-prev')
    // for (let item of btnNextArray) {
    //     item.addEventListener('click', ()=> swiper.slideNext())
    // }
    // for (let item of btnPrevArray) {
    //     item.addEventListener('click', ()=> swiper.slidePrev())
    // }
})
