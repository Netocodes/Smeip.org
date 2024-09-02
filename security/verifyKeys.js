import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { firebaseConfig } from "../dist/secret.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,

  signInWithEmailAndPassword,
  
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


document.addEventListener("DOMContentLoaded", function () {
  // Show the preloader
  const preloader = document.getElementById("preloader");
  preloader.classList.remove("hidden");

  // Hide the preloader and show the content once the page has fully loaded
  window.addEventListener("load", function () {
    preloader.classList.add("hidden");
    
    // Optionally, reveal the content with a fade-in effect
    const content = document.getElementById("content");
    content.classList.remove("opacity-0");
    content.classList.add("opacity-100", "transition-opacity", "duration-500");
  });
});


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

let email = document.getElementById('email');
let password = document.getElementById('password');
const subBtn = document.getElementById("subBtn");





async function login(e) {
  e.preventDefault();
      try {
    const credentials = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log(credentials)
    let ref = doc(db, "userAuthList", credentials.user.uid);
           const docSnap = await getDoc(ref);

           if (docSnap.exists()) {
            localStorage.setItem("user-info", JSON.stringify({
              fullname: docSnap.data().fullname,
              email: docSnap.data().email,
            }));
            localStorage.setItem("user-creds", JSON.stringify(credentials.user));

            const userInfo = docSnap.data();
            const userName =  userInfo.fullname
      console.log(userName);

      Swal.fire({
        title: 'Success!',
        background:'#000000',
        color:'#ffffff',
        text: 'You have been Verified Succesfully invest Smart!!!.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
     
      setTimeout(() => {
        window.location.href = "../src/mainpage.html";
      }, 5000);
            }
          
           
  } catch (error) {
    console.log(error.message)
    Swal.fire({
      title: 'Could not Login!',
      background:'#000000',
      color:'#ffffff',
      text: 'Check your password and try again ',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
}

const googleSignin = async () => {
  try{
  let googlecred = await signInWithPopup(auth, provider)
console.log(googlecred.user.displayName)

const userRef = doc(db, "userAuthList", googlecred.user.uid);
  
    await setDoc(userRef, {
      fullname: googlecred.user.displayName ,
      email: googlecred.user.email ,
      mobile: googlecred.user. phoneNumber,
      photo: googlecred.user.photoURL ,
    });
    Swal.fire({
      title: 'Success!',
      background:'#000000',
      color:'#ffffff',
      text: 'You have been Verified Succesfully invest Smart!!!.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    
         setTimeout(() => {
           window.location.href = "../src/mainpage.html";
         }, 5000);


  }
    catch(error)  {
      console.log("check here", error.message);
      console.log(error.message);
    };
};




let googleadd = document.getElementById("googleRegister")
googleadd.addEventListener("click", googleSignin);
subBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  preloader.classList.remove("hidden");

  login(e)
})