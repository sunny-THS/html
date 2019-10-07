var data = new XMLHttpRequest();
data.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    dataJSON(JSON.parse(this.responseText));
  }
}
data.open('GET', 'https://raw.githubusercontent.com/sunny-THS/C-language/master/data.json', true);
data.send();

var infor = [];
var tt = [];

function dataJSON(data) {
  for (let i in data) {
    infor[i] = data[i].url;
    tt[i] = data[i].tt;
  }
  getCodeC(tt, infor);
}
