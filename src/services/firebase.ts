import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAOR-K2pdY698GrWQGiY853MNqhGBt1Xls",
	authDomain: "kira-corretagem-app.firebaseapp.com",
	projectId: "kira-corretagem-app",
	storageBucket: "kira-corretagem-app.appspot.com",
	messagingSenderId: "197276588201",
	appId: "1:197276588201:web:af8aa1c1b8a28d266f71b8",
	measurementId: "G-DJ3RGDV684",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const firestore = firebase.firestore();

export { firebase, auth, firestore };
