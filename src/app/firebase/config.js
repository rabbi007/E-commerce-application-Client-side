import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2FnX5nex8gdAs7yq-Q-G35xmFht0dIXo",
  authDomain: "ph-assignments-d86da.firebaseapp.com",
  projectId: "ph-assignments-d86da",
  storageBucket: "ph-assignments-d86da.firebasestorage.app",
  messagingSenderId: "975269383144",
  appId: "1:975269383144:web:4d1c1fd284ff7ab754325d",
  measurementId: "G-29S95WQMLE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);