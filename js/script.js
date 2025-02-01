$('.banner_slider').slick({
    arrows: false,
    dots: true,
});


$('.reviewslider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<i class="fa-solid fa-angle-left leftArrow"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right rightArrow"></i>`,
    centerMode: true,
    centerPadding: '0px',

    responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
});