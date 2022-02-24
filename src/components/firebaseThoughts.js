// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get, set, onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log('firebaseThoughts.js');

// Your web app's Firebase configuration
const firebaseConfigThoughts = {
	apiKey: "AIzaSyCkfExCT4AEV9tZjCBtp87pkq9eoSClH2k",
	authDomain: "portfolio-5a465.firebaseapp.com",
	databaseURL: "https://portfolio-5a465-thoughts.europe-west1.firebasedatabase.app/",
	projectId: "portfolio-5a465",
	storageBucket: "portfolio-5a465.appspot.com",
	messagingSenderId: "667078575873",
	appId: "1:667078575873:web:6476c99630ec6c7d517d00"
};

// Initialize Firebase
const initializeAppThoughts = initializeApp(firebaseConfigThoughts, 'initializeAppThoughts');
// Get a reference to the database service
const databaseThoughts = getDatabase(initializeAppThoughts);
const dbRefThoughts = ref(getDatabase(initializeAppThoughts));


// const testRead = ref(databaseThoughts, '/');
// onValue(testRead, (snapshot) => {
// 	const data = snapshot.val();
// 	console.log('data');
// 	console.log(data);
// });

// get(child(dbRefThoughts, `/`)).then((snapshot) => {
// 	if (snapshot.exists()) {
// 		console.log(snapshot.val());
// 	} else {
// 		console.log("No data available");
// 	}
// }).catch((error) => {
// 	console.error(error);
// });

export default databaseThoughts; // Don’t forget to use export default!