function wishes(t) {
  this.text = text;
  console.log(this.text.length);
  let a = 0;
  let x = setInterval(()=>{
    if (a < this.text.length) {
      document.getElementById('text').innerHTML += this.text.charAt(a++);
    }else {
      $('.page2 .card .cake').css({'display':'none'});
      clearInterval(x);
    }
    $('#text').scrollTop($('#text')[0].scrollHeight);
  }, 80);
}
