import { Controller, Navigation, Pagination, Swiper, Thumbs } from 'swiper';
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/collapse';
import 'bootstrap/js/src/tab';
import multirange from 'multirange/multirange';
import { Tab } from 'bootstrap';
import GLightbox from 'glightbox/src/js/glightbox';
import IMask from 'imask';

GLightbox();
multirange.init();
Swiper.use([Navigation, Pagination, Controller, Thumbs]);

function initQuiz() {
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
}

function initProjectSlider() {
    const projectThumbsSlider = new Swiper('.project-thumbs-slider__swiper', {
        spaceBetween: 8,
        slidesPerView: 3,
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

    new Swiper('.project-slider-content__swiper', {
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        thumbs: {
            swiper: projectThumbsSlider,
        },
    });
}

function initDocumentationSlider() {
    new Swiper('.documentation-slider__swiper', {
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.documentation-slider__next',
            prevEl: '.documentation-slider__prev',
        },
    });
}

function initRangeInputs() {
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
}

function initNavbar() {
    const media = getComputedStyle(document.body).getPropertyValue('--media')
        .replace(/\s/g, '');
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
}

function initProjectsOnMap(mapSelector, projects) {
    const mapElement = document.querySelector(mapSelector);
    if (mapElement) {
        ymaps.ready(function() {
            const coords = projects.map(i => i.coords)
            const myMap = new ymaps.Map(mapElement, {
                behaviors: ['default', 'scrollZoom'],
                controls: [],
                bounds: ymaps.util.bounds.fromPoints(coords),
                margin: 300,
            }, {
                minZoom: 5,
                searchControlProvider: 'yandex#search',
            });

            const MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                `
                <div class="project-map-card">
                    <button class="project-map-card__close icon-close"></button>
                    <img class="project-map-card__img" src="/assets/images/site/map/house.webp" alt>
                    <div class="project-map-card__info">
                        <div class="mb-2">
                            $[properties.name]
                        </div>
                        <div>
                        {% for attr in properties.attrs %}
                            <div>
                                $[attr.name]: <span>$[attr.value]</span>
                            </div>
                        {% endfor %}
                        </div>
                    </div>
                </div>
            `, {
                    /**
                     * ???????????? ?????????????????? ???????????? ???? ???????????? ?????????????? ?? ?????????????????? ?????? ?? ???????????????????????? HTML-??????????????.
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
                        });

                        this._$element.querySelector('.project-map-card__close').addEventListener('click', this.close.bind(this));
                    },

                    close: function() {
                        this.events.fire('userclose');
                    },

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
                            // ?????????????????? ???????????????? ????????????????????.
                            // ???????????????????? ????????????.
                            balloonContent: '?????????????? ??????????',
                        }, {
                            // ???????????? ?????????? ????????????????????.
                            // ?????????????????? ???????????? ???????????????? ????????????.
                            balloonCloseButton: false,
                            // ???????? ??????????.
                            strokeColor: '#FFFFFF',
                            // ???????????? ??????????.
                            strokeWidth: 2,
                            // ?????????????????????? ????????????????????????.
                            strokeOpacity: 0,
                        });

                        myMap.geoObjects.add(myPolyline);
                        return myPolyline;
                    },

                    /**
                     * ?????????????? ???????????????????? ???????????? ???? DOM.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                     * @function
                     * @name clear
                     */
                    clear: function() {
                        this._$element.querySelector('.project-map-card__close').removeEventListener('click', this.close);
                        myMap.geoObjects.remove(this._$line);

                        this.constructor.superclass.clear.call(this);
                    },
                });

            projects.forEach(project => {
                const myPlacemark = window.myPlacemark = new ymaps.Placemark(project.coords, project, {
                    iconLayout: 'default#imageWithContent',
                    iconImageHref: '/assets/images/placemark.svg',
                    iconImageSize: [21, 21],
                    iconImageOffset: [-10, -10],

                    balloonShadow: true,
                    balloonLayout: MyBalloonLayout,
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,
                    // balloonOffset: [-100, 30]
                });
                myMap.geoObjects.add(myPlacemark);
            })
        });
        // }
    }
}

function initProjectPage() {
    const tabTriggers = document.querySelectorAll('.project-block__card-info-tabs .nav-link')
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('shown.bs.tab', (event) => {
            const detailsTriggerTarget = event.target.dataset.bsTarget + 'Details';
            const detailsTriggerEl = document.querySelector(`[data-bs-target="${detailsTriggerTarget}"]`);
            const tabDetails = Tab.getOrCreateInstance(detailsTriggerEl)
            if (tabDetails) {
                tabDetails.show();
            }
        })
    })
}

function initMasks() {
    const elements = document.querySelectorAll('[data-mask]');
    elements.forEach(i => {
        console.log(i)
        IMask(i, {
            mask: i.dataset.mask,
        });
    })
}

initMasks()
initQuiz()
initProjectSlider()
initDocumentationSlider()
initRangeInputs()
initNavbar()
initProjectPage()

const buildingProjects = [
    {
        name: '?????????????????? ?????? ???????????? 555',
        attrs: [
            {
                name: '??????????????',
                value: '138.2 ??2'
            },
            {
                name: '???????????????? ????????????',
                value: '4'
            },
        ],
        coords: [55.73272460496679, 37.422759092488384]
    },
    {
        name: '???????????? 321',
        attrs: [
            {
                name: '??????????????',
                value: '250 ??2'
            },
            {
                name: '????????????',
                value: '2'
            },
        ],
        coords: [55.75, 37]
    },
];
initProjectsOnMap('.projects-on-map__map_building', buildingProjects)

const builtProjects = [
    {
        name: '???????????? 4221',
        attrs: [
            {
                name: '??????????????',
                value: '122.2 ??2'
            },
            {
                name: '???????????????? ????????????',
                value: '2'
            },
        ],
        coords: [56, 38]
    },
    {
        name: '???????????? 21231',
        attrs: [
            {
                name: '??????????????',
                value: '250 ??2'
            },
            {
                name: '????????????',
                value: '5'
            },
        ],
        coords: [57, 35]
    },
];
initProjectsOnMap('.projects-on-map__map_built', builtProjects)

window.Tab = Tab;