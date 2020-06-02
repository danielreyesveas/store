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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;