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
      $('#b').click(function() {
        alert("❤️Thương em và mãi yêu em❤️  imu ^_^");
        alert('❤️HAPPY BIRTHDAY❤️')
        $(this).css({'display':'none'});
      });
      clearInterval(x);
    }
    $('#text').scrollTop($('#text')[0].scrollHeight);
  }, 80);
}
