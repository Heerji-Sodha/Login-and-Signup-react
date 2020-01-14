import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyD7fkJ8SWkXNazPfgkbrf7Z7yENQRz0pVQ",
  authDomain: "hackathon-a8f60.firebaseapp.com",
  databaseURL: "https://hackathon-a8f60.firebaseio.com",
  projectId: "hackathon-a8f60",
  storageBucket: "hackathon-a8f60.appspot.com",
  messagingSenderId: "433335431821",
  appId: "1:433335431821:web:9f4a5ccfd5c07df4c1e8c4",
  measurementId: "G-BL4H47YH75"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase