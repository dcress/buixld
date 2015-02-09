// Avoid `console` errors in browsers that lack a console.
(function() {
		var method;
		var noop = function () {};
		var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
				method = methods[length];

				// Only stub undefined methods.
				if (!console[method]) {
						console[method] = noop;
				}
		}
}());


/*
 * JVFloat.js
 * modified by Colin Ambrose on: 02/03/2014 - MDY (US)
 */
// Test for placeholder support
$.support.placeholder = (function () {
    var i = document.createElement('input');
    return 'placeholder' in i;
})();

(function($) {
	'use strict';

	// Init Plugin Functions
	$.fn.jvFloat = function() {

        // Do we have placeholder support
        
		// Check input type - filter submit buttons.
		return this.filter('input:not([type=submit]), textarea').each(function() {
			// Wrap the input in div.jvFloat
			function createIdOnElement($el) {
			    var id = generateUIDNotMoreThan1million();
				$el.prop('id', id);
				return id;
			}
            if($.support.placeholder) {			
                var $el = $(this)
				    .wrap('<div class=jvFloat>');
            }
            else{
                var $el = $(this)
				    .wrap('<div class=jvFloatie>');
            }
			var forId = $el.attr('id');
			if (!forId)
				forId = createIdOnElement($el);

			// Store the placeholder text in span.placeHolder
			// added `required` input detection and state
			var required = $el.attr('required') || '';
			var placeholder = $('<label class="placeHolder ' + required + '" for="' + forId + '">' + $el.attr('placeholder') + '</label>')
				.insertBefore($el);
			// checks to see if inputs are pre-populated and adds active to span.placeholder
			function setState() {
			    // change span.placeHolder to span.placeHolder.active
                placeholder.toggleClass('active', $el.val() !== '');
			}
			setState();
			$el.bind('keyup blur', setState);
			function generateUIDNotMoreThan1million() {
				var id = ('0000' + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4);
				if (!!$('#' + id).length){
					    return id;
			    }
			}
        });
	};
// Make Zeptojs & jQuery Compatible
})(window.jQuery || window.Zepto || window.$);
// end JVFloat plugin



// JWW START ON REGISTER VALIDATION PROCESS
// If you give required class to all required fields, you can pull all of those fields in 1 jQuery query
// var fields = jQuery("#event-registration-page-1 .required");
// for(int i = 0; i < fields.length; i++) {
//     CheckField(fields[i]);
// }
// // Check’s the fields
// function CheckField(field) {
//     var field_value = field.val();
//     if(field_value === null || field_value === undefined || field_value === "") {
//         return false;
//     }
//       // If you were to add a data-attr in HTML for the regex value, you could do something like this…
//     // var regex = field.attr("regex");
//     // if(regex !== "") {
//     //     // run regex
//     //     if(regex fails) {
//     //     return false;
//     //     }
//     // }
// }

// need to check/validate each registration page separately when transitioning to the next


(function() {
		// REGISTER PROGRESS TRANSITION
		var current_fs, next_fs, previous_fs; //fieldsets
		var left, opacity, scale;             //fieldset properties which we will animate
		var animating;                        //flag to prevent quick multi-click glitches

		// $('#progress-step-1').click(function(){
		//     // $('html, body').animate({ scrollTop: 0 }, 300);
		//     $('#event-registration-page-1').show();

		// });

		// var current_index = 0;
		// var pages = $('#ce-reg-form fieldset');     // store panes collection


		var register_next = function(){
				$('html, body').animate({ scrollTop: 200 }, 300);

				if(animating) return false;
				animating = true;

				current_fs = $(this).parent();
				next_fs = $(this).parent().next();
				// console.log(next_fs);

				//activate next step on progressbar using the index of next_fs
				$('.ce-progress-bar .btn-group span').eq($('fieldset').index(next_fs)).addClass('active');
				$('.ce-progress-bar .btn-group span i').eq($('fieldset').index(next_fs)).removeClass('fa-circle-o').addClass('fa-check-circle');

				// console.log(current_fs);

				//show the next fieldset
				next_fs.show();
				//hide the current fieldset with style
				current_fs.animate({opacity: 0}, {
						step: function(now, mx) {
								//as the opacity of current_fs reduces to 0 - stored in "now"
								//1. scale current_fs down to 80%
								scale = 1 - (1 - now) * 0.2;
								//2. bring next_fs from the right(50%)
								left = (now * 50)+'%';
								//3. increase opacity of next_fs to 1 as it moves in
								opacity = 1 - now;
								current_fs.css({'transform': 'scale('+scale+')'});
								next_fs.css({'left': left, 'opacity': opacity});
						},
						duration: 800,
						complete: function(){
								current_fs.hide();
								animating = false;
						},
						//this comes from the custom easing plugin
						easing: 'easeInOutBack'
				});
				return false;
		};

		var register_previous = function(){
				$('html, body').animate({ scrollTop: 200 }, 300);

				if(animating) return false;
				animating = true;

				current_fs = $(this).parent();
				previous_fs = $(this).parent().prev();

				//de-activate current step on progressbar
				$('.ce-progress-bar .btn-group span').eq($('fieldset').index(current_fs)).removeClass('active');
				$('.ce-progress-bar .btn-group span i').eq($('fieldset').index(current_fs)).removeClass('fa-check-circle').addClass('fa-circle-o');

				// console.log(previous_fs.index());

				//show the previous fieldset
				previous_fs.show();
				//hide the current fieldset with style
				current_fs.animate({opacity: 0}, {
						step: function(now, mx) {
								//as the opacity of current_fs reduces to 0 - stored in "now"
								//1. scale previous_fs from 80% to 100%
								scale = 0.8 + (1 - now) * 0.2;
								//2. take current_fs to the right(50%) - from 0%
								left = ((1-now) * 50)+'%';
								//3. increase opacity of previous_fs to 1 as it moves in
								opacity = 1 - now;
								current_fs.css({'left': left});
								previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
						},
						duration: 800,
						complete: function(){
								current_fs.hide();
								animating = false;
						},
						//this comes from the custom easing plugin
						easing: 'easeInOutBack'
				});
				return false;
		};

		// loop through with eq/index and .parent to switch to next or prev panels

		// bind progress bar links
		// $('#progress-step-1').on('click', function(){
		//     //this doesn't work because class 'active' remains on prog elements after proceeding to next panel
		//     // if($('#progress-step-2 span').hasClass('active')){
		//         $('.fs-previous').trigger('click');
		//     // }
		//     return false;
		// });
		// $('#progress-step-2').on('click', function(){
		//     //this doesn't work because class 'active' remains on prog elements after proceeding to next panel
		//     // if($('#progress-step-3 span').hasClass('active')){
		//         $('.fs-previous').trigger('click');
		//     // }
		//     return false;
		// });


		// bind previous and next links
		$('.fieldset-next').click(register_next);
		$('.fieldset-previous').click(register_previous);
})();





