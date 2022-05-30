import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEwf-ZFo6NGc32GQnsD0375ZxjJJTmk4A",
  authDomain: "fyp-invetigation-team.firebaseapp.com",
  projectId: "fyp-invetigation-team",
  storageBucket: "fyp-invetigation-team.appspot.com",
  messagingSenderId: "972245658886",
  appId: "1:972245658886:web:98a572d6d558f1428ec287",
  measurementId: "G-KM3KEV567F"
};
firebase.initializeApp(firebaseConfig);
const storage=firebase.storage();
export default storage;