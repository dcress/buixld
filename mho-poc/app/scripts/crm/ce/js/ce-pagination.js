// CE CRM Module - Pagination JavaScript

////////////////////////////////////////////////////////////////////////
/////// PAGINATION CODE ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Used to show the correct pages
function showPages(items, selected_page, per_page) {

	// Using the per page, hide all elements not in the current page
	var number_of_items = items.length;
	var last_page = Math.ceil(number_of_items / per_page);

	// Only have pages if there are more items than the number per page
	if(number_of_items > per_page) {
		var current_page = 1;
		var current_item = 0;
		while(current_item < items.length) {
			if(current_page === selected_page) {
				items[current_item].style.display = "block";
			} else {
				items[current_item].style.display = "none";
			}
			// Check if on a new page
			if((current_item % per_page) === per_page - 1) {
				current_page++;
			}
			// Increment current item before looping
			current_item++;
		}
	} else {
		// There are fewer items than the number per page, reset so ALL items are visible
		for(var i = 0; i < items.length; i++) {
			items[i].style.display = "block";
		}
	}
}

// Calculates the pagination navigation
function setupPaginationNavigation(selected_page, number_of_items, per_page) {

	var pagination_html = "";

	// Only add pagination if more items than the per page
	if(number_of_items > per_page) {
		// pagination variables
		var total_pages_shown = 2; // total extra pages to show in the navigation around the current page
		var last_page = Math.ceil(number_of_items / per_page);
		var selected_page = parseInt(selected_page);
		var go_to_first = "<li><a onclick='changePage(1);return false;'><span>&lt;</span></a></li>";
		var go_to_last = "<li><a onclick='changePage(" + last_page + ");return false;'><span>&gt;</span></a></li>";

		// build the pagination
		pagination_html = "<li><span>" + selected_page + "</span></li>";
		if(last_page >= selected_page) {
			// This is good, it means that the selected page isn't greater than our last page
			if(selected_page === 1 && selected_page !== last_page) {
				// first page
				var page_count = 0;
				var page_item = 2;
				while(page_item <= last_page && page_count < total_pages_shown) {
					var pagination_html = pagination_html + "<li><a onclick='changePage(" + page_item + ");return false;'><span>" + page_item + "</span></a></li>";
					page_count++;
					page_item++;
				}
				pagination_html = pagination_html + go_to_last;

			} else if(selected_page === last_page) {
				// last page
				var page_count = 0;
				var page_item = last_page - 1;
				while(page_item > 0 && page_count < total_pages_shown) {
					var pagination_html = "<li><a onclick='changePage(" + page_item + ");return false;'><span>" + page_item + "</span></a></li>" + pagination_html;
					page_count++;
					page_item--;
				}
				pagination_html = go_to_first + pagination_html;

			} else {
				// somewhere in the middle, show 1-2 on both end
				var pre_page_count = 0;
				var post_page_count = 0;

				// add pages before current page
				var page_item = selected_page - 1;
				while(page_item > 0 && pre_page_count < total_pages_shown) {
					var pagination_html = "<li><a onclick='changePage(" + page_item + ");return false;'><span>" + page_item + "</span></a></li>" + pagination_html;
					pre_page_count++;
					page_item--;
				}

				// add pages after current page
				var page_item = selected_page + 1;
				while(page_item <= last_page && post_page_count < total_pages_shown) {
					var pagination_html = pagination_html + "<li><a onclick='changePage(" + page_item + ");return false;'><span>" + page_item + "</span></a></li>";
					post_page_count++;
					page_item++;
				}

				pagination_html = go_to_first + pagination_html + go_to_last;
			}
		}
	} else {
		pagination_html = "<li><span>1</span></li>";
	}

	// Add pagination HTML to sections
	var pagination_sections = jQuery("#crm-pagination .pagination");
	for(var i = 0; i < pagination_sections.length; i++) {
		pagination_sections[i].innerHTML = pagination_html;
	}
}

// Initially used to setup pages and pagination
function setupPagination(per_page) {
	// Get events to paginate
	var events = jQuery(event_selector);
	var per_page = parseInt(per_page);

	// Show pages and setup pagination
	showPages(events,1,per_page);
	setupPaginationNavigation(1,events.length,per_page);
}

// calls shows the selected page and recalculates the pagination navigation
function changePage(page_number) {
	var page_number = parseInt(page_number);
	var events = jQuery(event_selector);

	var number_of_items = events.length;
	var per_page = getPerPage();

	// Only need to worry about pagination if there are more events than the per_page value
	if(number_of_items <= per_page) {
		per_page = number_of_items;
	}
	if(number_of_items >= per_page) {
		showPages(events, page_number, per_page);
		setupPaginationNavigation(page_number, number_of_items, per_page);
	}

	// Scroll to the top
	scrollToTop(event_container);
	// Reset tooltips
	$('[data-toggle="tooltip"]').tooltip({'placement': 'bottom'});
}

// resets results back to page 1 when number of results is changed
function changeNumberPerPage(dropdown) {
	changePage(1);
}
