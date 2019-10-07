function dongho(){
	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	var day = d.getDay();
	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	var b = "AM";
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

let ten = prompt('Bạn tên gì?');
function bugg(event){
	var mk = '31012018';
	var mk2 = 'Thy Thơ';
	var nhap = 2;
	
	if(event.button == 0){
		var xacnhan = confirm('Xin chào ' + ten + ', bạn không được vào đây. Hãy nhấn Cancle');
		if(xacnhan == true){
			var xacnhandung = prompt('Hãy nhập MẬT KHẨU');
			if(xacnhandung != mk){
				while(nhap != 0){
					alert('Mật khẩu sai. Bạn còn '+ nhap);
					nhap--;
					xacnhandung = prompt('Hãy nhập MẬT KHẨU');
					if(xacnhandung == mk){
						nhap = 0;
					}
				}			
			}
			if(xacnhandung == mk){
				location.href = "boss.html";
			}
		}else{
			alert('Vui lòng cảm ơn ' + ten);
		}
	}
	if(event.button == 2){
		var dangnhap = prompt('Mật Khẩu');
		if(dangnhap == mk || dangnhap == mk2){
			location.href = "boss.html";
		}
	}
}