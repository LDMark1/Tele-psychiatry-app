// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVnADyEbE3zmK56F4wC0-Y2zumxg_zrys",
  authDomain: "chat-app-e91a0.firebaseapp.com",
  projectId: "chat-app-e91a0",
  storageBucket: "chat-app-e91a0.appspot.com",
  messagingSenderId: "584556399216",
  appId: "1:584556399216:web:e17d03700d08856a69c2b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
