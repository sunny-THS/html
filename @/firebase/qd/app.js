document.addEventListener("DOMContentLoaded", event => {

  const app = firebase.app();

});

function uploadFile(files) {
  const lastNameFiles = [
    '.png',
    '.jpeg',
    '.mp3',
    '.docx',
    '.rar',
    '.pdf',
    '.pptx'
  ]
  //type file
  const contentType = [
    'image/png',
    'image/jpeg',
    'audio/mp3',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/octet-stream',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',

  ];
  let url;
  console.log(files[0].type);

  const nameFile = document.getElementById('_getName').value;

  const file = files.item(0);
  const storageRef = firebase.storage().ref();
//Process select files
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
    case contentType[4]:{
      url = `${nameFile}${lastNameFiles[3]}`;
      break;
    }
    case contentType[5]:{
      url = `${nameFile}${lastNameFiles[3]}`;
      break;
    }
    case contentType[6]:{
      url = `${nameFile}${lastNameFiles[3]}`;
      break;
    }
    case contentType[7]:{
      url = `${nameFile}${lastNameFiles[3]}`;
      break;
    }
    case contentType[8]:{
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
