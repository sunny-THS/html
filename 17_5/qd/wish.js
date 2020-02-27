function wishes(t) {
  this.text = t;
  let a = 0;
  let x = setInterval(()=>{
    if (a < this.text.message.length) {
      document.getElementById('text').innerHTML += this.text.message.charAt(a++);
    }else {
      $('.page2 .card .cake').css({'display':'none'});
      clearInterval(x);
    }
    $('#text').scrollTop($('#text')[0].scrollHeight);
  }, 80);
}
