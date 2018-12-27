$(document).ready(function(){
		$('.menu-burger').on("click", function(){
				$('.navbar').toggleClass('.navbar_active');
				$('.burger').toggleClass('burger_close');
				$('.menu-nav').toggleClass('menu-nav_active');
		});
});