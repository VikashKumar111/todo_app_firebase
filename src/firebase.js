
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAxLyWWocltbkKkF0i4Sjoo_BmItZcDDB0",
        authDomain: "todo-app-firebase-9154f.firebaseapp.com",
        projectId: "todo-app-firebase-9154f",
        storageBucket: "todo-app-firebase-9154f.appspot.com",
        messagingSenderId: "291787247526",
        appId: "1:291787247526:web:e8b23e9e97d37a9ba24967",
        measurementId: "G-ERTHXRQVKQ"
});

const db = firebaseApp.firestore();
export default db;