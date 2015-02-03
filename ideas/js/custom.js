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
  console.log("Ready");
});


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