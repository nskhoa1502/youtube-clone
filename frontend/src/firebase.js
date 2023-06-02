import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "clonetube-3c24e.firebaseapp.com",
  projectId: "clonetube-3c24e",
  storageBucket: "clonetube-3c24e.appspot.com",
  messagingSenderId: "961934056418",
  appId: "1:961934056418:web:5a7a95a84ef03d53b6f7bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
