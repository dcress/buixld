// PD CRM Module - Registration Wizard JavaScript

////////////////////////////////////////////////////////////////////////
/////// Enrollment wizard /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function enrollmentWizard() {

	var current_panel, next_panel, previous_panel; //fieldsets
	var left, opacity, scale;                      //fieldset properties which we will animate
	var animating;                                 //flag to prevent quick multi-click glitches
	
	// Hide all pages of the form except the first page to start
	var pages = $("#pd-reg-form fieldset");
	for(var i = 0; i < pages.length; i++) {
		if(i !== 0) {
			$(pages[i]).css("display","none");
		}
	}
	
	// Steps forward in the wizard
	var register_next = function(){
		
		// Set variables
		if(animating) return false;
		animating = true;
		current_panel = $(this).closest('fieldset');
		next_panel = $(this).closest('fieldset').next();
		
		// Clear errors if any
		clearErrorMessages();
		
		// Validate fields on page BEFORE moving to the next page
		var validated = false;
		
		// Get all form fields
		var form_elements = new Array();
		jQuery(current_panel).find(":input").each(function(){
		    form_elements.push(this);
		});
	
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
		}
		scrollToTop("body");
		animating = false;
		return false;
	};

	var register_previous = function(){
		
		// Setup variables
		if(animating) return false;
		animating = true;
		current_panel = $(this).closest('fieldset');
		previous_panel = $(this).closest('fieldset').prev();
		
		// Clear errors if any
		clearErrorMessages();
		
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

////////////////////////////////////////////////////////////////////////
/////// ADD PHONE NUMBER FOR ENROLLMENT ////////////////////////////////
////////////////////////////////////////////////////////////////////////
function addPhoneNumber() {
	// Need to add phones, but cut off at maximum of 3
	var phoneDiv = $('#phoneDiv');
	var i = $('#phoneDiv p').length + 1;
	// Names for phone fields
	var phoneTwo = "ehc_ce_initiate_enroll_phone2";
	var phoneTwoType = "ehc_ce_initiate_enroll_phoneType2";
	var phoneThree = "ehc_ce_initiate_enroll_phone3";
	var phoneThreeType = "ehc_ce_initiate_enroll_phoneType3";

	$('#addPhone').on('click', function() {
		var phone_id;
		var phone_type_id;
		if(i === 1) {
			phone_id = phoneTwo;
			phone_type_id = phoneTwoType;
		} else if (i === 2){
			phone_id = phoneThree;
			phone_type_id = phoneThreeType;
		}
		// Only add phones while there are 2 or fewer phones
		if (i < 3) {
			$('<div class="row remPhone"><div class="col-md-5"><input type="tel" id="' + phone_id 
					+ '" class="form-control" size="20" name="' + phone_id 
					+ '" value="" placeholder="Phone Number"' 
					+ ' data-friendly="Alt Phone"'
					+ ' data-required="false"'
					+ ' data-validation="phone"'
					+ ' data-set="initiate_enrollment">'
					+ '</div>' 
					+ '<div class="col-md-3"><select name="' + phone_type_id 
					+ '" id="' + phone_type_id 
					+ '" class="form-control select-styled"'
					+ ' data-friendly="Alt Phone Type"'
					+ ' data-required="true"'
					+ ' data-validation="none"'
					+ ' data-set="initiate_enrollment">'
					+ '<option value="">Phone Type</option>' 
					+ '<option value="Mobile">Cell</option>' 
					+ '<option value="Home">Home</option>' 
					+ '<option value="Work">Work</option></select></div>' 
					+ '<div class="col-md-4"><a href="#" class="removePhone btn btn-blank">' 
					+ '<i class="icon-minus"></i> Remove Number</a></div></div>').appendTo(phoneDiv);
			i++;
			if(i >= 3) {
				// hide the ability to add more
				$('.add-phone').hide();
			}
			return false;
		}
	});

	// Remove form field
	$('#phoneDiv').on('click', '.removePhone', function(e) {
		e.preventDefault();
		if(i > 1) {
			$(this).parents('div.remPhone').remove();
			i--;
			if(i < 3) {
				// show the ability to add more
				$('.add-phone').show();
			}
		}
		return false;
	});
}

////////////////////////////////////////////////////////////////////////
/////// ADD A GUEST LOGIC //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
function addGuest() {
	// Before doing anything, verify the enrollment allows guests
	var guests_allowed = $("#enrollment-session").data("session-guests-allowed");
	if(guests_allowed !== "") {
		// Try to parse the value
		var guests_allowed = parseInt(guests_allowed);
		if(guests_allowed === 1) {
			// remove the add guest field - the 1 guest field should already be present
			$('.add-guest').hide();
		} else if(guests_allowed > 0) {
			// Need to add guests, but cut off at maximum of 'guests_allowed'
			var guestDiv = $('#guestDiv');
			// Add 1 so guest name count is correct
			var i = $('#guestDiv .remGuest').length + 1;
			$('#addGuest').on('click', function() {
				$('<div class="row remGuest" class="row">'
					+ '<div class="col-md-9"><input type="text" id="guest_name_' + i 
					+ '" class="form-control" name="guest_name_' + i 
					+ '" value="" placeholder="Guest ' + i 
					+ '" data-friendly="Guest Name" '
					+ 'data-required="false" '
					+ 'data-validation="none" '
					+ 'data-set="initiate_enrollment" '
					+ '></div><div class="col-md-3">' 
					+ '<a href="#" class="removeGuest btn btn-blank">' 
					+ '<i class="icon-minus"></i> Remove Guest</a></div></div>').appendTo(guestDiv);
				i++;
				if(i >= guests_allowed) {
					// Hide the ability to add more
					$('.add-guest').hide();
				}
				return false;
			});

			// Remove form field
			$('#guestDiv').on('click', '.removeGuest', function() {
				if( i > 1 ) {
					$(this).parents('div.remGuest').remove();
					i--;
					// Need to subtract 1 because i is one higher than actual (guest names tracked with i)
					if((i - 1) < guests_allowed) {
						$('.add-guest').show();
					}
				}
				return false;
			});	
		} else {
			// No guests are allowed for this enrollment, hide the guest field
			$("#add-a-guest").hide();
		}
	}
}

////////////////////////////////////////////////////////////////////////
/////// SELECT SCREENING ON CLICK //////////////////////////////////////
////////////////////////////////////////////////////////////////////////
function selectScreening(radio) {
	jQuery("#"+ehc_ce_initiate_enrollment_session_id).val(jQuery(radio).val());
}