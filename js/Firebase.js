// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3eqi4ZxYO2eToFaFB1WMdFjL7w34cRUQ",
  authDomain: "saep-9febf.firebaseapp.com",
  databaseURL: "https://saep-9febf-default-rtdb.firebaseio.com",
  projectId: "saep-9febf",
  storageBucket: "saep-9febf.appspot.com",
  messagingSenderId: "87558912321",
  appId: "1:87558912321:web:472694f9f76fa221e109c0",
  measurementId: "G-HLHKDCWYB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);