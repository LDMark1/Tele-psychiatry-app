// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getDatabase} from "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVt6BMs1e5yZP921mHHyx2RHZAJvp1ZSw",
  authDomain: "telepsychiatry-app.firebaseapp.com",
  databaseURL: "https://telepsychiatry-app-default-rtdb.firebaseio.com",
  projectId: "telepsychiatry-app",
  storageBucket: "telepsychiatry-app.appspot.com",
  messagingSenderId: "968564548318",
  appId: "1:968564548318:web:b9bdf019a2c3666833d84f",
  measurementId: "G-S1D7VVXKN0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export const dataRef = firebase.database();
export default firebase;



export const auth = getAuth(app);
export const db = getFirestore(app);


