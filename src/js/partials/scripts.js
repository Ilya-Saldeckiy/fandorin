$(document).ready(function(){

    // $('[data-fancybox]').fancybox({
    //     infinite: false,
    //     video: {
    //         tpl:
    //             '<video src="{{src}}" class="fancybox-video" playsinline loop="loop" preload="metadata" muted=""></video>',
    //         format: "",
    //         autoStart: true
    //     },
    //     afterShow: function (instance, current) {
    //         $('.single-main-slider_basic').slick('slickGoTo', instance['currIndex']);
    //         $('.shop-item').slick('slickGoTo',instance['currIndex']);
    //     },
    // });
    //
    // $().fancybox({
    //     selector : '.slick-slide:not(.slick-cloned)',
    //     hash     : false
    // });

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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: false,
        infinite: true,
        dots:true,
        autoplay:false,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 5,
        //             asNavFor: '.single-main-slider_basic',
        //             swipe: true,
        //             focusOnSelect: true,
        //             initialSlide: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 1023,
        //         settings: {
        //             variableWidth: true,
        //             vertical: false,
        //             asNavFor: '.single-main-slider_basic',
        //             swipe: false,
        //             focusOnSelect: true,
        //             swipeToSlide: true,
        //             initialSlide: 2,
        //             infinite: false,
        //             centerMode: true,
        //             speed: 100,
        //             touchThreshold: 50,
        //             waitForAnimate: false,
        //         }
        //     },
        // ]
    });

    // КОНЕЦ Большого баннера на главной

});

