import $ from "jquery";

$(".header__menu li").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".header__menu li").removeClass("active");
    $(this).addClass("active");
  }
});
