// Smart Wizard for Patient Registration form          
$('#patient-registration-wizard').smartWizard({
    onShowStep:showAStepCallback,
    onLeaveStep:leaveAStepCallback,
    onFinish:onFinishCallback
});

$('.buttonCancel').attr("href","/patient/profile-summary/");

// disable Check SSN button until input
$('#ssn').keyup(function(){
    if ($(this).val() == '') {
        $('#check-ssn').prop('disabled', true);
    } else {
        $('#check-ssn').prop('disabled', false);
    }
});
// toggle buttons until MRN input
$('#mrn').keyup(function(){
    if ($(this).val() == '') {
        $('#check-mrn').prop('disabled', true);
        $('.buttonNext').addClass('buttonDisabled');
    } else {
        $('.buttonNext').removeClass('buttonDisabled');
    }
});

// Add class to Action bar buttons equal to step number
function showAStepCallback(obj) {
    var currentStep = obj.attr('rel');
    $('.actionBar .btn').addClass('btn-step-'+currentStep);
    // Issue #58 on SW github
    if (currentStep < '4') {
        $('.buttonFinish').addClass('buttonDisabled');
    }

    $('a.buttonNext.btn-step-2').addClass('buttonDisabled');
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
        $('form').submit();
    }
}

function validateAllSteps(){
    var isStepValid = true;

    if(validateStep2() == false){
        isStepValid = false;
        $('#patient-registration-wizard').smartWizard('setError',{stepnum:1,iserror:true});         
    }else{
        $('#patient-registration-wizard').smartWizard('setError',{stepnum:1,iserror:false});
    }

    if(validateStep3() == false){
        isStepValid = false;
        $('#patient-registration-wizard').smartWizard('setError',{stepnum:2,iserror:true});         
    }else{
        $('#patient-registration-wizard').smartWizard('setError',{stepnum:2,iserror:false});
    }

    if(validateStep4() == false){
        isStepValid = false;
        $('#patient-registration-wizard').smartWizard('setError',{stepnum:3,iserror:true});         
    }else{
        $('#patient-registration-wizard').smartWizard('setError',{stepnum:3,iserror:false});
    }

    /*if(!isStepValid){
        $('#patient-registration-wizard').smartWizard('showMessage','Please complete the required fields');
    }*/
    return isStepValid;
}

function validateSteps(step){
    var isStepValid = true;
    if(step == 2){
        if(validateStep2() == false ){
            isStepValid = false; 
            /*$('#patient-registration-wizard').smartWizard('showMessage','Please complete the required fields');*/
            $('#patient-registration-wizard').smartWizard('setError',{stepnum:step,iserror:true});
        }
        else{
            /*$('#patient-registration-wizard').smartWizard('hideMessage');*/
            $('#patient-registration-wizard').smartWizard('setError',{stepnum:step,iserror:false});
        }
    }
    if(step == 3){
        if(validateStep3() == false ){
            isStepValid = false; 
            /*$('#patient-registration-wizard').smartWizard('showMessage','Please complete the required questions');*/
            $('#patient-registration-wizard').smartWizard('setError',{stepnum:step,iserror:true});         
        }
        else{
            /*$('#patient-registration-wizard').smartWizard('hideMessage');*/
            $('#patient-registration-wizard').smartWizard('setError',{stepnum:step,iserror:false});
        }
    }
    if(step == 4){
        if(validateStep4() == false ){
            isStepValid = false; 
            /*$('#patient-registration-wizard').smartWizard('showMessage','Please complete the required options');*/
            $('#patient-registration-wizard').smartWizard('setError',{stepnum:step,iserror:true});         
        }
        else{
            /*$('#patient-registration-wizard').smartWizard('hideMessage');*/
            $('#patient-registration-wizard').smartWizard('setError',{stepnum:step,iserror:false});
        }
    }

    return isStepValid;
}

function setError(stepnumber){
    $('#patient-registration-wizard').smartWizard('setError',{stepnum:stepnumber,iserror:true});
}

function validateStep2(){
    var isValid = true; 
    // Validate SSN
    var ssn = $('#ssn').val();
    if(!ssn && ssn.length <= 0){
        isValid = false;
        /*$('#msg_ssn').html('This field is required.').show();*/
        /*$('#ssn').addClass('placeholder-error');*/ /*error msg inside field*/
    }else{
        $('#msg_ssn').html('This field is required.').hide();
        /*$('#ssn').removeClass('placeholder-error');*/
    } 
    // Validate MRN
    var mrn = $('#mrn').val();
    if(!mrn && mrn.length <= 0){
        isValid = false;
        /*$('#msg_mrn').html('This field is required.').show();*/
        /*$('#mrn').addClass('placeholder-error');*/ /*error msg inside field*/
    }else{
        $('#msg_mrn').html('').hide();
        /*$('#mrn').removeClass('placeholder-error');*/
    }
    return isValid;
}

function validateStep3(){
    var isValid = true;
    var required_msg = "<span class='required-note'> <i class='fa fa-exclamation-circle' aria-hidden='true' alt='Denotes required field'></i> Denotes required field</span>"
    var error_msg ="<span class='msg_error'> <i class='fa fa-exclamation-circle msg_error' aria-hidden='true' alt='Denotes required field'></i> Please choose an answer</span>"

    // Validate Question 1
    var radio_buttons = $("input[name='group1']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        $('#msg_question1').html(error_msg).show();
    }else{
        $('#msg_question1').html(required_msg).show();
    }
    $('#verify-id-1 input').on('ifChecked', function(event) {
        $('#msg_question1').html(required_msg).show();
    });

    // Validate Question 2
    var radio_buttons = $("input[name='group2']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        $('#msg_question2').html(error_msg).show();
    }else{
        $('#msg_question2').html(required_msg).show();
    }
    $('#verify-id-2 input').on('ifChecked', function(event) {
        $('#msg_question2').html(required_msg).show();
    });

    // Validate Question 3
    var radio_buttons = $("input[name='group3']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        $('#msg_question3').html(error_msg).show();
    }else{
        $('#msg_question3').html(required_msg).show();
    }
    $('#verify-id-3 input').on('ifChecked', function(event) {
        $('#msg_question3').html(required_msg).show();
    });

    // Validate Question 4
    var radio_buttons = $("input[name='group4']");
    if( radio_buttons.filter(':checked').length == 0){
        isValid = false;
        $('#msg_question4').html(error_msg).show();
    }else{
        $('#msg_question4').html(required_msg).show();
    }
    $('#verify-id-4 input').on('ifChecked', function(event) {
        $('#msg_question4').html(required_msg).show();
    });

    return isValid;
}

function validateStep4(){
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

$('#check-ssn').click(function(){
    $('#ss-number').fadeOut(500);
    $('#mrn-number').fadeIn(500); 
});
// Resets step 2 to show SSN field first
$('.buttonPrevious').click(function(){
    $('#ss-number').fadeIn(1500);
    $('#mrn-number').hide();
});