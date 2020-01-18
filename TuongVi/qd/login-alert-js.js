$(document).ready(function(){
  const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    background:'#fff',
    timer: 3000
  });

  toast({
    type: 'success',
    title: 'Sinh nhật vui vẻ bánh bao ❤️'
  });
  khungChuc();
  next();
})
var x = setInterval(autoText, 80);
var ni = 0
function autoText() {
  let at = document.getElementById('text');
  let tt = "Website có chút giãn đơn nhưng chủ yếu là ở tấm lòng😄\nChúc bà sinh nhật vui vẻ";

  at.value += tt[ni];
  ni++;
  if (ni === tt.length) {
    clearInterval(x);
  }
}

var khungChuc = () => {
  $('.close').click(function() {
    $('.card').css({
      'display':'none',
    });
  });
}
 var next = () => {
   $('.next').click(function() {
     location.href = "jsahgfuiioj";
   })
 }
