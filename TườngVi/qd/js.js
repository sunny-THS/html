var year = [];
year[0] = new Date().getFullYear();

var time = () => {

  let date = [16, 1, 19, 30];
  let [day, month, hour, min] = date;

  //this.month = a; //tháng
  //this.day = b; //ngày
  //this.hour = c; //giờ
  //this.min = d; //phút

  let d = new Date(year[0], month-1, day, hour, min, 0, 0);
  var t = d.getTime() - new Date().getTime();
  if (t > 0) {
      let days = Math.floor(t / 86400000);
      days = days > 99 ? days : days > 9 ? "0" + days : "00" + days;
      document.getElementById("daysBox").innerText = days;

      let hours = Math.floor(t / 3600000) - days * 24;
      hours = hours > 9 ? hours : "0" + hours;
      document.getElementById("hoursBox").innerText = hours;

      let minutes = Math.floor(t / 60000) - days * 1440 - hours * 60;
      minutes = minutes > 9 ? minutes : "0" + minutes;
      document.getElementById("minsBox").innerText = minutes;

      let seconds = Math.floor(t / 1000) - days * 86400 - hours * 3600 - minutes * 60;
      seconds = seconds > 9 ? seconds : "0" + seconds;
      document.getElementById("secsBox").innerText = seconds;
  } else if (t > -86400000) {
      location.href = "cake1.html";
  } else
      year[0]++;
}

setInterval(time, 1);
