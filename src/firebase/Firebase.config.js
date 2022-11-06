// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
    apiKey: "AIzaSyDf2LOY03OhBn4GguUweEPutCdRggj3X04",
    authDomain: "genius-car-e2926.firebaseapp.com",
    projectId: "genius-car-e2926",
    storageBucket: "genius-car-e2926.appspot.com",
    messagingSenderId: "606804166984",
    appId: "1:606804166984:web:c2a84b9f3d4b0a892e8b7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;