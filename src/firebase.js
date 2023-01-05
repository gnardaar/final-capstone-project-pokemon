
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyBhICdDobrInG_dHwilH8CGD_vcssBVLKc",
    authDomain: "pokemon-app-f7162.firebaseapp.com",
    projectId: "pokemon-app-f7162",
    storageBucket: "pokemon-app-f7162.appspot.com",
    messagingSenderId: "680888499724",
    appId: "1:680888499724:web:0aaf430b0a7efef8d6f829"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();