"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// <------ Header menu START ------>
(0, _jquery["default"])(".header__menu li").on("click", function () {
  if (!(0, _jquery["default"])(this).hasClass("active")) {
    (0, _jquery["default"])(".header__menu li").removeClass("active");
    (0, _jquery["default"])(this).addClass("active");
  }
}); // <------ Header menu END ------>
// <------ Header select START ------>

(0, _jquery["default"])(".header__top-nav li").on("click", function () {
  var ul = (0, _jquery["default"])(this).children("ul"); // $(this).toggleClass("active");

  if ((0, _jquery["default"])(this).hasClass("active")) {
    (0, _jquery["default"])(this).removeClass("active");
  } else {
    (0, _jquery["default"])(".header__top-nav li.active").removeClass("active");
    (0, _jquery["default"])(this).addClass("active");
  }

  if ((0, _jquery["default"])(ul).hasClass("hidden")) {
    var tmp = (0, _jquery["default"])(".header__top-nav li > ul.active");
    tmp.removeClass("active");
    tmp.addClass("hidden");
    ul.removeClass("hidden");
    ul.addClass("active");
  } else {
    ul.removeClass("active");
    ul.addClass("hidden");
  }
});
(0, _jquery["default"])(".header__top-nav li ul li").on("click", function () {
  var li = (0, _jquery["default"])(this).parent().parent();
  var img = (0, _jquery["default"])(li).children("img");
  var span = (0, _jquery["default"])(li).children("span");

  if (_typeof(img.attr("src")) !== (typeof undefined === "undefined" ? "undefined" : _typeof(undefined)) && typeof img.attr("src") !== false) {
    (0, _jquery["default"])(img).attr("src", (0, _jquery["default"])(this).children("img").attr("src"));
  }

  (0, _jquery["default"])(span).text((0, _jquery["default"])(this).children("span").text());
  (0, _jquery["default"])(this).parent().parent().toggleClass("active");
});
var container = (0, _jquery["default"])(".header__top-nav li");
(0, _jquery["default"])(document).mouseup(function (e) {
  var select = (0, _jquery["default"])(".header__top-nav li > ul");

  if (container.has(e.target).length === 0 && select.has(e.target).length === 0) {
    select.removeClass("active");
    select.addClass("hidden");
    container.removeClass("active");
  }
}); // <------ Header select END ------>
// <------ Sellers color select START ------>

(0, _jquery["default"])(".sellers__circle").on("click", function () {
  if (!(0, _jquery["default"])(this).hasClass("active")) {
    (0, _jquery["default"])(".sellers__circle").removeClass("active");
    (0, _jquery["default"])(this).addClass("active");
  }
}); // <------ Sellers color select END ------>
// <------ Deals timer START ------>

var timerBlock = (0, _jquery["default"])(".deals__slider-timer");
var time = 24157;
var timerId = setInterval(function () {
  time--;
  var h = Math.floor(time / 60 / 60);
  var m = Math.floor((time - h * 60 * 60) / 60);
  var s = time - h * 60 * 60 - m * 60;

  if (h < 10) {
    h = "0".concat(h);
  }

  if (m < 10) {
    m = "0".concat(m);
  }

  if (s < 10) {
    s = "0".concat(s);
  }

  timerBlock.text("".concat(h, " : ").concat(m, " : ").concat(s));

  if (time <= 0) {
    clearInterval(timerId);
  }
}, 1000); // <------ Deals timer END ------>
// <------ Email check START ------>

var pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
var mail = (0, _jquery["default"])(".newsletter__email");
var mail_btn = (0, _jquery["default"])(".newsletter__submit");
var label = (0, _jquery["default"])("#label");
mail.on("input", function (e) {
  if (mail.val() !== " ") {
    if (mail.val().search(pattern) == 0) {
      mail.removeClass("error");
      label.removeClass("error");
      label.addClass("valid");
      mail_btn.attr("disabled", false);
    } else {
      label.removeClass("valid");
      mail.addClass("error");
      label.addClass("error");
      mail_btn.attr("disabled", true);
    }
  }
}); // <------ Email check END ------>
// <------ Footer email check START ------>

var footer_mail = (0, _jquery["default"])(".footer__email");
var footer_mail_btn = (0, _jquery["default"])(".footer__submit");
var footer_label = (0, _jquery["default"])("#footer__label");
footer_mail.on("input", function (e) {
  if (footer_mail.val() !== " ") {
    if (footer_mail.val().search(pattern) == 0) {
      footer_mail.removeClass("error");
      footer_label.removeClass("error");
      footer_label.addClass("valid");
      footer_mail_btn.attr("disabled", false);
    } else {
      footer_label.removeClass("valid");
      footer_mail.addClass("error");
      footer_label.addClass("error");
      footer_mail_btn.attr("disabled", true);
    }
  }
}); // <------ Footer email check END ------>