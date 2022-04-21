// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDCRBubpgr-EMW4_-lJ801CVY-l9UfZDqs",
  authDomain: "genius-car-services-c0413.firebaseapp.com",
  projectId: "genius-car-services-c0413",
  storageBucket: "genius-car-services-c0413.appspot.com",
  messagingSenderId: "705613584305",
  appId: "1:705613584305:web:44a8b3fc4f9e9aa0528f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
