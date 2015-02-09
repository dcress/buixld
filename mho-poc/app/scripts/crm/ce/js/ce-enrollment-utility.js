// CE CRM Module - Enrollment Utility JavaScript

//////////////////////////////////////////////////////////////////////
// Withdraw Executed Handler
//////////////////////////////////////////////////////////////////////
function handleWithdrawResponse(data) {
	// Parse the data
	if(data !== null && data.statusCode === 200) {
		// payload is from dotCMS plugin, so structure is known
		if(data.result !== null && data.result !== undefined) {
			setupConfirmation(data, ehc_ce_service_withdraw_action);
		} else {
			handleAjaxError(data, "An error occurred when attempting to withdraw from your event.");
			jQuery("#" + ehc_ce_withdraw_modal + " [type=button]").removeAttr("disabled");
			$("#"+ehc_ce_withdraw_modal).modal('hide');
		}
	} else {
		// Error occurred, post the friendly message from the dotCMS Plugin
		handleAjaxError(data, "An error occurred while attempting to withdraw from your event.");
		jQuery("#" + ehc_ce_withdraw_modal + " [type=button]").removeAttr("disabled");
		$("#"+ehc_ce_withdraw_modal).modal('hide');
		// Error occurred return false
		return false;
	}
}

//////////////////////////////////////////////////////////////////////
// Modal Code jean claude damme 0015376
//////////////////////////////////////////////////////////////////////

function showWithdrawEnrollmentModal(data) {
	// Reset the modal
	jQuery(".refund-message").show();
	// Populate the Modal with the returned JSON
	var result = processAjaxResponse(data);
	var modal_id = ehc_ce_withdraw_modal;
	if(result !== null) {
		if(result.length > 0) {
			// Replace values with values from result
			populateEventDetailWithServiceData(result[0].eventSession, modal_id);
			// Show the amount paid if set
			if(result[0].amountPaid !== undefined && result[0].amountPaid !== "") {
				jQuery("#"+modal_id).find("[data-enrollment-refund]").text(result[0].amountPaid);
			} else {
				jQuery(".refund-message").hide();
			}
			// Handle the withdraw action
			jQuery("#ce-execute-withdraw").on("click", function() {
				var first_name = jQuery("#ehc_ce_withdraw_first_name").val();
				var last_name = jQuery("#ehc_ce_withdraw_last_name").val();
				var conf_num = jQuery("#ehc_ce_withdraw_confirmation_number").val();			
			
				// Call Withdraw
				executeWithdrawal(first_name,last_name,conf_num, handleWithdrawResponse);
			});

			// Show the Modal!!
			jQuery("#"+modal_id).modal('show');
		} else {
			// No results were returned
			handleAjaxError(null, "No results were returned for that search.");
		}
	}
}

function showEnrollmentModal(data) {
	// Populate the Modal with the returned JSON
	var result = processAjaxResponse(data);
	var modal_id = "ce-modal-get-enrollment";
	if(result !== null) {
		if(result.length > 0) {
			// Replace values with values from result
			populateEventDetailWithServiceData(result[0].eventSession, modal_id);

			// Show the Modal!!
			jQuery("#"+modal_id).modal('show');
		} else {
			// No results were returned
			handleAjaxError(null, "No results were returned for that search.");
		}
	}
}

//////////////////////////////////////////////////////////////////////
// AJAX Service calls
//////////////////////////////////////////////////////////////////////

// Function used to pull enrollment data
function getEnrollment(first_name, last_name, confirmation_number, callback) {
	var url = service_url + "?service=" + ehc_ce_service_enrollment_action
				+ "&" + ehc_ce_service_get_enroll_first_name + "=" + first_name
				+ "&" + ehc_ce_service_get_enroll_last_name + "=" + last_name
				+ "&" + ehc_ce_service_get_enroll_confirmation_num + "=" + confirmation_number;

	jQuery.get(url, function( data ) {
		// Call the callback if it's a function
		if(isFunction(callback)) {
			callback(data);
		}
	});
}

// Makes the call to do the withdrawal
function executeWithdrawal(first_name, last_name, confirmation_number, callback) {
	// Disable the enrollment button so it is not clicked again
	jQuery("#" + ehc_ce_withdraw_modal + " [type=button]").attr("disabled","disabled");
	var url = service_url + "?service=" + ehc_ce_service_withdraw_action
				+ "&" + ehc_ce_service_withdraw_first_name + "=" + first_name
				+ "&" + ehc_ce_service_withdraw_last_name + "=" + last_name
				+ "&" + ehc_ce_service_withdraw_confirmation_num + "=" + confirmation_number;

	jQuery.get(url, function( data ) {
		// Call the callback if it's a function
		if(isFunction(callback)) {
			callback(data);
		}
	});
}