// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeVjkqskLYclUBN4mflYAuWHnHkbDoCP4",
  authDomain: "insta-clone-886ef.firebaseapp.com",
  projectId: "insta-clone-886ef",
  storageBucket: "insta-clone-886ef.appspot.com",
  messagingSenderId: "439839805384",
  appId: "1:439839805384:web:b63706f945a5903b6ebafd",
  measurementId: "G-67G3DCZSYH",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
