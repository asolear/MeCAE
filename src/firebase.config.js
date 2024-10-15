// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY1GhUR47WGpJcNhpq2gPTOKIyCJ1_oaw",
    authDomain: "prueba-440b0.firebaseapp.com",
    databaseURL: "https://prueba-440b0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "prueba-440b0",
    storageBucket: "prueba-440b0.appspot.com",
    messagingSenderId: "799443941595",
    appId: "1:799443941595:web:6d12fa146ec1308a20f4fe",
    measurementId: "G-W9NBWXRCCF"
  };
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()