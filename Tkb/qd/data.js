var lesson1 = ['', '', '', '', ''];
var lesson2 = ['', '', '', '', ''];
var subjects1 = [];
var subjects2 = [];

//buổi sáng
var mon_s = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('two');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var tue_s = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('three');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var wed_s = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('four');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var thu_s = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('five');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var fri_s = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('six');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var sat_s = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('sen');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

//buổi chiều
var mon_c = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('two_two');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var tue_c = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('three_three');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var wed_c = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('four_four');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var thu_c = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('five_five');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var fri_c = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('six_six');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

var sat_c = (tiet1, tiet2, tiet3, tiet4, tiet5) => {
  let tiet = document.getElementsByClassName('sen_sen');
  tiet[0].innerHTML = tiet1;
  tiet[1].innerHTML = tiet2;
  tiet[2].innerHTML = tiet3;
  tiet[3].innerHTML = tiet4;
  tiet[4].innerHTML = tiet5;
}

function clickMouse() {
  let count = 0;
  let page = 0;
  let screenWidth = innerWidth;
  let element = document.getElementsByClassName('day');
  let back = document.getElementById('back');
  let b = document.getElementById('b');
  let save = document.getElementById('save');

  save.addEventListener('click', function() {
    if (count < 5) {
      localStorage.setItem('mor' + count, JSON.stringify(lesson1));
      localStorage.setItem('aft' + count, JSON.stringify(lesson2));
      element[page++].style.display = 'none';
      element[page].style.display = 'block';
      console.log(page);
      if (page > 0) {
        back.style.display = 'inline-block';
        //b.style.margin = '10px 0 10px 81.75%';
      }
      count++;
      lesson1 = ['', '', '', '', ''];
      lesson2 = ['', '', '', '', ''];
    }
    if (count == 5) {
      localStorage.setItem('mor' + count, JSON.stringify(lesson1));
      localStorage.setItem('aft' + count, JSON.stringify(lesson2));
      save.innerText = 'Save';
      save.addEventListener('click', function() {
        getDataLocalStarage();
        $('.center').css({'opacity':0});
        $('#data').css({'cursor': 'pointer'});
        $('.section').css({'filter': 'blur(0)'});
        location.reload();
      });
    }
  });
  back.addEventListener('click', function() {
    count--;
    if (count >= 0) {
      element[page--].style.display = 'none';
      element[page].style.display = 'block';
      if (count == 0) {
        back.style.display = 'none';
        //b.style.margin = '10px 0 10px 89.78%';
      }
    }
    if (count == 4) {
      document.getElementById('save').innerText = '>>';
    }
  });
}

function getData() {
  for (let i = 0; i < 5; i++) {
    // Monday
    $('.day1 .mor')[i].onkeyup = function() {
      lesson1[i] = $('.day1 .mor')[i].value;
    }
    $('.day1 .aft')[i].onkeyup = function() {
      lesson2[i] = $('.day1 .aft')[i].value;
    }
    // Tuesday
    $('.day2 .mor')[i].onkeyup = function() {
      lesson1[i] = $('.day2 .mor')[i].value;
    }
    $('.day2 .aft')[i].onkeyup = function() {
      lesson2[i] = $('.day2 .aft')[i].value;
    }
    // Wednesday
    $('.day3 .mor')[i].onkeyup = function() {
      lesson1[i] = $('.day3 .mor')[i].value;
    }
    $('.day3 .aft')[i].onkeyup = function() {
      lesson2[i] = $('.day3 .aft')[i].value;
    }
    // Thursday
    $('.day4 .mor')[i].onkeyup = function() {
      lesson1[i] = $('.day4 .mor')[i].value;
    }
    $('.day4 .aft')[i].onkeyup = function() {
      lesson2[i] = $('.day4 .aft')[i].value;
    }
    // Friday
    $('.day5 .mor')[i].onkeyup = function() {
      lesson1[i] = $('.day5 .mor')[i].value;
    }
    $('.day5 .aft')[i].onkeyup = function() {
      lesson2[i] = $('.day5 .aft')[i].value;
    }
    // Saturday
    $('.day6 .mor')[i].onkeyup = function() {
      lesson1[i] = $('.day6 .mor')[i].value;
    }
    $('.day6 .aft')[i].onkeyup = function() {
      lesson2[i] = $('.day6 .aft')[i].value;
    }
  }
}

function getDataLocalStarage() {

  for (var i = 0; i < 6; i++) {
    subjects1[i] = JSON.parse(localStorage.getItem('mor' + i));
    subjects2[i] = JSON.parse(localStorage.getItem('aft' + i));

    console.log(subjects1[i]);
    console.log(subjects2[i]);
  }
  //buổi sáng
  mon_s(subjects1[0][0], subjects1[0][1], subjects1[0][2], subjects1[0][3], subjects1[0][4], subjects1[0][5]);
  tue_s(subjects1[1][0], subjects1[1][1], subjects1[1][2], subjects1[1][3], subjects1[1][4], subjects1[1][5]);
  wed_s(subjects1[2][0], subjects1[2][1], subjects1[2][2], subjects1[2][3], subjects1[2][4], subjects1[2][5]);
  thu_s(subjects1[3][0], subjects1[3][1], subjects1[3][2], subjects1[3][3], subjects1[3][4], subjects1[3][5]);
  fri_s(subjects1[4][0], subjects1[4][1], subjects1[4][2], subjects1[4][3], subjects1[4][4], subjects1[4][5]);
  sat_s(subjects1[5][0], subjects1[5][1], subjects1[5][2], subjects1[5][3], subjects1[5][4], subjects1[5][5]);

  //buổi chiều
  mon_c(subjects2[0][0], subjects2[0][1], subjects2[0][2], subjects2[0][3], subjects2[0][4], subjects2[0][5]);
  tue_c(subjects2[1][0], subjects2[1][1], subjects2[1][2], subjects2[1][3], subjects2[1][4], subjects2[1][5]);
  wed_c(subjects2[2][0], subjects2[2][1], subjects2[2][2], subjects2[2][3], subjects2[2][4], subjects2[2][5]);
  thu_c(subjects2[3][0], subjects2[3][1], subjects2[3][2], subjects2[3][3], subjects2[3][4], subjects2[3][5]);
  fri_c(subjects2[4][0], subjects2[4][1], subjects2[4][2], subjects2[4][3], subjects2[4][4], subjects2[4][5]);
  sat_c(subjects2[5][0], subjects2[5][1], subjects2[5][2], subjects2[5][3], subjects2[5][4], subjects2[5][5]);
}

function openDataBase() {
  document.getElementById('data').addEventListener('click', function () {
    $('.section').css({'filter': 'blur(6px)'});
    $('#data').css({'cursor': 'auto'});
    $('.center').css({'opacity':1});
  });
}

function closeDataBase() {
  document.getElementById('close').addEventListener('click', function () {
    $('.center').css({'opacity':0});
    $('#data').css({'cursor': 'pointer'});
    $('.section').css({'filter': 'blur(0)'});
  });
}
