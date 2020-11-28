import "slick-carousel";
import $ from "jquery";

$(".slider").slick({
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 700,
});

$(".categories__slider").slick({
  slidesToShow: 7,
  draggable: false,
});

$(".deals__slider").slick({
  slidesToShow: 3,
  dots: true,
  arrows: false,
  slidesToScroll: 3,
  speed: 700,
});
