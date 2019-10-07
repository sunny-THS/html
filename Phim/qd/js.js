$(document).ready(function() {
	info();
});

function dongho(){
	let d = new Date();
	let hours = d.getHours();
	let mins = d.getMinutes();
	let secs = d.getSeconds();
	let day = d.getDay();
	let date = d.getDate();
	let month = d.getMonth() + 1;
	let year = d.getFullYear();
	let b = "AM";
	this.clock = document.getElementById('clock');
	var col;
	var tShadow = [
		'2px -2px 10px rgba(85,250,121,.95),2px 2px 10px rgba(62,244,216,.88)',
		'2px -2px 10px rgba(233,52,20,.95),2px 2px 10px rgba(243,247,10,.88)',
		'2px -2px 10px rgba(211,223,214,.95),2px 2px 10px rgba(0,0,0,.88)'
	]

	switch (day){
		case 0 :
			day = "Sunday";
			break;
		case 1 :
			day = "Monday";
			break;
		case 2 :
			day = "Tuesday";
			break;
		case 3 :
			day = "Wednesday";
			break;
		case 4 :
			day = "Thursday";
			break;
		case 5 :
			day = "Friday";
			break;
		case 6 :
			day = "Saturday";
			break;
	}

	if(hours < 10){
		hours = "0" + hours;
	}

	if (hours >= 12){
		b = "PM";
	}
  var col = (hours>6&&hours<18)?((hours<=9)?tShadow[0]:((hours<=17)?tShadow[1]:tShadow[2])):'#262626';
	if(mins < 10){
		mins = "0"	+ mins;
	}
	if(secs < 10){
		secs = "0" + secs;
	}
	if(date < 10){
		date = '0' + date;
	}
	if(month < 10){
		month = '0' + month;
	}

	this.clock.innerHTML = hours + ":" + mins + ":" + secs +'<span>' + b +'</span>';//+ '<br>' + day + ', ' + date + '-' + month + '-' + year + '</span>';
	this.clock.style.textShadow = col;
};
setInterval(dongho,1000);

var info = () =>{
	let a = false;
	$('.info').click(function() {
		a = !a;
		$('.huongDan').fadeToggle(1000);
		if (a) {
			$('#main').css({
				'filter': 'blur(6px)',
			});
		}else {
			$('#main').css({
				'filter': 'blur(0)',
			});
		}
	});
	$('.huongDan span').click(function() {
		a = !a;
		$('.huongDan').fadeOut(1000);
		$('#main').css({
			'filter': 'blur(0)',
		});
	});
}
