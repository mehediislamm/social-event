// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3aXmU3YwkDw9XBLwRjJhkieBJRq7m3XE",
  authDomain: "social-event-birthday-party.firebaseapp.com",
  projectId: "social-event-birthday-party",
  storageBucket: "social-event-birthday-party.appspot.com",
  messagingSenderId: "572106063631",
  appId: "1:572106063631:web:d8d56b84127da9567d487a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;