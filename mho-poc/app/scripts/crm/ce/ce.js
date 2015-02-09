function truncateResultDesc() {
	var e = $(".ce-result-description"),
		t = 200;
	e.each(function() {
		var e = $(this).text();
		e.length < t || $(this).html(e.slice(0, t) + "<span>... </span>")
	})
}

function printTime(e) {
	var t = new Date;
	console.log(e + " - " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds())
}

function addToCalendar() {}

function scrollToTop(e) {
	$target = $(e), $("html, body").stop().animate({
		scrollTop: $target.offset().top
	}, 500, "swing", function() {
		window.location.hash = e
	})
}

function getFacilitiesByMarket(e, t) {
	var a = service_url + "?service=" + ehc_ce_service_facilities_action + "&" + ehc_ce_service_region + "=" + e;
	jQuery.get(a, function(e) {
		isFunction(t) && t(e)
	})
}

function clearErrorMessages() {
	document.getElementById(error_message_wrap_id).innerHTML = ""
}

function postErrorMessage(e) {
	var t = document.createElement("div");
	t.className = "error-message container";
	var a = document.createElement("i");
	a.className = "error-icon icon-bell-alt", t.appendChild(a);
	var n = document.createElement("span");
	n.innerHTML = e, t.appendChild(n), document.getElementById(error_message_wrap_id).appendChild(t), document.body.scrollTop = document.documentElement.scrollTop = 0
}

function stringToBoolean(e) {
	switch (e.toLowerCase()) {
		case "true":
		case "yes":
		case "1":
			return !0;
		case "false":
		case "no":
		case "0":
		case null:
			return !1;
		default:
			return Boolean(e)
	}
}

function isJSON(e) {
	var t = !0;
	try {
		var a = jQuery.parseJSON(e)
	} catch (n) {
		t = !1
	}
	return t
}

function isFunction(e) {
	return typeof e == typeof Function
}

function processAjaxResponse(e) {
	if (null !== e && void 0 !== e)
		if (e.message === service_success && e.statusCode === service_success_code) {
			if (void 0 !== e.result && null !== e.result) return e.result;
			handleAjaxError(null, "No results were returned for that search.")
		} else handleAjaxError(e, "Unfortunately, we are having some trouble with our service.");
		else handleAjaxError(null, "Unfortunately, we were unable to connect to our service.");
	return null
}

function handleAjaxError(e, t) {
	if (null !== e && void 0 !== e && null !== e.message && void 0 !== e.message && "" !== e.message) postErrorMessage(e.message);
	else {
		var a = t;
		void 0 !== error_phone && "" !== error_phone && (a = a + ". For help, please call: " + error_phone), postErrorMessage(a)
	}
	return !1
}

function getPerPage() {
	var e = document.getElementById("select-results"),
		t = e.options[e.selectedIndex].value,
		a = jQuery(event_selector).length;
	return t = void 0 === t || null === t || 0 === t || "" === t ? 5 : parseInt(t)
}

function populateEventDetailWithServiceData(e, t) {
	clearEventDetailFields(t);
	var a = !1,
		n = "",
		s = "",
		r = "";
	void 0 !== e.screenings && e.screenings.length > 0 ? (a = !0, n = e.screenings[0].locationStreetAddress + " " + e.screenings[0].locationCity + " " + e.screenings[0].locationState + " " + e.screenings[0].locationZipCode, s = e.screenings[0].locationLat && "" != e.screenings[0].locationLat ? e.screenings[0].locationLat + "," + e.screenings[0].locationLong : encodeURIComponent(n), r = e.screenings[0].startDateTime) : (n = e.locationStreetAddress + " " + e.locationCity + " " + e.locationState + " " + e.locationZipCode, s = void 0 !== e.locationLat && "" != e.locationLat ? e.locationLat + "," + e.locationLong : encodeURIComponent(n), r = e.occurrences[0].startDateTime);
	var i = "http://maps.google.com/?q=" + s,
		o = moment(r, "YYYY-MM-DDTHH:mm"),
		d = o.format("MMM"),
		c = o.date(),
		u = o.format("h:mm A");
	jQuery("#" + t + " .ce-result-cta").hide(), jQuery("#" + t + " .ce-result-time").hide(), ehc_ce_transaction_session_id = e.sessionId, jQuery("#" + t + " .ce-result-description").html(e.parentEvent.eventDescription), jQuery("#" + t).find("[data-event-name]").text(e.parentEvent.eventName), void 0 !== e.parentEvent.eventClassType && "" !== e.parentEvent.eventClassType ? jQuery("#" + t).find("[data-event-classtype]").text(e.parentEvent.eventClassType) : jQuery("#" + t + " .ce-result-type").hide(), jQuery("#" + t).find("[data-session-location-name]").text(e.locationName), jQuery("#" + t).find("[data-session-instructor]").text(e.instructorName), jQuery("#" + t).find("[data-session-memo]").text(e.sessionMemo), jQuery("#" + t).find("[data-session-refund-policy]").text(e.refundPolicy), jQuery("#" + t).find("[data-session-available]").text(e.available), jQuery("#" + t).find("[data-session-registration-cost]").text(e.registrationCost), jQuery("#" + t).find("[data-event-phone-number]").text(e.parentEvent.eventEnrollmentPhoneNumber), jQuery("#" + t).find("[data-session-start-month]").text(d), jQuery("#" + t).find("[data-session-start-day]").text(c), jQuery("#" + t).find("[data-session-start-time]").text(u), void 0 !== e.distance && "" !== e.distance ? jQuery("#" + t).find("[data-event-distance]").text(e.distance) : jQuery("#" + t + " .event-session-distance").hide(), jQuery("#" + t).find("[data-session-location-address]").text(n), jQuery("#" + t + " .event-session-map").attr("href", i), truncateResultDesc()
}

function populateEventDetailWithData(e, t) {
	clearEventDetailFields(t);
	var a = jQuery("#" + e).data("session-has-screenings");
	if (jQuery("#" + t).find("[data-event-name]").text(jQuery("#" + e).find("[data-event-name]").data("event-name")), jQuery("#" + t).find("[data-event-classtype]").text(jQuery("#" + e).find("[data-event-classtype]").data("event-classtype")), jQuery("#" + t).find("[data-session-location-name]").text(jQuery("#" + e).find("[data-session-location-name]").data("session-location-name")), jQuery("#" + t).find("[data-session-instructor]").text(jQuery("#" + e).data("session-instructor")), jQuery("#" + t).find("[data-session-memo]").html(jQuery("#" + e).data("session-memo")), jQuery("#" + t).find("[data-session-refund-policy]").html(jQuery("#" + e).data("session-refund-policy")), jQuery("#" + t).find("[data-session-available]").text(jQuery("#" + e).find("[data-session-available]").data("session-available")), jQuery("#" + t).find("[data-session-registration-cost]").text(jQuery("#" + e).find("[data-session-registration-cost]").data("session-registration-cost")), jQuery("#" + t).find("[data-session-start-month]").text(jQuery("#" + e).find("[data-session-start-month]").data("session-start-month")), jQuery("#" + t).find("[data-session-start-day]").text(jQuery("#" + e).find("[data-session-start-day]").data("session-start-day")), jQuery("#" + t).find("[data-session-enrollment-status]").text(jQuery("#" + e).find("[data-session-enrollment-status]").data("session-enrollment-status")), jQuery("#" + t).find("[data-session-start-time]").text(jQuery("#" + e).find("[data-session-start-time]").data("session-start-time")), jQuery("#" + t).find("[data-event-distance]").text(jQuery("#" + e).find("[data-event-distance]").data("event-distance")), jQuery("#" + t).find("[data-session-location-address]").text(jQuery("#" + e).find("[data-session-location-address]").data("session-location-address")), jQuery("#" + t).find("[data-event-description]").html(jQuery("#" + e).data("event-description")), jQuery("#" + t + " .ce-result-description").html(jQuery("#" + e).data("event-description")), jQuery("#" + t + " .event-session-map").attr("href", jQuery("#" + e + " .event-session-map").attr("href")), jQuery("#" + t + " .ce-result-cta a").attr("href", jQuery("#" + e + " .ce-result-cta a").attr("href")), jQuery("#" + t).find("[data-session-start-and-end-datetime]").html(jQuery("#" + e).find("[data-session-start-and-end-datetime]").data("session-start-and-end-datetime")), jQuery("#" + t).find("[data-event-phone-number]").text(jQuery("#" + e).data("event-phone")), "true" === a) jQuery("#" + t).find("[data-session-dynamic-tab-label]").hide();
	else {
		jQuery("#" + t).find("[data-session-dynamic-tab-label]").text("Session Occurrences");
		var n = jQuery("#" + e).data("session-occurrences");
		if (void 0 !== n && "" !== n) {
			for (var s = "<ul>", r = 0; r < n.length; r++) {
				var i = n[r],
					o = moment(i.startDateTime, "YYYY-MM-DDTHH:mm");
				o = o.format("MMMM Do YYYY, h:mm a");
				var d = moment(i.endDateTime, "YYYY-MM-DDTHH:mm");
				d = d.format("h:mm a"), s = "" === s ? "<li>" + o + " - " + d + "</li>" : s + "<li>" + o + " - " + d + "</li>"
			}
			jQuery("#" + t + " #dynamic-items").html(s)
		} else jQuery("#" + t).find("[data-session-dynamic-tab-label]").hide()
	}
	truncateResultDesc()
}

function clearEventDetailFields(e) {
	jQuery("#" + e + " .event-session-distance").show(), jQuery("#" + e + " .ce-result-type").show(), jQuery("#" + e).find("[data-session-dynamic-tab-label]").show(), jQuery("#" + e + " .ce-result-description").html(""), jQuery("#" + e).find("[data-session-memo]").html(""), jQuery("#" + e).find("[data-session-refund-policy]").html(""), jQuery("#" + e).find("[data-event-name]").text(""), jQuery("#" + e).find("[data-event-classtype]").text(""), jQuery("#" + e).find("[data-session-location-name]").text(""), jQuery("#" + e).find("[data-session-instructor]").text(""), jQuery("#" + e).find("[data-session-available]").text(""), jQuery("#" + e).find("[data-session-registration-cost]").text(""), jQuery("#" + e).find("[data-session-start-month]").text(""), jQuery("#" + e).find("[data-session-start-day]").text(""), jQuery("#" + e).find("[data-session-start-time]").text(""), jQuery("#" + e).find("[data-event-distance]").text(""), jQuery("#" + e).find("[data-session-location-address]").text(""), jQuery("#" + e + " .event-session-map").attr("href", ""), jQuery("#" + e).find("[data-session-enrollment-status]").text(""), jQuery("#" + e + " .ce-result-cta a").attr("href", ""), jQuery("#" + e).find("[data-session-start-and-end-datetime]").html(""), jQuery("#" + e).find("[data-event-phone-number]").text(""), jQuery("#" + e).find("[data-session-dynamic-tab-label]").text(""), jQuery("#" + e).find("[data-event-description]").html("")
}
