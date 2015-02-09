// CE CRM Module - Process Enrollment JavaScript

////////////////////////////////////////////////////////////////////////
/////// MAIN ENROLLMENT FUNCTIONS //////////////////////////////////////

// Cancels an enrollment if the button is pressed
function cancelEnrollment() {
	window.location = "?message=cancel";
}

////////////////////////////////////////////////////////////////////////
/////// MODAL CODE ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Adds a modal to the body and opens it
function initializeModal(modal_id, modal_title, cancel_function_name) {
	// Open the modal
	var modal_html = '<div id="' + modal_id + '"class="modal fade">'
		  			+ '<div class="modal-dialog">'
					+ '<div class="modal-content">'
					+ '<div class="modal-header">'
					+ '<button type="button" class="ce-modal-dismiss close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove-sign"></i></button>'
					+ '<h3 class="modal-title">' + modal_title + '</h3>'
					+ '</div>'
					+ '<div class="modal-body">'
					+ '</div></div></div></div>';
	jQuery("body").append(modal_html);
	jQuery("#"+modal_id).modal('show');
}

function destroyModal(modal_id) {
	// Remove the modal from the dom
	jQuery("#"+modal_id).modal('hide');
}

// MAIN ENROLLMENT FUNCTION
// Responsible for initiating enrollment
function initiateEnrollment() {

	// Disable the enrollment button so it is not clicked again
	jQuery("#ce-reg-form .ce-checkout-pay-submit a").attr("disabled","disabled");

	// Get all form fields
	var form_elements = new Array();
	jQuery("form :input").each(function(){
	    form_elements.push(this);
	});
	
	// Double-check to make sure all withdraw fields are populated
	var fields = getFieldset(form_elements, ehc_ce_validation_set_initiate_enrollment);	
	if(validateFieldset(fields)) {
		// Setup the modal
		initializeModal(ehc_ce_intiate_enrollment_modal_id, "Processing Enrollment", "cancelEnrollment");
		
		// Build the post to the dotCMS initiate service
		var enrollment_parameters = "";
		var enrollment_criteria = [];
		var guests = [];
		for(var i = 0; i < fields.length; i++) {
			var field = fields[i];
			// if id includes guest_name or enrollment_criteria (but not with verify) add all together
			if(field.post_name.indexOf("guest_name") != -1) {
				guests.push(field.value);
			} else if (field.post_name.indexOf("enrollment_criteria") != -1) {
				if(field.post_name.indexOf("verify") == -1) {
					// take only original, not verify field
					enrollment_criteria.push(field.value);
				}
			} else {
				if(enrollment_parameters === "") {
					enrollment_parameters = "&" + field.post_name + "=" + field.value;
				} else {
					enrollment_parameters = enrollment_parameters + "&" + field.post_name + "=" + field.value;
				}
			}
		}
		
		// Combine enrollment criteria/guests and add to URL
		var enrollment_criteria_string = "&ehc_ce_initiate_enroll_enrollment_criteria=";
		for(var i = 0; i < enrollment_criteria.length; i++) {
			if(enrollment_criteria_string === "&ehc_ce_initiate_enroll_enrollment_criteria=") {
				enrollment_criteria_string = enrollment_criteria_string + enrollment_criteria[i];
			} else {
				enrollment_criteria_string = enrollment_criteria_string + " \r\n " + enrollment_criteria[i];
			}
		}
		// Guests
		var num_guests = 0;
		for(var i = 0; i < guests.length; i++) {
			if(i === 0 && enrollment_criteria_string !== "&ehc_ce_initiate_enroll_enrollment_criteria=") {
				enrollment_criteria_string = enrollment_criteria_string + " \r\n Guests: " + guests[i];
			} else if (i === 0) {
				enrollment_criteria_string = enrollment_criteria_string + " Guests: " + guests[i];
			} else {
				enrollment_criteria_string = enrollment_criteria_string + ", " + guests[i];
			}
			num_guests = num_guests + 1;
		}
		// Add Number of guests to the request
		var num_guests = "&ehc_ce_initiate_enroll_number_of_guests=" + num_guests; 
		
		// Construct URL
		var url = service_url + "?service=" + ehc_ce_service_initialize_enrollment_action + enrollment_parameters + enrollment_criteria_string + num_guests;
		jQuery.get(url, function( data ) {
			// Parse the data
			if(data !== null && data.statusCode === 200) {
				// it worked				
				// Setup data for the modal - payload is from dotCMS plugin, so structure is known
				if(data.result !== null && data.result !== undefined) {
					var result = data.result;

					if(result.PaymentRequestId !== null && result.PaymentRequestId !== undefined
							&& result.PaymentUrl !== null && result.PaymentUrl !== undefined
							&& result.RequestId !== null && result.RequestId !== undefined) {
							
						// Save off values for finalize
						token = result.PaymentRequestId;
						request_id = result.RequestId;

						// Load the iFrame
						var payurl = result.PaymentUrl;
						var payment_request_id = result.PaymentRequestId;
						var refurl = window.location;
						refurl = refurl.toString();
						if(refurl.indexOf("?") != -1) {
							refurl = refurl.substring(0,refurl.indexOf("?"));
						}
						// Note:  reqid and ref query parameters must be provided when loading your iframe src.
						// reqid = returned from RequestPayment call. Refurl to ensure payment notifications.
						jQuery("#" + ehc_ce_intiate_enrollment_modal_id + " .modal-body").html("<iframe src='' title='Payment Screen'>");
						jQuery("#" + ehc_ce_intiate_enrollment_modal_id + " .modal-body iframe")
											.attr("src", payurl + "?reqid=" + payment_request_id + "&ref=" + refurl);
					} else {
						// THIS IS A 'FREE ENROLLMENT' Process Accordingly
						setupConfirmation(data, ehc_ce_services_confirm_enrollment);
					}
				} else {
					// Result from dotCMS plugin was null, we have a problem
					handleAjaxError(data, "We were unable to reach our service to initiate enrollment in this event.");
					destroyModal(ehc_ce_intiate_enrollment_modal_id);
					return false;
				}
			} else {
				// Error occurred, post the friendly message from the dotCMS Plugin
				handleAjaxError(data, "Our service failed to respond to our request to setup payment.");
				destroyModal(ehc_ce_intiate_enrollment_modal_id);
				return false;
			}
		});
	}
	return false;
}

// Finalizes enrollment based on response from HPS
function finalizeEnrollment(value) {

	var api_error_code = "";
	var authorization_code = "";
	var status_code = "";
	var total_amount = "";

	// Value is the JSON object we need to get the correct values for finalizing
	if(value !== undefined && value !== null) {
		if(value.ApiErrorCode !== undefined && value.ApiErrorCode !== null && value.ApiErrorCode !== "") {
			api_error_code = value.ApiErrorCode;
		}
		if(value.AuthorizationCode !== undefined && value.AuthorizationCode !== null && value.AuthorizationCode !== "") {
			authorization_code = value.AuthorizationCode;
		}
		if(value.HpsId !== undefined && value.HpsId !== null && value.HpsId !== "") {
			confirmation_number = value.HpsId;
		}
		if(value.StatusCode !== undefined && value.StatusCode !== null && value.StatusCode !== "") {
			status_code = value.StatusCode;
		}
		if(value.TotalAmount !== undefined && value.StatusCode !== null && value.TotalAmount !== "") {
			total_amount = value.StatusCode;
		}
	}

	if(confirmation_number !== undefined && confirmation_number !== null) {

		// Build Post Parameters
		var finalize_parameters = "&" + ehc_ce_finalize_enroll_hps_confirmation + "=" + confirmation_number
									+ "&" + ehc_ce_finalize_enroll_request_id + "=" + request_id;

		// Construct URL
		var url = service_url + "?service=" + ehc_ce_service_finalize_enrollment_action + finalize_parameters;
		jQuery.get(url, function( data ) {
			// Parse the data
			if(data !== null && data.statusCode === 200) {
				// payload is from dotCMS plugin, so structure is known
				if(data.result !== null && data.result !== undefined) {
					setupConfirmation(data, ehc_ce_services_confirm_enrollment);
				} else {
					handleAjaxError(data, "An error occurred receiving a confirmation of your enrollment, though payment has been confirmed. Confirmation number: " + confirmation_number);
				}
			} else {
				// Error occurred, post the friendly message from the dotCMS Plugin
				handleAjaxError(data, "An error occurred receiving a confirmation of your enrollment though payment has been made. Confirmation number: " + confirmation_number);

				// Error occurred return false
				return false;
			}
		});
	} else {
		// HPS didn't send back a confirmation number. 
		handleAjaxError(data, "The payment system did not respond with a confirmation number.")
	}
}

// Used to setup the confirmation page with data from the post
// back from the Forge after successful enrollment
// response - this is the json object of a FinalizePaidEnrollmentResponse
function setupConfirmation(response, response_type) {
	// Post all necessary fields to the confirmation page
	var post_data = JSON.stringify(response);

	// Redirect to the confirmation page
	var current_page = document.location.href;
	if(current_page.indexOf("?") != -1) {
		current_page = current_page.substring(0,current_page.indexOf("?"));	
	}
	if(current_page.indexOf("#") != -1) {
		current_page = current_page.substring(0,current_page.indexOf("#"));	
	}
	var confirmation_parameter = "?confirm=" + response_type;
	var redirect_page = current_page + confirmation_parameter;
	console.log(redirect_page);
	// Add a form to the page and submit it
	var form = '<form action="' + redirect_page + '" name="redirect_to_confirmation" method="post" style="display:none;">'
					+ '<input id="ehc_calendar_process_results" name="ehc_calendar_process_results" value=\'' + post_data + '\' type="hidden" />';
	if(ehc_ce_transaction_session_id !== undefined && ehc_ce_transaction_session_id !== null && ehc_ce_transaction_session_id !== "") {
		form = form	+ '<input id="ehc_ce_confirm_session_id" name="ehc_ce_confirm_session_id" value=\'' + ehc_ce_transaction_session_id + '\' type="hidden" />';
	}
	form = form + '</form>';
	jQuery("body").append(form);
	document.forms['redirect_to_confirmation'].submit();
}