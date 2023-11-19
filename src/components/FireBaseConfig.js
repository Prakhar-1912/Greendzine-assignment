import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPs3Nb-AAj42FK32u2u_9SVEoaqvppCYs",
  authDomain: "greendzine-project.firebaseapp.com",
  projectId: "greendzine-project",
  storageBucket: "greendzine-project.appspot.com",
  messagingSenderId: "634916752327",
  appId: "1:634916752327:web:2cff51678ea58b3b3fa7e2"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);