"use strict";
(self["webpackChunkFrame_House"] = self["webpackChunkFrame_House"] || []).push([["/assets/js/app"],{

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/controller/controller.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/thumbs/thumbs.js");
/* harmony import */ var bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/src/modal */ "./node_modules/bootstrap/js/src/modal.js");
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/src/dropdown */ "./node_modules/bootstrap/js/src/dropdown.js");
/* harmony import */ var bootstrap_js_src_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/src/collapse */ "./node_modules/bootstrap/js/src/collapse.js");
/* harmony import */ var bootstrap_js_src_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/src/tab */ "./node_modules/bootstrap/js/src/tab.js");
/* harmony import */ var multirange_multirange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! multirange/multirange */ "./node_modules/multirange/multirange.js");
/* harmony import */ var multirange_multirange__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(multirange_multirange__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var glightbox_src_js_glightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! glightbox/src/js/glightbox */ "./node_modules/glightbox/src/js/glightbox.js");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










(0,glightbox_src_js_glightbox__WEBPACK_IMPORTED_MODULE_6__["default"])();
multirange_multirange__WEBPACK_IMPORTED_MODULE_4___default().init();
swiper__WEBPACK_IMPORTED_MODULE_8__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_9__["default"], swiper__WEBPACK_IMPORTED_MODULE_10__["default"], swiper__WEBPACK_IMPORTED_MODULE_11__["default"], swiper__WEBPACK_IMPORTED_MODULE_12__["default"]]);

function initQuiz() {
  new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.quiz-modal__swiper', {
    spaceBetween: 200,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.quiz-modal__pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.quiz__next',
      prevEl: '.quiz__prev'
    }
  });
}

function initProjectSlider() {
  var projectThumbsSlider = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.project-thumbs-slider__swiper', {
    spaceBetween: 8,
    slidesPerView: 3,
    slideToClickedSlide: true,
    observer: true,
    observeParents: true,
    direction: 'vertical',
    navigation: {
      nextEl: '.project-slider__next',
      prevEl: '.project-slider__prev'
    },
    breakpoints: {
      960: {
        slidesPerView: 5
      } // 1230: {
      //     slidesPerView: 3,
      // },

    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.project-slider-content__swiper', {
    observer: true,
    observeParents: true,
    direction: 'horizontal',
    thumbs: {
      swiper: projectThumbsSlider
    }
  });
}

function initDocumentationSlider() {
  new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.documentation-slider__swiper', {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.documentation-slider__next',
      prevEl: '.documentation-slider__prev'
    }
  });
}

function initRangeInputs() {
  var rangeInputs = document.querySelectorAll('.range-inputs');

  var _iterator = _createForOfIteratorHelper(rangeInputs),
      _step;

  try {
    var _loop = function _loop() {
      var range = _step.value;
      var sliders = range.querySelectorAll('input[type=range]');
      var inputs = range.querySelectorAll('input[type=number]');

      var _iterator2 = _createForOfIteratorHelper(inputs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          input.addEventListener('input', function (event) {
            sliders[0].value = "".concat(inputs[0].value, ",").concat(inputs[1].value);
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(sliders),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var slider = _step3.value;
          slider.addEventListener('input', function (event) {
            var valArray = sliders[0].value.split(',');
            inputs[0].value = valArray[0];
            inputs[1].value = valArray[1];
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function initNavbar() {
  var media = getComputedStyle(document.body).getPropertyValue('--media').replace(/\s/g, '');

  if (['xs', 'sm', 'md'].includes(media)) {
    var dropdownToggles = document.querySelectorAll('.navbar-dropdown__toggle');

    var _iterator4 = _createForOfIteratorHelper(dropdownToggles),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var toggle = _step4.value;
        toggle.addEventListener('click', function (event) {
          event.preventDefault();
          event.target.classList.toggle('navbar-dropdown__toggle_open');
        });
        toggle.addEventListener('touchstart', function (event) {
          event.preventDefault();
          event.target.classList.toggle('navbar-dropdown__toggle_open');
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
}

function initProjectsOnMap(mapSelector, projects) {
  var mapElement = document.querySelector(mapSelector);

  if (mapElement) {
    ymaps.ready(function () {
      var coords = projects.map(function (i) {
        return i.coords;
      });
      var myMap = new ymaps.Map(mapElement, {
        behaviors: ['default', 'scrollZoom'],
        controls: [],
        bounds: ymaps.util.bounds.fromPoints(coords),
        margin: 300
      }, {
        minZoom: 5,
        searchControlProvider: 'yandex#search'
      });
      var MyBalloonLayout = ymaps.templateLayoutFactory.createClass("\n                <div class=\"project-map-card\">\n                    <button class=\"project-map-card__close icon-close\"></button>\n                    <img class=\"project-map-card__img\" src=\"/assets/images/site/map/house.webp\" alt>\n                    <div class=\"project-map-card__info\">\n                        <div class=\"mb-2\">\n                            $[properties.name]\n                        </div>\n                        <div>\n                        {% for attr in properties.attrs %}\n                            <div>\n                                $[attr.name]: <span>$[attr.value]</span>\n                            </div>\n                        {% endfor %}\n                        </div>\n                    </div>\n                </div>\n            ", {
        /**
         * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
         * @function
         * @name build
         */
        build: function build() {
          var _this = this;

          this.constructor.superclass.build.call(this);
          this._$element = this.getParentElement().querySelector('.project-map-card');
          this._$line = this.buildLine();
          myMap.events.add('actionend', function () {
            _this._$line.geometry.setCoordinates(_this.getLineCoordinates());
          });

          this._$element.querySelector('.project-map-card__close').addEventListener('click', this.close.bind(this));
        },
        close: function close() {
          this.events.fire('userclose');
        },
        getGlobalCoordinates: function getGlobalCoordinates(x, y) {
          var container = myMap.container.getElement();
          var topLeftPageCoords = [window.pageXOffset + container.getBoundingClientRect().left + x, window.pageYOffset + container.getBoundingClientRect().top + y];
          return myMap.options.get('projection').fromGlobalPixels(myMap.converter.pageToGlobal(topLeftPageCoords), myMap.getZoom());
        },
        getLineCoordinates: function getLineCoordinates() {
          return [this.getData().geometry.getCoordinates(), this.getGlobalCoordinates(50, 50)];
        },
        buildLine: function buildLine() {
          var myPolyline = new ymaps.Polyline(this.getLineCoordinates(), {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            balloonContent: 'Ломаная линия'
          }, {
            // Задаем опции геообъекта.
            // Отключаем кнопку закрытия балуна.
            balloonCloseButton: false,
            // Цвет линии.
            strokeColor: '#FFFFFF',
            // Ширина линии.
            strokeWidth: 2,
            // Коэффициент прозрачности.
            strokeOpacity: 0
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
        clear: function clear() {
          this._$element.querySelector('.project-map-card__close').removeEventListener('click', this.close);

          myMap.geoObjects.remove(this._$line);
          this.constructor.superclass.clear.call(this);
        }
      });
      projects.forEach(function (project) {
        var myPlacemark = window.myPlacemark = new ymaps.Placemark(project.coords, project, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: '/assets/images/placemark.svg',
          iconImageSize: [21, 21],
          iconImageOffset: [-10, -10],
          balloonShadow: true,
          balloonLayout: MyBalloonLayout,
          balloonPanelMaxMapArea: 0,
          hideIconOnBalloonOpen: false // balloonOffset: [-100, 30]

        });
        myMap.geoObjects.add(myPlacemark);
      });
    }); // }
  }
}

function initProjectPage() {
  var tabTriggers = document.querySelectorAll('.project-block__card-info-tabs .nav-link');
  tabTriggers.forEach(function (trigger) {
    trigger.addEventListener('shown.bs.tab', function (event) {
      var detailsTriggerTarget = event.target.dataset.bsTarget + 'Details';
      var detailsTriggerEl = document.querySelector("[data-bs-target=\"".concat(detailsTriggerTarget, "\"]"));
      var tabDetails = bootstrap__WEBPACK_IMPORTED_MODULE_5__.Tab.getOrCreateInstance(detailsTriggerEl);

      if (tabDetails) {
        tabDetails.show();
      }
    });
  });
}

function initMasks() {
  var elements = document.querySelectorAll('[data-mask]');
  elements.forEach(function (i) {
    console.log(i);
    (0,imask__WEBPACK_IMPORTED_MODULE_7__["default"])(i, {
      mask: i.dataset.mask
    });
  });
}

initMasks();
initQuiz();
initProjectSlider();
initDocumentationSlider();
initRangeInputs();
initNavbar();
initProjectPage();
var buildingProjects = [{
  name: 'Каркасный дом Проект 555',
  attrs: [{
    name: 'Площадь',
    value: '138.2 м2'
  }, {
    name: 'Спальных комнат',
    value: '4'
  }],
  coords: [55.73272460496679, 37.422759092488384]
}, {
  name: 'Проект 321',
  attrs: [{
    name: 'Площадь',
    value: '250 м2'
  }, {
    name: 'Этажей',
    value: '2'
  }],
  coords: [55.75, 37]
}];
initProjectsOnMap('.projects-on-map__map_building', buildingProjects);
var builtProjects = [{
  name: 'Проект 4221',
  attrs: [{
    name: 'Площадь',
    value: '122.2 м2'
  }, {
    name: 'Спальных комнат',
    value: '2'
  }],
  coords: [56, 38]
}, {
  name: 'Проект 21231',
  attrs: [{
    name: 'Площадь',
    value: '250 м2'
  }, {
    name: 'Этажей',
    value: '5'
  }],
  coords: [57, 35]
}];
initProjectsOnMap('.projects-on-map__map_built', builtProjects);
window.Tab = bootstrap__WEBPACK_IMPORTED_MODULE_5__.Tab;

/***/ }),

/***/ "./src/assets/sass/app.scss":
/*!**********************************!*\
  !*** ./src/assets/sass/app.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/sass/vendor.scss":
/*!*************************************!*\
  !*** ./src/assets/sass/vendor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets/css/vendor","assets/css/app","/assets/js/vendor"], () => (__webpack_exec__("./src/assets/js/app.js"), __webpack_exec__("./src/assets/sass/app.scss"), __webpack_exec__("./src/assets/sass/vendor.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);