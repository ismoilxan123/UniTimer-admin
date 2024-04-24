// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyliMVMU--KsivIaHWGtaNMRVslG86ars",
  authDomain: "unitime-planner.firebaseapp.com",
  projectId: "unitime-planner",
  storageBucket: "unitime-planner.appspot.com",
  messagingSenderId: "157438190025",
  appId: "1:157438190025:web:9cc9e6641443eabc310818",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
