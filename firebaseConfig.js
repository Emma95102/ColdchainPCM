// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD12I3-14MCI6TrJpjlCblkj4I4RYgE58k",
  authDomain: "pcmdatabase-d765f.firebaseapp.com",
  projectId: "pcmdatabase-d765f",
  storageBucket: "pcmdatabase-d765f.firebasestorage.app",
  messagingSenderId: "434039819276",
  appId: "1:434039819276:web:36b24ee6aa883ad19e7229"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
