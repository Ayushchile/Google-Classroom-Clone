import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCznYueeEIcLHf05wZYrAsiyi4WHrsTKUo",
    authDomain: "classroom-clone-84c23.firebaseapp.com",
    projectId: "classroom-clone-84c23",
    storageBucket: "classroom-clone-84c23.appspot.com",
    messagingSenderId: "668499013436",
    appId: "1:668499013436:web:50ddf58de0ec9fd2b63839"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;