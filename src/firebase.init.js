import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB_dq_hKTzB5txahn126qgjMq_Pp3C5B5A",
	authDomain: "bookishbd-24.firebaseapp.com",
	projectId: "bookishbd-24",
	storageBucket: "bookishbd-24.appspot.com",
	messagingSenderId: "971435202340",
	appId: "1:971435202340:web:57f607a2249dddef4685b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;