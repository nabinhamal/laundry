// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APP_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.EXPO_PUBLIC_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_APP_FIREBASE_MESSEGING_ID,
  appId: process.env.EXPO_PUBLIC_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth service for authentication
const auth = getAuth(app);

// Get the Firestore service for database access
const db = getFirestore();



export { auth, db };