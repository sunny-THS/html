document.addEventListener("DOMContentLoaded", event => {
  var app = firebase.app();
  GetData();
});

function GetData() {
  var pump = document.getElementById('pump_');
  var mode = document.getElementById('mode_');
  firebase.database().ref( /*NO AUTH*/ ).once('value').then(snapshot => {
    //console.log(snapshot.val());
    document.getElementById('nhietdo').innerText = Math.round(snapshot.val().ThongSo.NhietDo*100)/100;
    document.getElementById('doam').innerText = snapshot.val().ThongSo.DoAm;

    if (snapshot.val().PumpIsWork==1) {
      pump.innerText = "On";
      pump.style.background  = "rgb(0, 255, 252)";
      pump.style.color = "#fff";
    }else
    {
      pump.innerText = "Off";
      pump.style.background  = "red";
      pump.style.color = "#000";
    }

    if (snapshot.val().Mode==1) {
      mode.style.background  = "green";
    }else
    {
      mode.style.background  = "red";
    }

  }).catch(err => {console.error(err);});
  setTimeout(GetData, 10);
}

function SetData(pump, t, h, mode) {
  firebase.database().ref( /*NO AUTH*/ ).set({
    PumpIsWork: pump,
    ThongSo:{
      NhietDo: t,
      DoAm: h
    },
    Mode: mode
  });
}

function pump() {
  firebase.database().ref( /*NO AUTH*/ ).once('value').then(snapshot => {
    let pump_ = snapshot.val().PumpIsWork==1 ? false : true;;
    if (snapshot.val().Mode==1) {
      if (pump_) {
        document.getElementById('pump_').innerText = "On";
        SetData(1, snapshot.val().ThongSo.NhietDo, snapshot.val().ThongSo.DoAm, 1);
      }else
      {
        document.getElementById('pump_').innerText = "Off";
        SetData(0, snapshot.val().ThongSo.NhietDo, snapshot.val().ThongSo.DoAm, 1);
      }
    }
  }).catch(err => {console.error(err);});
}

function mode() {
  firebase.database().ref( /*NO AUTH*/ ).once('value').then(snapshot => {
    let mode_ = snapshot.val().Mode==1 ? false : true;
    if (mode_) {
      SetData(0, snapshot.val().ThongSo.NhietDo, snapshot.val().ThongSo.DoAm, 1);
    }else
    {
      SetData(0, snapshot.val().ThongSo.NhietDo, snapshot.val().ThongSo.DoAm, 0);
    }
  }).catch(err => {console.error(err);});
}

function outpage() {
  SetData(0, snapshot.val().ThongSo.NhietDo, snapshot.val().ThongSo.DoAm, 0);
}
