$(document).ready(function() {
	FastClick.attach(document.body);
	$.fx.interval = 16;
	
		alert()
	$(window).resize(function(){
		init();
	})

	function init() {
		$(".promo-container").height(function(){
			console.log($(this).width());
			if ($(this).width() < 300) {
				return $(this).width();
			}else if($(this).width() >500){
				return 300;
			}else {
				return $(this).width()/1.6;
			}
		})
	}

	init();
})