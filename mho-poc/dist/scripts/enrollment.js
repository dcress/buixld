$(document).ready(function(){
  // set up flip action on click of request new account
  $('#login-modal .flip-item').on('click',function(e){
  $('.login-modal-text').hide('fast');
  //$('.login-modal-text').slideUp();
  $('#login-modal, #request-account-modal').addClass('flip');
  e.preventDefault();
  });
  $('#request-account-modal .flip-item-back').on('click',function(e){
      $('.login-modal-text').show('fast');
      //$('.login-modal-text').slideDown();
      $('#login-modal, #request-account-modal').removeClass('flip');
       //$('.login-modal-text').fadeIn('slow');
      e.preventDefault();
  });

  //setup flip action on click of terms and conditions on create account modal
  $('#request-account-modal .flip-terms').on('click',function(e){
  $('#request-account-modal, #terms-modal').removeClass('flip');
  e.preventDefault();
  });

  $('#terms-modal .flip-terms-back').on('click',function(e){
  $('#request-account-modal, #terms-modal').addClass('flip');
  e.preventDefault();
  });

  //setup flip action on click of trouble logging in
  $('#login-modal .flip-login').on('click',function(e){
    //$('.login-modal-text').removeClass('show').addClass('hide');
    $('.login-modal-text').hide('fast');
    $('#login-modal, #login-trouble-modal').addClass('flip');
  e.preventDefault();
  });
  $('#login-trouble-modal .flip-login-back').on('click',function(e){
    //$('.login-modal-text').removeClass('hide').addClass('show');

    $('.login-modal-text').show('fast');
    $('#login-modal, #login-trouble-modal').removeClass('flip');
  e.preventDefault();
  });

  /* iCheck feature*/
  $('#terms-agree').on('ifChecked', function(event){
    $('#terms').iCheck('check');
  });

  $('#terms').on('ifChecked', function(event){
      $('#terms-agree').iCheck('check');
  });

  $('#terms-agree').on('ifUnchecked', function(event){
    $('#terms').iCheck('uncheck');
  });

  $('#terms').on('ifUnchecked', function(event){
      $('#terms-agree').iCheck('uncheck');
  });



  //scroll to top of page when clicking "back to home"
  $('#back-to-login').click(function(){
    window.scrollTo(0,0);
  });



  /*-----------------------------------
  ------- Enrollment validation ------
  -----------------------------------*/

  $('#login-button').click(function(){
    var inputVal = $('#username').val();

    if (inputVal == 'sjenkins') {
      //window.location='./home/';
    } else{
      $('#username').addClass('error');
      return false;
    };
  });


});
