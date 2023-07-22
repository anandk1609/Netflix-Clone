import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkIgyGnCjv6vIvjuBimlX2J4alF1pANCU",
  authDomain: "netflix-clone-2009.firebaseapp.com",
  projectId: "netflix-clone-2009",
  storageBucket: "netflix-clone-2009.appspot.com",
  messagingSenderId: "973058759756",
  appId: "1:973058759756:web:860ce85615a9b29dd8a8e9",
  measurementId: "G-L7XSMFWWS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);