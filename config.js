import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDqDNfIaTf8nL7APZKv_yhUMznVC7BqwYs",
    authDomain: "sowaysol.firebaseapp.com",
    projectId: "sowaysol",
    storageBucket: "sowaysol.appspot.com",
    messagingSenderId: "577379386051",
    appId: "1:577379386051:web:257cba9e91228f89959876",
    measurementId: "G-7YZJXB9XNC"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}





export { firebase };
