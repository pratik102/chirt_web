$(document).ready(function(){
  //Mobile sidebar
  function navSidebar() {
    var $sideElement = $("#navbarSupportedContent");
    var $sideParent = $("header");
    var $swiper = $(".wrapper");
    var $body = $("body");
    $sideElement.on("hidden.bs.collapse", function () {
      $sideParent.find(".sidebar-overlay").remove();
      $body.removeClass("scroll-hide");
    });
    $sideElement.on("show.bs.collapse", function () {
      $sideParent.append('<div class="sidebar-overlay" />');
      $body.addClass("scroll-hide");
    });
    $sideParent.on("click", ".sidebar-overlay", function () {
      $sideElement.collapse("hide");
    });
  }
  navSidebar();

  //header-fix
  $(window).on("scroll", function (event) {
    headerAffix();
  });

  function headerAffix() {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > $(".header").height()) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  }
  headerAffix();

  // Add click event handler to nav links
  $('.header .nav-item .nav-link').click(function() {
    // Remove active class from all nav links
    $('.header .nav-item .nav-link').removeClass('active');
    // Add active class to the clicked nav link
    $(this).addClass('active');
  });
});

// Main content margin top

$(document).ready(function () {
  // Function to update margin-top based on header height
  function updateMarginTop() {
    var headerHeight = $('.header').outerHeight();
    $('.main-content').css('margin-top', headerHeight + 'px');
  }

  // Initial update on document ready
  updateMarginTop();

  // Update on window resize
  $(window).on('resize', function () {
    updateMarginTop();
  });

  // Update on window load (in case images affect layout)
  $(window).on('load', function () {
    updateMarginTop();
  });

  // Update on window scroll (if necessary)
  $(window).on('scroll', function () {
    // You can choose to update margin-top on scroll if needed
    // updateMarginTop();
  });


  // Our facility Slider
  if ($('.hero_logo_slider').length > 0) {
    var ourFacilitySwiper = new Swiper(".hero_logo_slider", {
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
      speed: 2000,
      breakpoints: {
        319: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        575: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }
    });

    // Pause autoplay on hover
    $(".hero_logo_slider").mouseenter(function () {
      ourFacilitySwiper.autoplay.stop();
    });

    $(".hero_logo_slider").mouseleave(function () {
      ourFacilitySwiper.autoplay.start();
    });
  }

  // Wow Animation
  new WOW().init();

});



// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();    
//     if (scroll <= 100) {
//         $(".text-creation").addClass("darkHeader");
//     }
// });

// $( function () {
//   $( window ).scroll( function () {
//       if ( $( this ).scrollTop() > 600 ) {
//           $( '.text-creation' ).addClass( 'changeColor' );
//       }
//       if ( $( this ).scrollTop() > 1200 ) {
//           $( '.text-creation' ).removeClass( 'changeColor' );
//       }
      
//   });
// });