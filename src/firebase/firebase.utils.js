import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAF4GZ2dm4DvD4D132yJ0NvhRQVZh8MXOg',
  authDomain: 'crwn-db-6e2ca.firebaseapp.com',
  databaseURL: 'https://crwn-db-6e2ca.firebaseio.com',
  projectId: 'crwn-db-6e2ca',
  storageBucket: 'crwn-db-6e2ca.appspot.com',
  messagingSenderId: '317343642021',
  appId: '1:317343642021:web:a9fbabd47a34bf1201b84c',
  measurementId: 'G-XYDW2NNBRE',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
