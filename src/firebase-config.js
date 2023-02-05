// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJW1lwmnZwfzOUqkjPw5YP55iDI3uaOM0",
  authDomain: "otarcy-react.firebaseapp.com",
  projectId: "otarcy-react",
  storageBucket: "otarcy-react.appspot.com",
  messagingSenderId: "1052699547494",
  appId: "1:1052699547494:web:40e9386c5e6c1e64f01aa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)