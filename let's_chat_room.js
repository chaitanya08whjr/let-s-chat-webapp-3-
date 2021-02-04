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

user_name = localStorage.getItem("James");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function add_room() {
      room_name = document.getElementById("Room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "let's_chat_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "let's_chat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "let's_chat.html";
}