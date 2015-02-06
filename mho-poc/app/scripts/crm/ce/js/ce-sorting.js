// CE CRM Module - Sorting JavaScript

////////////////////////////////////////////////////////////////////////
/////// SORTING CODE ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function sortResults() {
	var sort_options = document.getElementById("select-sort");
	var sort_choice = sort_options.options[sort_options.selectedIndex].value;
	if(sort_choice != "") {

		// Process the sort based on the sort order
		var events = jQuery(event_selector);
		var event_list = new Array();
		for(var i = 0; i < events.length; i++) {
			if(events[i].getAttribute("data-event-name") !== undefined
					&& events[i].getAttribute("data-event-name") !== null
					&& events[i].getAttribute("data-event-name") !== "") {
				var event = new Object;
				event.html = events[i].outerHTML;
				event.id = events[i].id;			
				event.type = events[i].getAttribute("data-event-type");
				event.name = events[i].getAttribute("data-event-name");

				// Format for all dates from API should be: yyyy-mm-ddThh:mm
				event.time = events[i].getAttribute("data-event-time");

				// modify time to a comparable format
				var moment_date = moment(event.time,"YYYY-MM-DDThh:mm");
				event.milli = moment_date.valueOf();

				// Only get distance if set
				if(events[i].getAttribute("data-event-distance") !== null) {
					event.distance = events[i].getAttribute("data-event-distance");
				}
				// Add the event to the list				
				event_list.push(event);
			}
		}
		
		// List is built, now we sort and populate
		var sorted_event_list = new Array();
		switch(sort_choice) {
			case "type":
				event_list.sort(ehcCalendarCompareType);
				break;
			case "name":
				event_list.sort(ehcCalendarCompareName);
				break;
			case "distance":
				event_list.sort(ehcCalendarCompareDistance);
				break;
			default:
				// sort by date by default
				event_list.sort(ehcCalendarCompareMilli);
		}
		
		// Replace the current events with the sorted events
		var search_results = document.getElementById("ce-result-container");
		// Add the results to a string
		var sorted_HTML = "";
		for(var i = 0; i < event_list.length; i++) {
			sorted_HTML = sorted_HTML + event_list[i].html;
		}

		// Clear the HTML
		search_results.innerHTML = "";
		// Add results to the page
		search_results.innerHTML = sorted_HTML;
		
		// Rerun Pagination
		events = jQuery(event_selector);
		var per_page = getPerPage();
		
		// Show pages and setup pagination
		showPages(events,1,per_page);
		setupPaginationNavigation(1,events.length,per_page);

		// Reset tooltip
		$('[data-toggle="tooltip"]').tooltip({'placement': 'bottom'});
	}
}

//////////////////////////////////////////////////////////////////////
// Sorting Comparison Functions

// Compare names to sort
function ehcCalendarCompareName(a,b) {
	if(a.name < b.name) return -1;
	if(a.name > b.name) return 1;
	return 0;
}

// Compare class types to sort
function ehcCalendarCompareType(a,b) {
	if(a.type < b.type) return -1;
	if(a.type > b.type) return 1;
	return 0;
}

// Compare dates to sort
function ehcCalendarCompareMilli(a,b) {
	if(a.milli < b.milli) return -1;
	if(a.milli > b.milli) return 1;
	return 0;
}

// Compare distance to sort
function ehcCalendarCompareDistance(a,b) {
	if(a.distance < b.distance) return -1;
	if(a.distance > b.distance) return 1;
	return 0;
}
