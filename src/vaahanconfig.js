// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1-pCbYraWDbZnrAeOS9SHtofLzHyKQZk",
  authDomain: "vaahan-b5da8.firebaseapp.com",
  projectId: "vaahan-b5da8",
  storageBucket: "vaahan-b5da8.appspot.com",
  messagingSenderId: "464339565232",
  appId: "1:464339565232:web:f8edf5c79631d8a5e21975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB,txtDB}