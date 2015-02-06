// Smart Wizard for Patient Registration form          
$('#online-pre-registration-wizard').smartWizard({
    //customization and validation will go here. 
});

//cancel and submit button destinations for smart wizard
$('.buttonCancel').attr("href","/online-pre-registration/");
$('.buttonFinish').removeAttr("type");
$('.buttonFinish').attr("href", "/online-pre-registration/registration-success/");

//scrolls to top of page every time you click next or previous on smart wizard
$('.buttonNext, .buttonPrevious').click(function(){
    window.scrollTo(0,111); //111px from top to leave out header image and keep content more relevant
})




//hides/shows step-1 content based on select option
$( "#visit-information" ).change(function() {
    var id = $(this).find("option:selected").attr("id");

    switch (id){

    case "labor-and-delivery-option":
        $('#mammogram').hide();
        $('#labor-and-delivery').show();
    break;

    case "mammogram-option":
        $('#labor-and-delivery').hide();
        $('#mammogram').show();
    break;

    default:
        $('#labor-and-delivery').hide();
        $('#mammogram').hide();
  }
});



//hide/show procedure registration questions on pre-register (step-5) stage. 
//had to target dynamically added divs and classes from radio button plugin.

// $('#procedure-yes').click(function(){
//     if ($(this).closest('#procedure-yes').find('.iradio_square-grey').first().hasClass('checked')){
//       console.log('my click event');
//       $('.pre-procedure-questions').slideDown();
//     }
//   });

// $('#procedure-no').click(function(){
//     if ($(this).closest('#procedure-no').find('.iradio_square-grey').first().hasClass('checked')){
//       $('.pre-procedure-questions').slideUp();
//     }
//   });


//hide/show chest pain questions on step-2 of the pre-procedure stage. 
//had to target dynamically added divs and classes from radio button plugin.

$('#chest-pain-yes' || '#chest-pain-yes .iCheck-helper').click(function(){
    if ($(this).closest('#chest-pain-yes').find('.iradio_square-grey').first().hasClass('checked')){
      $('.chest-pain-questions').slideDown();
    }
  });

$('#chest-pain-no' || '#chest-pain-no ins.iCheck-helper').click(function(){
    if ($(this).closest('#chest-pain-no').find('.iradio_square-grey').first().hasClass('checked')){
      $('.chest-pain-questions').slideUp();
    }
  });


//hide/show abnormal heart beat/rhythm questions on step-2 of the pre-procedure stage. 
//had to target dynamically added divs and classes from radio button plugin.

$('#heart-beat-yes' || '#heart-beat-yes .iCheck-helper').click(function(){
    if ($(this).closest('#heart-beat-yes').find('.iradio_square-grey').first().hasClass('checked')){
      $('.heart-beat-questions').slideDown();
    }
  });

$('#heart-beat-no' || '#heart-beat-no ins.iCheck-helper').click(function(){
    if ($(this).closest('#heart-beat-no').find('.iradio_square-grey').first().hasClass('checked')){
      $('.heart-beat-questions').slideUp();
    }
  });

//hide/show abnormal heart beat/rhythm questions on step-2 of the pre-procedure stage. 
//had to target dynamically added divs and classes from radio button plugin.

$('#blood-pressure-yes' || '#blood-pressure-yes .iCheck-helper').click(function(){
    if ($(this).closest('#blood-pressure-yes').find('.iradio_square-grey').first().hasClass('checked')){
      $('.blood-pressure-questions').slideDown();
    }
  });

$('#blood-pressure-no' || '#blood-pressure-no ins.iCheck-helper').click(function(){
    if ($(this).closest('#blood-pressure-no').find('.iradio_square-grey').first().hasClass('checked')){
      $('.blood-pressure-questions').slideUp();
    }
  });

//hide/show coronary arter disease questions on step-2 of the pre-procedure stage. 
//had to target dynamically added divs and classes from radio button plugin.

$('#cad-yes' || '#cad-yes .iCheck-helper').click(function(){
    if ($(this).closest('#cad-yes').find('.iradio_square-grey').first().hasClass('checked')){
      $('.cad-questions').slideDown();
    }
  });

$('#cad-no' || '#cad-no ins.iCheck-helper').click(function(){
    if ($(this).closest('#cad-no').find('.iradio_square-grey').first().hasClass('checked')){
      $('.cad-questions').slideUp();
    }
  });

//hide/show stent questions on step-2 of the pre-procedure stage. 
//had to target dynamically added divs and classes from radio button plugin.

$('#stent-yes' || '#stent-yes .iCheck-helper').click(function(){
    if ($(this).closest('#stent-yes').find('.iradio_square-grey').first().hasClass('checked')){
      $('.stent-questions').slideDown();
    }
  });

$('#stent-no' || '#stent-no ins.iCheck-helper').click(function(){
    if ($(this).closest('#stent-no').find('.iradio_square-grey').first().hasClass('checked')){
      $('.stent-questions').slideUp();
    }
  });

//hide/show asthma questions on step-2 of the pre-procedure stage. 
//had to target dynamically added divs and classes from radio button plugin.

$('#asthma-yes' || '#asthma-yes .iCheck-helper').click(function(){
    if ($(this).closest('#asthma-yes').find('.iradio_square-grey').first().hasClass('checked')){
      $('.asthma-questions').slideDown();
    }
  });

$('#asthma-no' || '#asthma-no ins.iCheck-helper').click(function(){
    if ($(this).closest('#asthma-no').find('.iradio_square-grey').first().hasClass('checked')){
      $('.asthma-questions').slideUp();
    }
  });






