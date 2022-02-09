// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCkfExCT4AEV9tZjCBtp87pkq9eoSClH2k",
	authDomain: "portfolio-5a465.firebaseapp.com",
	databaseURL: "https://portfolio-5a465-thoughts.europe-west1.firebasedatabase.app/",
	projectId: "portfolio-5a465",
	storageBucket: "portfolio-5a465.appspot.com",
	messagingSenderId: "667078575873",
	appId: "1:667078575873:web:6476c99630ec6c7d517d00"
};

// Initialize Firebase
const test = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(db, '/');

let test2 = onValue(dbRef, (snapshot) => {
	const data = snapshot.val();
	console.log('Inside: dbRef');
	console.log(data);
	return data;
});

console.log("hi" +test2);
export default test2;
