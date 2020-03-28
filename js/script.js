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
 


  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

      function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');



    // for modal window (common function)
    let modal = document.getElementById("commonModal");
    let btn = document.getElementById("cnsltn");
    let closeBtn = document.getElementById("closeBtn");

    

    btn.onclick = function() {
        modal.style.display = "block";
    }
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});