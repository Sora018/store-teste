const firebaseConfig = {
    apiKey: "AIzaSyAPJiUQ3-rxzfhHyEzejKmVFuDz7q8mANM",
    authDomain: "teste-geral1.firebaseapp.com",
    projectId: "teste-geral1",
    storageBucket: "teste-geral1.appspot.com",
    messagingSenderId: "422986308403",
    appId: "1:422986308403:web:8649d52226a1202312bc46"
  };

firebaseConfig.initializeApp(firebaseConfig);

var filetext = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;

function getFile(e) {
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    filetext.innerHTML = fileName;


}

function uploadImage() {

    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.styke.width=percentVal+"%";
    }),(error)=>{
        consolge.log("Error is ", error);
    },
}