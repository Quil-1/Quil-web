// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGAj3loc_ahog9hOstMKXRAY8CASRZ7k",
  authDomain: "quil-f0f5f.firebaseapp.com",
  projectId: "quil-f0f5f",
  storageBucket: "quil-f0f5f.appspot.com",
  messagingSenderId: "753894903333",
  appId: "1:753894903333:web:e4c04edd505d7363a2b9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);