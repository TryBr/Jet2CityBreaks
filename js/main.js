var MainSlider = new Swiper('.swiper-main', {
    effect: "fade"
});

var CityEvents = new Swiper('.swiper-events', {
    slidesPerView: 3,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    slidesPerColumn: 1,
    width: 910,
});

$( "#tabs" ).tabs();

var spinner = $( "#spinner, #spinner2" ).spinner();

$(function() {
    $( ".datepicker" ).datepicker();
});

$( document ).ready(function() {
   $(".ui-spinner").find(".ui-spinner-up").empty().append("<div class='plus__icon'>+</div>");
   $(".ui-spinner").find(".ui-spinner-down").empty().append("<div class='minus__icon'>-</div>");
});