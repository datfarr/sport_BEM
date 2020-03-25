$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button style="background-color:#c9fde7; border:none;" type="button" class="slick-prev"><i style="font-size:50px; color: #31054e; " class="fas fa-arrow-circle-left"></i></button>',
        nextArrow: '<button style="background-color:#c9fde7; border:none;" type="button" class="slick-next"><i style="font-size:50px; color: #31054e;" class="fas fa-arrow-circle-right"></i></button>'
      });
  });