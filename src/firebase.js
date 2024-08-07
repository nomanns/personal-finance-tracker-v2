// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLG52mfripFZFMgBvwBkQ3m7eg8ZXceaI",
  authDomain: "financial-services-dd4a2.firebaseapp.com",
  projectId: "financial-services-dd4a2",
  storageBucket: "financial-services-dd4a2.appspot.com",
  messagingSenderId: "769226555297",
  appId: "1:769226555297:web:2e18063c337542e35895e0",
  measurementId: "G-LYVSEFF5VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db, auth, provider}