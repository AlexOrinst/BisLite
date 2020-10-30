$(function () {
    $('.slider__inner').slick({
        dots: true,
        arrows: false,
    });
    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="img/slider/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="img/slider/slide-right.svg" alt=""></button>'
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
    });
});