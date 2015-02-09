
$(document).ready(function(){/* Patient Registration form validation */

		$('#patient-registration-wizard').validate({
				rules: {
					ssn: {
						required: true
					},
					mrn: {
						required: true
					}
				},
				messages: {
						/*foo: "An error message."*/
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

			$( "#patient-registration-wizard" ).submit(function( event ) {
						if($('#botTest').val() != '')
						 event.preventDefault();
		 });

			/* End of Patient Registration form validation */

});
