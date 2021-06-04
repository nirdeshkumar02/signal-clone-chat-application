import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5ntIOs9xQ9n1Qekbl5zAldn2xEQAxA9s",
  authDomain: "signal-clone-ap.firebaseapp.com",
  projectId: "signal-clone-ap",
  storageBucket: "signal-clone-ap.appspot.com",
  messagingSenderId: "906245335028",
  appId: "1:906245335028:web:a7df46d5f5073d2cc87ba1",
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
