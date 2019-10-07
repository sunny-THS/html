console.log('%cHello world!', 'font-size:50px;color:green');


var baiTap1 = () => {
  // kiểm tra số nguyên tố
  for (var i = 1; i < 10; i++) {
    var bool = true
    if (i == 10) {
      clearInterval(d);
    }else if (i < 2) {
      bool = false;
    } else {
      for (var j = 2; j < i - 1; j++) {
        if (i % j == 0) {
          bool = false;
          break;
        }
      }
    }
  }
  if (bool == true) {
    console.log(i);
  }
}


var d = setInterval(baiTap1, 500);
