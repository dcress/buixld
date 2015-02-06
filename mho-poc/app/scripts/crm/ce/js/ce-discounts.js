// CE CRM Module - Discount JavaScript

////////////////////////////////////////////////////////////////////////
/////// GET SESSION ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Function used to pull session data (optional employee id)
function getSession(session_id, empl_id, callback) {
	var url = service_url + "?service=" + ehc_ce_service_session_action
				+ "&" + ehc_ce_service_session_id + "=" + session_id;
	if(empl_id !== undefined && empl_id !== "") {
		url = url + "&" + ehc_ce_service_employee_id + "=" + empl_id;
	}
	
	// Make the request	
	jQuery.get(url, function( data ) {
		// Data returned is JSON from the Forge. Do something magical in the callback
		if(isFunction(callback)) {
			callback(data);
		}
	});
}

// Callback function that updates values based on the discount code
function processDiscountResponse(data) {
	var result = processAjaxResponse(data);	
	if (result !== undefined && result !== null) {
		// Get the session then the discounts and check vaues
		if(result.sessions !== undefined && result.sessions !== null && result.sessions.length > 0) {
			var session = result.sessions[0];
			var discounts = session.discounts;
			var new_discount = "";
			if(session.discountAmount !== undefined && session.discountAmount !== null && session.discountAmount !== ""
					&& discounts !== undefined && discounts !== null && discounts.length > 0) {
				new_discount = session.discountAmount;
				if(new_discount !== undefined && new_discount !== null && new_discount !== "") {
					// Compare and replace if necessary
					var current_discount = $("span[data-session-discount-amount]").html();
					var current_discount_value = parseInt(current_discount);
					var new_discount_value = parseInt(new_discount);
					if(current_discount_value < new_discount_value) {
						// Good news everyone!
						var amount_due = session.amountDue;
						var discount_title = "Promo Code: " + discounts[0].name;

						// Replace existing values (including the form fields)
						$("span[data-session-amount-due]").html(amount_due);
						$("span[data-session-amount-due-total").html(amount_due);
						$("span[data-session-discount-amount]").html(new_discount);

						// Tooltip - update tip title
						$(".ce-discount .tooltip-info").each(function() {
							$(this).attr("title",discount_title);
						});

						// Set the employee id field
						$("#"+ehc_ce_service_employee_id).val($("#" + ehc_ce_enroll_discount_value).val());
						
						// close modal
						jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('hide');
					} else {
						postErrorMessage("The code you entered does not increase the discount amount.");
						jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('hide');
					}
				} else {
					postErrorMessage("The code you entered does not seem to be a valid discount code.<span style='display:none'>The discount returned did not have a value on it.</span>");
					jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('hide');
				}
			} else {
				postErrorMessage("The code you entered does not seem to be a valid discount code.<span style='display:none'>No discounts were returned on that session.</span>");
				jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('hide');
			}	
		} else {
			postErrorMessage("Unfortunately we were unable to find a discount for this session.<span style='display:none'>No sessions were returned for that event.</span>");
			jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('hide');
		}
	} else {
		// error handled in process ajax response
		postErrorMessage("The discount code you entered does not appear to be valid.");
		jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('hide');
	}
}

////////////////////////////////////////////////////////////////////////
/////// DISCOUNT MODAL FUNCTIONALITY ///////////////////////////////////
////////////////////////////////////////////////////////////////////////
function showDiscountModal() {
	jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('show');
	jQuery("#" + ehc_ce_enroll_discount_modal_id + " [type=button]").removeAttr("disabled");
}

function applyDiscount() {
	// Clear errors if any
	jQuery("#" + ehc_ce_enroll_discount_modal_id + " [type=button]").attr("disabled","disabled");
	clearErrorMessages();
	
	// Attempt to get the value
	var discount_code = $("#" + ehc_ce_enroll_discount_value).val();
	if(discount_code !== undefined && discount_code !== "") {
		var session_id = $("#" + ehc_ce_service_session_id).val();
		if(session_id !== undefined && session_id !== "") {
			// Make the request
			getSession(session_id, discount_code, processDiscountResponse);
		} else {
			postErrorMessage("Unfortunately we were unable to find a discount for this session.<span style='display:none'>Unable to retrieve session id from the page.</span>");
			jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('hide');
		}
	} else {
		postErrorMessage("Please enter a discount code if you wish to apply it to your enrollment.<span style='display:none'>No discount code was entered in the input field.</span>");
		jQuery("#" + ehc_ce_enroll_discount_modal_id).modal('hide');
	}
}