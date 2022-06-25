$(document).ready(function(){
    $(".item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
    $(".sign-in-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-contacts").offset().top
        }, 1000);
    });
    $(".first-slide-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 800);
    });
});