// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2JABaDE5Z1PoC83GhDHDeqoUfO0s5d-w",
    authDomain: "netflix-gpt-a085e.firebaseapp.com",
    projectId: "netflix-gpt-a085e",
    storageBucket: "netflix-gpt-a085e.appspot.com",
    messagingSenderId: "220170071033",
    appId: "1:220170071033:web:d8dfc5f8787357b398eb28",
    measurementId: "G-N9NTMT67LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();