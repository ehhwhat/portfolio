// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get, set} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log('firebase.js');

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCkfExCT4AEV9tZjCBtp87pkq9eoSClH2k",
	authDomain: "portfolio-5a465.firebaseapp.com",
	databaseURL: "https://portfolio-5a465-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "portfolio-5a465",
	storageBucket: "portfolio-5a465.appspot.com",
	messagingSenderId: "667078575873",
	appId: "1:667078575873:web:6476c99630ec6c7d517d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

const dbRef = ref(getDatabase());
get(child(dbRef, `/`)).then((snapshot) => {
	if (snapshot.exists()) {
		console.log(snapshot.val());
	} else {
		console.log("No data available");
	}
}).catch((error) => {
	console.error(error);
});

// function writeUserData(userId, name, email, imageUrl) {
// 	const db = getDatabase();
// 	set(ref(db, 'boohoo/' + userId), {
// 		username: name,
// 		email: email,
// 		profile_picture : imageUrl
// 	});
// }
// writeUserData("testUserID1", "testName", "testEmail", "testImageURL");

export default database; // Don’t forget to use export default!
