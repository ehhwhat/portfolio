// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigDemo = {
	apiKey: "AIzaSyCkfExCT4AEV9tZjCBtp87pkq9eoSClH2k",
	authDomain: "portfolio-5a465.firebaseapp.com",
	databaseURL: "https://portfolio-5a465-demo.europe-west1.firebasedatabase.app/",
	projectId: "portfolio-5a465",
	storageBucket: "portfolio-5a465.appspot.com",
	messagingSenderId: "667078575873",
	appId: "1:667078575873:web:6476c99630ec6c7d517d00"
};

// Initialize Firebase
const initializeAppDemo = initializeApp(firebaseConfigDemo, 'initializeAppDemo');
// Get a reference to the database service
const databaseDemo = getDatabase(initializeAppDemo);
//const dbRefThoughts = ref(getDatabase(initializeAppThoughts));

export default databaseDemo; // Don’t forget to use export default!
