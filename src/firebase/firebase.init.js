// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa9IdS9f8c_Cf7FZt2nwInWzlKGpSR-VQ",
  authDomain: "crowd-funding-d0b75.firebaseapp.com",
  projectId: "crowd-funding-d0b75",
  storageBucket: "crowd-funding-d0b75.firebasestorage.app",
  messagingSenderId: "531569319737",
  appId: "1:531569319737:web:9d8e1c344921571e80d2e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;