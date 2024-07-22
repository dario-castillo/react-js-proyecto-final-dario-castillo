// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdrzMiVsm4eTe5TnqhvVGPE4YwG_QK_Es",
  authDomain: "dario-dibujos.firebaseapp.com",
  projectId: "dario-dibujos",
  storageBucket: "dario-dibujos.appspot.com",
  messagingSenderId: "209577775219",
  appId: "1:209577775219:web:0f930621376886c6091a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

