var name_File = [];

document.addEventListener("DOMContentLoaded", event => {
  var app = firebase.app();
});
window.onload = function() {
  GetJSON();
}
window.onchange = function() {}

function GetJSON() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      SetData(JSON.parse(this.response));
    }
  }
  // console.log(xhr);
  xhr.open('GET', 'https://firebasestorage.googleapis.com/v0/b/chat-ab728.appspot.com/o/', true);
  xhr.send();
}

function SetData(data) {
  data.items.forEach((item, i) => {
    name_File[i] = `${item.name}`;
  });
  GetData();
}

function GetData() {
  let dataFile;
  let database = firebase.database();
  name_File.forEach((name, i) => {
    let a = document.createElement("A");
    dataFile = firebase.storage().ref().child(name);
    dataFile.getDownloadURL().then(url_ => {
      a.href = url_;
      document.getElementById('root').appendChild(a);
      a.setAttribute("class", "linkFile");
      a.innerText = name;
      // delete File
      a.oncontextmenu = event => {
        event.preventDefault();
        database.ref( /*NO AUTH*/ ).once('value').then(snapshot => {
          console.log(snapshot.val());
          let c = prompt("Press pw");
          if (c == snapshot.val().auth[0].password) {
            let dataFile_ = firebase.storage().ref().child(name);
            dataFile_.delete().then(() => {
              location.reload();
            }).catch(error => {
              console.error(error);
            })
          }
          var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        });
      };
    });
  });
}

function SignIn(file) {
  let username, pw;
  let t = 0;
  let database = firebase.database();
  database.ref().once('value').then(snapshot => {
    while (username != snapshot.val().auth[1].username || pw != snapshot.val().auth[1].password) {
      username = prompt("NHẬP USERNAME");
      pw = prompt("NHẬP PASSWORD");
      t++;
      if (username != snapshot.val().auth[1].username || pw != snapshot.val().auth[1].password) {
        if (username == snapshot.val().auth[0].username/* && pw == snapshot.val().auth[0].password*/) {
          uploadFile(file);
          break;
        }
        alert("Xin mời bạn nhập đủ thông tin");
        if (t == 3) {
          if (confirm("BẠN MUỐN THOÁT")) {
            alert("UPLOAD FAIL")
            break;
          }
        }
      }else {
        uploadFile(file);
        break;
      }
    }
  });
}

function uploadFile(files) {
  const nameFile = files[0].name;
  const file = files.item(0);
  const storageRef = firebase.storage().ref();
  const filesRef = storageRef.child(nameFile).put(file);

  filesRef.on('state_changed', snapshot => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    document.getElementById('result').innerText = `Upload is ${progress}% done`;
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, error => {
    // Handle unsuccessful uploads
    console.error(error);
  }, () => {
    // Handle successful uploads on complete
    document.getElementById('result').innerText = 'Okay';
    $("#root").scrollTop($('#root')[0].scrollHeight);
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    filesRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
      let a = document.createElement("A");
      a.href = downloadURL;
      document.getElementById('root').appendChild(a);
      a.setAttribute("class", "linkFile");
      a.innerText = nameFile;
      console.log('File available at', downloadURL);
    });
  });
}
