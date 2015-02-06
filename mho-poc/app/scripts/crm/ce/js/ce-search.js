// CE CRM Module - Search JavaScript

// This is used to determine what type of a search has been initiated
// OPTIONS:
// - Get Enrollment
// - Withdraw
// - Search Events
function submitSearchForm(type) {

	// Disable the button for resubmit
	jQuery("button").attr("disabled", "disabled");

	// Clear all form fields and disable buttons
	clearErrorMessages();

	// Get all form fields
	var form_elements = new Array();
	jQuery("form :input").each(function(){
	    form_elements.push(this);
	});
	
	if(type === ehc_ce_validation_set_withdraw) {
		// Check to make sure all withdraw fields are populated
		var fields = getFieldset(form_elements, ehc_ce_validation_set_withdraw);
		if(validateFieldset(fields)) {
			// Lookup withdraw
			var first_name, last_name, conf_num;
			for(var i = 0; i < fields.length; i++) {
				var field = fields[i];
				if(field.post_name === "ehc_ce_withdraw_first_name") {
					first_name = field.value;
				} else if(field.post_name === "ehc_ce_withdraw_last_name") {
					last_name = field.value;
				} else if(field.post_name === "ehc_ce_withdraw_confirmation_number") {
					conf_num = field.value;
				}
			}

			// Make the request
			getEnrollment(first_name, last_name, conf_num, showWithdrawEnrollmentModal);
		} else {
			// Failed
			jQuery("button").removeAttr("disabled");
			return false;			
		}
		// Renable buttons for modals
		jQuery("button").removeAttr("disabled");

	} else if(type === ehc_ce_validation_set_get_enrollment) {
		// Check to make sure all enrollment fields are populated
		var fields = getFieldset(form_elements, ehc_ce_validation_set_get_enrollment);
		if(validateFieldset(fields)) {
			// Lookup withdraw
			var first_name, last_name, conf_num;
			for(var i = 0; i < fields.length; i++) {
				var field = fields[i];
				if(field.post_name === "ehc_ce_get_enrollment_first_name") {
					first_name = field.value;
				} else if(field.post_name === "ehc_ce_get_enrollment_last_name") {
					last_name = field.value;
				} else if(field.post_name === "ehc_ce_get_enrollment_confirmation_number") {
					conf_num = field.value;
				}
			}
			
			// Make the request
			getEnrollment(first_name, last_name, conf_num, showEnrollmentModal);
		} else {
			// Failed
			jQuery("button").removeAttr("disabled");
			return false;			
		}
		// Renable buttons for modals
		jQuery("button").removeAttr("disabled");
		
	} else {
		// check to make sure required search fields are populated
		var fields = getFieldset(form_elements, ehc_ce_validation_set_search);
		if(validateFieldset(fields)) {
			// Execute the search
			var arguments = "";
			for(var i = 0; i < fields.length; i++) {
				var field = fields[i];
				if(field.value !== undefined && field.value !== ""
						&& field.post_name !== undefined && field.post_name !== "") {
					if(arguments === "") {
						arguments = "?" + field.post_name + "=" + field.value;
					} else {
						arguments = arguments + "&" + field.post_name + "=" + field.value;
					}
				}
				window.location = arguments;
			}
		} else {
			// Failed
			jQuery("button").removeAttr("disabled");
			return false;			
		}
	}
}

// Used to show the modal detail of the specific clicked event
function showDetail(result_dom_id) {
	// Add the current event to the URL
	window.location.hash = result_dom_id;

	// Setup all fields in the dialog
	populateEventDetailWithData(result_dom_id, ehc_ce_result_detail_modal_id);

	// Show the dialog
	jQuery("#"+ehc_ce_result_detail_modal_id).modal('show');
}

////////////////////////////////////////////////////////////////////////
/////// SEARCH FORM UTILITY ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Setup the autocomplete
function setupAutocomplete() {
	// Get the autocomplete values
	var url = service_url + "?service=" + ehc_ce_services_autocomplete;
	jQuery.get(url, function( data ) {		
		// Check results
		if(data !== undefined && data !== null
				&& data.result !== undefined && data.result !== null
				&& data.result.NamesAndKeywords !== undefined && data.result.NamesAndKeywords !== null 
				&& data.result.NamesAndKeywords.length > 0) {
			// Populate the autocomplete - source requires a 'searching' algorithm that bloodhound provides
			
			/*
			// Autocomplete needs styling AND is breaking the search functionality
			var engine = new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: $.map(data.result.NamesAndKeywords, function(keyword) { return { value: keyword }; })
			});
			engine.initialize();
			$("#"+ehc_ce_search_keyword_id).typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			},{
				name: 'keywords',
			    displayKey: 'value',
				// `ttAdapter` wraps the suggestion engine in an adapter that
				// is compatible with the typeahead jQuery plugin
				source: engine.ttAdapter()
			});
			*/

		}
		
	});
}

function lookupFacilities(dropdown) {
	var market = dropdown.options[dropdown.selectedIndex].value;
	if(market !== undefined && market !== "") {
		// Use the JSON data to actually load the drop down
		var facility_drop_down = jQuery("#ehc_ce_search_facility");
		
		// Remove the current list
		$(facility_drop_down)
			.find('option')
			.remove();
		
		// Add a placeholder
		$(facility_drop_down).append($('<option>', { 
			value: "",
			text : "Loading results..." 
		}));
		
		// Make the call to get markets
		getFacilitiesByMarket(market,loadFacilities);
	}
}

function loadFacilities(data) {
	// Use the JSON data to actually load the drop down
	var facility_drop_down = jQuery("#ehc_ce_search_facility");
	
	// Remove the current list
	$(facility_drop_down)
		.find('option')
		.remove();

	// Add a placeholder
	$(facility_drop_down).append($('<option>', { 
		value: "",
		text : "List of Facilities..." 
	}));

	// Data returned is JSON from the Forge. Do something magical.
	if(data !== undefined && data.result !== undefined && data.result.length > 0) {
		for(var i = 0; i < data.result.length; i++) {
			$(facility_drop_down).append($('<option>', { 
				value: data.result[i].COID,
				text : data.result[i].Name 
			}));
		}	
	}
}