import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0N48toQW-_qKD_Jbp9qcFscGQEhc7SLY",
    authDomain: "king-clothing-db.firebaseapp.com",
    databaseURL: "https://king-clothing-db.firebaseio.com",
    projectId: "king-clothing-db",
    storageBucket: "king-clothing-db.appspot.com",
    messagingSenderId: "1035498845025",
    appId: "1:1035498845025:web:0913a24d10041cbbddcb20",
    measurementId: "G-0TPBC9QKBV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;