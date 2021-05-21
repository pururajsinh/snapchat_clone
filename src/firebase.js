import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIT_D2O8SAJ29g0Cpkb0zulnhayM1Hv7A",
  authDomain: "snapchat-clone-55022.firebaseapp.com",
  projectId: "snapchat-clone-55022",
  storageBucket: "snapchat-clone-55022.appspot.com",
  messagingSenderId: "591298374223",
  appId: "1:591298374223:web:94ac71c05cf04f9220583a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
