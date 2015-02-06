// CE CRM Module - Utility JavaScript

//////////////////////////////////////////////////////////////////////
// Truncation on result description
function truncateResultDesc() {
	// Truncate summary description in results
	var truncateElements = $('.ce-result-description');
	// Set the character limit to truncate
	var truncateLength = 200;
    
	truncateElements.each(function(){
		var t = $(this).text();
		if(t.length < truncateLength) return;
        
		$(this).html(
			t.slice(0,truncateLength)+'<span>... </span>'
		);
	}); 
}

//////////////////////////////////////////////////////////////////////
// Timer
function printTime(message) {
	var currentdate = new Date();
	console.log(message + " - " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds());
}


//////////////////////////////////////////////////////////////////////
// Add to Calendar Functionality
// TODO: 
function addToCalendar() {
	
}

//////////////////////////////////////////////////////////////////////
// This function scrolls the desired id to the top of the page
function scrollToTop(target) {
	$target = $(target);
	$('html, body').stop().animate({
			'scrollTop': $target.offset().top
	}, 500, 'swing', function () {
			window.location.hash = target;
	});	
}

//////////////////////////////////////////////////////////////////////
// This function retrieves a list of facilities by the chosen market
function getFacilitiesByMarket(market, callback) {
	var url = service_url + "?service=" + ehc_ce_service_facilities_action
				+ "&" + ehc_ce_service_region + "=" + market;
	jQuery.get(url, function( data ) {
		// Call the callback if it's a function
		if(isFunction(callback)) {
			callback(data);
		}
	});
}

//////////////////////////////////////////////////////////////////////
// Clears all error messages
function clearErrorMessages() {
	document.getElementById(error_message_wrap_id).innerHTML = "";
}

//////////////////////////////////////////////////////////////////////
// Posts an Error Message
function postErrorMessage(message) {
	var new_item = document.createElement("div");
	new_item.className = 'error-message container';
	var new_item_error_icon = document.createElement("i");
	new_item_error_icon.className = 'error-icon icon-bell-alt';
	new_item.appendChild(new_item_error_icon);
	var new_item_error_message = document.createElement("span");
	new_item_error_message.innerHTML = message;
	new_item.appendChild(new_item_error_message);
	document.getElementById(error_message_wrap_id).appendChild(new_item);
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

//////////////////////////////////////////////////////////////////////
// Helper function that converts strings to boolean
function stringToBoolean(string) {
	switch(string.toLowerCase()){
		case "true": case "yes": case "1": return true;
		case "false": case "no": case "0": case null: return false;
		default: return Boolean(string);
	}
}

//////////////////////////////////////////////////////////////////////
// Helper function that checks if the passed data is actually JSON
function isJSON(data) {
	var IS_JSON = true;
	try {
		var json = jQuery.parseJSON(data);
	} catch(err) {
		IS_JSON = false;
	}
	return IS_JSON;
}

//////////////////////////////////////////////////////////////////////
// Tests to see if passed value is a function
function isFunction(possibleFunction) {
  return (typeof(possibleFunction) == typeof(Function));
}

//////////////////////////////////////////////////////////////////////
// Process EHC AJAX - returns an object of .result, .statusCode and .message
function processAjaxResponse(data) {
	// Check for errors
	if(data !== null && data !== undefined) {
		if(data.message === service_success && data.statusCode === service_success_code) {
			// Success, parse the result
			if(data.result !== undefined && data.result !== null) {
				return data.result;
			} else {
				// No results were returned
				handleAjaxError(null, "No results were returned for that search.");
			}
		} else {
			// Error occurred
			handleAjaxError(data, "Unfortunately, we are having some trouble with our service.");
		}
	} else {
		// No response
		handleAjaxError(null, "Unfortunately, we were unable to connect to our service.");
	}
	return null;
}

//////////////////////////////////////////////////////////////////////
// Error occurred, post the friendly message from the dotCMS Plugin
// or if no response was recieved, post the alternate error message
function handleAjaxError(data, alternate_error_message) {
	if(data !== null && data !== undefined
			&& data.message !== null && data.message !== undefined && data.message !== "") {
		postErrorMessage(data.message);
	} else {
		// Response did not get back from plugin
		var error_message = alternate_error_message;
		if(error_phone !== undefined && error_phone !== "") {
			error_message = error_message + ". For help, please call: " + error_phone;
		}
		postErrorMessage(error_message);
	}
	// Error occurred, return false
	return false;
}

//////////////////////////////////////////////////////////////////////
// Returns the 'per page' value if set (if not returns default of 5)
function getPerPage() {
	var per_page_select = document.getElementById("select-results");
	var per_page = per_page_select.options[per_page_select.selectedIndex].value;
	var total_events = jQuery(event_selector).length;
	if(per_page === undefined || per_page === null || per_page === 0 || per_page === "") {
		per_page = 5;
	} else {
		per_page = parseInt(per_page);
	}
	return per_page;
}

//////////////////////////////////////////////////////////////////////
// Populates the Event Detail Modal with a session and parent event from the service
function populateEventDetailWithServiceData(session, modal_id) {
	// Clear modal first
	clearEventDetailFields(modal_id);
	
	// Setup address information
	var has_screenings = false;
	var session_address = "";
	var google_map_query = "";
	var start_date = "";
	if(session.screenings !== undefined && session.screenings.length > 0) {
		has_screenings = true;
		session_address = session.screenings[0].locationStreetAddress + " " + session.screenings[0].locationCity + " " + session.screenings[0].locationState + " " + session.screenings[0].locationZipCode;
		if(session.screenings[0].locationLat && session.screenings[0].locationLat != "") {
			google_map_query = session.screenings[0].locationLat + "," + session.screenings[0].locationLong;
		} else {
			google_map_query = encodeURIComponent(session_address);
		}
		start_date = session.screenings[0].startDateTime;
	} else {
		// No screenings, Attempt to get from session
		session_address = session.locationStreetAddress + " " + session.locationCity + " " + session.locationState + " " + session.locationZipCode;
		if(session.locationLat !== undefined && session.locationLat != "") {
			google_map_query = session.locationLat + "," + session.locationLong;
		} else {
			google_map_query = encodeURIComponent(session_address);
		}
		start_date = session.occurrences[0].startDateTime;
	}
	var google_map_url = "http://maps.google.com/?q=" + google_map_query;	
	
	// Date manipulation - format 2014-05-13T06:00 
	var parsed_date = moment(start_date,"YYYY-MM-DDTHH:mm");
	var month = parsed_date.format("MMM");
	var date = parsed_date.date();
	var start_time = parsed_date.format("h:mm A");
	
	// Hide unnecessary fields
	jQuery("#"+modal_id + " .ce-result-cta").hide();
	jQuery("#"+modal_id + " .ce-result-time").hide();
	
	// Set global vars
	ehc_ce_transaction_session_id = session.sessionId;
	
	// Populate fields - classes
	jQuery("#"+modal_id + " .ce-result-description").html(session.parentEvent.eventDescription);

	// Populate fields - data attributes
	jQuery("#"+modal_id).find("[data-event-name]").text(session.parentEvent.eventName);
	if(session.parentEvent.eventClassType !== undefined && session.parentEvent.eventClassType !== "") {
		jQuery("#"+modal_id).find("[data-event-classtype]").text(session.parentEvent.eventClassType);
	} else {
		jQuery("#"+modal_id + " .ce-result-type").hide();
	}
	jQuery("#"+modal_id).find("[data-session-location-name]").text(session.locationName);
	jQuery("#"+modal_id).find("[data-session-instructor]").text(session.instructorName);
	jQuery("#"+modal_id).find("[data-session-memo]").text(session.sessionMemo);
	jQuery("#"+modal_id).find("[data-session-refund-policy]").text(session.refundPolicy);
	jQuery("#"+modal_id).find("[data-session-available]").text(session.available);
	jQuery("#"+modal_id).find("[data-session-registration-cost]").text(session.registrationCost);
	jQuery("#"+modal_id).find("[data-event-phone-number]").text(session.parentEvent.eventEnrollmentPhoneNumber);

	// Date/time
	jQuery("#"+modal_id).find("[data-session-start-month]").text(month);
	jQuery("#"+modal_id).find("[data-session-start-day]").text(date);
	// Always show start time - in an enrollment, you only have 1 session/screening
	jQuery("#"+modal_id).find("[data-session-start-time]").text(start_time);

	// distance
	if(session.distance !== undefined && session.distance !== "") {
		jQuery("#"+modal_id).find("[data-event-distance]").text(session.distance);
	} else {
		jQuery("#" + modal_id + " .event-session-distance").hide();
	}
	
	// location
	jQuery("#"+modal_id).find("[data-session-location-address]").text(session_address);
	jQuery("#"+modal_id + " .event-session-map").attr("href",google_map_url);	
	
	// Truncate the description
	truncateResultDesc();
}

//////////////////////////////////////////////////////////////////////
// Populates the Event Detail Modal with data from the result item
function populateEventDetailWithData(result_item_id, modal_id) {
	// Clear modal first
	clearEventDetailFields(modal_id);
	
	// Populate fields
	var has_screenings = jQuery("#"+result_item_id).data("session-has-screenings");
	jQuery("#"+modal_id).find("[data-event-name]").text(jQuery("#"+result_item_id).find("[data-event-name]").data("event-name"));
	jQuery("#"+modal_id).find("[data-event-classtype]").text(jQuery("#"+result_item_id).find("[data-event-classtype]").data("event-classtype"));
	jQuery("#"+modal_id).find("[data-session-location-name]").text(jQuery("#"+result_item_id).find("[data-session-location-name]").data("session-location-name"));
	jQuery("#"+modal_id).find("[data-session-instructor]").text(jQuery("#"+result_item_id).data("session-instructor"));
	jQuery("#"+modal_id).find("[data-session-memo]").html(jQuery("#"+result_item_id).data("session-memo"));
	jQuery("#"+modal_id).find("[data-session-refund-policy]").html(jQuery("#"+result_item_id).data("session-refund-policy"));
	jQuery("#"+modal_id).find("[data-session-available]").text(jQuery("#"+result_item_id).find("[data-session-available]").data("session-available"));
	jQuery("#"+modal_id).find("[data-session-registration-cost]").text(jQuery("#"+result_item_id).find("[data-session-registration-cost]").data("session-registration-cost"));
	jQuery("#"+modal_id).find("[data-session-start-month]").text(jQuery("#"+result_item_id).find("[data-session-start-month]").data("session-start-month"));
	jQuery("#"+modal_id).find("[data-session-start-day]").text(jQuery("#"+result_item_id).find("[data-session-start-day]").data("session-start-day"));
	jQuery("#"+modal_id).find("[data-session-enrollment-status]").text(jQuery("#"+result_item_id).find("[data-session-enrollment-status]").data("session-enrollment-status"));
	jQuery("#"+modal_id).find("[data-session-start-time]").text(jQuery("#"+result_item_id).find("[data-session-start-time]").data("session-start-time"));
	jQuery("#"+modal_id).find("[data-event-distance]").text(jQuery("#"+result_item_id).find("[data-event-distance]").data("event-distance"));
	jQuery("#"+modal_id).find("[data-session-location-address]").text(jQuery("#"+result_item_id).find("[data-session-location-address]").data("session-location-address"));
	jQuery("#"+modal_id).find("[data-event-description]").html(jQuery("#"+result_item_id).data("event-description"));

	// Special case fields
	jQuery("#"+modal_id + " .ce-result-description").html(jQuery("#"+result_item_id).data("event-description"));
	jQuery("#"+modal_id + " .event-session-map").attr("href",jQuery("#"+result_item_id + " .event-session-map").attr("href"));
	jQuery("#"+modal_id + " .ce-result-cta a").attr("href",jQuery("#"+result_item_id + " .ce-result-cta a").attr("href"));
	jQuery("#"+modal_id).find("[data-session-start-and-end-datetime]").html(jQuery("#"+result_item_id).find("[data-session-start-and-end-datetime]").data("session-start-and-end-datetime"));
	jQuery("#"+modal_id).find("[data-event-phone-number]").text(jQuery("#"+result_item_id).data("event-phone"));

	// Screening vs Occurrence Specific
	if(has_screenings === "true") {
		jQuery("#"+modal_id).find("[data-session-dynamic-tab-label]").hide();
	} else {
		// Setup occurrences
		jQuery("#"+modal_id).find("[data-session-dynamic-tab-label]").text("Session Occurrences");
		var occurrences = jQuery("#"+result_item_id).data("session-occurrences");
		if(occurrences !== undefined && occurrences !== "") {
			var occurrence_html = "<ul>";
			for(var i = 0; i < occurrences.length; i++) {
				var occurrence = occurrences[i];
				var start_date = moment(occurrence.startDateTime,"YYYY-MM-DDTHH:mm");
				start_date = start_date.format("MMMM Do YYYY, h:mm a");
				var end_date = moment(occurrence.endDateTime,"YYYY-MM-DDTHH:mm")
				end_date = end_date.format("h:mm a");
				if(occurrence_html === "") {
					occurrence_html	= "<li>" + start_date + " - " + end_date + "</li>";
				} else {
					occurrence_html	= occurrence_html + "<li>" + start_date + " - " + end_date + "</li>";
				}
			}
			occurrence_html + occurrence_html + "</li>";
			jQuery("#"+modal_id + " #dynamic-items").html(occurrence_html);
		} else {
			// No occurrences available, hide tab
			jQuery("#"+modal_id).find("[data-session-dynamic-tab-label]").hide();
		}
	}

	// Truncate the description
	truncateResultDesc();
}

//////////////////////////////////////////////////////////////////////
// Clears the modal fields before populating them
function clearEventDetailFields(modal_id) {	
	// for withdraw and getEnrollment - modal_id = ce-modal-withdrawal and ce-modal-get-enrollment
	// show fields
	jQuery("#"+modal_id + " .event-session-distance").show();
	jQuery("#"+modal_id + " .ce-result-type").show();
	jQuery("#"+modal_id).find("[data-session-dynamic-tab-label]").show();

	// Set values to blank before setting again
	jQuery("#"+modal_id + " .ce-result-description").html("");
	jQuery("#"+modal_id).find("[data-session-memo]").html("");
	jQuery("#"+modal_id).find("[data-session-refund-policy]").html("");
	jQuery("#"+modal_id).find("[data-event-name]").text("");
	jQuery("#"+modal_id).find("[data-event-classtype]").text("");
	jQuery("#"+modal_id).find("[data-session-location-name]").text("");
	jQuery("#"+modal_id).find("[data-session-instructor]").text("");
	jQuery("#"+modal_id).find("[data-session-available]").text("");
	jQuery("#"+modal_id).find("[data-session-registration-cost]").text("");
	jQuery("#"+modal_id).find("[data-session-start-month]").text("");
	jQuery("#"+modal_id).find("[data-session-start-day]").text("");
	jQuery("#"+modal_id).find("[data-session-start-time]").text("");
	jQuery("#"+modal_id).find("[data-event-distance]").text("");
	jQuery("#"+modal_id).find("[data-session-location-address]").text("");
	jQuery("#"+modal_id + " .event-session-map").attr("href","");	
	jQuery("#"+modal_id).find("[data-session-enrollment-status]").text("");
	jQuery("#"+modal_id + " .ce-result-cta a").attr("href","");
	jQuery("#"+modal_id).find("[data-session-start-and-end-datetime]").html("");
	jQuery("#"+modal_id).find("[data-event-phone-number]").text("");
	jQuery("#"+modal_id).find("[data-session-dynamic-tab-label]").text("");
	jQuery("#"+modal_id).find("[data-event-description]").html("");
}