// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase}from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwf2f2CIsbs0B848jQgmli2qS9m6osCaQ",
  authDomain: "canary-photos.firebaseapp.com",
  databaseURL: "https://canary-photos-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "canary-photos",
  storageBucket: "canary-photos.appspot.com",
  messagingSenderId: "795351184845",
  appId: "1:795351184845:web:ac18a18a2a430db1070084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);

export default database;