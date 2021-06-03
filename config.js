import firebase from 'firebase';


// var firebaseConfig = {
//     apiKey: "AIzaSyASyOjOtJla-X-b3io2eLoaUc_bIRFSIIc",
//     authDomain: "book-santa-app.firebaseapp.com",
//     databaseURL: "https://book-santa-app.firebaseio.com",
//     projectId: "book-santa-app",
//     storageBucket: "book-santa-app.appspot.com",
//     messagingSenderId: "69634746716",
//     appId: "1:69634746716:web:6fbbfc110fb4475365f999",
//     measurementId: "G-DLB7XC0JPL"
//   };
var firebaseConfig = {
    apiKey: "AIzaSyCV0NZzhAtIjCaAZ96Ti4ndGNUr3XrdNxE",
    authDomain: "book-santa-c0dbf.firebaseapp.com",
    databaseURL: "https://book-santa-c0dbf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "book-santa-c0dbf",
    storageBucket: "book-santa-c0dbf.appspot.com",
    messagingSenderId: "294321104909",
    appId: "1:294321104909:web:8e40833afc67e1d0de8d44"
  };


// Initialize Firebase
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
