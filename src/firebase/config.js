import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDJONzNU5MNNkshTlW8Q2RBc4UBEwjO1vA",
  authDomain: "thedojosite-74f89.firebaseapp.com",
  projectId: "thedojosite-74f89",
  storageBucket: "thedojosite-74f89.appspot.com",
  messagingSenderId: "353907938564",
  appId: "1:353907938564:web:ff5d1a17b0f91108d2ac51",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
// timestamp
const timestamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth, projectStorage, timestamp };
