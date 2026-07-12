import { NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { doc, setDoc } from "firebase/firestore"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Basic structure validation to prevent empty saves
    if (!body.hero || !body.courses || !body.testimonials || !body.faqs || !body.pasGrid) {
      return NextResponse.json(
        { error: "Invalid data payload format. Must match LandingPageData schema." },
        { status: 400 }
      )
    }

    // Save configuration payload to Cloud Firestore
    const docRef = doc(db, "landingPage", "config")
    await setDoc(docRef, body)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("CMS Save Error:", error)
    return NextResponse.json(
      { error: "Failed to save configuration: " + error.message },
      { status: 500 }
    )
  }
}
