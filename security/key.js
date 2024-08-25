require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
 
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
  
  
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);