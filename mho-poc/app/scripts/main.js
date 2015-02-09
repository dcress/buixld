$(document).ready(function(){
// Placeholder for IE
//	$('input, textarea').placeholder();
// Float Label for Forms
    /*$('.float-label input').jvFloat();*/

  // Headroom
  $("#navigation-main").headroom({
      // vertical offset in px before element is first unpinned
      offset : 25,
      // scroll tolerance in px before state changes
      tolerance : 0,
      // or scroll tolerance per direction
      tolerance : {
          down : 0,
          up : 5
      },
      // css classes to apply
      classes : {
          // when element is initialised
          initial : "headroom",
          // when scrolling up
          pinned : "headroom--pinned",
          // when scrolling down
          unpinned : "headroom--unpinned",
          // when above offset
          top : "headroom--top",
          // when below offset
          notTop : "headroom--not-top"
      },
      // callback when pinned, `this` is headroom object
      onPin : function() {},
      // callback when unpinned, `this` is headroom object
      onUnpin : function() {
          // unpin the Slide menu?
          /*$('body').addClass( 'hide-menu' ),
          $('body').removeClass( 'menu-push-to-right' ),
          $('#mobile-menu').removeClass( 'menu-open' ),*/
          // unpin the Toolboxes?
          /*$('.collapse').removeClass('in');*/
      },
      // callback when above offset, `this` is headroom object
      onTop : function() {},
      // callback when below offset, `this` is headroom object
      onNotTop : function() {}
  });



// Toolboxes hide when clicking outside
// this is affecting "collapse" elements globally. may want to rethink this solution. ~David
// commented out for demo
// $(document).click(function(e){
//     if( $(e.target).closest("#search-box, #notifications, #profile, #lab-results-detail").length > 0 ) {
//         return false;
//     } else {
//         $('.collapse').removeClass('in');
//     }
// });

// PickaDate Datepicker
	$('.datepicker').pickadate({
			selectYears: 90,
			selectMonths: true,
			format: 'mm/dd/yyyy',
			formatSubmit: 'mm/dd/yyyy',
			min: new Date(1930,1,1),
			max: new Date(2016,1,1)
	});

//PickADate Timepicker
  $('.timepicker').pickatime({
      min: [6,00],
      max: [18,00],

      formatLabel: function(time) {
        var hours = ( time.pick - this.get('now').pick ) / 60,
            label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
        return  'h:i a <sm!all>' + ( hours ? Math.abs(hours) : '' ) + label +'</sm!all>'
    }

  });


// Tooltips
	//$('.tooltip-info').tooltip('hover');

// Calendar Carousel
	$('#ce-cal-carousel').carousel({
			wrap: true,
			interval: false
	});

// iCheck Form initialization
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-grey',
		radioClass: 'iradio_square-grey'
	});

	$('#modal-id').modal({
		show: true,
	});



});





//function for hamburger menu flip
///////////////////////////////////////////////////////////////////////////////

function hamburgerFlip() {
  var child;

  child = this.childNodes[1].classList;

  if (child.contains('material-design-hamburger__icon--to-arrow')) {//menu is
    child.remove('material-design-hamburger__icon--to-arrow');
    child.add('material-design-hamburger__icon--from-arrow');
  } else {//menu is open
    child.remove('material-design-hamburger__icon--from-arrow');
    child.add('material-design-hamburger__icon--to-arrow');
  }
}


$('.material-design-hamburger__icon').click(hamburgerFlip);

//end hamburger menu flip function
///////////////////////////////////////////////////////////////////////////////




  /*-----------------------------------
  ------- Dashboard Menu Animations ------
  -----------------------------------*/



// For adjusting the content body size
$(document).ready(function(){
    var toggle = $('#mobile-menu-toggle');
    var body = $('body');

    var menu_icon = $('.material-design-hamburger__layer');

    //body.addClass('main-nav-open');
    toggle.addClass('menu-active');

    function bodySize(){
      var winWidth = $(window).width();
      var bodyWidth = winWidth - 55;

      //include urls of pages that should not have side icons showing on nav
      if(window.location.href.indexOf("support-console") > -1) {
      	bodyWidth = winWidth;
      }

      //mobile has regular width
      if (Math.max(document.documentElement.clientWidth, window.innerWidth) < 768) {
        bodyWidth = winWidth;
      }

      //non mobile offsets width to show menu icons on left
      $('.dash-clip').css('width', bodyWidth);

    }

    bodySize();

    $(window).resize(function(){
      bodySize();
    });


    // Click the Hamburger
    $('#mobile-menu-toggle').bind('click',function(){
      if (body.hasClass('main-nav-open')) {
        body.removeClass('main-nav-open');
        toggle.removeClass('menu-active');
      } else {
        body.addClass('main-nav-open');
        toggle.addClass('menu-active');
      };
    });

    $('.menu-slider').mouseenter(function(){
      if (body.hasClass('main-nav-open')) {
        // do nothing
      } else{
        body.addClass('main-nav-open');
        toggle.addClass('menu-active');
        menu_icon.removeClass('material-design-hamburger__icon--from-arrow').addClass('material-design-hamburger__icon--to-arrow');
      };
    });
    $('.menu-slider').mouseleave(function(){
      body.removeClass('main-nav-open');
      toggle.removeClass('menu-active');
      menu_icon.removeClass('material-design-hamburger__icon--to-arrow').addClass('material-design-hamburger__icon--from-arrow');
    });


});









// Add A Guest form field
(function(){
	var guestDiv = $('#guestDiv');
	var i = $('#guestDiv p').length + 1;

	$('#addGuest').on('click', function() {
			$('<p><input type="text" id="guest" class="form-control" size="20" name="guest_' + i +'" value="" placeholder="Guest Name"><a href="#" class="removeGuest"> <i class="fa fa-minus-circle"></i> Remove Guest</a></p>').appendTo(guestDiv);
			i++;
			return false;
	});

	// Remove form field
	$('#guestDiv').on('click', '.removeGuest', function() {
			if( i > 1 ) {
					$(this).parents('p').remove();
					i--;
			}
			return false;
	});

})();
// Add Phone form field
(function(){
	var phoneDiv = $('#phoneDiv');
	var i = $('#phoneDiv p').length + 1;

	$('#addPhone').on('click', function() {
		if(i < 4){
			$('<div id="remPhone"><div class="col-md-9"><input type="tel" id="phone" class="form-control" size="20" name="phone_' + i +'" value="" placeholder="Phone Number"></div><div class="col-md-3"><select name="phoneType_' + i +'" id="phoneType" class="form-control select-styled"><option value="">Phone Type</option><option value="">Cell</option><option value="">Home</option><option value="">Work</option></select></div><a href="#" class="removePhone"> <i class="fa fa-minus-circle"></i> Remove Number</a></div>').appendTo(phoneDiv);
			i++;
		}
			return false;
	});

	// Remove form field
	$('#phoneDiv').on('click', '.removePhone', function(e) {
			e.preventDefault();
			if( i > 1 ) {
					$(this).parents('div#remPhone').remove();
					i--;
			}
			return false;
	});

})();

// Scroll to div
// $(document).ready(function(){
//  $('a[href^="#"]').on('click', function (e) {
//      e.preventDefault();

//      var target = this.hash,
//      $target = $(target);

//      $('html, body').stop().animate({
//          'scrollTop': $target.offset().top
//      }, 500, 'swing', function () {
//          window.location.hash = target;
//      });
//  });
// });

// $('#loginModal').modal('show');


// Loads the Profile Creation Success Modal
(function () {
	if(window.location.href.indexOf("profileCreate") > -1) {
		$('#profile-create-modal').modal('show');
	}else if(window.location.href.indexOf("profileEdit") > -1) {
		$('#profile-edit-modal').modal('show');
	}
	return false;
})();

// Loads the Patient Registration Success Modal
(function () {
	if(window.location.href.indexOf("patientRegister") > -1) {
		$('#patient-register-modal').modal('show');
	}else if(window.location.href.indexOf("patientRegister") > -1) {
		$('#patient-register-modal').modal('show');
	}
	return false;
})();

//loads the Online Pre-Registration Modal
(function () {
  if(window.location.href.indexOf("online-pre-registration") > -1) {
    $('.online-pre-registration-modal').modal('show');
  }else if(window.location.href.indexOf("online-pre-registration") > -1) {
    $('.online-pre-registration-modal').modal('show');
  }
  return false;
})();



//Popover on manage user page
$('.acct-activity-popover, .acct-status-popover').click(function() {
  $(this).popover('toggle');
});

$('.popover-dismiss').popover({
  trigger: 'focus'
});

// //rotates open/close icons
// $('.lr-panel-subheader').click(function() {
//   $(this).toggleClass('active');
// });

//rotates open/close icons
//added to accommodate provider directory and lab results structure differences
if(document.getElementById("pd-page") != null) {
  $(".close-spin-toggle").click(function(){
    $(this).toggleClass('active');
  });
} else {
    $('.lr-panel-subheader').click(function() {
      $(this).toggleClass('active');
    });
  }

//made "spin" class for tables not using bootstrap "active" class
$('.close-spin-toggle').click(function (){
  $(this).toggleClass('spin');
});




//search bar on main nav dropdown toggle
$('#nav-search-toggle').click(function(){
  $('#search-bar').slideToggle();
});

// search results page advanced options toggle
$('#advanced-search-toggle-page').click(function(){
  $('#advanced-search-wrap-page').slideToggle();
});

// MyHealthOne header nav - search dropdown - advanced search dropdown
$('#advanced-search-toggle-nav').click(function(){
  $('#advanced-search-wrap-nav').slideToggle();
});




//proxy emulate user - orangeish border around window
//
//turns on borders from modal
$('.emulate-borders').click(function(){
  $('#navigation-main').css({
    borderTop: '7px solid #c86932', //adds top border to #navigation-main - needs this because it covers the #border-top.
  });
  $('.btn-de-emulate, #border-top, #border-right, #border-bottom, #border-left, .emulate').show();
  $('.confirm-emulate').modal('hide');
});

//turns off borders when clicking de-emulate on modal
$('.de-emulate-borders').click(function(){
  $('.btn-de-emulate, #border-top, #border-right, #border-bottom, #border-left').hide();
  $('.confirm-de-emulate').modal('hide');
  $('#navigation-main').css({
    borderTop: 'none',
  });
});


//functions to highlight related tab when clicking "view all" links for specific categories.
$(function() {
  $(".hut-search-options-all").click(function() {
    $('.search-tab').removeClass('active');
    $("#hut-all-tab").addClass('active');
  });
});

$(function() {
  $(".hut-search-options-phys").click(function() {
    $('.search-tab').removeClass('active');
    $("#hut-phys-tab").addClass('active');
  });
});

$(function() {
  $(".hut-search-options-serv").click(function() {
    $('.search-tab').removeClass('active');
    $("#hut-serv-tab").addClass('active');
  });
});

$(function() {
  $(".hut-search-options-art").click(function() {
    $('.search-tab').removeClass('active');
    $("#hut-art-tab").addClass('active');
  });
});

$(function() {
  $(".hut-search-options-news").click(function() {
    $('.search-tab').removeClass('active');
    $("#hut-news-tab").addClass('active');
  });
});


// search results page advanced options toggle
$('#advanced-search-toggle').click(function(){
  $('.advanced-search-wrap').slideToggle();
});



//support console modals auto-show
$('#sc-login-modal').modal('show');

$('.finish-linking-modal').modal('show');

//$('.record-link-success-modal').modal('show');


//confirm or denied modal for MRN linking - randomly generating one or the other for demo purposes
$('.modal-footer button#link-mrn').click(function(){

  var randomNumber = Math.floor(Math.random()*2)+1;

  if(randomNumber == 1) {
    $('.confirm-mrn-modal').modal('show');
  }

  if(randomNumber == 2) {
    $('.denied-mrn-modal').modal('show');
  }

});


//for "whats this" link on support console mrn linking modal.
//layers a second modal over current modal.
$('.flip-item').click(function(){
  $('.mrn-info-modal').modal('show');
});



//support console user table dropdowns
//
$('#user-table tr').click(function(){
  $(this).next().fadeToggle( "slow" );
});




//Flexslider on home/patient page
$(window).load(function() {
  $('.flexslider').flexslider({
    animationLoop: true,
    slideshow: false,
    itemWidth: 220, //needs to be updated if icons are added
    itemMargin: 5,
    animation: "slide",
    start: function(slider){ //fix for weird bug where wrong width is applied to items before an event occurs.
        $('.flexslider').resize();
    }
  });

  if(window.location.href.indexOf("/home/") > -1) { //re-styles for consumer home page
      $('.flex-direction-nav, .flex-control-nav').remove();
      $('.slider').addClass('no-flex-nav');
    }

});


//removes items from dashboard stack on consumer home page vs patient home page
$( ".remove" ).remove();




