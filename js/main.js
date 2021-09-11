$(function () {

  $(document).ready(function () {
    $('.header__burger').click(function () {
      $('.header__burger').toggleClass('open-menu');
      $('nav').toggleClass('open-menu');
    });
  });

  $(document).ready(function () {
    var show = true;
    $(window).on("scroll", function () {

      if (!show) return false;

      var w_top = $(window).scrollTop();
      var e_top = $("#counts").offset().top;

      console.log(w_top + " " + e_top);

      if (w_top + 650 >= e_top) {
        $('.spincrement').css('opacity', '1');
        $(".spincrement").spincrement({
          thousandSeparator: "",
          duration: 1200
        });

        show = false;
      }
    });
  });


  let header = $('.header');

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 0) {
      header.addClass('header__fixed');
      if ($(this).scrollTop() > 60)
      {
        header.addClass('header__fixed2');
      }
      else header.removeClass('header__fixed2');
    } else {
      header.removeClass('header__fixed');
    }
  });



  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    centerMode: true,
    centerPadding: '10%',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,

          slidesToShow: 1
        }
      }
    ]
  });


});