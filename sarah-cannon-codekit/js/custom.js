/*
* Title   : Sarah Cannon prototype JS
*
* Contributing Authors: Eric Motil, Daniel Cress, Lisa French
* Version : V2.0
*
*/

jQuery(document).ready(function() {
  // If it's mobile load seperate html
  if( navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i)
  ) {

  }
});

var fadeStart=0
    ,fadeUntil=360
    ,fading = $('.hero-info-wrap')
    ,infoText = $('.info-text')
    ,topNav = $('.navbar-top')
    ,topNavItems = $('.navbar-sc ul > li > a')
    ,bodyInfo = $('body.interior-info')
;
if( $('body').hasClass('interior-info') ) {

      // Top nav
      topNav.css({
        'position': 'fixed',
      });
      topNavItems.css({
        'color': '#fff'
      });

  $(window).bind('scroll', function(){
      var offset = $(document).scrollTop()
          ,opacity=0
      ;
      if( offset<=fadeStart ){
          opacity=1;
      }else if( offset<=fadeUntil ){
          opacity=1-offset/fadeUntil;
      }
      infoText.css({
        'opacity': opacity,
        'bottom': 40 +offset/10
      });
      fading.css({
        'opacity': opacity,
        'top': -offset/10
      });

      // Top nav
      topNav.css({
        'opacity': opacity,
        'top': -offset/10
      });

      

  });
}

// Set match media query event handler
//
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 1025px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// Media query change
function WidthChange(mq) {
  
  // Window width is at least mq
  if (mq.matches) {
    

    // PARALLAX STELLAR
    //
    $(function() {
      $.stellar({
        horizontalScrolling: false
      });
    });


  }
  
  // Window width is less than mq
  else {

  }

}


/* ==============================================
'Lazy' load some elements for fun
=============================================== */

jQuery(document).ready(function() {
  // Introduce body once everthing is ready
  // Gets rid of flash on refresh
  setTimeout(function() {
    $('body').css('opacity', '1'); // Probably terrible to accessibility
  }, 500);

  // Load most obvious homepage elements gracefully
  // Ad class for vertical centering
  setTimeout(function() {
    $('#story-bg').css('display', 'table');
  }, 800);

  // Vertically center story and display
  setTimeout(function() {
    $('#hero-story').css('display', 'table-cell');
  }, 1000);

  // Show navbar last
  setTimeout(function() {
    // Initial section below header invisible
    $('.headline-text').css('opacity', '1');
  }, 1500);

  // Show navbar last
  setTimeout(function() {
    $('body.home .navbar-sc').fadeIn(300);
  }, 1600);

  setTimeout(function() {
    $('.navbar-mobile').fadeIn(300);
  }, 800);

  // Randomy generate a number to add to the story-bg- class.
  // A different background image will be added for each differnet number
  var bgNum = (Math.round(Math.random() * 10));
  $('#story-bg').addClass('story-bg-'+bgNum);

});


/* ==============================================
Sticky Navbar
=============================================== */

$(document).ready(function() {
  $(".navbar-sticky-main").sticky(
    {
      topSpacing: 0,
      wrapperClassName: "sticky-main"
    });
});
$(document).ready(function() {
  $(".navbar-page-nav").sticky(
    {
      topSpacing: 0,
      wrapperClassName: "sticky-page"
    });
});



/* ==============================================
Nav Dropdown and Overlay
=============================================== */
$(document).ready(function() {
var dropdown_nav = document.querySelectorAll('.dropdown-menu');

for (var i = 0; dropdown_nav.length > i; i++) {
  dropdown_nav[i].onclick = function(e) {
    e.stopPropagation();
  }
}


var navItem = document.querySelectorAll('.navbar-sc nav > ul > li');

for (var i = 0; navItem.length > i; i++) {

  navItem[i].onclick = function(e) {

    if ( $(this).hasClass('open') ) {
      $('.overlay').removeClass('on');
      console.log(this);
    } else {
      // Toggle overlay class
      $('.overlay').addClass('on');
    }

  }

}
});


/* ==============================================
Main flex slider
=============================================== */
$(window).load(function() {
  $('.main-flex-slider').flexslider({
    slideshowSpeed: 5000,
    directionNav: false,
    animation: "fade",
    controlNav: false
  });
});


/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */
function close_toggle() {
  if ($(window).width() <= 768) {
    $('.navbar-collapse a').on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });
  }
  else {
    $('.navbar .navbar-default a').off('click');
  }
}
close_toggle();

$(window).resize(close_toggle);



/* ==============================================
Smooth Scroll To Anchor
=============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.navbar a,.btn,.to-top').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 50
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

//owl carousel for testimonials
$(document).ready(function() {

  $("#testi-carousel,#work-slide").owlCarousel({
    // Most important owl features
    items: 1,
    itemsCustom: false,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    singleItem: false,
    startDragging: true,
    autoPlay: true
  });

});

/*=========================*/
/*========portfolio mix====*/
/*==========================*/
$('#grid').mixitup();


/*=========================*/
/*========on hover dropdown navigation====*/
/*==========================*/



/* ==============================================
Counter Up

jQuery(document).ready(function($) {
$('.counter').counterUp({
delay: 100,
time: 800
});
});
=============================================== */

/* ==============================================
WOW plugin triggers animate.css on scroll
=============================================== */

var wow = new WOW(
  {
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 200, // distance to the element when triggering the animation (default is 0)
    mobile: false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();


//MAGNIFIC POPUP
$('.show-image').magnificPopup({type: 'image'});




/* ==============================================
Call Animated Graph
=============================================== */
// Doc: https://github.com/dcress/graphatron

// Define Graph Values
var info = [
  {
    // General Graph Info
    myId:   'my-graph', // Graph's id
    num:    3, // Number of graphs 
    bars:   2, // Number of bars per graph
    myTitle:  'Estimated Cancer Prevalence: 2010 - 2020', // Title of graph
    credit: 'Source: National Cancer Institue, 2011', // Source or Credits

    firstGraph: {
      //**** First Graph *****//
      // First Bar
      color1: '#aaa', year1:'2010', text1:'1.3 Mil', tall1: '20',
      // Second Bar
      color2: '#bbb', year2:'2015', text2:'3.5 Mil', tall2: '60',
      // Third Bar (if applicable)
      color3: '#ccc', year3:'2020', text3:'5.4 Mil', tall3: '90', // only use this section if the "bars" key is set to 3
      // Percent +/- & label
      percent: '+18%', myLabel:   'Cancer Diagnosis'
    },
    secondGraph: {
      //**** Second Graph *****//
      // First Bar
      color1: '#aaa', year1:'2010', text1:'9.2 Mil', tall1: '30',
      // Second Bar
      color2: '#bbb', year2: '2015', text2: '10.4 Mil', tall2: '60',
      // Third Bar (if applicable)
      color3: '#ccc', year3: '2020', text3: '13.9 Mil', tall3: '90', // only use this section if the "bars" key is set to 3
      // Percent +/-
      percent: '+20%', myLabel:   'Cancer Survivors'
    },
    thirdGraph: { // only use this section if the "num" key is set to 3
      //**** Third Graph *****//
      // First Bar
      color1: '#aaa', year1: '2010', text1: '5.6 Mil', tall1: '10',
      // Second Bar
      color2: '#bbb', year2: '2015', text2: '6.7 Mil', tall2: '40',
      // Percent +/-
      percent: '+20%', myLabel:   'Cancer Survivors'
    }
  } // end object
];// end array

animatedGraph(info);



/* ==============================================
Naviation Dropdown on Click
=============================================== */

// $(document).ready(function(){
//   var navClick = $('.dropdown-toggle');
//   var allLi = $('.navbar-right').children('.list-inline').children('li');

//   navClick.bind('click', function(event){
//     if ($(this).parent('li').hasClass('open')) {
//       $(this).parent('li').removeClass('open');
//     } else {
//       allLi.removeClass('open');
//       $(this).parent('li').addClass('open');
//     };
//   });
// });


/* ==============================================
Youtube video call to API, and ativation
=============================================== */

if ($('#video').length) {
  var player;
  function onYouTubePlayerAPIReady() {
    //Youtube API
      player = new YT.Player('promo-video', { // promo-video or related video ID
        events: {
          'onReady': onPlayerReady
        }
      });
  }
  function onPlayerReady(event){
    //click to play
    $('.video-play').bind('click', function(){
      $('#video').addClass('open');
      event.target.playVideo();

      player.addEventListener("onStateChange", function(state){
          if(state.data === 0){
              $('#video').removeClass('open');
          }
      });
    });
  }

  var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
