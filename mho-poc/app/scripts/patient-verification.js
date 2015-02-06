// Smart Wizard for Patient Registration form          
$('#patient-verification-wizard').smartWizard({
    onShowStep:showAStepCallback,
    onLeaveStep:leaveAStepCallback,
    onFinish:onFinishCallback
});

//$('.buttonCancel').attr("href","/patient/profile-summary/");

$('.buttonCancel').click(function(){
  $('.cancel-verification-modal').modal('show');
});


// Add class to Action bar buttons equal to step number
function showAStepCallback(obj) {
    var currentStep = obj.attr('rel');
    $('.actionBar .btn').addClass('btn-step-'+currentStep);
    // Issue #58 on SW github
    if (currentStep < '2') {
        $('.buttonFinish').addClass('buttonDisabled');
    }

    //$('a.buttonNext.btn-step-2').addClass('buttonDisabled');
    $('a.buttonNext.btn-step-2').click(function(e) { 
        e.preventDefault();
    });

}
// Reset the classes after leaving step
function leaveAStepCallback(obj) {
    var currentStep = obj.attr('rel');
    $('.actionBar .btn').removeClass('btn-step-'+currentStep);
    return validateSteps(currentStep);
}

function onFinishCallback(objs, context){
    if(validateAllSteps()){
        //$('form').submit(); //removed for demo
        $('.record-link-success-modal').modal('show');
    }
}

function validateAllSteps(){
    //var attempt = 0;
    var isStepValid = true;

    if(validateStep1() == false){
        isStepValid = false;
        //attempt++; 
        $('#patient-verification-wizard').smartWizard('setError',{stepnum:1,iserror:true});         
    }else{
        $('#patient-verification-wizard').smartWizard('setError',{stepnum:1,iserror:false});
    }

    if(validateStep2() == false){
        isStepValid = false;
        $('#patient-verification-wizard').smartWizard('setError',{stepnum:2,iserror:true});         
    }else{
        $('#patient-verification-wizard').smartWizard('setError',{stepnum:2,iserror:false});
    }


    // if(attempt >=3) {
    //     $('.verification-failure-modal').modal('show');
    // }

    /*if(!isStepValid){
        $('#patient-verification-wizard').smartWizard('showMessage','Please complete the required fields');
    }*/
    return isStepValid;
}

function validateSteps(step){
    //var attempt = 0;
    var isStepValid = true;
    if(step == 1){
        if(validateStep1() == false ){
            isStepValid = false;
            //attempt++; 
            /*$('#patient-verification-wizard').smartWizard('showMessage','Please complete the required fields');*/
            $('#patient-verification-wizard').smartWizard('setError',{stepnum:step,iserror:true});
        }
        else{
            /*$('#patient-verification-wizard').smartWizard('hideMessage');*/
            $('#patient-verification-wizard').smartWizard('setError',{stepnum:step,iserror:false});
        }

        // if(attempt >=3) {
        //     $('.verification-failure-modal').modal('show');
        // }
    }
    if(step == 2){
        if(validateStep2() == false ){
            isStepValid = false; 
            /*$('#patient-verification-wizard').smartWizard('showMessage','Please complete the required questions');*/
            $('#patient-verification-wizard').smartWizard('setError',{stepnum:step,iserror:true});         
        }
        else{
            /*$('#patient-verification-wizard').smartWizard('hideMessage');*/
            $('#patient-verification-wizard').smartWizard('setError',{stepnum:step,iserror:false});
        }
    }



    return isStepValid;
}

function setError(stepnumber){
    $('#patient-verification-wizard').smartWizard('setError',{stepnum:stepnumber,iserror:true});
}


function validateStep1(){
    var attempt = 0; //if customer fails 3 questions or more, then they are locked out of form
    var isValid = true;
    var required_msg = "<span class='required-note'> <i class='fa fa-exclamation-circle' aria-hidden='true' alt='Denotes required field'></i> Denotes required field</span>"
    var error_msg ="<span class='msg_error'> <i class='fa fa-exclamation-circle msg_error' aria-hidden='true' alt='Denotes required field'></i> Answer incorrect. If you are unable to answer correctly, please call customer support.</span>"

    // Validate Question 1
    var radio_buttons = $("input[value='Blue']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        attempt++; 
        $('#msg_question1').html(error_msg).show();
    }else{
        $('#msg_question1').html(required_msg).show();
    }
    $('#verify-id-1 input').on('ifChecked', function(event) {
        $('#msg_question1').html(required_msg).show();
    });

    // Validate Question 2
    var radio_buttons = $("input[value='Memphis']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        attempt++;
        $('#msg_question2').html(error_msg).show();
    }else{
        $('#msg_question2').html(required_msg).show();
    }
    $('#verify-id-2 input').on('ifChecked', function(event) {
        $('#msg_question2').html(required_msg).show();
    });

    // Validate Question 3
    var radio_buttons = $("input[value='Cabo San Lucas']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        attempt++;
        $('#msg_question3').html(error_msg).show();
    }else{
        $('#msg_question3').html(required_msg).show();
    }
    $('#verify-id-3 input').on('ifChecked', function(event) {
        $('#msg_question3').html(required_msg).show();
    });

    // Validate Question 4
    var radio_buttons = $("input[value='Georgia Tech']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        attempt++;
        $('#msg_question4').html(error_msg).show();
    }else{
        $('#msg_question4').html(required_msg).show();
    }
    $('#verify-id-4 input').on('ifChecked', function(event) {
        $('#msg_question4').html(required_msg).show();
    });

    //show failure modal if 3 or more questions are wrong
    if(attempt >=3) {
        $('.verification-failure-modal').modal('show');
    }

    return isValid;
}

function validateStep2(){
    var isValid = true;
    var required_msg = "<span> <i class='fa fa-exclamation-circle' aria-hidden='true' alt='Denotes required field'></i> Denotes required field</span>"
    var error_msg ="<span class='msg_error'> <i class='fa fa-exclamation-circle msg_error' aria-hidden='true' alt='Denotes required field'></i> Please select a contact method</span>"

    // Validate contact method
    var radio_buttons = $("input[name='group5']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        $('#contact_method').html(error_msg).show();
    }else{
        $('#contact_method').html(required_msg).show();
    }
    $('input').on('ifChecked', function(event) {
        $('#contact_method').html(required_msg).show();
    });


    return isValid;
}
//end smart wizard



//modal flip stuff
$(document).ready(function(){
  //SUPPORT CONSOLE PATIENT LINKING MODAL FLIPS
  // set up flip action on click of "whats this" on mrn modal
  $('.enter-mrn-modal .flip-item').on('click',function(e){

    $('.enter-mrn-modal, .mrn-info-modal').addClass('flip');
    e.preventDefault();

  });
  $('.mrn-info-modal .flip-item-back').on('click',function(e){
    $('.mrn-info-modal').modal('hide');
    $('.enter-mrn-modal, .mrn-info-modal').removeClass('flip');
    e.preventDefault();

  });


  //PATIENT VERIFICATION 
  // set up flip action on click of "explain further" on verification failure modal
  $('.verification-failure-modal .flip-item').on('click',function(e){

    $('.verification-failure-modal, .failure-explanation-modal').addClass('flip');
    $('.failure-explanation-modal').modal('show');
    e.preventDefault();

  });
  $('.failure-explanation-modal .flip-item-back').on('click',function(e){
    $('.failure-explanation-modal').modal('hide');
    $('.verification-failure-modal, .failure-explanation-modal').removeClass('flip');
    e.preventDefault();

  });
});




