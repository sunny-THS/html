document.addEventListener("DOMContentLoaded", event => {
  var app = firebase.app();
  SetData(true, false, 0, 0);
  GetData();
});

function GetData() {
  firebase.database().ref( /*NO AUTH*/ ).once('value').then(snapshot => {
    //console.log(snapshot.val());
    document.getElementById('nhietdo').innerText = snapshot.val().ThongSo.NhietDo;
    document.getElementById('doam').innerText = snapshot.val().ThongSo.DoAm;
    if(!snapshot.val().WebIsOn)
    {
      location.reload();
    }
  }).catch(err => {console.error(err);});
  setTimeout(GetData, 10);
}

function SetData(WebOn, pump, t, h) {
  firebase.database().ref( /*NO AUTH*/ ).set({
    WebIsOn: WebOn,
    PumpIsWork: pump,
    ThongSo:{
      NhietDo: t,
      DoAm: h
    }
  });
}

function pump() {
  firebase.database().ref( /*NO AUTH*/ ).once('value').then(snapshot => {
    pump_ = !snapshot.val().PumpIsWork;
    if (pump_) {
      document.getElementById('pump_').innerText = "On";
      SetData(true, pump_, snapshot.val().ThongSo.NhietDo, snapshot.val().ThongSo.DoAm);
    }else
    {
      document.getElementById('pump_').innerText = "Off";
      SetData(true, pump_, snapshot.val().ThongSo.NhietDo, snapshot.val().ThongSo.DoAm);
    }
    console.log(pump_);
  }).catch(err => {console.error(err);});
}
