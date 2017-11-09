$(document).ready(function() {
	$('#scrollbtn').click (function() {
		$('html, body').animate({scrollTop: $('section').offset().top }, 1000);
		return false;
	});

	$("#toggle").click(function () {
		$(this).toggleClass("on");
		$(".mob_menu").slideToggle(300);
		return false;
	});

	$(".multilang").click(function () {
		$(this).toggleClass("on");
		$(".multilang_dropdown").slideToggle(300);
		return false;
	});


});


