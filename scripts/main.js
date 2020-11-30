let name = document.querySelector('.name');
let email = document.querySelector('.email');
let message = document.querySelector('.message');
let btn = document.querySelector('.btnForm');

var firebaseConfig = {
    apiKey: "AIzaSyBL6VvWlTVMqOhXXgZ23lXwRiSzOBdM7dg",
    authDomain: "parcial2-f4d41.firebaseapp.com",
    databaseURL: "https://parcial2-f4d41.firebaseio.com",
    projectId: "parcial2-f4d41",
    storageBucket: "parcial2-f4d41.appspot.com",
    messagingSenderId: "5464565800",
    appId: "1:5464565800:web:edf97b42bd023ea9792d1d"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

btn.addEventListener('click',function(event){
    event.preventDefault();
    const newProduct = {
        name: name.value,
        email: email.value,
        message: message.value
    };
    db.collection("dataClients").add(newProduct)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    
});
