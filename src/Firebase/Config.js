// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAT43djSnPLE7bEau2qVYuSp1bqpCFfLuY",
    authDomain: "fatman-9b867.firebaseapp.com",
    projectId: "fatman-9b867",
    storageBucket: "fatman-9b867.appspot.com",
    messagingSenderId: "35443454336",
    appId: "1:35443454336:web:9686c8a99bd975347b1165",
    measurementId: "G-FK6SHKPP8D"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
