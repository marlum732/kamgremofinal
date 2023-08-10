// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-9zzdcoaqRQvXyq-0GdJHL-Qb4KobWzE",
  authDomain: "kamgremo.firebaseapp.com",
  databaseURL: "https://kamgremo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kamgremo",
  storageBucket: "kamgremo.appspot.com",
  messagingSenderId: "129846098259",
  appId: "1:129846098259:web:ae5db9a84f66d60a7c89a6",
  measurementId: "G-JLFWN1Y4VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Initialize the authentication module