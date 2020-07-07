import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYxnC4W9DWrlZtSLJKdDhHGswNZiQqd5g",
  authDomain: "testfirebase-2c0e1.firebaseapp.com",
  databaseURL: "https://testfirebase-2c0e1.firebaseio.com",
  projectId: "testfirebase-2c0e1",
  storageBucket: "testfirebase-2c0e1.appspot.com",
  messagingSenderId: "35296136453",
  appId: "1:35296136453:web:2d65a54b87a3e22a25bb6c",
};

const app = firebase.initializeApp(firebaseConfig);
// export const db = app.database();
export default app;
