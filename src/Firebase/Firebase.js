import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCPSH6NaAmRtEVzmUS9Y87_BpMUajXbeIk",
  authDomain: "admin-dashboard-d9f3b.firebaseapp.com",
  projectId: "admin-dashboard-d9f3b",
  storageBucket: "admin-dashboard-d9f3b.appspot.com",
  messagingSenderId: "336145959440",
  appId: "1:336145959440:web:74acdf5a399f52e06f9895",
  measurementId: "G-YTYR9NGNGQ",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
