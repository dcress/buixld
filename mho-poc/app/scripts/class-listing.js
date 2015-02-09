$(document).ready(function(){
	
	//toggles drop-down for multiple class listings
	(function () {
	    
	    $('.drop-down').hide();

		$('.date-drop-down').click(function(){
			$('.drop-down').slideToggle('fast');
			$('close-spin-toggle').toggleClass('active','spin');
		})
	})();

	//toggles a responsive classes
	(function () {
	    var browserWidth = $(window).width();
	    console.log(browserWidth);
	    if (browserWidth <= 767) {
	    	console.log("small");
	    }else{
	    	console.log("normal");
	    }
	    
	})()
})
