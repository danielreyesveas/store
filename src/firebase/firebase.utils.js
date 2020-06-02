import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCE3NmzfMOCV9K8JqSEFbeErENxYCdjGOo",
    authDomain: "store-crwn.firebaseapp.com",
    databaseURL: "https://store-crwn.firebaseio.com",
    projectId: "store-crwn",
    storageBucket: "store-crwn.appspot.com",
    messagingSenderId: "1041390519712",
    appId: "1:1041390519712:web:0fbbf484cc3c72ce4810c5",
    measurementId: "G-ER20ZRFR0Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;