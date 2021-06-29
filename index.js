var storageRef = firebase.storage().ref("files");

storageRef.child('UiPro.pdf').getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    var urlD = document.getElementById("downloadUrl");
    urlD.setAttribute("href", url);
    console.log(urlD);
    
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    var div = document.getElementById('div');
    div.setAttribute('class', url);
  })
  .catch((error) => {
    // Handle any errors
  });

function uploadFiles() {
  var file = document.getElementById("files").files[0];
  console.log(file);
  var mountainsRef = storageRef.child(file.name);
  // 'file' comes from the Blob or File API
  mountainsRef.put(file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
}