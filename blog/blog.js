const firebaseConfig = {
    apiKey: "AIzaSyAICPhKG3hIMS9mDT51ar2MKpPbwZtXcdc",
    authDomain: "startup-shala.firebaseapp.com",
    databaseURL: "https://startup-shala-default-rtdb.firebaseio.com",
    projectId: "startup-shala",
    storageBucket: "startup-shala.appspot.com",
    messagingSenderId: "834211655443",
    appId: "1:834211655443:web:5d00158328d70a9d3034e6",
    measurementId: "G-2ZYW9HD422"
  };

firebase.initializeApp(firebaseConfig);

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   document.getElementById("greeting").innerHTML = snapshot.val();
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});


