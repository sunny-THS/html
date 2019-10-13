var data = new XMLHttpRequest();
data.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //dataJSON(JSON.parse(this.responseText));
  }
}

data.open('GET', `https://firebasestorage.googleapis.com/v0/b/fir-9d177.appspot.com/o/BaiCaVoBanToi.mp3`, true);
data.send();
