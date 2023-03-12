import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYDQn5fIhUXJOXdQ5BMyTBhXfvafGfNYM",
  authDomain: "clone-81a0c.firebaseapp.com",
  projectId: "clone-81a0c",
  storageBucket: "clone-81a0c.appspot.com",
  messagingSenderId: "587553190002",
  appId: "1:587553190002:web:6900617a57efc1a5fcd2eb",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

const emailColRef = collection(db, "emails");

export { db, auth, provider, emailColRef };
