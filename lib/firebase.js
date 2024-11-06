// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBomc7Ngg423U_Dl9bZb5Bj_uDUqVZw9Vo",
  authDomain: "cinebird-app.firebaseapp.com",
  projectId: "cinebird-app",
  storageBucket: "cinebird-app.firebasestorage.app",
  messagingSenderId: "801545054311",
  appId: "1:801545054311:web:b2f25bc0a7fc00f2950cc2",
  measurementId: "G-ES0804KZB7"
};

  // if (getApps().length <= 0) {
  //   app = initializeApp(firebaseConfig)
  //   // Check that `window` is in scope for the analytics module!
  // }

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export { db }
