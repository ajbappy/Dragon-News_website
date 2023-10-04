// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAssCNU7OaFghwAflxRtuHIx952OaBkcX0",
  authDomain: "dragon-news-d8669.firebaseapp.com",
  projectId: "dragon-news-d8669",
  storageBucket: "dragon-news-d8669.appspot.com",
  messagingSenderId: "1045753650542",
  appId: "1:1045753650542:web:6ffc50e096e697c889f57f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
