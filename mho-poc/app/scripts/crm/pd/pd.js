// PD CRM Module - Page Load JavaScript
//

// ON PAGE LOAD
////////////////////////////////////////////////////

// On page load
jQuery(function() {
	
	// Tooltips
	$('.tooltip-info').tooltip();
	
	// Float label
	$('.float-label').jvFloat();
	
	// Run enrollment vizzard
	enrollmentWizard()
	
	// Appointment Slider junk
	//
	$('.pd-panel').click(function(){
		if ($(this).find('div').hasClass('crm-apt-slider')){
			// Activate the flex slider
			$('.flexslider').flexslider({
				namespace: "crm-",
				animation: "slide",
				startAt: 0,
				nextText: "",
				prevText: "",
				slideshow: false,
				controlNav: false,
				directionNav: false,
			});
		}
	});
	
	// Custom directional navigation
	$('.crm-prev').on('click', function(){
		$('.flexslider').flexslider('prev')
		return false;
	})

	$('.crm-next').on('click', function(){
		$('.flexslider').flexslider('next')
		return false;
	})
	
	$('.crm-apt-more-times').on('click', function(){
		$('.crm-apt-more-times a.close-spin-toggle').fadeOut();
	});
	

// 	$(document).ready(function() {
//   if(document.getElementById("provider-directory-page") != null) {
//     $(".close-spin-toggle").on('click', function(){
// 		$(this).toggleClass('active');
// 		});
//   } else {
//   		$('.lr-panel-subheader').click(function() {
//   		$(this).toggleClass('active');
// 			});
//   	} 
// });

	// Accordion toggle class for active state
	$(".close-spin-toggle").on('click', function(){
		$(this).toggleClass('active');
	});
	
	
	$(".pd-panel .collapse").each(function() {
		// Finds id of open panels
		var id = $(this).attr("id");
		
		if ($(this).hasClass("in")) {
			// Attaches active class to href with related id
			$(".panel-title a[href='#"+id+"']").addClass('active');
		}

	});

	// IE SPECIFIC
	if($("html").hasClass("lt-ie8") || $("html").hasClass("lt-ie9")) {
		var labels = $("label");
		for(var i = 0; i < labels.length; i++) {
			$(labels[i]).removeClass("sr-only");
		}
	}
	
});


// Parallaxed function for pd-detail header image
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.parallaxed').css('top', -(scrolled * 0.2) + 'px');
}

$(window).scroll(function(e){
	parallax();
});


// Enrollment Vizzard
////////////////////////////////////////////

function enrollmentWizard() {

	var current_panel, next_panel, previous_panel; //fieldsets
	var left, opacity, scale;                      //fieldset properties which we will animate
	var animating;                                 //flag to prevent quick multi-click glitches
	
	// Hide all pages of the form except the first page to start
	var pages = $("#crm-reg-form fieldset");
	for(var i = 0; i < pages.length; i++) {
		if(i !== 0) {
			$(pages[i]).css("display","none");
		}
	}
	
	// Steps forward in the wizard
	var register_next = function(){
		
		// Set variables
		//if(animating) return false;
		//animating = true;
		current_panel = $(this).closest('fieldset');
		next_panel = $(this).closest('fieldset').next();
		
		/*
		// Clear errors if any
		clearErrorMessages();
		
		// Validate fields on page BEFORE moving to the next page
		var validated = false;
		
		// Get all form fields
		var form_elements = new Array();
		jQuery(current_panel).find(":input").each(function(){
		    form_elements.push(this);
		});
		*/
	
	
		/*
		// Check to make sure all withdraw fields are populated
		var fields = getFieldset(form_elements, ehc_ce_validation_set_initiate_enrollment);
		validated = validateFieldset(fields);

		if(validated) {
			
			// Before animating, make sure to copy necessary data to other pages 
			// Guest names
			var guest_names = $("[id^=guest_name]");
			var guest_name_string = "";
			if(guest_names.length > 0) {
				for(var i = 0; i < guest_names.length; i++) {
					var guest_name = $(guest_names[i]).val();
					if(guest_name !== "") {
						if(guest_name_string === "") {
							guest_name_string = guest_name;
						} else {
							guest_name_string = guest_name_string + ", " + guest_name;
						}
					}
				}
			}
			// If guest names are available, populate on the last page
			if(guest_name_string !== "") {
				var guest_html = '<h4 class="crm-sub-heading">Guests</h4><div class="ce-guest-list">' + guest_name_string + '</div>';
				$(".ce-checkout-guests").html(guest_html);
			}
			// Enrollment Criteria  .ce-checkout-enrollment-criteria
			var enrollment_criteria_fields = $("[id*=enrollment_criteria]");
			var enrollment_criteria_string = "";
			if(enrollment_criteria_fields.length > 0) {
				for(var i = 0; i < enrollment_criteria_fields.length; i++) {
					var enrollment_criteria_field = $(enrollment_criteria_fields[i]);
					// Skip the hidden field used for verification of changes
					if($(enrollment_criteria_field).attr("name").indexOf("verify") == -1) {
						if ($(enrollment_criteria_field).is("textarea")) {
							enrollment_criteria_string = $(enrollment_criteria_field).html();
						} else {
							var enrollment_criteria_value = $(enrollment_criteria_fields[i]).val();
							if(enrollment_criteria_value !== "") {
								if(enrollment_criteria_string === "") {
									enrollment_criteria_string = enrollment_criteria_value;
								} else {
									enrollment_criteria_string = enrollment_criteria_string + " \r\n " + enrollment_criteria_value;
								}
							}
						}
					}
				}
			}
			// If guest names are available, populate on the last page
			if(enrollment_criteria_string !== "") {
				var enrollment_criteria_string = '<h4 class="crm-sub-heading">Related Information</h4><div class="ce-enrollment-criteria">' + enrollment_criteria_string + '</div>';
				$(".ce-checkout-enrollment-criteria").html(enrollment_criteria_string);
			}
		*/

			// Start Animating
			$('html, body').animate({ scrollTop: 200 }, 300);

			//activate next step on progressbar using the index of next_panel
			$('.crm-progress-bar .btn-group span').eq($('fieldset').index(next_panel)).addClass('active');
			$('.crm-progress-bar .btn-group span i').eq($('fieldset').index(next_panel)).removeClass('fa-circle-o').addClass('fa-check-circle');

			//show the next fieldset
			next_panel.show();
		
			//hide the current fieldset with style
			current_panel.animate({opacity: 0}, {
				step: function(now, mx) {
				
					//as the opacity of current_panel reduces to 0 - stored in "now"
					//1. scale current_panel down to 80%
					scale = 1 - (1 - now) * 0.2;
					//2. bring next_panel from the right(50%)
					left = (now * 50)+'%';
					//3. increase opacity of next_panel to 1 as it moves in
					opacity = 1 - now;
					current_panel.css({'transform': 'scale('+scale+')'});
					next_panel.css({'left': left, 'opacity': opacity});
				},
				duration: 800,
				complete: function(){
					current_panel.hide();
					animating = false;
				}
				//this comes from the custom easing plugin
				//easing: 'easeInOutBack'
			});
			return false;
		//scrollToTop("body");
		animating = false;
		return false;
	};

	var register_previous = function(){
		
		// Setup variables
		//if(animating) return false;
		//animating = true;
		current_panel = $(this).closest('fieldset');
		previous_panel = $(this).closest('fieldset').prev();
		
		// Clear errors if any
		//clearErrorMessages();
		
		// Start animation
		$('html, body').animate({ scrollTop: 200 }, 300);

		//de-activate current step on progressbar
		$('.crm-progress-bar .btn-group span').eq($('fieldset').index(current_panel)).removeClass('active');
		$('.crm-progress-bar .btn-group span i').eq($('fieldset').index(current_panel)).removeClass('fa-check-circle').addClass('fa-circle-o');

		//show the previous fieldset
		previous_panel.show();
		//hide the current fieldset with style
		current_panel.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_panel reduces to 0 - stored in "now"
				//1. scale previous_panel from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				//2. take current_panel to the right(50%) - from 0%
				left = ((1-now) * 50)+'%';
				//3. increase opacity of previous_panel to 1 as it moves in
				opacity = 1 - now;
				current_panel.css({'left': left});
				previous_panel.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			},
			duration: 800,
			complete: function(){
				current_panel.hide();
				animating = false;
			}
			//this comes from the custom easing plugin
			//easing: 'easeInOutBack'
		});
		return false;
	};
	
	// Activate function on click of the progress buttons
	$('a.ce-enroll-next').click(register_next);
	$('a.ce-enroll-previous').click(register_previous);
}