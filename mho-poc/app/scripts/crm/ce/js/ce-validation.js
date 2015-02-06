// CE CRM Module - Validation JavaScript

////////////////////////////////////////////////////////////////////////
/////// VALIDATION UTILITIES ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Adds an error class to the field with an error
function addErrorToField(field) {
	var invalid_field = document.getElementsByName(field.post_name)[0];
	$(invalid_field).parent().addClass("has-error");
	invalid_field.onblur = function() {
		$(this).parent().removeClass("has-error");
	};
}

// Checks if the field passes the regex
function checkRegexValidation(field, regex_exp, message) {
	var value = field.value;
	if(value !== null && value !== "") {
		var passes_this_validation = regex_exp.test(value);
		if(!passes_this_validation) {
			// add warning message, scroll to top
			postErrorMessage(message);
			addErrorToField(field);
		}
		return passes_this_validation;
	}
	// If value has no value, return true as valid
	return true;
}

// Pull desired_set from all the fields
function getFieldset(elements, desired_set) {
	var fieldset = new Array();
	for(var i = 0; i < elements.length; i++) {
		var field = elements[i];
		if(field.getAttribute("data-friendly") !== null) {			
			// Use this field, data attributes set
			var saved_field = new Object();
			saved_field.friendly = field.getAttribute("data-friendly");
			saved_field.required = stringToBoolean(field.getAttribute("data-required"));
			saved_field.validation = field.getAttribute("data-validation");
			saved_field.dataset = field.getAttribute("data-set");
			saved_field.post_name = field.name;
			saved_field.value = field.value;
			if(desired_set !== undefined && desired_set !== "") {
				// Make sure it's in the desired set before adding it
				if(saved_field.dataset === desired_set) {
					fieldset.push(saved_field);
				}
			} else {
				fieldset.push(saved_field);
			}
		}
	}
	return fieldset;
}

// Checks a fieldset for it's required and validation fields
function validateFieldset(fieldset) {
	var pass_validation = true;
	var missing_required_field = false;
	missing_required_fields = [];
	for(var scan = 0; scan < fieldset.length; scan++) {
		var field = fieldset[scan];

		// Check required
		if(field.required) {
			if(field.value === null || field.value === "") {
				missing_required_fields.push(field);
				pass_validation = false;
				addErrorToField(field);
				if(!missing_required_field) {
					postErrorMessage("Please provide values for the required field(s) below.");
					missing_required_field = true;
				}
			}
		}

		// Check validation/regex
		if(field.validation !== "" && field.validation !== "none") {
			switch(field.validation) {
				case "phone": 
					// do validation for phone - but only if US
					country = "USA"; // hardcode for now, add in logic when used outside USA
					if(country === "USA") {
						if(!checkRegexValidation(field, phone_regex, "Please make sure " + field.friendly + " is in the format xxx-xxx-xxxx.")) {
							pass_validation = false;
						}
					}
					break;
				case "email":
					// do validation for email
					if(!checkRegexValidation(field, email_regex, "Please make sure your email is in the appropriate format (xxx@xxxx.xxx).")) {
						pass_validation = false;
					}
					break;
				case "date":
					// do validation for date
					if(!checkRegexValidation(field, date_regex, "Please make sure your " + field.friendly + " is formmated as mm/dd/yyyy.")) {
						pass_validation = false;
					}
					break;
				case "zipcode":
					// do validation for zip code
					if(!checkRegexValidation(field, zip_regex, "Please make sure the zip code is in the 5 digit format.")) {
						pass_validation = false;
					}
					break;
				case "confirm":
					// Get the same field name - the "_confirm" and validate that it matches
					var verify_field_name = field.post_name.replace("_confirm","");
					var verify_field = jQuery("[name='" + verify_field_name + "']")[0];
					if(verify_field !== null && verify_field !== undefined && verify_field.value !== "") {
						if(verify_field.value !== field.value) {
							addErrorToField(field);
							postErrorMessage("Please make sure your " + field.friendly + " matches the original.");
							pass_validation = false;
						}
					}
					break;
				case "changed":
					// Run a verify to make sure field has changed - verification field has same name, just add _verify to the end
					var verify_field_name = field.post_name + "_verify";
					var verify_field = jQuery("[name='" + verify_field_name + "']")[0];
					// Only verify if the field has a value in it
					if(verify_field !== null && verify_field !== undefined && verify_field.value !== "") {
						// Check to make sure values are not the same
						if(verify_field.value === field.value) {
							addErrorToField(field);
							postErrorMessage("Please make sure to update the " + field.friendly + ". Answering all questions is very important.");
							pass_validation = false;
						}
					}
					break;
				case "human":
					// do bot validation
					if(field.value !== "") {
						postErrorMessage("You've filled in the field used to detect bots. If not a robot, please leave the 'Medical Facility' field blank. If a robot, please stop spamming us. Thank you.");
						addErrorToField(field);
						pass_validation = false;
					}
					break;
				default:
					// do nothing, unknown validation
					break;
			}
		}
	}
	return pass_validation;
}













////////////////////////////////////////////////////////////////////////
/////// NEEDS TO BE CHECKED IF NEEDED STILL! //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


// Gets the values from the form and checks to make sure all required fields / regex / passes
function processEnrollmentFields() {

	// Get all possible fields in the form
	// -- all enrollment fields have a specific classname
	var dom_enrollment_fields = jQuery(".ehc-calendar-enrollment-field");
	var country = "USA";
	var enrollment_fields = [];
	
	// Special fields to be combined with enrollment criteria
	var guest_names = "";
	var insurance = "";
	var number_of_guests = 0;
	
	for(var i = 0; i < dom_enrollment_fields.length; i++) {

		//////////////////////////////////////////
		// USE getFieldset
		//////////////////////////////////////////

		var enrollment_field = new Object();
		var field = dom_enrollment_fields[i];
		enrollment_field.friendly = field.getAttribute("data-friendly");
		enrollment_field.required = stringToBoolean(field.getAttribute("data-required"));
		enrollment_field.validation = field.getAttribute("data-validation");
		enrollment_field.post_name = field.name;
		enrollment_field.value = field.value;
		if(field.friendly === "Country" && field.value !== country) {
			country = field.value;
		}
		// Add to the guest list
		if(enrollment_field.friendly === "Guest") {
			if(enrollment_field.value !== null && enrollment_field.value !== undefined && enrollment_field.value !== "") {
				number_of_guests = number_of_guests + 1;
				if(guest_names === "") {
					guest_names = enrollment_field.value;
				} else {
					guest_names = guest_names + ", " + enrollment_field.value;
				}
			}
		} else if(enrollment_field.friendly === "Insurance") {
			if(enrollment_field.value !== null && enrollment_field.value !== undefined && enrollment_field.value !== "") {
				insurance = enrollment_field.value;
			}
		} else {
			// Add to the list of all enrollment fields
			enrollment_fields.push(enrollment_field);			
		}
	}

	// Clear any items from the warning/error list
	document.getElementById(error_message_wrap_id).innerHTML = "";
	
	// All fields saved
	// Check for REQUIRED and VALIDATION fields
	var pass_validation = true;
	var missing_required_field = false;
	missing_required_fields = [];
	for(var scan = 0; scan < enrollment_fields.length; scan++) {
		var field = enrollment_fields[scan];

		// Check required
		if(field.required) {
			if(field.value === null || field.value === "") {
				missing_required_fields.push(field);
				pass_validation = false;
				if(!missing_required_field) {
					postErrorMessage("Please provide values for the required field(s) below.");
					missing_required_field = true;
				}
			}
		}

		// Check validation/regex
		if(field.validation !== "" && field.validation !== "none") {
			switch(field.validation) {
				case "phone": 
					// do validation for phone - but only if US
					if(country === "USA") {
						if(!checkRegexValidation(field, phone_regex, "Please make sure " + field.friendly + " is in the format xxx-xxx-xxxx.")) {
							pass_validation = false;
						}
					}
					break;
				case "email":
					// do validation for email
					if(!checkRegexValidation(field, email_regex, "Please make sure your email is in the appropriate format (xxx@xxxx.xxx).")) {
						pass_validation = false;
					}
					break;
				case "date":
					// do validation for date
					if(!checkRegexValidation(field, date_regex, "Please make sure your " + field.friendly + " is formmated as mm/dd/yyyy.")) {
						pass_validation = false;
					}
					break;
				case "zipcode":
					// do validation for zip code
					if(!checkRegexValidation(field, zip_regex, "Please make sure the zip code is in the 5 digit format.")) {
						pass_validation = false;
					}
					break;
				case "changed":
					// Run a verify to make sure field has changed - verification field has same name, just add _verify to the end
					var verify_field_name = field.post_name + "_verify";
					var verify_field = jQuery("[name='" + verify_field_name + "']")[0];
					// Only verify if the field has a value in it
					if(verify_field !== null && verify_field !== undefined && verify_field.value !== "") {
						// Check to make sure values are not the same
						if(verify_field.value === field.value) {
							postErrorMessage("Please make sure to update the " + field.friendly + ". Answering all questions is very important.");
							pass_validation = false;
						} else {
							// Add Insurance and Guest Names to enrollment criteria
							if(field.friendly === "Event Specific Questions") {
								if(guest_names !== null && guest_names !== undefined && guest_names !== "") {
									field.value = field.value + "-||-GUESTS: " + guest_names;
								}
								if(insurance !== null && insurance !== undefined && insurance !== "") {
									field.value = field.value + "-||-INSURANCE: " + insurance;									
								}
							}
						}	
					}
					break;
				case "human":
					// do bot validation
					if(field.value !== "") {
						postErrorMessage("You've filled in the field used to detect bots. If not a robot, please leave the 'Medical Facility' field blank. If a robot, please stop spamming us. Thank you.");
						pass_validation = false;
					}
					break;
				default:
					// do nothing, unknown validation
					break;
			}	
		}
			
	}
	
	// Prompt with required field errors (after processing)
	if(!pass_validation) {
		for(var i = 0; i < missing_required_fields.length; i++) {
			var field = missing_required_fields[i];
			var name = field.friendly;
			var missing_field = document.getElementsByName(field.post_name)[0];
			missing_field.className += " input-error";
			missing_field.onblur = function() {
				var classes = this.className;
				this.className = classes.replace("input-error","input");
			};
		}
	}
	
	// If we got this far, seetup the enrollment parameters for the server call AND return true
	if(pass_validation) {
		document.getElementById(error_message_wrap_id).innerHTML = "";
			
		// We need to setup the post string that will get sent to the server using the enrollment fields
		enrollment_parameters = "";
		for(var scan = 0; scan < enrollment_fields.length; scan++) {
			enrollment_parameters = enrollment_parameters 
				+ "&" + enrollment_fields[scan].post_name + "=" + enrollment_fields[scan].value;
		}
		
		// Add number of guests counted above
		enrollment_parameters = enrollment_parameters 
			+ "&ehc_calendar_initiate_enroll_number_of_guests=" + number_of_guests;
		
		return true;
	}
	// If we get here, it failed
	return false;	
}