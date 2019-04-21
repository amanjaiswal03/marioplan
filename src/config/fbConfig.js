import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBDH0cRVoLFUGm93yeIdkDaFWt-YKcjwSA",
    authDomain: "marioplan-a1517.firebaseapp.com",
    databaseURL: "https://marioplan-a1517.firebaseio.com",
    projectId: "marioplan-a1517",
    storageBucket: "marioplan-a1517.appspot.com",
    messagingSenderId: "485493645183"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;