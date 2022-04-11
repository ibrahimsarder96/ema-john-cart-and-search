// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSxraZr_dk2k4jwov5LpaSAkV99ZAxgdI",
  authDomain: "ema-john-simple-b099e.firebaseapp.com",
  projectId: "ema-john-simple-b099e",
  storageBucket: "ema-john-simple-b099e.appspot.com",
  messagingSenderId: "625340372052",
  appId: "1:625340372052:web:69629757c307e2fa7c89c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;