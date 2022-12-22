// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF30L8zv3_618pom9ZajJu2fnrdBt9_S0",
  authDomain: "ihlprodlib.firebaseapp.com",
  projectId: "ihlprodlib",
  storageBucket: "ihlprodlib.appspot.com",
  messagingSenderId: "501241710150",
  appId: "1:501241710150:web:8681c511606993b7682c47",
};

// Initialize Firebase
if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}
//const app = initializeApp(firebaseConfig);

export { firebase };
