import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDEv3g7_DQExRyC-83Xba_Orrv-G4jtYLw",
  authDomain: "crmsystem-17c1e.firebaseapp.com",
  projectId: "crmsystem-17c1e",
  storageBucket: "crmsystem-17c1e.appspot.com",
  messagingSenderId: "906746939333",
  appId: "1:906746939333:web:c161348de1a9a354246dac",
  measurementId: "G-7L85YFKP0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
