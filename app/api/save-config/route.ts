import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

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

    const filePath = path.join(process.cwd(), "lib", "landing-page-data.json")
    
    // Write formatted JSON back to the local database file
    await fs.writeFile(filePath, JSON.stringify(body, null, 2), "utf-8")

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("CMS Save Error:", error)
    return NextResponse.json(
      { error: "Failed to save configuration: " + error.message },
      { status: 500 }
    )
  }
}
