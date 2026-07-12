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
    
    try {
      // 1. Try direct write to local file
      await fs.writeFile(filePath, JSON.stringify(body, null, 2), "utf-8")
      return NextResponse.json({ success: true })
    } catch (writeError: any) {
      console.warn("Direct write failed, trying FS Helper daemon fallback:", writeError.message)
      
      // 2. If EROFS or permission error occurs, try writing via FS Helper daemon
      const response = await fetch("http://127.0.0.1:3001/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        const errData = await response.json()
        throw new Error(errData.error || "FS Helper write failed")
      }

      return NextResponse.json({ success: true })
    }
  } catch (error: any) {
    console.error("CMS Save Error:", error)
    return NextResponse.json(
      { error: "Failed to save configuration: " + error.message },
      { status: 500 }
    )
  }
}
