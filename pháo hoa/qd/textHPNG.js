alert("Khi hết thời gian thì hãy nhấn vào màn hình");
//setting time
var year = [];
year[0] = new Date().getFullYear();


var time = () => {
  let time_NY=document.getElementById('_time');
  let date = [25, 1, 0, 0];
  let [day, month, hour, min] = date;

  let d = new Date(year[0], month-1, day, hour, min, 0, 0);
  var t = d.getTime() - new Date().getTime();
  if (t > 0) {
      //tinh ngay
      let days = Math.floor(t / 86400000);
      days = days > 9 ? days : "0" + days;

      //tinh gio
      let hours = Math.floor(t / 3600000) - days * 24;
      hours = hours > 9 ? hours : "0" + hours;

      //tinh phut
      let minutes = Math.floor(t / 60000) - days * 1440 - hours * 60;
      minutes = minutes > 9 ? minutes : "0" + minutes;

      //tinh giay
      let seconds = Math.floor(t / 1000) - days * 86400 - hours * 3600 - minutes * 60;
      seconds = seconds > 9 ? seconds : "0" + seconds;

      if(days>0){
         time_NY.innerHTML= `<h1><strong>New Year Countdown</strong><br/>
                                  ${days} | ${hours} | ${minutes} | ${seconds}<br/>
                                  Ngày giờ phút giây
                              </h1>`;
      }else{
        time_NY.innerHTML= `<h1><strong>New Year Countdown</strong><br/>
                                 ${hours} | ${minutes} | ${seconds}<br/>
                                 giờ phút giây
                             </h1>`;
      }
  } else if (t > -86400000) {
      new text_HPNG;
      time_NY.style.display = 'none';
      document.getElementById('tHPNG').style.display = 'block';

      let a = document.getElementById('tHPNG');
      a.classList.add('holiday');

      var promise = document.getElementById('pl').play();
      if (promise !== undefined) {
        promise.then(_=>{
          document.getElementById('pl').autoplay= true;
        }).catch(error=>{
          document.getElementById('pl').autoplay= true;
        })
      }

      document.getElementById('dark').style.display = 'none';

      window.open('https://raw.githubusercontent.com/sunny-THS/html/master/ph%C3%A1o%20hoa/text.txt','_blank');
  } else
      year[0]++;
}

setInterval(time, 1);
