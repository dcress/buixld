// CE CRM Module - HPS JavaScript

// Necessary for the HPS iFrame to post a message after making successful payment
if (!window.addEventListener) {
    window.attachEvent("onmessage", receiveMessage);
} else {
	window.addEventListener("message", receiveMessage, false);
}


// Receives the message from the HPS form's postMessage
function receiveMessage(e) {  
	
	// TODO: May need to check origin to make sure that our message is from the right place
	//if (event.origin !== "http://hpspublic.wheiisdev.hcadev.corpaddev.net")
	
	// Check to make sure data was returned
	if(e.data !== undefined || e.data !== null) {
		if(isJSON(e.data)) {
			// Hide iframe
			jQuery("#" + ehc_ce_intiate_enrollment_modal_id + " .modal-body").html("<div class='ehc-modal-message'>Finalizing Enrollment Registration...</div>");
			// Parse it
			var json = jQuery.parseJSON(e.data);
			// It's a valid response from HPS
			jQuery.each(json, function (key, value) {
				// Call finalize enrollment
				finalizeEnrollment(value);
			});
		} else {
			// Do nothing - there are multiple things that could be posting messages to browser and HPS wasn't verified
		}
	} else {
		// Do nothing - there are multiple things that could be posting messages to browser and HPS wasn't verified
	}
}