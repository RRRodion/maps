import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiZZwNRhXKGcLgrErOSlkny4XIhWJjK2w",
    authDomain: "project-5799320334842245959.firebaseapp.com",
    projectId: "project-5799320334842245959",
    storageBucket: "project-5799320334842245959.appspot.com",
    messagingSenderId: "829951349570",
    appId: "1:829951349570:web:084ad89c7f119502b6eedb",
    measurementId: "G-QC96VQP544"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);