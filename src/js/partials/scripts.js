$(document).ready(function(){

    // Начало выпадающего окна города

    cityDropdown = $('.header__up-city__dropdown');

    cityDropdown.hide();

    $('.header__up-city__btn').click(function () {

        $(this).toggleClass('header__up-city__btn-active');
        cityDropdown.slideToggle(250);
        return false;

    });

    $(document).mouseup(function (e) {
        var container = $(".header__up-city");
        if (container.has(e.target).length === 0){
            cityDropdown.hide(250);
            $('.header__up-city__btn').removeClass('header__up-city__btn-active');
        }
    });


    // Конец выпадающего окна города

    // НАЧАЛО Большой баннер на главной

    $('.banner__slider').slick({
        pauseOnHover: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        vertical: false,
        infinite: true,
        dots:true,
        autoplay:true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // КОНЕЦ Большого баннера на главной

});

