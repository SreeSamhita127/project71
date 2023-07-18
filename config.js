import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAFQcTpwXc_RS_D6HSUAZ-VfVoyaojUJoc",
    authDomain: "e-bike-8fa3d.firebaseapp.com",
    projectId: "e-bike-8fa3d",
    storageBucket: "e-bike-8fa3d.appspot.com",
    messagingSenderId: "352320238490",
    appId: "1:352320238490:web:5d20508638248e8d0e4023"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
