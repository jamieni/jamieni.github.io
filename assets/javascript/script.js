$(document).ready(function(){
	$(".links").hover(function(){
		$(this).css({"-webkit-transform":"scale(1.25)"});
		}, function(){
			$(this).css({"-webkit-transform":"scale(1)"});	
	});
	$("#arrow").click(function() {
      window.scrollTo(0, 700);
  	});

  	var num_clicks = 0;
	$(".hello").click(function() {
		num_clicks++;
		if (num_clicks == 1) {
			$(".hello").html("Welcome! :)");
			$(".hello").attr("margin-left", "13%");
			$(".hello").css({"padding-top":"25px"});
		} else if (num_clicks == 2) {
			$(".hello").text("print('Hello World!')");
			$(".hello").css({"margin-left":"13%"});
			$(".hello").css({"padding-top":"25px"});
		} else {
			$(".hello").text("Hello!");
			num_clicks = 0;
		}
	});
});