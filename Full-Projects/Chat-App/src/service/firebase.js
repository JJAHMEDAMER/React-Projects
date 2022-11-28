import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

try {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

// Passing off firebase.auth() instead of firebase.auth
// allows us to share the same instance of Firebase throughout
// the entire app whenever we import it from here.

export const myFirebase = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};
