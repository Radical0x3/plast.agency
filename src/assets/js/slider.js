import "slick-carousel";
import $ from "jquery";

$(".slider").slick({
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 700,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
});

$(".categories__slider").slick({
  slidesToShow: 7,
  draggable: false,
  responsive: [
    {
      breakpoint: 1275,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1240,
      settings: {
        arrows: false,
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        arrows: false,
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
  ],
});

$(".deals__slider").slick({
  slidesToShow: 3,
  dots: true,
  arrows: false,
  slidesToScroll: 3,
  speed: 700,
  responsive: [
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
