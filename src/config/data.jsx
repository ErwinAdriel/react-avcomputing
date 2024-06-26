// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRw5mVBGe-PaxMkT7_bN37ashH5T40CEc",
  authDomain: "avcomputing-38d4e.firebaseapp.com",
  projectId: "avcomputing-38d4e",
  storageBucket: "avcomputing-38d4e.appspot.com",
  messagingSenderId: "539540543337",
  appId: "1:539540543337:web:ead152f97aa37695b30ff8",
  measurementId: "G-CY841KEP7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);