$(document).ready(function () {
    $('.reviews-list').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 1000,
        easing: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 375,
                settings: {slidesToShow: 1,},
            },
            {
                breakpoint: 768,
                settings: {slidesToShow: 2,},
            },   
            {
               breakpoint: 1200,
                settings: {slidesToShow: 3,},
            },
        ],
        mobileFirst: true,
    });
});

 
