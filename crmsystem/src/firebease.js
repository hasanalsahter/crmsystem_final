import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crmsystem-17c1e.firebaseapp.com",
  projectId: "crmsystem-17c1e",
  storageBucket: "crmsystem-17c1e.appspot.com",
  messagingSenderId: "906746939333",
  appId: "1:906746939333:web:c161348de1a9a354246dac",
  measurementId: "G-7L85YFKP0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
