// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "mern-estate-fb1ca.firebaseapp.com",
  projectId: "mern-estate-fb1ca",
  storageBucket: "mern-estate-fb1ca.appspot.com",
  messagingSenderId: "956969246202",
  appId: "1:956969246202:web:f612c6672980735db5d843"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);