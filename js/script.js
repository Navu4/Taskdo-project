(function ($) {
  $(document).ready(function () {
    $('.carouselbox').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
    });

  });

})(jQuery);