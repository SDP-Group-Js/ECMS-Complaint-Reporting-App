import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwPvkgtwOD6SGZV_J2LpLwq8mT9SZV76A",
  authDomain: "sdpgroupjs.firebaseapp.com",
  projectId: "sdpgroupjs",
  storageBucket: "sdpgroupjs.appspot.com",
  messagingSenderId: "866191024865",
  appId: "1:866191024865:web:3ff29f37126be87579cda0",
  measurementId: "G-4FDXVXNEE4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
