var name_File = [];

document.addEventListener("DOMContentLoaded", event => {
  var app = firebase.app();
});
window.onload = function() {
  GetJSON();
  setInterval(()=>{
    $("#root").scrollTop($('#root')[0].scrollHeight);
  },1);
}
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
  name_File.forEach((name, i) => {
    let a = document.createElement("A");
    dataFile = firebase.storage().ref().child(name);
    dataFile.getDownloadURL().then(url_ => {
      a.href = url_;
      document.getElementById('root').appendChild(a);
      a.setAttribute("id", "linkFile");
      a.innerText = name;
    });
  });
}

function uploadFile(files) {
  const nameFile = files[0].name;
  const file = files.item(0);
  const storageRef = firebase.storage().ref();
  const filesRef = storageRef.child(nameFile).put(file);

  filesRef.on('state_changed', snapshot => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
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
    console.log("Success");
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    filesRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
      let a = document.createElement("A");
      a.href = downloadURL;
      document.getElementById('root').appendChild(a);
      a.setAttribute("id", "linkFile");
      a.innerText = nameFile;
      console.log('File available at', downloadURL);
    });
  });
}
