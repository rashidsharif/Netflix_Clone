
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFCZ3DDQRw_2SoPhQ-toBcS8ua1fi3Viw",
  authDomain: "netflix-project-140bb.firebaseapp.com",
  projectId: "netflix-project-140bb",
  storageBucket: "netflix-project-140bb.appspot.com",
  messagingSenderId: "165304421700",
  appId: "1:165304421700:web:9944eb3bd2fcb22995db11",
  measurementId: "G-7E1THMCRHT"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)