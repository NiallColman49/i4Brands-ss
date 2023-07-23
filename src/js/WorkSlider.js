$(document).ready(function () {
    $(".js-work-slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        appendDots: $(".js-work-slider-dots"),

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
