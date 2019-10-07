document.addEventListener("DOMContentLoaded", event => {

  const app = firebase.app();

});

function uploadFile(files) {
  const lastNameFiles = [
    '.png',
    '.jpeg',
    '.mp3',
    '.docx',
  ]
  //type file
  const contentType = [
    'image/png',
    'image/jpeg',
    'audio/mp3',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

  ];
  let url;
  console.log(files[0].type);

  const nameFile = document.getElementById('_getName').value;

  const file = files.item(0);
  const storageRef = firebase.storage().ref();

  switch (files[0].type) {
    case contentType[0]:{
      url = `${nameFile}${lastNameFiles[0]}`;
      break;
    }
    case contentType[1]:{
      url = `${nameFile}${lastNameFiles[1]}`;
      break;
    }
    case contentType[2]:{
      url = `${nameFile}${lastNameFiles[2]}`;
      break;
    }
    case contentType[3]:{
      url = `${nameFile}${lastNameFiles[3]}`;
      break;
    }
    default:
    console.warn('Unformatted file');
  }

  const filesRef = storageRef.child(url).put(file);


  filesRef.then(snapshot => {
    let result = snapshot.state;
    let colors = [
      'green',
      'yellow',
      'blue',
      'pink',
    ];
    let rd = Math.floor(Math.random() * colors.length) + 1;

    console.log('%csuccess', 'color:blue;font-size:20px');

    document.getElementById('result').style.color = `${colors[rd]}`;
    document.getElementById('result').innerHTML = result;

    document.querySelector('._getFile').value = '';
  });

}

function getName(name) {
  console.log(name);
}
