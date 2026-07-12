import { useState, useEffect } from "react"
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
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("skillbag_cms_data")
      if (saved) {
        try {
          setData(JSON.parse(saved))
        } catch (e) {
          console.error("Failed to parse saved CMS data:", e)
        }
      }
    }
  }, [])

  return data
}

