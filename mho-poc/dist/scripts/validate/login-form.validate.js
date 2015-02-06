
$(document).ready(function(){/* Login page vailidation */

    /* Initialize tooltip. Do not delete this */
    $('.static-modal-body').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body",
        animation: true,
        trigger: 'focus'
    });

    $('.remember-machine').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body",
        animation: true,
        placement: 'top'
    });

    /* Remember machine checkmark */
    $('.remember-machine a').on('click',function () {
        if($('.remember-machine .icheckbox_square-grey').hasClass('unchecked')) {
            $('.remember-machine .icheckbox_square-grey').removeClass('unchecked').addClass('checked');
        }
        else if($('.remember-machine .icheckbox_square-grey').hasClass('checked')) {
            $('.remember-machine .icheckbox_square-grey').removeClass('checked').addClass('unchecked');
        }
        else {
            $('.remember-machine .icheckbox_square-grey').addClass('checked');
        }
    });

    /* Login form validation */
    $('.login-trouble').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body",
        animation: true,
        placement: 'top'
    });

    /* Email address help text */
    $('.email-suggestion').hide();
    $('#email').on('blur', function() {
        $(this).mailcheck({
            //domains: domains,                       // optional
            //topLevelDomains: topLevelDomains,       // optional
            //distanceFunction: superStringDistance,  // optional
            suggested: function(element, suggestion) {
                $('.suggested-email').html(suggestion.full);
                $('.email-suggestion').show();
            },
            empty: function(element) {
                $('.suggested-email').html('');
                $('.email-suggestion').hide();
            }
        });
    });

    $('.suggested-email').on('click',function() {
        $('#email').val($('.suggested-email').html());
        $('.email-suggestion').hide();
    });
    /* End of email address help text */

    $('#Login-form').validate({
        rules: {
            username: {
                required: true
            },
            password: {
                required: true,
                password: false
            }
        },
        messages: {
            username: "Please enter your username",
            password: "Please enter your password"
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
            $(element).closest('.float-label').addClass('has-error');
            $(element).prev().prev('.placeHolder').addClass('hidden');
        },
        success: function(element) {
            element.closest('.float-label').removeClass('has-error');
            element.prev('.placeHolder').removeClass('hidden');
            element.closest('.float-label label.error').remove();
        }
    });

    $( "#Login-form" ).submit(function( event ) {
        if($('#botTest').val() != '')
            event.preventDefault();
    });
    /* End of Login form validation */

        $('#reset-password-form').validate({
        rules: {
            newPassword: {
                required: true,
                password: true,
                minlength: 7
            },
            confirmNewPassword: {
                required: true,
                equalTo: '#newPassword'
            }
        },
        messages: {
            newPassword: "Please enter a password",
            confirmNewPassword: "Passwords must match"
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
            $(element).closest('.float-label').addClass('has-error');
            $(element).prev().prev('.placeHolder').addClass('hidden');
        },
        success: function(element) {
            element.closest('.float-label').removeClass('has-error');
            element.prev('.placeHolder').removeClass('hidden');
            element.closest('.float-label label.error').remove();
        }
    });

    $('.username-tooltip').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body",
        animation: true,
        placement: 'top',
        trigger: 'focus',
        title: 'Username must be atleast 4 characters and no longer than 16 characters and may contain numbers or letters.'
    });

    $('.confirmEmail-tooltip').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body",
        animation: true,
        placement: 'top',
        trigger: 'focus',
        title: 'Email addresses must match'
        /*title: 'Confirm email address must match the email entered above'*/
    });

    $('.password-tooltip').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body",
        animation: true,
        placement: 'top',
        trigger: 'focus',
        html: 'false',
        title: '<div class="pwd-tooltip">Password must:' +
        '<ul>' +
        '<li>be at least 7 characters in length</li>' +
        '<li>be different from password in previous 12 months</li>'+
        '<li>include 3 of the following: uppercase, lowercase, numbers, special characters (space is not allowed).</li>' +
        '</ul>' +
        ' Password will expire if account isn’t accessed monthly during a 1 year period.</div>'
    });

    $('.confirmPassword-tooltip').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body",
        animation: true,
        placement: 'top',
        trigger: 'focus',
        html: 'false',
        title: 'Confirm password must match the password entered above'
    });
    /*
    title: '<div class="pwd-tooltip">Confirm Password must :' +
                   '<ul>' +
                    '<li>match the password entered above</li>' +
                    '<li>be at least 7 characters in length</li>' +
                    '<li>be different from password in previous 12 months</li>' +
                    '<li>include 3 of the following: uppercase, lowercase, numbers, special characters (space is not allowed).</li>' +
                    '</ul>' +
                    ' Password will expire if account isn’t accessed monthly during a 1 year period.</div>'
*/
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
                required: true,
                minlength: 4,
                maxlength: 16
            },
            newPassword: {
                required: true,
                password: true,
                minlength: 7
            },
            confirmPassword: {
                required: true,
                equalTo: '#newPassword'
            },
            terms: {
                required: true
            }
        },
        messages: {
            email: 'Please enter a valid email address',
            confirmEmail: 'Email addresses do not match',
            /*confirmEmail: 'Email and Confirm Email address fields should be same',*/
            username: 'Please enter a valid username',
            newPassword: 'Please enter a valid password',
            confirmPassword: 'Password and Confirm Password fields should match',
            terms: 'Please agree to the Terms and Conditions'
        },

        errorPlacement: function(error, element) {
            if(element.attr('name')=='terms') {
                $('#terms').on('ifUnchecked', function(event){
                    $('.terms-conditions > div,.terms-conditions a ').removeClass('white-text').addClass('red-text');
                });
            }
            else {
                error.insertBefore(element);
                $(element).closest('.float-label').addClass('has-error');
                $(element).prev().prev('.placeHolder').addClass('hidden');
            }
        },
        success: function(element) {
            element.closest('.float-label').removeClass('has-error');
            element.prev('.placeHolder').removeClass('hidden');
            element.closest('.float-label label.error').remove();
        }
    });

/* Prevent tooltips while Submit */
$('#newAccount-form').submit(function() {
    $(':focus').blur() //
});

$('input#terms').iCheck('check', function(){
    $('.terms-conditions > div,.terms-conditions a ').removeClass('red-text').addClass('white-text');
});

/* Makes terms and conditions text white when checked back after validation */
$('#terms').on('ifChecked', function(event){
    $('.terms-conditions > div,.terms-conditions a ').removeClass('red-text').addClass('white-text');
});

/* Makes terms and conditions text white when unchecked back after validation */
$('#terms').on('ifUnchecked', function(event){
    $('.terms-conditions > div,.terms-conditions a ').removeClass('white-text').addClass('red-text');
});

$( "#newAccount-form" ).submit(function( event ) {
    if($('#botTestAgain').val() != '')
        event.preventDefault();
});

/* End of Request New Account form validation */

/* Start of Login trouble form validation */
/* Email address help text */
$('.email-suggestion').hide();
$('#login-trouble-email').on('blur', function() {
    $(this).mailcheck({
        //domains: domains,                       // optional
        //topLevelDomains: topLevelDomains,       // optional
        //distanceFunction: superStringDistance,  // optional
        suggested: function(element, suggestion) {
            $('.suggested-email').html(suggestion.full);
            $('.email-suggestion').show();
        },
        empty: function(element) {
            $('.suggested-email').html('');
            $('.email-suggestion').hide();
        }
    });
});

$('.suggested-email').on('click',function() {
    $('#login-trouble-email').val($('.suggested-email').html());
    $('.email-suggestion').hide();
});
/* End of email address help text */
$('#login-trouble-form').validate({
    rules: {
        loginTroubleOptions: {
            required: true
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        loginTroubleOptions: "Please select an option",
        email: "Please enter a valid email address"
    },
    errorPlacement: function(error, element) {
        error.insertBefore(element);
        $(element).closest('.float-label').addClass('has-error');
        $(element).prev().prev('.placeHolder').addClass('hidden');
    },
    success: function(element) {
        element.closest('.float-label').removeClass('has-error');
        element.closest('.float-label label.error').remove();
        element.prev('.placeHolder').removeClass('hidden');
    }
});

$( "#login-trouble-form" ).submit(function( event ) {
    if($('#botTest').val() != '')
        event.preventDefault();
});
/* End of Login Trouble form validation */




});
