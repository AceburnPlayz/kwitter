
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCODUEckpoyR5qId9k6lQfMTiiuzl37VQQ",
      authDomain: "project93-9f2fb.firebaseapp.com",
      databaseURL: "https://project93-9f2fb-default-rtdb.firebaseio.com",
      projectId: "project93-9f2fb",
      storageBucket: "project93-9f2fb.appspot.com",
      messagingSenderId: "1051763943658",
      appId: "1:1051763943658:web:4dbf46f346335802dc4f93"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(firebase_message_id = childKey)
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}