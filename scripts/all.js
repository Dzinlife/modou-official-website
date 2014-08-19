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

		// img_resize()
	}

	function img_resize () {
		$(".promo img").each(function(){
			$(this).css({
				"margin-left": -$(this).width()/2 + "px",
				"left": "50%",
			})
		})
		if ($(window).width() > 1000) {
			$(".main-poster").width("1600").css({
				"margin-top": function() {
					return -($(this).height() - ( $(".body-wrapper").height() - $(".aside-wrapper").height() ) )/2 + "px";
				},
				"margin-left": function() {
					return ( $("body").width() - $(".main-poster").width() )/2
				}
			});
		}else{
			$(".main-poster").width(1200).css({
				"margin-top": function() {
					return -($(this).height() - ( $(".body-wrapper").height() - $(".aside-wrapper").height() ) )/2 + "px";
				},
				"margin-left": function() {
					return ( $("body").width() - $(".main-poster").width() )/2
				}
			})
		}
	}
	
	$(".promo img, .main-poster").load(function(){
		init();
	})

	init();


})