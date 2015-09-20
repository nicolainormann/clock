for(var i = 0; i < 5; i++){
	$(".digit").append("<div class='row" + i + "'></div>");
	for(var x = 0; x < 4; x++){
		$(".row" + i).append("<div class='plane plane" + x + "'></div>");
		for(var a = 0; a < 3; a++){
			$(".row" + i + " .plane" + x).append("<div class='pixel" + a + "'></div>");
		}
	}
}

$(document).ready(function(){
	window.setInterval(function(){
		$(".separator").toggleClass("tick");
		var now = new Date();
		var minute = now.getMinutes().toString();
		var	hour = now.getHours().toString();
		var	second = now.getSeconds().toString();
		var firstMinute;
		var secondMinute;
		if(minute.lenght == 1){
			secondMinute = minute;
		}
		else{
			firstMinute = minute.charAt(0);
			secondMinute = minute.charAt(1);
		}
		var firstHour;
		var secondHour;
		if(hour.lenght == 1){
			secondHour = hour;
		}
		else{
			firstHour = hour.charAt(0);
			secondHour = hour.charAt(1);
		}
		var firstSecond;
		var secondSecond;
		if(second.lenght == 1){
			secondSecond = second;
		}
		else{
			firstSecond = second.charAt(0);
			secondSecond = second.charAt(1);
		}

		$(".digit.one").attr("data-value", firstHour);
		$(".digit.two").attr("data-value", secondHour);
		$(".digit.three").attr("data-value", firstMinute);
		$(".digit.four").attr("data-value", secondMinute);
		$(".digit.five").attr("data-value", firstSecond);
		$(".digit.six").attr("data-value", secondSecond);
	}, 1000);
});