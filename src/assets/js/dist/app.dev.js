"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _jquery["default"])(".header__menu li").on("click", function () {
  if (!(0, _jquery["default"])(this).hasClass("active")) {
    (0, _jquery["default"])(".header__menu li").removeClass("active");
    (0, _jquery["default"])(this).addClass("active");
  }
});