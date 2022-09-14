import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjWGdSIEI-ffJzyvV5Q4_j2groRYUlsDM",
  authDomain: "eerste-test-88ade.firebaseapp.com",
  projectId: "eerste-test-88ade",
  storageBucket: "eerste-test-88ade.appspot.com",
  messagingSenderId: "953416393825",
  appId: "1:953416393825:web:a6116d7e976d1fa6f4f620"
};

// Initialize Firebase & Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}

