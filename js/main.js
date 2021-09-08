$(function () {

  $('.header__burger').on('click',function(){
    $('nav ul').slideToggle();
  })


  $(document).ready(function () {
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });
  let header = $('.header');
  let headerHeight = header.height();
  let svg = $('svg');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header__fixed');
      $('body').css({
        'paddingTop': headerHeight + 'px'
      });
    } else {
      header.removeClass('header__fixed');
      $('body').css({
        'paddingTop': 0
      })
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      header.css({
        'padding': '0 0',
        'transition': '.3s'

      });
      svg.css({
        'background-color': 'red',
        'transition': '.3s',
        'width': '200pt',
        'height': '40pt'
      })
    } else {
      header.css({
        'padding': '5px 0',
        'background': '#303841',
        'transition': '.3s',
        
      });
      svg.css({
        'background-color': '#fff',
        'transition': '.3s',
        'width': '220pt',
        'height': '44pt',

      })
    }
  });

  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '45px',
          slidesToShow: 1
        }
      }
    ]
  });



});