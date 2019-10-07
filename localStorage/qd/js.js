function handleData() {
  document.addEventListener('keypress', function(e) {
    if (`${e.code}` == 'Enter') {
      let val = new layGiaTri;
      let nhap = val.giaTriNhap;
      let num = val.stt;
      let data = localStorage.num;
      console.log(num);
      console.log(nhap);

      if (nhap == '' || num == '') {
        alert('Bạn chưa nhập đủ thông tin');
      }else {
        localStorage.setItem(num, nhap);
      }
    }
  });
}

function layGiaTri() {
  this.giaTriNhap = document.querySelector('#khungNhap').value;
  this.stt = document.querySelector('#stt').value;
  this.result = document.querySelector('.result');

  this.result.scrollTop = this.result.scrollHeight;
  this.result.innerHTML = this.giaTriNhap;
}

function addData() {
  this.data = localStorage.setItem(stt, this.giaTriNhap);
}
