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

  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var number = getElementVal("number");
    var weblink = getElementVal("weblink");
    var inv = getElementVal("inv");
  
    saveMessages(name, emailid, msgContent, number, weblink, inv);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent, number, weblink,inv) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      number: number,
      weblink: weblink,
      inv: inv,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };



