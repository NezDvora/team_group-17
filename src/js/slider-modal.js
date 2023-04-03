$(document).ready(function () {
  $('.buy-now-product-list').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    waitForAnimate: false,
    centerMode: true,
    variableWidth: true,
    swipe: true,
    touchThreshold: 3,
    responsive: [
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: false,
          initialSlide: 2,
          draggable: false,
          swipe: false,
        },
      },
    ],
    mobileFirst: true,
  });
});
