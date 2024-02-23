// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigRSVP = {
	apiKey: "AIzaSyCkfExCT4AEV9tZjCBtp87pkq9eoSClH2k",
	authDomain: "portfolio-5a465.firebaseapp.com",
	databaseURL: "https://portfolio-5a465-rsvp.europe-west1.firebasedatabase.app/",
	projectId: "portfolio-5a465",
	storageBucket: "portfolio-5a465.appspot.com",
	messagingSenderId: "667078575873",
	appId: "1:667078575873:web:6476c99630ec6c7d517d00"
};

// Initialize Firebase
const initializeAppRSVP = initializeApp(firebaseConfigRSVP, 'initializeAppRSVP');
// Get a reference to the database service
const databaseRSVP = getDatabase(initializeAppRSVP);
//const dbRefThoughts = ref(getDatabase(initializeAppThoughts));

const exports = {
	databaseRSVP,
	initializeAppRSVP
}

export default exports; // Don’t forget to use export default!
