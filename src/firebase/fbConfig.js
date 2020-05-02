
// import firebase libraries that we need (auth,firestore which is the db)
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDQwzbL_eyZfef_DU7RCMLbgFALaQVBARs",
  authDomain: "marioplan-8f8a4.firebaseapp.com",
  databaseURL: "https://marioplan-8f8a4.firebaseio.com",
  projectId: "marioplan-8f8a4",
  storageBucket: "marioplan-8f8a4.appspot.com",
  messagingSenderId: "33662583137",
  appId: "1:33662583137:web:848cdd0432014401328520"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  export default firebase ;