$(document).ready(function() {
	FastClick.attach(document.body);
	$.fx.interval = 16;
	
	$(window).resize(function(){
		init();
	})

	function init() {
		// img_resize()
	}

	function img_resize () {
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
	
	$(".main-poster").load(function(){
		init();
	})

	init();


})