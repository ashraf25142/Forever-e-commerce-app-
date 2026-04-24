// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "forever-1ab74.firebaseapp.com",
    projectId: "forever-1ab74",
    storageBucket: "forever-1ab74.firebasestorage.app",
    messagingSenderId: "475062424380",
    appId: "1:475062424380:web:61b8a3d6bf644a80074439",
    measurementId: "G-6HVJH4EXQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)