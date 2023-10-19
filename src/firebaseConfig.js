// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import the necessary function for Firestore
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIUVnT_VstMOreEvVJu8116Ep_g9BU4Rk",
  authDomain: "reactwidget.firebaseapp.com",
  projectId: "reactwidget",
  storageBucket: "reactwidget.appspot.com",
  messagingSenderId: "293044646797",
  appId: "1:293044646797:web:d3bac213112757496283c4",
  measurementId: "G-1LJYMDJGEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app); // Use the getFirestore function

const analytics = getAnalytics(app);

// Correctly export the firestore object
export { firestore };
