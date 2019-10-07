$(document).ready(function() {
	clock();
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
	// var col = "#" + hours + secs + mins + hours;
	// var colors = []

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
	// if(hours >= 10){
		// var col = "#" + hours + secs+10 + secs;
	// }
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

	document.getElementById("clock").innerHTML = hours + ":" + mins + ":" + secs +'<span>' + b + '<br>' + day + ', ' + date + '-' + month + '-' + year + '</span>';
	// document.body.style.backgroundColor = col;
};
setInterval(dongho,1000);

const clock = ()=> {
	$('#clockf').hover(function () {
		$('#clock').fadeIn(500);
	}, function () {
		$('#clock').fadeOut(1500);
	});
}
