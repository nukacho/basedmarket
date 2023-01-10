// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfZby3xmXOGQFGlHBRHV7cDezVL4vG8G8",
  authDomain: "sigma-business.firebaseapp.com",
  projectId: "sigma-business",
  storageBucket: "sigma-business.appspot.com",
  messagingSenderId: "124121740833",
  appId: "1:124121740833:web:5b02c042717b278fd45560",
  measurementId: "G-WGJ2MZ2QMH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)