import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsq_MdfTKx0m98IXdQZNbRgzpS2UHnKw8",
  authDomain: "skillbag-651cf.firebaseapp.com",
  projectId: "skillbag-651cf",
  storageBucket: "skillbag-651cf.firebasestorage.app",
  messagingSenderId: "425163947728",
  appId: "1:425163947728:web:c3ea1b3017b71cfa41e8d5",
  measurementId: "G-2XJCBXQ1WH"
}

// Prevent re-initialization during Next.js hot-reloads
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { app, db }
