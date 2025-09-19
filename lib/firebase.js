// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiO1cDDmtrmIiL1xfINWhER35DSlbUwYQ",
  authDomain: "testcar-c177c.firebaseapp.com",
  projectId: "testcar-c177c",
  storageBucket: "testcar-c177c.firebasestorage.app",
  messagingSenderId: "1077366148904",
  appId: "1:1077366148904:web:aabc92b9ecda6d36de4a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  // Dynamic import for analytics to avoid SSR issues
  import('firebase/analytics').then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}
const db = getFirestore(app);

export { db };