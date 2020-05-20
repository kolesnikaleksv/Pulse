// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         fade: true,
//         cssEase: 'linear',
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrowL.png"></img></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrowR.png"></img></button>',
//         responsive: [{
//             breakpoint: 992,
//             settings: {
//                 dots: true,
//                 arrows: false
//         }}
//         ]
//       });
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  }); 

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  }); 