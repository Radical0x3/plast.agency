"use strict";

require("slick-carousel");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _jquery["default"])(".slider").slick({
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
(0, _jquery["default"])(".categories__slider").slick({
  slidesToShow: 7,
  draggable: false,
  infinite: true
});