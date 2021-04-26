import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5Jh390AHqBnU3IGtaWEU3vDsOWgl7OBk",
    authDomain: "netflix-build-e0d67.firebaseapp.com",
    projectId: "netflix-build-e0d67",
    storageBucket: "netflix-build-e0d67.appspot.com",
    messagingSenderId: "143183068950",
    appId: "1:143183068950:web:528cb7fa1e8a73fed95a37"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;