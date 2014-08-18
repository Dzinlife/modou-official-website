$(document).ready(function() {
	FastClick.attach(document.body);
	$.fx.interval = 16;
	
	$(window).resize(function(){
		init();
	})

	function init() {
		var input = $(".promo").eq(0).width();

		$(".aside-wrapper").height(function(){	
			return input / mapping(input, 256, 480, 1.4, 2)
		});

		function mapping(input, a1, a2, b1, b2) {
			var result = (input - a1) / (a2 - a1) * (b2 - b1) + b1;
			if (result < b1) {
				return b1;
			}else if (result > b2){
				return b2;
			}else{
				return result;
			}
		}

		$(".promo img").each(function () {
			// $(this).parent().css({
			// 	"background-image": "url(" + $(this)[0].src + ")",
			// })
			$(this).css({
				"margin-left": -$(this).width()/2 + "px",
			})
		});

	}

	$(".promo img").load(function(){
		$(this).css({
			"margin-left": -$(this).width()/2 + "px",
			"left": "50%",
		})
	})

	init();


})