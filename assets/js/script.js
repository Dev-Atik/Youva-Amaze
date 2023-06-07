(function ($){
    "use strict";

    // megamenu area start
$('.cat-megamenu-show').on('click', function(){
    $('.catalog-megamenu').toggleClass("active-cat");
});

$('.arri-megamenu-show').on('click', function(){
    $('.arrival-megamenu').toggleClass("active-arri");
});

$('.shop-megamenu-show').on('click', function(){
    $('.shop-megamenu').toggleClass("active-shop");
});
// megamenu area end

// banner slider area start


$('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
 });

// banner slider area end

// Brand slider area start

$('.brand-item-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
    fade: true,
  });

// Brand slider area end

// product slider area start

$('.product-right-item-silder').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
    fade: true,
  });

// product slider area end

// function initSliders(brandslider) {
//     for (var i = 1; i <= brandslider; i++) {
//       $('.bi-slider-'+ i).slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 2000, 
//         fade: true,
//         nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
//         prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
//       });
//     }
//   }
//   initSliders(10);


// single-product area start
// let quantity = document.querySelectorAll('.quantity');
// let arr = Array.from(quantity);

// arr.map(item=>{
//     item.addEventListener('click', function(e){
//         if(e.target.className == 'fa-solid fa-plus'){
//             e.target.parentElement.previousElementSibling.value++;
//         }

//         if(e.target.className == 'fa-solid fa-minus'){
//             if(e.target.parentElement.nextElementSibling.value > 1){
//                 e.target.parentElement.nextElementSibling.value--;
//             }
//         }
//     })
// });
 
$('.shortlist-show').on('click', function(){
    $('.shortby-dropdown').slideToggle();
});
    
$('.reco-product-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:'.reso-btn-right',
    prevArrow:'.reso-btn-left',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            autoplay:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            autoplay:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            autoplay:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
  });  

// single-product area end


// responsive navbar area start
$('.res-cat-menu').on('click', function (){
    $('.res-Aipods-menu-wrapper').slideToggle();
});

$('.res-cat-menu-inner').on('click', function (){
    $(this).next('ul.res-cat-Aipods-inner-menu').slideToggle();
});

$('.res-Watch-menu-inner').on('click', function (){
    $(this).next('ul.res-cat-Watch-inner-menu').slideToggle();
});

$('.res-arrivals-menu').on('click', function (){
    $(this).next('.arrivals-dropdown').slideToggle();
});

$('.res-shop-menu').on('click', function (){
    $(this).next('ul.shop-dropdown').slideToggle();
});

$('.airpods-dropdown-show').on('click', function (){
    $(this).next('ul.aripods-dropdown').slideToggle();
});

$('.camera-dropdown-show').on('click', function (){
    $(this).next('ul.camera-dropdown').slideToggle();
});

$('.laptop-dropdown-show').on('click', function (){
    $(this).next('ul.laptop-dropdown').slideToggle();
});

$('.luxury-dropdown-show').on('click', function (){
    $(this).next('ul.luxury-dropdown').slideToggle();
});

$('.mobile-dropdown-show').on('click', function (){
    $(this).next('ul.mobile-dropdown').slideToggle();
});

$('.watches-dropdown-show').on('click', function (){
    $(this).next('ul.watches-dropdown').slideToggle();
});

$('.speaker-dropdown-show').on('click', function (){
    $(this).next('ul.speaker-dropdown').slideToggle();
});

$('.timeless-dropdown-show').on('click', function (){
    $(this).next('ul.timeless-dropdown').slideToggle();
});

// responsive banner slider area start

$('.res-banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
 });

// responsive banner slider area end


// respwatchesonsive navbar area end


// menu fix area start

let navoff= $('.header').offset().top;

$(window).on('scroll', function (){
    let scrolling= $(this).scrollTop();

    if(scrolling > navoff){
        $('.header').addClass('menu_fix');
    }else{
        $('.header').removeClass('menu_fix');
    }
});

// menu fix area end

// back to top area start

$('.backtotop').on('click',  function(){
    $('html, body').animate({
        scrollTop: 0,
    }, 500);
});

$(window).scroll(function(){
    let winscroll= $(this).scrollTop();

    if(winscroll > 300){
        $('.backtotop').css('display' , 'block');
    }else{
        $('.backtotop').css('display' , 'none');
    }
});

// back to top area end


})(jQuery);
