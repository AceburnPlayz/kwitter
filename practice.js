var firebaseConfig = {
    apiKey: "AIzaSyDijZD9FLJI8Az9rq_4vlVE50K1FlRyzTY",
    authDomain: "testkwitter-8f5d6.firebaseapp.com",
    projectId: "testkwitter-8f5d6",
    storageBucket: "testkwitter-8f5d6.appspot.com",
    messagingSenderId: "8742517919",
    appId: "1:8742517919:web:278cdf72af399892e176aa",
    measurementId: "G-G0FQTGCRND"
  };
  
    
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"  
    });
}