
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getAuth } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAaL-84PMzKKpp02ONoU1O-5edpl1GOOAM",
    authDomain: "learning-management-syst-9f82f.firebaseapp.com",
    projectId: "learning-management-syst-9f82f",
    storageBucket: "learning-management-syst-9f82f.firebasestorage.app",
    messagingSenderId: "702481130294",
    appId: "1:702481130294:web:ad32becfc44f80cf7f0997",
    measurementId: "G-TN5T7W9YS6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 //inputs
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

 //submit button
 const submit = document.getElementById('submit');
 submit.addEventListener("click",function(event){
event.preventDefault()
 });
