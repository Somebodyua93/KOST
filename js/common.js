$(document).ready(function() {
	$("#toggle").click(function () {
		$(this).toggleClass("on");
		$(".mobile_menu").slideToggle(300);
		return false;
	});

	$(".multilang").click(function () {
		$(this).toggleClass("on");
		$(".multilang_dropdown").slideToggle(300);
		return false;
	});


	//sticky
	$(".left_side").stick_in_parent();
	//sticky
});


