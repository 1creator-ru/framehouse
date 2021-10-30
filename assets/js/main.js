import Swiper from "swiper/swiper-bundle.js";

let quizModal = document.getElementById('quiz-modal')
if (quizModal) {
    quizModal.addEventListener('shown.bs.modal', function () {

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
    });
}
