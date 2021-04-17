import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAibgPtlUKfZTQK69KuOQyFd0rlzWwg3T4",
    authDomain: "red-wood-dev.firebaseapp.com",
    projectId: "red-wood-dev",
    storageBucket: "red-wood-dev.appspot.com",
    messagingSenderId: "1028142092602",
    appId: "1:1028142092602:web:1243bc53ab388b90a9c003",
    measurementId: "G-FBNL037NS9"
});

export const firebase_con = firebaseApp.firestore();
export const analytics = firebase.analytics()

