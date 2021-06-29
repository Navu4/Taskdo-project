(function ($) {
  $(document).ready(function () {
    $('.carouselbox').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      responsive: [
        {
          breakpoint: 1135,
          settings:{
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1000,
          settings:{
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 500,
          settings:{
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 380,
          settings:{
            slidesToShow: 1,
          }
        },
      ]

    });

  });

  var flag = true;
  document.querySelector('.humburger').onclick = function() {
    
    this.classList.toggle('active');
    if(flag){
      document.querySelector('.mainMenu').classList.remove("hide");
      flag = false;
    } else {
      document.querySelector('.mainMenu').classList.add("hide");
      flag = true;
    } 
  };



})(jQuery);