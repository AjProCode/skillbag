import { useState, useEffect } from "react"
import { db } from "./firebase"
import { doc, getDoc } from "firebase/firestore"
import landingPageData from "./landing-page-data.json"

export interface HeroPersona {
  eyebrow: string
  title: string
  description: string
  stats: string[]
  badge: string
  studentName: string
  tutorName: string
  studentBubble: string
  tutorBubble: string
  studentImage: string
  tutorImage: string
}

export interface Paspillar {
  problemTitle: string
  problemDesc: string
  solutionTitle: string
  solutionDesc: string
  iconName: string
  badgeText: string
}

export interface TestimonialItem {
  name: string
  role: string
  course: string
  transformation: string
  quote: string
  image: string
  isVideo: boolean
  videoDuration: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CourseItem {
  title: string
  image: string
  rating: number
  studentCount: number
  duration: string
  isPopular?: boolean
  isNewBatch?: boolean
  teacherName: string
  description: string
  level: string
  lessons: string
  format: string
  outcomes: string[]
}

export interface LandingPageData {
  hero: {
    kids: HeroPersona
    adults: HeroPersona
  }
  pasGrid: {
    title: string
    description: string
    pillars: Paspillar[]
  }
  courses: CourseItem[]
  testimonials: TestimonialItem[]
  faqs: FaqItem[]
}

export const initialData = landingPageData as LandingPageData

export function useLandingPageData() {
  const [data, setData] = useState<LandingPageData>(initialData)

  useEffect(() => {
    async function loadConfig() {
      try {
        const docRef = doc(db, "landingPage", "config")
        
        // Race the Firestore query against a 1.2-second timeout to prevent page hangs
        const docSnap = await Promise.race([
          getDoc(docRef),
          new Promise<any>((_, reject) => 
            setTimeout(() => reject(new Error("Firestore fetch timeout")), 1200)
          )
        ])
        
        if (docSnap && docSnap.exists()) {
          setData(docSnap.data() as LandingPageData)
        }
      } catch (err) {
        console.warn("CMS config fallback to static JSON:", err)
      }
    }

    // Only attempt Firestore query if credentials are set in .env.local
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      loadConfig()
    }
  }, [])

  return data
}

