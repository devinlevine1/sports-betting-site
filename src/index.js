// External Imports
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

// Internal Imports
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App/Styles/landing.css";

// Firebase config info
const firebaseConfig = {
  apiKey: "AIzaSyBL0p1jEQ1ALfj7WxK8vBuVKSgoOl9Tn6c",
  authDomain: "sports-bet-94b22.firebaseapp.com",
  projectId: "sports-bet-94b22",
  storageBucket: "sports-bet-94b22.appspot.com",
  messagingSenderId: "629141819373",
  appId: "1:629141819373:web:0fa93222f290df775d61e4",
  measurementId: "G-F4SWWRECZ4",
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other firebase services on firebase instance
firebase.firestore();

// Emulator setup
firebase.auth().useEmulator("http://localhost:9099/");
firebase.firestore().useEmulator("localhost", 8080);
firebase.functions().useEmulator("localhost", 5001);
// firebase.pubsub().useEmulator("localhost", 5005);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
