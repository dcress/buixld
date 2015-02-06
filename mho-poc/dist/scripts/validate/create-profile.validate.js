
$(document).ready(function(){/* Create Profile form validation */

		/* Initialize tooltip. Do not delete this */
		$('#create-profile-form').tooltip({
							selector: "[data-toggle=tooltip]",
							container: "body",
							animation: true,
							trigger: 'focus'
			});

		// /* Login form validation */
		// $('.login-trouble').tooltip({
		// 		selector: "[data-toggle=tooltip]",
		// 		container: "body",
		// 		animation: true,
		// 		placement: 'top'
		// });

			/* Email address help text */
	// $('.email-suggestion').hide();
	// $('#email').on('blur', function() {
	// $(this).mailcheck({
	// 	//domains: domains,                       // optional
	// 	//topLevelDomains: topLevelDomains,       // optional
	// 	//distanceFunction: superStringDistance,  // optional
	// 	suggested: function(element, suggestion) {
	// 		$('.suggested-email').html(suggestion.full);
	// 		$('.email-suggestion').show();
	// 		},
	// 	empty: function(element) {
	// 		$('.suggested-email').html('');
	// 		$('.email-suggestion').hide();
	// 		}
	// 	});
	// });

	// $('.suggested-email').on('click',function() {
	// 		$('#email').val($('.suggested-email').html());
	// 		$('.email-suggestion').hide();
	// })

			$("#portal-search").validate({
			  rules: {
			    keywords: {
			      required: true,
			      minlength: 2
			    }
			  },
			  messages: {
			    name: {
			      required: "We need your email address to contact you",
			      minlength: jQuery.format("At least {0} characters required!")
			    }
			  }
			});

		$('#create-profile-form').validate({
				rules: {
                    username: {
                        required: true,
                        minlength: 4,
                        maxlength: 16
                    },
                    password: {
                        required: true,
                        password: true,
                        minlength: 7
                    },
                    confirmPassword: {
                        required: true,
                        equalTo: '#newPassword'
                    },
					firstname: {
						required: true
					},
					lastname: {
						required: true
					},
					date: {
						required: true
					},
					gender: {
						required: true
					},
					primaryphone: {
						required: true,
                        phoneUS: true
					},
					email: {
						required: true,
				        email: true
					},
					address: {
						required: true
					},
					city: {
						required: true
					},
					state: {
						required: true
					},
					zip: {
						required: true,
                        zipcodeUS: true
					}
				},
				messages: {
                    username: 'Please enter a valid username',
                    password: 'Please enter a valid password',
                    confirmPassword: 'Password and Confirm Password fields should match',
                    primaryphone: "Valid phone number is required.",
                    zip: "Valid Zip is required."
                },
				errorPlacement: function(error, element) {
						error.insertBefore(element);
						$(element).closest('.float-label').addClass('has-error');
			    },
				success: function(element) {
					element.closest('.float-label').removeClass('has-error');
					element.closest('.float-label label.error').remove();
				}
			});

			$( "#create-profile-form" ).submit(function( event ) {
						if($('#botTest').val() != '')
						 event.preventDefault();
		 });

			/* End of Create Profile form validation */

		$('.testy').tooltip({
				selector: '[data-toggle=tooltip]',
				container: 'body',
				animation: true,
				placement: 'top',
				trigger: 'focus',
				title: 'JPG, GIF, or PNG. Max size of 700K'
			})

		$('.username-tooltip').tooltip({
				selector: "[data-toggle=tooltip]",
				container: "body",
				animation: true,
				placement: 'right',
				trigger: 'focus',
				title: 'Username must be atleast 4 characters and no longer than 16 characters and may contain numbers or letters.'
			});

		$('.confirmEmail-tooltip').tooltip({
				selector: "[data-toggle=tooltip]",
				container: "body",
				animation: true,
				placement: 'right',
				trigger: 'focus',
				title: 'Confirm email address must match the email entered above'
			});

		$('.password-tooltip').tooltip({
				selector: "[data-toggle=tooltip]",
				container: "body",
				animation: true,
				placement: 'right',
				trigger: 'focus',
				html: 'false',
				title: '<div class="pwd-tooltip">Password must be at least:' +
									 '<ul>' +
										'<li>7 characters in length</li>' +
										'<li>be different from password in previous 12 months</li>'+
										'<li>include 3 of the following: uppercase, lowercase, numbers, special characters (space is not allowed).</li>' +
										'</ul>' +
										' Password will expire if account isn’t accessed monthly during a 1 year period.</div>'
			});

		 $('.confirmPassword-tooltip').tooltip({
				selector: "[data-toggle=tooltip]",
				container: "body",
				animation: true,
				placement: 'right',
				trigger: 'focus',
				title: 'Confirm password must match the password entered above'
			});
			/* Request New Account form validation */
			$('#newAccount-form').validate({
					rules: {
						email: {
							required: true,
							email: true
						},
						confirmEmail: {
								required: true,
								equalTo: '#email'
						},
						username: {
								required: true
						},
						password: {
								required: true,
								password: true
						},
						confirmPassword: {
								required: true,
								equalTo: '#newPassword'
						}
					},
					messages: {
						email: 'Please enter a valid email address',
						confirmEmail: 'Email and Confirm Email address fields should be same',
						username: 'Please enter a valid username',
						password: 'Please enter a valid password',
						confirmPassword: 'Password and Confirm Password fields should be same',
						terms: 'Please agree to the Terms and Conditions'
					},

					errorPlacement: function(error, element) {
						if(element.attr('name')=='terms') {
							$('.terms-conditions > div,.terms-conditions a ').removeClass('white-text').addClass('red-text');
							}
						else {
							error.insertBefore(element);
							$(element).closest('.float-label').addClass('has-error');
							}
						},
					success: function(element) {
							 element.closest('.float-label').removeClass('has-error');
								element.closest('.float-label label.error').remove();
					}
			});
			/* End of Login form validation */

});
