$(document).ready(function(){function e(){$(".radio-faux input").mouseUp(function(){$(this).is(":checked")&&($(this).closest(".radio-clear").find(".radio-faux").removeClass("active"),$(this).parent(".radio-faux").addClass("active"))}),$(".check input").bind("click",function(){$(this).is(":checked")?$(this).parent(".check").addClass("current"):$(this).parent(".check").removeClass("current")}),$(".radio-faux input:checked").closest(".radio-faux").addClass("active"),$(".check input:checked").closest(".check").addClass("active")}e()}),$(function(){$(".to-div").bind("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-50},1500,"easeInOutExpo"),e.preventDefault()})});