// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBOgHxqOirKPrYFad14kTidcyFasNrXrsw",
    authDomain: "happybelly-comingsoon.firebaseapp.com",
    projectId: "happybelly-comingsoon",
    storageBucket: "happybelly-comingsoon.appspot.com",
    messagingSenderId: "882744346706",
    appId: "1:882744346706:web:5c40bbe0a157b44630f78b",
    measurementId: "G-JC0Z20N10Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

let id = db.collection("betaUsers").doc().documentId;
const docRef = db.collection("betaUsers").doc(id);
const email = document.querySelector("#email");
const sendButton = document.querySelector("#sendButton");
const messageForm = document.querySelector("#messageForm")

sendButton.addEventListener("click", function (){
    const emailToSave = email.value;
    docRef.set({
        email: emailToSave,
    }).then(function (){
        console.log("email saved!");
    }).then(function (){
        messageForm.reset();
    }).catch(function (error){
        console.log("Got an error: ", error);
    });
});
