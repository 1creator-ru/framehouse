import { Navigation, Pagination, Controller, Swiper } from 'swiper';
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/collapse';
import 'bootstrap/js/src/tab';

import multirange from 'multirange/multirange';

multirange.init();

Swiper.use([Navigation, Pagination, Controller]);

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
    },
});
const projectThumbsSlider = new Swiper('.project-thumbs-slider__swiper', {
    spaceBetween: 8,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    observer: true,
    observeParents: true,
    direction: 'vertical',
    navigation: {
        nextEl: '.project-slider__next',
        prevEl: '.project-slider__prev',
    },
    breakpoints: {
        960: {
            slidesPerView: 5,
        },
        // 1230: {
        //     slidesPerView: 3,
        // },
    },
});
const projectSlider = new Swiper('.project-slider-content__swiper', {
    observer: true,
    observeParents: true,
    direction: 'vertical',
});
projectSlider.controller.control = projectThumbsSlider;
projectThumbsSlider.controller.control = projectSlider;

new Swiper('.documentation-slider__swiper', {
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.documentation-slider__next',
        prevEl: '.documentation-slider__prev',
    },
});

const rangeInputs = document.querySelectorAll('.range-inputs');
for (let range of rangeInputs) {
    const sliders = range.querySelectorAll('input[type=range]');
    const inputs = range.querySelectorAll('input[type=number]');

    for (const input of inputs) {
        input.addEventListener('input', (event) => {
            sliders[0].value = `${inputs[0].value},${inputs[1].value}`;
        });
    }

    for (const slider of sliders) {
        slider.addEventListener('input', (event) => {
            const valArray = sliders[0].value.split(',');
            inputs[0].value = valArray[0];
            inputs[1].value = valArray[1];
        });
    }
}

const media = getComputedStyle(document.body).getPropertyValue('--media').substr(1);
if (['xs', 'sm', 'md'].includes(media)) {
    const dropdownToggles = document.querySelectorAll('.navbar-dropdown__toggle');
    for (let toggle of dropdownToggles) {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            event.target.classList.toggle('navbar-dropdown__toggle_open');
        });
        toggle.addEventListener('touchstart', (event) => {
            event.preventDefault();
            event.target.classList.toggle('navbar-dropdown__toggle_open');
        });
    }
}

const buildingProjects = [];

const buildingMap = document.querySelector('.projects-on-map__map_building');
if (buildingMap) {
    ymaps.ready(function() {
        // Создание экземпляра карты и его привязка к созданному контейнеру.
        const myMap = new ymaps.Map(buildingMap, {
            center: [55.751574, 37.573856],
            zoom: 9,
            behaviors: ['default', 'scrollZoom'],
            controls: [],
        }, {
            searchControlProvider: 'yandex#search',
        });

        const MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            `
                <div class="project-map-card">
                    <button class="project-map-card__close icon-close"></button>
                    <img class="project-map-card__img" src="/assets/images/site/map/house.jpg" alt>
                    <div class="project-map-card__info">
                        <div class="mb-2">
                            Каркасный дом Проект 345
                        </div>
                        <div>
                            <div>
                                Площадь: <span>138.2 м2</span>
                            </div>
                            <div>
                                Спальных комнат: <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>
            `, {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function() {
                    this.constructor.superclass.build.call(this);

                    this._$element = this.getParentElement().querySelector('.project-map-card');
                    this._$line = this.buildLine();

                    myMap.events.add('actionend', () => {
                        this._$line.geometry.setCoordinates(this.getLineCoordinates());
                        // this.updateBalloonPosition()
                    });

                    this._$element.querySelector('.project-map-card__close').addEventListener('click', this.close.bind(this));
                },

                close: function() {
                    this.events.fire('userclose');
                },

                // updateBalloonPosition: function() {
                //     this.getData().geoObject.setPosition([0, 0])
                // },

                getGlobalCoordinates: function(x, y) {
                    const container = myMap.container.getElement();
                    const topLeftPageCoords = [
                        window.pageXOffset + container.getBoundingClientRect().left + x,
                        window.pageYOffset + container.getBoundingClientRect().top + y,
                    ];

                    return myMap.options.get('projection').fromGlobalPixels(
                        myMap.converter.pageToGlobal(topLeftPageCoords), myMap.getZoom(),
                    );
                },

                getLineCoordinates: function() {
                    return [
                        this.getData().geometry.getCoordinates(),
                        this.getGlobalCoordinates(50, 50),
                    ];
                },

                buildLine: function() {
                    const myPolyline = new ymaps.Polyline(this.getLineCoordinates(), {
                        // Описываем свойства геообъекта.
                        // Содержимое балуна.
                        balloonContent: 'Ломаная линия',
                    }, {
                        // Задаем опции геообъекта.
                        // Отключаем кнопку закрытия балуна.
                        balloonCloseButton: false,
                        // Цвет линии.
                        strokeColor: '#FFFFFF',
                        // Ширина линии.
                        strokeWidth: 2,
                        // Коэффициент прозрачности.
                        strokeOpacity: 0,
                    });

                    myMap.geoObjects.add(myPolyline);
                    return myPolyline;
                },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function() {
                    this._$element.querySelector('.project-map-card__close').removeEventListener('click', this.close);
                    myMap.geoObjects.remove(this._$line);

                    this.constructor.superclass.clear.call(this);
                },

                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                // onSublayoutSizeChange: function() {
                //     MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
                //
                //     if (!this._isElement(this._$element)) {
                //         return;
                //     }
                //
                //     this.applyElementOffset();
                //
                //     this.events.fire('shapechange');
                // },

                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */
                // getShape: function() {
                //     if (!this._isElement(this._$element)) {
                //         return MyBalloonLayout.superclass.getShape.call(this);
                //     }
                //
                //     const position = this._$element.position();
                //
                //     return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                //         [position.left, position.top], [
                //             position.left + this._$element[0].offsetWidth,
                //             position.top + this._$element[0].offsetHeight
                //         ]
                //     ]));
                // },
            });

        // Создание вложенного макета содержимого балуна.
        const MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<h3 class="popover-title">$[properties.balloonHeader]</h3>' +
            '<div class="popover-content">$[properties.balloonContent]</div>',
        );

        // Создание метки с пользовательским макетом балуна.
        const myPlacemark = window.myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonHeader: 'Заголовок балуна',
            balloonContent: 'Контент балуна',
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '/assets/images/placemark.svg',
            iconImageSize: [21, 21],
            iconImageOffset: [-10, -10],

            balloonShadow: true,
            balloonLayout: MyBalloonLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false,
            // balloonOffset: [-100, 30]
        });

        myMap.geoObjects.add(myPlacemark);

        myMap.events.add('click', function(e) {
            const x = e.get('domEvent').get('pageX');
            const y = e.get('domEvent').get('pageY');
            console.log([x, y]);
            console.log(myMap.options.get('projection').fromGlobalPixels(
                myMap.converter.pageToGlobal([x, y]), myMap.getZoom(),
            ).join(', '));
        });
    });
}
