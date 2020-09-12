import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNl8uM_9hwlqsdF3Ax1v2G-n2Cnl1cF-c",
  authDomain: "crwn-db-18d78.firebaseapp.com",
  databaseURL: "https://crwn-db-18d78.firebaseio.com",
  projectId: "crwn-db-18d78",
  storageBucket: "crwn-db-18d78.appspot.com",
  messagingSenderId: "745226957467",
  appId: "1:745226957467:web:a55d0388be785064c80c3e",
  measurementId: "G-YDMGF01GBR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
