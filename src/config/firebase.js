import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYbemzHNVoi9bQPEGsaFg9AGQprXHC0Lc",
  authDomain: "tiktok-ebac-757ec.firebaseapp.com",
  projectId: "tiktok-ebac-757ec",
  storageBucket: "tiktok-ebac-757ec.appspot.com",
  messagingSenderId: "1038158987932",
  appId: "1:1038158987932:web:3530067cce8768eb0a6359"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;