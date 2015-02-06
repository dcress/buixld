$(document).ready(function () {
    $('#login-modal').show();
    $('#request-account-modal').hide();
    $('#terms-modal').hide();
    $('#login-trouble-modal').hide();


    $('#login-modal .flip-item').on('click',function () {
        $('#login-modal').hide();
        $('#request-account-modal').show();
    });

    $('#login-modal .flip-item').on('click',function () {
        $('#login-modal').hide();
        $('#request-account-modal').show();
    });

    $('#request-account-modal .flip-item-back').on('click',function () {
        $('#login-modal').show();
        $('#request-account-modal').hide();
    });

    $('#request-account-modal .flip-terms').on('click',function () {
        $('#terms-modal').show();
        $('#request-account-modal').hide();
    });

    $('#terms-modal .flip-terms-back').on('click',function () {
        $('#terms-modal').hide();
        $('#request-account-modal').show();
    });


    $('#login-modal .flip-login').on('click',function () {
        $('#login-modal').hide();
        $('#login-trouble-modal').show();
    });

    $('#login-trouble-modal .flip-login-back').on('click',function () {
        $('#login-modal').show();
        $('#login-trouble-modal').hide();
    });

    $('#password').focus(
        function(){
            var pass = $('<input type="password" class="form-control" id="password" name="password" placeholder="Enter Password">');
            $(this).replaceWith(pass);
            pass.focus();
        }
    );

    //$('#newPassword').focus(
    //   function(){
    //        var newPassword = $('<input type="password" class="form-control password-tooltip" data-toggle="tooltip" id="newPassword" placeholder="Password" name="newPassword">');
    //        $(this).replaceWith(newPassword);
    //        newPassword.focus();
    //        $('.password-tooltip').tooltip('show');
    //    });

    //$('#confirm-password').focus(
    //    function(){
    //        var confirmPassword = $('<input type="password" class="form-control confirmPassword-tooltip" data-toggle="tooltip" id="confirm-password" placeholder="Confirm Password" name="confirmPassword">');
    //        $(this).replaceWith(confirmPassword);
    //        confirmPassword.focus();
    //        $('.confirmPassword-tooltip').tooltip('show');
    //    });

});
