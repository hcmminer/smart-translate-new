import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx6RJURFNRsxakjtP56pDhOYFdYJR6oCc",
  authDomain: "smart-translate-edf08.firebaseapp.com",
  projectId: "smart-translate-edf08",
  storageBucket: "smart-translate-edf08.appspot.com",
  messagingSenderId: "302089771639",
  appId: "1:302089771639:web:abbffb1a8346b7b9e9c472",
  measurementId: "G-D4672NDC5K"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = !getApps().length ? getAnalytics(app) : getApp();

export default app;
export { db, storage };
