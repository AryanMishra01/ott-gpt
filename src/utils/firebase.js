// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByQa1SdY--zMMkGpp9F8MM8z9lrl7ZFNc",
  authDomain: "ott-gpt-26047.firebaseapp.com",
  projectId: "ott-gpt-26047",
  storageBucket: "ott-gpt-26047.appspot.com",
  messagingSenderId: "270182174471",
  appId: "1:270182174471:web:e44fb3cb812278c43ebfa2",
  measurementId: "G-NLPBPCWZ3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();