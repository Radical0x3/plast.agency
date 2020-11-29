import $ from "jquery";

// <------ Header menu START ------>
$(".header__menu li").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".header__menu li").removeClass("active");
    $(this).addClass("active");
  }
});
// <------ Header menu END ------>

// <------ Sellers color select START ------>
$(".sellers__circle").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".sellers__circle").removeClass("active");
    $(this).addClass("active");
  }
});
// <------ Sellers color select END ------>

// <------ Deals timer START ------>
let timerBlock = $(".deals__slider-timer");
let time = 24157;

let timerId = setInterval(function () {
  time--;
  let h = Math.floor(time / 60 / 60);
  let m = Math.floor((time - h * 60 * 60) / 60);
  let s = time - h * 60 * 60 - m * 60;
  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }
  timerBlock.text(`${h} : ${m} : ${s}`);

  if (time <= 0) {
    clearInterval(timerId);
  }
}, 1000);
// <------ Deals timer END ------>

// <------ Email check START ------>
let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
let mail = $(".newsletter__email");
let mail_btn = $(".newsletter__submit");
let label = $("#label");

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
});
// <------ Email check END ------>

// <------ Footer email check START ------>
let footer_mail = $(".footer__email");
let footer_mail_btn = $(".footer__submit");
let footer_label = $("#footer__label");

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
});
// <------ Footer email check END ------>
