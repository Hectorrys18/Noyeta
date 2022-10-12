/*** TABLE OF CONTENTS
======================================================
    0 / general
    1 / menu toggle
    2 / call the Owl initializer functions
    3 / call the slick functions
    4 / all the  feather icons function
    5 /  call  AOS function
    6 / call  Lazy function
    7 /  call  Typed function
    8 /  call  StickySidebar function
    =================================================== ***/
if (window.matchMedia("screen and (max-width:1023px)").matches) {
   $(function () {   //Mettre $ avant le function comme sa -> $(function)
    ("use strict");
    // Click event to scroll to top.
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 800) {
        $(".back-to-top").addClass("show-back-to-top");
      } else {
        $(".back-to-top").removeClass("show-back-to-top");
      }
    });
    // Click event to scroll to top.
    $(".back-to-top").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });

    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
    // ============================= 1/ menu toggle
    $(".menu-toggle-icon").on("click", function () {
      $(".mobile-overlay").addClass("mobile-visible");
    });
    $(".mobile-overlay-bg , .close-mobile-menu").on("click", function () {
      $(".mobile-overlay").removeClass("mobile-visible");
    });

    // =================
    $(".has-dropdown-m").click(function (e) {
      e.preventDefault();

      let $this = $(this);

      if ($this.next().hasClass("show")) {
        $this.next().removeClass("show");
        $this.next().slideUp(350);
      } else {
        $this.parent().parent().find("li .dropdown-mobile").removeClass("show");
        $this.parent().parent().find("li .dropdown-mobile").slideUp(350);
        $this.next().toggleClass("show");
        $this.next().slideToggle(350);
      }
    });

    // $(".has-dropdown-m").on("click", function (e) {
    //    $(".dropdown-mobile").slideToggle();
    //     $(this).toggleClass("color-secondary");

    // });
    // =========================== 2/ call the Owl initializer functions
    $("#owl1").owlCarousel({
      margin: 20,
      loop: true,
      autoWidth: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
      autoplay: true,
      autoplayTimeout: 5000,
    });
    $("#owl2").owlCarousel({
      loop: true,
      autoWidth: false,
      responsiveClass: true,

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
      autoplay: true,
      autoplayTimeout: 4000,
    });
    $(".testi3").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        1024: {
          items: 2,
        },
      },
    });
    /*! Fades out the whole page when clicking links */
    $(".fade-page").on("click", function (e) {
      e.preventDefault();
      newLocation = this.href;
      $("body").fadeOut("slow", newpage);
    });
    
    // ============================ 3/ call the slick functions
    $(".work-boxes-slick").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
    $(".testi-boxes-slick").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000, // Carresoul defilement speed
      arrows: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
    $(".blog-boxes-slick").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
    $(".feautures-boxes-slick").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
    $(".clients-slick").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });
};


// Disable Drag img 
// window.ondragstart = function () {
//   return false;
// };


//   $(".slider").slick({
//     infinite: true,
//     dots: true,
//     arrows: false,
//     fade: true,
//     fadeSpeed: 1000,
//   });
// } else {
//   // no dots and 3 cards show
// };

//navbar border-bottom when you scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 25){  
        $(".navbar").addClass("navbar-fixed-scroll");
    }
    else{
        $(".navbar").removeClass("navbar-fixed-scroll");
    }
});
//btn change when your scroll 
$(window).scroll(function () {
  if ($(this).scrollTop() > 455) {
    $(".btn-fixed-color").addClass("btn-header");
  } else {
    $(".btn-fixed-color").removeClass("btn-header");
  }
});

// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll > 0) {
//     $("#header").addClass("active");
//   } else {
//     $("#header").removeClass("active");
//   }
// });


// This code open the chat when user click on contact us:
// Put this following code below Freqently questions
// <p class="text-center mb-3">Can't find your answers? <a style="text-decoration: underline;cursor:pointer;color:#4353ff" id="contact-chat">Contact us</a> so we can help.</p>

// document.getElementById("contact-chat").onclick = function() {
//     window.$zopim || (function (d, s) {
//         var z = $zopim = function (c) {
//             z._.push(c)
//         }, $ = z.s =
//                 d.createElement(s), e = d.getElementsByTagName(s)[0];
//         z.set = function (o) {
//             z.set._.push(o)
//         };
//         z._ = [];
//         z.set._ = [];
//         $.async = !0;
//         $.setAttribute('charset', 'utf-8');
//         $.src = "https://client.crisp.chat/l.js";
//         $crisp.push(["do", "chat:open"]);
//         z.t = +new Date;
//         $.type = 'text/javascript';
//         e.parentNode.insertBefore($, e)
//     })(document, 'script');
//   }

//Cookiee number 1:

// Delay cookie
setTimeout(function () {

  // Cookie Compliancy BEGIN
  function GetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg) return "Accepted";
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break;
    }
    return null;
  }
  function testFirstCookie() {
    var offset = new Date().getTimezoneOffset();
    if (offset >= -180 && offset <= 0) {
      // European time zones
      var visit = GetCookie("cookieCompliancyAccepted");
      if (visit == null) {
        $("#myCookieConsent").fadeIn(400); // Show warning
      } else {
        // Already accepted
      }
    }
  }
  $(document).ready(function () {
    $("#cookieButton").click(function () {
      // console.log('Understood');
      var expire = new Date();
      expire = new Date(expire.getTime() + 19776000000);
      document.cookie =
        "cookieCompliancyAccepted=Got it!; expires=" + expire + ";path=/";
      $("#myCookieConsent").hide(400);
    });
    testFirstCookie();
  });

  $(document).ready(function () {
    $("#closeCookieConsent, .closecookieButton").click(function () {
      $("#myCookieConsent").fadeOut(200);
    });
  });

}, 1000);
 // Cookie Compliancy END