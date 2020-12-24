import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9gS4zGY4wdAHQYifWVGDxgR8IucW5NEg",
    authDomain: "mech-levels.firebaseapp.com",
    projectId: "mech-levels",
    storageBucket: "mech-levels.appspot.com",
    messagingSenderId: "763479296832",
    appId: "1:763479296832:web:30201b7b9cbe72409bc8a5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
