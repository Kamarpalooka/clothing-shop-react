import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDsYClMxviNoXxMekU-woZ1e_cPtxn91Hw",
    authDomain: "clothingshop-react-a0b66.firebaseapp.com",
    projectId: "clothingshop-react-a0b66",
    storageBucket: "clothingshop-react-a0b66.appspot.com",
    messagingSenderId: "477324521487",
    appId: "1:477324521487:web:12fb2eb6a4114d6f5c337a",
    measurementId: "G-EKPTD9SE41"
};

firebase.initializeApp(config)
  
export const auth = firebase.auth();
export const firestore = firebase.firestore()


// -----------[Google authentication utility]
const provider = new firebase.auth.GoogleAuthProvider();
// to trigger google pop ups when using googleauth
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =  () => auth.signInWithPopup(provider);


// [export defautl firebase library incase we need the whole thing]
export default firebase;