import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqUfVllVhgdOGX7R3TeCsL4OAuN2E8UzY",
  authDomain: "avgi-714cc.firebaseapp.com",
  projectId: "avgi-714cc",
  storageBucket: "avgi-714cc.firebasestorage.app",
  messagingSenderId: "888600389076",
  appId: "1:888600389076:web:5c1a3265984a1c8e6fe241"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
