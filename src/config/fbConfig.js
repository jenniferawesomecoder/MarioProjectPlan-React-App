import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyA7mhmB6UEYa9QLkWzZXeGpgDgBg6uqpBU",
  authDomain: "projectplan-30217.firebaseapp.com",
  databaseURL: "https://projectplan-30217.firebaseio.com",
  projectId: "projectplan-30217",
  storageBucket: "projectplan-30217.appspot.com",
  messagingSenderId: "730750889688",
  appId: "1:730750889688:web:24e61ed8a0adfd294bb1ad",
  measurementId: "G-06W1HMZE8R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})
 

  export default firebase