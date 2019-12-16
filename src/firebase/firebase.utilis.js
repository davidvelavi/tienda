import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
  apiKey: "AIzaSyDt-Cg4hGreDznPUM05CqP3L_zagtMBkCI",
  authDomain: "kakarotto-6c5dc.firebaseapp.com",
  databaseURL: "https://kakarotto-6c5dc.firebaseio.com",
  projectId: "kakarotto-6c5dc",
  storageBucket: "kakarotto-6c5dc.appspot.com",
  messagingSenderId: "538931360055",
  appId: "1:538931360055:web:4eb95ed684e1557030aab2"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Se necesita crear un provider 
const provider = new firebase.auth.GoogleAuthProvider();

/*
  {@link https://developers.google.com/identity/protocols/OpenIDConnect#authenticationuriparameters}
  parametros para el setCustomParameters
*/
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;