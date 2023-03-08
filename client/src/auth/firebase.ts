// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoGqo1Tq7G8GOg80RsUE8SBBSbU9g5qhk",
  authDomain: "snusbolaget-test.firebaseapp.com",
  projectId: "snusbolaget-test",
  storageBucket: "snusbolaget-test.appspot.com",
  messagingSenderId: "100501330322",
  appId: "1:100501330322:web:c404c291041ce8e3a1c94b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





export default auth;