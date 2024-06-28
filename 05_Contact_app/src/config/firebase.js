// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd0ZE--1YygcC_uYBsMsnHwDhDCt1pjQs",
  authDomain: "vite-contact-99c7f.firebaseapp.com",
  projectId: "vite-contact-99c7f",
  storageBucket: "vite-contact-99c7f.appspot.com",
  messagingSenderId: "322779921497",
  appId: "1:322779921497:web:aaaa4420462f4ea96b4548"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
