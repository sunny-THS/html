var ni = 0;

$(document).ready(function() {
  $('a').hover(function() {
    $('a').toggleClass('active');
  });

  $('a').click(function() {
    $('a').attr('href', '#noel');
    $('.boxx').css({'display':'block',});
    $('.trol').css({'display': 'none'});
    $('#audio')[0].play();
  });

  $('.nuts').click(function () {
    $('.boxx').css({'display': 'none',})
  });
});

var x = setInterval(autoText, 80);

function autoText() {
  let at = document.getElementById('text');
  let tt = "Lời đầu xin chúc bạn 1 ngày giáng sinh vui vẻ \n Di chuyển chuột cho đến khi có điều gì đó xảy ra thì ngừng lại và click chuột";

  at.value += tt[ni];
  ni++;
  if (ni === tt.length) {
    clearInterval(x);
  }
}
