// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfPG-YhwqFWxNkqs0JgpIJ8rZO0jVRmfI",
    authDomain: "laundry-sunshine.firebaseapp.com",
    projectId: "laundry-sunshine",
    storageBucket: "laundry-sunshine.firebasestorage.app",
    messagingSenderId: "698578150480",
    appId: "1:698578150480:web:2347f09b80ecfc84a4dd55",
    measurementId: "G-BHD6B6VHYL"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Initialize Analytics safely
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) getAnalytics(app);
    });
}

export { app, db, auth, storage };