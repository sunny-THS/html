function wishes(t) {
  this.text = t;
  let a = 0;
  let lenText = this.text.message.length;
  let x = setInterval(()=>{
    if (a < lenText) {
      document.getElementById('text').innerHTML += this.text.message.charAt(a++);
      if (a == lenText/2 ) {
        $('.page2 .card .cake').css({'display':'none'});
      }
    }else {
      $('#b').css({'opacity':1});
      clearInterval(x);
    }
    $('#text').scrollTop($('#text')[0].scrollHeight);
  }, 80);
}
