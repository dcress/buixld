////////////////////////////////////////////////////////////////////////
/////// ON PAGE LOAD ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// On page load
jQuery(function() {

	// Tooltips
	$('[data-toggle="tooltip"]').tooltip({'placement': 'bottom'});

	// Truncate result description everywhere
	truncateResultDesc();
	
	// Setup scroll to functions
	jQuery('#ce-search a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		scrollToTop(this.hash);
	});
	
	// Add strikethroughs to all discounts
	jQuery(".ce-discount").each(function() {
		$(this).prev().addClass("crm-strikethrough");
	});

	// Check for the hash in the URL for a specific session
	var potential_session_detail = window.location.hash;
	if(potential_session_detail !== undefined && potential_session_detail !== null
			&& potential_session_detail !== "" && potential_session_detail.indexOf("session-") != -1) {
		// remove the hash
		potential_session_detail = potential_session_detail.replace("#","");
		showDetail(potential_session_detail);
	}
	
	////////////////////////////////////////////////////////////////////////
	// PAGE SPECIFIC SECTION CODE
	////////////////////////////////////////////////////////////////////////
	
	// SEARCH PAGE - Only run if on search page
	var test_search = document.getElementById("ce-search");
	if(test_search !== null) {
		
		// Show expanded content sections
		$( "li.ce-more-search-options-toggle").addClass( "active" );
		$( "#ce-search-more-options").addClass( "active" );

		// Setup datepicker for search screen
		configureDatepicker(5);
		
		// Setup the autocomplete
		setupAutocomplete();

	}

	// SEARCH PAGE - Only run if on search page
	var test_search_results = document.getElementById("ce-results-listing");
	if(test_search_results !== null) {
		
		// Animate to list of results
		$('html, body').animate({
			scrollTop: $(".ce-search-options-content").offset().top
		}, 800);
		
		// Hide expanded search content
		$( "li.ce-more-search-options-toggle").removeClass( "active" );
		$( "#ce-search-more-options").removeClass( "active" );
		
		// Sort elements
		sortResults();
		
		// Setup the autocomplete
		setupAutocomplete();

		// Search Results Page
		var per_page = getPerPage();
		setupPagination(per_page);
	}
	
	// ENROLL PAGE - Only run if on enroll page
	var test_enroll = document.getElementById("ce-reg-form");
	if(test_enroll !== null) {
		
		// Run enrollment wizard
		enrollmentWizard();
		
		// Pickadate
		configureDatepicker(90);
		
		// Activate carosel for screen selection
		enrollmentCarousel();
		
		// Add Guest
		addGuest();
		
		// Add Phone numbers
		addPhoneNumber();


		////////////////////////////////////////////////////////////////////////
		// TESTING PURPOSES
		// Get all form fields
		var form_elements = new Array();
		jQuery("body").find(":input").each(function(){
		    form_elements.push(this);
		});
	
		// FOR TESTING PURPOSES
		// Check to make sure all withdraw fields are populated
		var fields = getFieldset(form_elements, ehc_ce_validation_set_initiate_enrollment);
		for(var i = 0; i < fields.length; i++) {
			var field_object = fields[i];
			var field = jQuery("[name='" + fields[i].post_name + "']")[0];
			if ($(field).is("input")) {
				
				if($(field).attr('type') == 'hidden') {
					// do nothing
				} else {
				
					if(field_object.validation !== undefined && field_object.validation !== "" && field_object.validation !== "none") {
						switch(field_object.validation) {
							case "phone": 
								$(field).val("555-666-7777");
								break;
							case "email":
								// do validation for email
								$(field).val("jeremiah.weedenwright@hcahealthcare.com");
								break;
							case "date":
								// do validation for date
								$(field).val("06/13/1982");
								break;
							case "zipcode":
								// do validation for zip code
								$(field).val("37215");
								break;
							case "confirm":
								// Get the same field name - the "_confirm" and validate that it matches
								$(field).val("jeremiah.weedenwright@hcahealthcare.com");
								break;
							case "changed":
								break;
							case "human":
								// do bot validation
								break;
							default:
								// do nothing, unknown validation
								break;
						}
					} else {
						$(field).val("Test " + i);
					}	
				}
			} else if ($(field).is("select")) {
				// <select> element.
				var selector = "[name='" + field_object.post_name + "'] option:last";
				var value = $(selector).val();
				$(field).val(value);
			} else if ($(field).is("textarea")) {
				// <textarea> element.
				$(field).html("Tested!");
			}
		}

	}
});