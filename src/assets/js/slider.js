import "slick-carousel";
import $ from "jquery";

$(".slider").slick({
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".categories__slider").slick({
  slidesToShow: 7,
  draggable: false,
  infinite: true,
});
