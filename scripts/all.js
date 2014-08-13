$(document).ready(function() {
	FastClick.attach(document.body);
	$.fx.interval = 16;
	
	$(window).resize(function(){
		init();
	})

	function init() {
		var input = $(".promo").eq(0).width();

		$(".aside-wrapper").height(function(){	
			return input / mapping(input, 200, 400, 1, 1.5)
		});

		function mapping(input, a1, a2, b1, b2) {
			var result = (input - a1) / (a2 - a1) * (b2 - b1) + b1;
			if (result < 1) {
				return 1;
			}else if (result > 1.8){
				return 1.8;
			}else{
				return result;
			}
		}

		$(".promo img").each(function () {
			console.log("abc")
			$(this).parent().css({
				"background-image": "url(" + $(this)[0].src + ")",
			})
		});

	}

	init();


})