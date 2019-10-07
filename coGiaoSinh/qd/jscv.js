$(document).ready(function() {
  troll();
});
const troll = ()=> {
  var i = 1;
  $('#button').click(function() {
    alert('Hãy click vào màn hình để hưởng thức');
    alert('Hãy từ từ mà click để đọc nha :))')
    $('.khung').css({'display':'none'});
    $('.khung2').css({'display':'block'});
    $('#c').css({'display':'block'});
    $('#clk').click(function() {
      switch (i++) {
        case 1: {
          $('#0236d').html("Bạn muốn biết ai đã xâm nhập thiết bị bạn không?");
          break;
        }
        case 2: {
          $('#0236d').html("Người đó không ai khác ngoài tập thể C6 này đây😆😊");
          break;
        }
        case 3: {
          $('#0236d').html("♥WE ARE TORNADO, WE ARE C6♥");
          break;
        }
        case 4: {
          location.href = "index1.html";
          break;
        }
      }
    });
  });
}
