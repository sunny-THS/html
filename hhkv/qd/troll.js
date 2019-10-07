var ni = 0;

var x = setInterval(autoText, 80);

function autoText() {
  let at = document.getElementById('text');
  let tt = "Xin chào Lụa 😆 \n M thấy thời gian ở dưới không 😆 \n Hết thời gian đó sẽ có 1 điều bất ngờ dành riêng cho m.....❣❣❣";

  at.value += tt[ni];
  ni++;
  if (ni === tt.length) {
    clearInterval(x);
  }
}
