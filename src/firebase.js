
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

export  const firebaseConfig = {
  apiKey: "AIzaSyBGiMaBhYw6hvYsfRwDqfOC-74QSp4w9-8",
  authDomain: "pokemon-app-8f833.firebaseapp.com",
  projectId: "pokemon-app-8f833",
  storageBucket: "pokemon-app-8f833.appspot.com",
  messagingSenderId: "339423384889",
  appId: "1:339423384889:web:92a82fd4c74f0272e504e8"
};



  const firebaseDb = initializeApp(firebaseConfig);//initializing the database with firebase

 export const db = getFirestore(firebaseDb)
 