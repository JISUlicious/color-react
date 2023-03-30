import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBfCIWjHkm-ePCbv0ko3uB5umBxyxqbDf0",
  authDomain: "color-react-2ea4a.firebaseapp.com",
  projectId: "color-react-2ea4a",
  storageBucket: "color-react-2ea4a.appspot.com",
  messagingSenderId: "1071023344422",
  appId: "1:1071023344422:web:c3f9b76b767b217ae60fe7",
  measurementId: "G-8R4TL9P3ZS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
