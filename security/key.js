
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { firebaseConfig } from "../dist/secret.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const fullNameInp = document.getElementById("name");
const emailInp = document.getElementById("email");
const passwordInp = document.getElementById("password");
const comfirmPassword = document.getElementById("confirm-password");
const Submitregister = document.getElementById("Submitregister");




const registerUser = async (event) => {
  event.preventDefault();
  try {
    const fullname = fullNameInp.value;
const email = emailInp.value;
const password = passwordInp.value;
const confirmpassword = comfirmPassword.value;

if(password !== confirmpassword){
  Swal.fire({
    title: 'Error!',
    background:'#000000',
    color:'#ffffff',
    text: 'Passwords does not Match',
    icon: 'error',
    confirmButtonText: 'OK'
  });
  throw new Error("your password is incorecct")

}


    let credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(credentials);
    const userRef = doc(db, "userAuthList", credentials.user.uid);

    await setDoc(userRef, {
      fullname: fullname,
      email: email,
      password: password,
    });

    Swal.fire({
      title: 'Success!',
      background:'#000000',
      color:'#ffffff',
      text: 'You have been Registed Successfully Welcome to {SMEIP}.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    setTimeout(() => {
      window.location.href = "./login.html";
    }, 5000);
  } catch (error) {
    console.log(error.message);
  }
};

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
      text: 'You have been Registed Successfully Welcome to {SMEIP}.',
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

Submitregister.addEventListener('submit', registerUser);
