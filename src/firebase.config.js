// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDY1GhUR47WGpJcNhpq2gPTOKIyCJ1_oaw",
//     authDomain: "prueba-440b0.firebaseapp.com",
//     databaseURL: "https://prueba-440b0-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "prueba-440b0",
//     storageBucket: "prueba-440b0.appspot.com",
//     messagingSenderId: "799443941595",
//     appId: "1:799443941595:web:6d12fa146ec1308a20f4fe",
//     measurementId: "G-W9NBWXRCCF"
//   };
  
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


  // const firebaseConfig = {
  //   apiKey: "AIzaSyDzbra3gwYs5M3YthoMIuofG2QxCAdkmzc",
  //   authDomain: "mecae-11751.firebaseapp.com",
  //   projectId: "mecae-11751",
  //   storageBucket: "mecae-11751.appspot.com",
  //   messagingSenderId: "213099887832",
  //   appId: "1:213099887832:web:8a3ff62d35b844c184abad",
  //   measurementId: "G-RPDDN9R888"
  // };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()





// configuracion para el house marketplace
// ==========================================
// Firebase Setup For House Marketplace
// Create Firebase Project
// Create web app within firebase to get config values
// Install firebase in your project npm i firebase
// Create a config file in your project
// Add authentication for email/password and Google
// Create a user from Firebase
// Enable Firestore
// Add rules for firestore
// Enable storage
// Add rules for storage
// --------------------------------------------------
// // FIRESTORE RULES


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     // Listings
//     match /listings/{listing} {
//         allow read;
//         allow create: if request.auth != null;
//         allow update: if resource.data.userRef == request.auth.uid;
//         allow delete: if resource.data.userRef == request.auth.uid;
//     }

//     // Users
//     match /users/{user} {
//     	allow read;
//     	allow create;
//     	allow update: if request.auth.uid == user
//     }
//   }
// }




// // STORAGE RULES

// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read;
//       allow write: if
//       request.auth != null &&
//       request.resource.size < 2 * 1024 * 1024 && //2MB
//       request.resource.contentType.matches('image/.*')
//     }
//   }
// }


