// Avoid `console` errors in browsers that lack a console.
(function() {
		var method;
		var noop = function () {};
		var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
				method = methods[length];

				// Only stub undefined methods.
				if (!console[method]) {
						console[method] = noop;
				}
		}
}());


/*
 * JVFloat.js
 * modified by Colin Ambrose on: 02/03/2014 - MDY (US)
 */
// Test for placeholder support
$.support.placeholder = (function () {
    var i = document.createElement('input');
    return 'placeholder' in i;
})();

(function($) {
	'use strict';

	// Init Plugin Functions
	$.fn.jvFloat = function() {

        // Do we have placeholder support
        
		// Check input type - filter submit buttons.
		return this.filter('input:not([type=submit]), textarea').each(function() {
			// Wrap the input in div.jvFloat
			function createIdOnElement($el) {
			    var id = generateUIDNotMoreThan1million();
				$el.prop('id', id);
				return id;
			}
            if($.support.placeholder) {			
                var $el = $(this)
				    .wrap('<div class=jvFloat>');
            }
            else{
                var $el = $(this)
				    .wrap('<div class=jvFloatie>');
            }
			var forId = $el.attr('id');
			if (!forId)
				forId = createIdOnElement($el);

			// Store the placeholder text in span.placeHolder
			// added `required` input detection and state
			var required = $el.attr('required') || '';
			var placeholder = $('<label class="placeHolder ' + required + '" for="' + forId + '">' + $el.attr('placeholder') + '</label>')
				.insertBefore($el);
			// checks to see if inputs are pre-populated and adds active to span.placeholder
			function setState() {
			    // change span.placeHolder to span.placeHolder.active
                placeholder.toggleClass('active', $el.val() !== '');
			}
			setState();
			$el.bind('keyup blur', setState);
			function generateUIDNotMoreThan1million() {
				var id = ('0000' + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4);
				if (!!$('#' + id).length){
					    return id;
			    }
			}
        });
	};
// Make Zeptojs & jQuery Compatible
})(window.jQuery || window.Zepto || window.$);
// end JVFloat plugin



// JWW START ON REGISTER VALIDATION PROCESS
// If you give required class to all required fields, you can pull all of those fields in 1 jQuery query
// var fields = jQuery("#event-registration-page-1 .required");
// for(int i = 0; i < fields.length; i++) {
//     CheckField(fields[i]);
// }
// // Check’s the fields
// function CheckField(field) {
//     var field_value = field.val();
//     if(field_value === null || field_value === undefined || field_value === "") {
//         return false;
//     }
//       // If you were to add a data-attr in HTML for the regex value, you could do something like this…
//     // var regex = field.attr("regex");
//     // if(regex !== "") {
//     //     // run regex
//     //     if(regex fails) {
//     //     return false;
//     //     }
//     // }
// }

// need to check/validate each registration page separately when transitioning to the next


(function() {
		// REGISTER PROGRESS TRANSITION
		var current_fs, next_fs, previous_fs; //fieldsets
		var left, opacity, scale;             //fieldset properties which we will animate
		var animating;                        //flag to prevent quick multi-click glitches

		// $('#progress-step-1').click(function(){
		//     // $('html, body').animate({ scrollTop: 0 }, 300);
		//     $('#event-registration-page-1').show();

		// });

		// var current_index = 0;
		// var pages = $('#ce-reg-form fieldset');     // store panes collection


		var register_next = function(){
				$('html, body').animate({ scrollTop: 200 }, 300);

				if(animating) return false;
				animating = true;

				current_fs = $(this).parent();
				next_fs = $(this).parent().next();
				// console.log(next_fs);

				//activate next step on progressbar using the index of next_fs
				$('.ce-progress-bar .btn-group span').eq($('fieldset').index(next_fs)).addClass('active');
				$('.ce-progress-bar .btn-group span i').eq($('fieldset').index(next_fs)).removeClass('fa-circle-o').addClass('fa-check-circle');

				// console.log(current_fs);

				//show the next fieldset
				next_fs.show();
				//hide the current fieldset with style
				current_fs.animate({opacity: 0}, {
						step: function(now, mx) {
								//as the opacity of current_fs reduces to 0 - stored in "now"
								//1. scale current_fs down to 80%
								scale = 1 - (1 - now) * 0.2;
								//2. bring next_fs from the right(50%)
								left = (now * 50)+'%';
								//3. increase opacity of next_fs to 1 as it moves in
								opacity = 1 - now;
								current_fs.css({'transform': 'scale('+scale+')'});
								next_fs.css({'left': left, 'opacity': opacity});
						},
						duration: 800,
						complete: function(){
								current_fs.hide();
								animating = false;
						},
						//this comes from the custom easing plugin
						easing: 'easeInOutBack'
				});
				return false;
		};

		var register_previous = function(){
				$('html, body').animate({ scrollTop: 200 }, 300);

				if(animating) return false;
				animating = true;

				current_fs = $(this).parent();
				previous_fs = $(this).parent().prev();

				//de-activate current step on progressbar
				$('.ce-progress-bar .btn-group span').eq($('fieldset').index(current_fs)).removeClass('active');
				$('.ce-progress-bar .btn-group span i').eq($('fieldset').index(current_fs)).removeClass('fa-check-circle').addClass('fa-circle-o');

				// console.log(previous_fs.index());

				//show the previous fieldset
				previous_fs.show();
				//hide the current fieldset with style
				current_fs.animate({opacity: 0}, {
						step: function(now, mx) {
								//as the opacity of current_fs reduces to 0 - stored in "now"
								//1. scale previous_fs from 80% to 100%
								scale = 0.8 + (1 - now) * 0.2;
								//2. take current_fs to the right(50%) - from 0%
								left = ((1-now) * 50)+'%';
								//3. increase opacity of previous_fs to 1 as it moves in
								opacity = 1 - now;
								current_fs.css({'left': left});
								previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
						},
						duration: 800,
						complete: function(){
								current_fs.hide();
								animating = false;
						},
						//this comes from the custom easing plugin
						easing: 'easeInOutBack'
				});
				return false;
		};

		// loop through with eq/index and .parent to switch to next or prev panels

		// bind progress bar links
		// $('#progress-step-1').on('click', function(){
		//     //this doesn't work because class 'active' remains on prog elements after proceeding to next panel
		//     // if($('#progress-step-2 span').hasClass('active')){
		//         $('.fs-previous').trigger('click');
		//     // }
		//     return false;
		// });
		// $('#progress-step-2').on('click', function(){
		//     //this doesn't work because class 'active' remains on prog elements after proceeding to next panel
		//     // if($('#progress-step-3 span').hasClass('active')){
		//         $('.fs-previous').trigger('click');
		//     // }
		//     return false;
		// });


		// bind previous and next links
		$('.fieldset-next').click(register_next);
		$('.fieldset-previous').click(register_previous);
})();






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





$(document).ready(function(){
	
	//toggles drop-down for multiple class listings
	(function () {
	    
	    $('.drop-down').hide();

		$('.date-drop-down').click(function(){
			$('.drop-down').slideToggle('fast');
			$('close-spin-toggle').toggleClass('active','spin');
		})
	})();

	//toggles a responsive classes
	(function () {
	    var browserWidth = $(window).width();
	    console.log(browserWidth);
	    if (browserWidth <= 767) {
	    	console.log("small");
	    }else{
	    	console.log("normal");
	    }
	    
	})()
})
