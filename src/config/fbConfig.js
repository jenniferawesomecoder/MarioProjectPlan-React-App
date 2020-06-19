import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyBr4HGj5gYKJotb0CcDdiVqleuzyHMZbeE",
    authDomain: "projectblah-89b4b.firebaseapp.com",
    databaseURL: "https://projectblah-89b4b.firebaseio.com",
    projectId: "projectblah-89b4b",
    storageBucket: "projectblah-89b4b.appspot.com",
    messagingSenderId: "955177685139",
    appId: "1:955177685139:web:3fd0ba2353fff89d3f3d66",
    measurementId: "G-1ZQ314XBF4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshotes: true})
  firebase.analytics();

  export default firebase;