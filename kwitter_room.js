username = localStorage.getItem("user_name")
  var firebaseConfig = {
    apiKey: "AIzaSyB29BvWq8izAtb8Ie35Gey_jJdKRPa2ptQ",
    authDomain: "kwiiiiiiiiter.firebaseapp.com",
    databaseURL: "https://kwiiiiiiiiter-default-rtdb.firebaseio.com",
    projectId: "kwiiiiiiiiter",
    storageBucket: "kwiiiiiiiiter.appspot.com",
    messagingSenderId: "215602381314",
    appId: "1:215602381314:web:10292ffc5080566a4e9d1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addroom(){
      room_name = document.getElementById("room").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name)
  window.location = "kwitter_page.html"
  }