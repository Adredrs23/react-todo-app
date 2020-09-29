import firebase from "firebase";

var firebaseConfig = { 
    // YOUR__CONFIG_HERE
};

  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, firebase};