import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWTnzBtdXk06FnAi1Dc0WzGrsANLu3buA",
    authDomain: "linkedin-clone-5bf56.firebaseapp.com",
    projectId: "linkedin-clone-5bf56",
    storageBucket: "linkedin-clone-5bf56.appspot.com",
    messagingSenderId: "243546374694",
    appId: "1:243546374694:web:2c15ab043127cb93509ce7",
    measurementId: "G-0C5R7B7BL8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebaseApp.auth();

export { auth }; 
export default db;