import $ from "jquery";

$(".header__menu li").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".header__menu li").removeClass("active");
    $(this).addClass("active");
  }
});

$(".sellers__circle").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".sellers__circle").removeClass("active");
    $(this).addClass("active");
  }
});

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
