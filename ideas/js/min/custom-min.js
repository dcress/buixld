$(document).ready(function(){}),$(function(){$(".to-div").bind("click",function(a){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-50},1500,"easeInOutExpo"),a.preventDefault()})}),$(document).ready(function(){$(".card-list-view").click(function(){$("#featured").removeClass("card-grid").addClass("card-list"),$(".card-toggle").removeClass("active"),$(this).addClass("active")}),$(".card-grid-view").click(function(){$("#featured").removeClass("card-list").addClass("card-grid"),$(".card-toggle").removeClass("active"),$(this).addClass("active")})});