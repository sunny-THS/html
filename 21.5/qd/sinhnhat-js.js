var year = [];
year[0] = new Date().getFullYear();

setInterval(function() {
    var d = new Date(year[0], 4, 21, 21, 0, 0, 0);
    var t = d.getTime() - new Date().getTime();
    if (t > 0) {
        var days = Math.floor(t / 86400000);
        days = days > 99 ? days : days > 9 ? "0" + days : "00" + days;
        document.getElementById("daysBox").innerText = days;
        var hours = Math.floor(t / 3600000) - days * 24;
        hours = hours > 9 ? hours : "0" + hours;
        document.getElementById("hoursBox").innerText = hours;
        var minutes = Math.floor(t / 60000) - days * 1440 - hours * 60;
        minutes = minutes > 9 ? minutes : "0" + minutes;
        document.getElementById("minsBox").innerText = minutes;
        var seconds = Math.floor(t / 1000) - days * 86400 - hours * 3600 - minutes * 60;
        seconds = seconds > 9 ? seconds : "0" + seconds;
        document.getElementById("secsBox").innerText = seconds;
    } else if (t > -86400000) {
        document.getElementById("countdown0").innerText = "";
        document.getElementById("countdown0").innerHTML = "<i><div style='font-size:30px;'>Happy birth day, Thy Thơ😘</div><div style='font-size:30px;'>Wish you always have fun with your family</div><div style='font-size:30px'>Wish you always beautiful and always cute</div><h1 style='font-size:40px'>I love you...💕^_^</h1><div style='font-size:30px'>Hãy bánh vào cái bánh</div></i>";
    } else
        year[0]++;
}, 1);
