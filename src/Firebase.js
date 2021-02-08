// First, install 'npm add firebase' firebase is a dependency (API)
// let's copy paste our firebase config
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyABlexnsrKC3x9R4rMj_gl7ZLOKF_EjHRs",
    authDomain: "photo-app-clone.firebaseapp.com",
    projectId: "photo-app-clone",
    storageBucket: "photo-app-clone.appspot.com",
    messagingSenderId: "763322424128",
    appId: "1:763322424128:web:17654c866d32fa645638a5",
    measurementId: "G-LRM78XGGSP"
  };

//! the following 'firebaseApp' connects/sets up our firebase, thus passing the 'firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig);
//! access to firebase database
const db = firebaseApp.firestore();
//! access to firebase authentication
const auth = firebase.auth();

// makes them accessible 
export { db, auth };
export default firebase