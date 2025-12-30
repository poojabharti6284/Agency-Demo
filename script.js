(function ($) {
  'use strict';

  $(document).ready(function () {

    $('.slider-left').owlCarousel({
      loop: true,
      autoplay: true,
      autoplaySpeed: 3000,
      margin: 40,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 3, margin: 20 },
        480: { items: 4, margin: 20 },
        600: { items: 5, margin: 20 },
        991: { items: 8 },
        1100: { items: 11 }
      }
    });

    $('.slider-right').owlCarousel({
      loop: true,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true,
      margin: 40,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 3, margin: 20 },
        480: { items: 4, margin: 20 },
        600: { items: 5, margin: 20 },
        991: { items: 8 },
        1100: { items: 11 }
      }
    });

  });

})(jQuery);
