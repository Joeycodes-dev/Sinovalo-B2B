import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCToYBlSzkpvnu732hzludZ8fplCDQojH4",
  authDomain: "devsoft-1.firebaseapp.com",
  databaseURL: "https://devsoft-1.firebaseio.com",
  projectId: "devsoft-1",
  storageBucket: "devsoft-1.appspot.com",
  messagingSenderId: "39267341924",
  appId: "1:39267341924:web:14bad86e1adc79ea9cf171"
};
firebase.initializeApp(firebaseConfig);



export default firebase.auth();