import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCo1qwFu5WEmzy8P0gCLfhGhTG_qeQSGH8",
    authDomain: "erecruitment-71104.firebaseapp.com",
    projectId: "erecruitment-71104",
    storageBucket: "erecruitment-71104.appspot.com",
    messagingSenderId: "413638102450",
    appId: "1:413638102450:web:9db15b77280272fed968ab",
    measurementId: "G-LW3WR80V3E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);