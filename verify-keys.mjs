import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsq_MdfTKx0m98IXdQZNbRgzpS2UHnKw8",
  authDomain: "skillbag-651cf.firebaseapp.com",
  projectId: "skillbag-651cf",
  storageBucket: "skillbag-651cf.firebasestorage.app",
  messagingSenderId: "425163947728",
  appId: "1:425163947728:web:c3ea1b3017b71cfa41e8d5",
  measurementId: "G-2XJCBXQ1WH"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function run() {
  try {
    const docRef = doc(db, "landingPage", "config")
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const data = docSnap.data()
      console.log("Document keys in Firestore:", Object.keys(data))
      console.log("hero exists:", !!data.hero)
      console.log("courses exists:", !!data.courses)
      console.log("testimonials exists:", !!data.testimonials)
      console.log("faqs exists:", !!data.faqs)
      console.log("pasGrid exists:", !!data.pasGrid)
    } else {
      console.log("No config document found in Firestore!")
    }
  } catch (err) {
    console.error("Error:", err.message)
  }
}

run()
