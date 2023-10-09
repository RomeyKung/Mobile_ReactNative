import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChKOBtsnlBITeTUwm2iArv866xoJ3ofj8",
  authDomain: "mobilelab10-7668b.firebaseapp.com",
  projectId: "mobilelab10-7668b",
  storageBucket: "mobilelab10-7668b.appspot.com",
  messagingSenderId: "874639423049",
  appId: "1:874639423049:web:ac65bbaf3cd7b72dfb7198",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
