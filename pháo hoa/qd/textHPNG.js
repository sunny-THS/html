function text_HPNG() {
  this.text= document.getElementById('tHPNG');
  this.h= ch/2;
  this.w= cw/2;
  this.font_size= 100;
  this.text.style.top= `${this.h}px`;
  this.text.style.left= `${this.w}px`;
  this.text.style.fontSize= `${this.font_size}px`;
}
//setting time
var year = [];
year[0] = new Date().getFullYear();

var time = () => {

  let date = [25, 1, 0, 0];
  let [day, month, hour, min] = date;

  //this.month = 12; //tháng
  //this.day = 24; //ngày
  //this.hour = 7; //giờ
  //this.min = 30; //phút

  let d = new Date(year[0], month-1, day, hour, min, 0, 0);
  var t = d.getTime() - new Date().getTime();
  if (t > 0) {
      //tinh ngay
      let days = Math.floor(t / 86400000);
      days = days > 99 ? days : days > 9 ? "0" + days : "00" + days;

      //tinh gio
      let hours = Math.floor(t / 3600000) - days * 24;
      hours = hours > 9 ? hours : "0" + hours;

      //tinh phut
      let minutes = Math.floor(t / 60000) - days * 1440 - hours * 60;
      minutes = minutes > 9 ? minutes : "0" + minutes;

      //tinh giay
      let seconds = Math.floor(t / 1000) - days * 86400 - hours * 3600 - minutes * 60;
      seconds = seconds > 9 ? seconds : "0" + seconds;
      
      document.getElementById('time').innerTEXT
  } else if (t > -86400000) {
      location.href = "troll.html";
  } else
      year[0]++;
}

setInterval(time, 1);
