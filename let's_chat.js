var firebaseConfig = {
    apiKey: "AIzaSyDQFdCrJC8LtX4dgxPmpe2v3gTkgd1_rTc",
    authDomain: "kwitter2-17b0d.firebaseapp.com",
    databaseURL: "https://kwitter2-17b0d-default-rtdb.firebaseio.com",
    projectId: "kwitter2-17b0d",
    storageBucket: "kwitter2-17b0d.appspot.com",
    messagingSenderId: "552430304796",
    appId: "1:552430304796:web:1a34c50cd77b4d2f17e9d9",
    measurementId: "G-2GK124LKPQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function login() {
    user_name = document.getElementById("Username").value;
   localStorage.setItem("James", user_name);
   firebase.database().ref("/").child(user_name).update({
       purpose:"adding use"
   });
    window.location = "let's_chat_room.html";
}