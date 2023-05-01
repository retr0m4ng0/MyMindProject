import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyBTvrttsOCzzgUcsi_4goRZycUW-43VdCA",

  authDomain: "mymindjournalapp.firebaseapp.com",

  databaseURL: "https://mymindjournalapp-default-rtdb.firebaseio.com",

  projectId: "mymindjournalapp",

  storageBucket: "mymindjournalapp.appspot.com",

  messagingSenderId: "918189176123",

  appId: "1:918189176123:web:4f3a6c4e7c1758d9fcb31e"

};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));