/*
	* Title: HCA Innovations
	* Created: January 30 2015
	*
	* Author: Eric Motil / Dan Cress
	* Description: HCA Innovations site
	* Version: v1.0
  *
*/


/*---------------------
	Ready
----------------------*/
$(document).ready(function() {

	// SVG fall back fro senior browsers
	//svgeezy.init('nocheck', 'png');

});

// svgeezy.init('nocheck', 'png');


/*---------------------
  Smooth Scroll To Anchor
----------------------*/
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.to-div').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 50
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Toggle card and list view
$(document).ready(function(){
	$('.card-list-view').click(function(){
		$('#featured').removeClass('card-grid').addClass('card-list');
		$('.card-toggle').removeClass('active');
		$(this).addClass('active');
	});
	$('.card-grid-view').click(function(){
		$('#featured').removeClass('card-list').addClass('card-grid');
		$('.card-toggle').removeClass('active');
		$(this).addClass('active');
	});
});
