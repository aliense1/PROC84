import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyACSpoGm2eEZ3pefDBVE4o_4aTXsP8W-Ew",
  authDomain: "e-rider-9622e.firebaseapp.com",
  projectId: "e-rider-9622e",
  storageBucket: "e-rider-9622e.appspot.com",
  messagingSenderId: "278841830624",
  appId: "1:278841830624:web:a32c27247e8f565127b485"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
