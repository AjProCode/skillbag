import { NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { doc, setDoc } from "firebase/firestore"

export async function POST(request: Request) {
  try {
    // Check if credentials are loaded on the server
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      const loadedKeys = Object.keys(process.env).filter(k => k.startsWith("NEXT_PUBLIC"))
      console.error("Firebase config keys are missing on Next.js server. Loaded keys:", loadedKeys)
      return NextResponse.json(
        { error: `Firebase credentials not loaded (Project ID is undefined). Server env keys loaded: ${loadedKeys.join(", ") || "None"}. Please restart your dev server.` },
        { status: 500 }
      )
    }

    const body = await request.json()

    // Basic structure validation to prevent empty saves
    if (!body.hero || !body.courses || !body.testimonials || !body.faqs || !body.pasGrid) {
      return NextResponse.json(
        { error: "Invalid data payload format. Must match LandingPageData schema." },
        { status: 400 }
      )
    }

    // Save configuration payload to Cloud Firestore (with a 2-second timeout fallback)
    const docRef = doc(db, "landingPage", "config")
    await Promise.race([
      setDoc(docRef, body),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Firestore write timeout. Please check your credentials in .env.local")), 2000)
      )
    ])

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("CMS Save Error:", error)
    return NextResponse.json(
      { error: "Failed to save configuration: " + error.message },
      { status: 500 }
    )
  }
}
