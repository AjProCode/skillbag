"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  Save, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Sparkles, 
  Users, 
  Video, 
  MessageSquare, 
  HelpCircle, 
  Check, 
  BookOpen, 
  AlertCircle 
} from "lucide-react"
import { initialData, LandingPageData, CourseItem, TestimonialItem, FaqItem } from "@/lib/landing-page-data"
import { db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"

type EditorTab = "hero" | "pas" | "courses" | "testimonials" | "faqs"

export default function AdminPage() {
  const router = useRouter()
  const [data, setData] = useState<LandingPageData>(initialData)
  const [activeTab, setActiveTab] = useState<EditorTab>("hero")
  const [isReadOnly, setIsReadOnly] = useState(false)
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Load config from Firestore on mount
  useEffect(() => {
    async function loadConfig() {
      try {
        const docRef = doc(db, "landingPage", "config")
        const docSnap = await Promise.race([
          getDoc(docRef),
          new Promise<any>((_, reject) => 
            setTimeout(() => reject(new Error("Firestore fetch timeout")), 1200)
          )
        ])
        if (docSnap && docSnap.exists()) {
          const fetchedData = docSnap.data() as LandingPageData
          if (fetchedData && fetchedData.courses && fetchedData.hero && fetchedData.pasGrid && fetchedData.testimonials && fetchedData.faqs) {
            setData(fetchedData)
          }
        }
      } catch (err) {
        console.warn("CMS config fallback to static JSON:", err)
      }
    }
    loadConfig()
  }, [])

  const handleSave = async () => {
    setStatus("saving")
    setIsReadOnly(false)
    try {
      const response = await fetch("/api/save-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errData = await response.json()
        throw new Error(errData.error || "Failed to save configuration")
      }

      setStatus("saved")
      setTimeout(() => setStatus("idle"), 3000)
      router.refresh()
    } catch (err: any) {
      console.error("Save error caught:", err)
      setStatus("error")
      setErrorMessage(err.message || "An unknown error occurred")
    }
  }

  // Helper to update deeply nested hero settings
  const updateHero = (persona: "kids" | "adults", field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [persona]: {
          ...prev.hero[persona],
          [field]: value
        }
      }
    }))
  }

  const updateHeroStat = (persona: "kids" | "adults", index: number, value: string) => {
    setData((prev) => {
      const updatedStats = [...prev.hero[persona].stats]
      updatedStats[index] = value
      return {
        ...prev,
        hero: {
          ...prev.hero,
          [persona]: {
            ...prev.hero[persona],
            stats: updatedStats
          }
        }
      }
    })
  }

  // Update PAS Grid settings
  const updatePasGrid = (field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      pasGrid: {
        ...prev.pasGrid,
        [field]: value
      }
    }))
  }

  const updatePasPillar = (index: number, field: string, value: any) => {
    setData((prev) => {
      const updatedPillars = [...prev.pasGrid.pillars]
      updatedPillars[index] = {
        ...updatedPillars[index],
        [field]: value
      }
      return {
        ...prev,
        pasGrid: {
          ...prev.pasGrid,
          pillars: updatedPillars
        }
      }
    })
  }

  // Courses Helpers
  const updateCourse = (index: number, field: keyof CourseItem, value: any) => {
    setData((prev) => {
      const updatedCourses = [...prev.courses]
      updatedCourses[index] = {
        ...updatedCourses[index],
        [field]: value
      } as CourseItem
      return {
        ...prev,
        courses: updatedCourses
      }
    })
  }

  const addCourse = () => {
    const newCourse: CourseItem = {
      title: "New Live Skills Course",
      image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      studentCount: 150,
      duration: "6 weeks",
      isPopular: false,
      isNewBatch: true,
      teacherName: "Skillbag Certified Coach",
      description: "Enter a brief descriptive pitch explaining outcomes and interactive drills.",
      level: "All Levels",
      lessons: "12 live sessions",
      format: "Live online lessons",
      outcomes: ["Acquire core fundamentals confidently", "Master structured exercises"]
    }
    setData((prev) => ({
      ...prev,
      courses: [...prev.courses, newCourse]
    }))
  }

  const removeCourse = (index: number) => {
    setData((prev) => ({
      ...prev,
      courses: prev.courses.filter((_, i) => i !== index)
    }))
  }

  // Testimonials Helpers
  const updateTestimonial = (index: number, field: keyof TestimonialItem, value: any) => {
    setData((prev) => {
      const updatedTestimonials = [...prev.testimonials]
      updatedTestimonials[index] = {
        ...updatedTestimonials[index],
        [field]: value
      } as TestimonialItem
      return {
        ...prev,
        testimonials: updatedTestimonials
      }
    })
  }

  const addTestimonial = () => {
    const newTestimonial: TestimonialItem = {
      name: "New Student",
      role: "Parent / Student",
      course: "Public Speaking",
      transformation: "Gained structural confidence",
      quote: "Write a high-converting transformational review of their experience.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      isVideo: false,
      videoDuration: ""
    }
    setData((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, newTestimonial]
    }))
  }

  const removeTestimonial = (index: number) => {
    setData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((_, i) => i !== index)
    }))
  }

  // FAQ Helpers
  const updateFaq = (index: number, field: keyof FaqItem, value: any) => {
    setData((prev) => {
      const updatedFaqs = [...prev.faqs]
      updatedFaqs[index] = {
        ...updatedFaqs[index],
        [field]: value
      } as FaqItem
      return {
        ...prev,
        faqs: updatedFaqs
      }
    })
  }

  const addFaq = () => {
    const newFaq: FaqItem = {
      question: "Frequently Asked Question?",
      answer: "Provide a detailed answer clarifying objections regarding batch timing, costs, or refund policies."
    }
    setData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, newFaq]
    }))
  }

  const removeFaq = (index: number) => {
    setData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-20">
      
      {/* CMS Sticky Header Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 px-6 py-4 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 transition active:scale-95"
            >
              <ArrowLeft className="size-3.5" />
              Back to Site
            </a>
            <div>
              <h1 className="text-lg font-black text-slate-900 leading-none">Skillbag CMS Panel</h1>
              <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Landing Page Content Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Status alerts */}
            {status === "saving" && (
              <span className="text-xs font-bold text-indigo-600 animate-pulse flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-indigo-600 animate-ping" />
                Publishing live changes...
              </span>
            )}
            {status === "saved" && (
              <div className="text-xs font-bold text-emerald-600 flex flex-col items-end">
                <span className="flex items-center gap-1">
                  <Check className="size-4" />
                  Changes saved successfully!
                </span>
                {isReadOnly && (
                  <span className="text-[10px] text-amber-600 font-extrabold mt-0.5 max-w-[280px] text-right">
                    ⚠️ Server is read-only (EROFS). Fallback saved to browser memory.
                  </span>
                )}
              </div>
            )}
            {status === "error" && (
              <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                <AlertCircle className="size-4 shrink-0" />
                <span>Error: {errorMessage}</span>
              </span>
            )}

            <button
              onClick={handleSave}
              disabled={status === "saving"}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-900 hover:bg-indigo-950 disabled:bg-slate-300 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 shadow-md transition active:scale-97 cursor-pointer"
            >
              <Save className="size-4" />
              Publish Changes
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        
        {/* Editor Tabs Grid */}
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          
          {/* Sidebar Nav */}
          <aside className="flex flex-row flex-wrap lg:flex-col gap-2 pb-4 lg:pb-0">
            {[
              { id: "hero", label: "Hero Persona Switcher", icon: Sparkles },
              { id: "pas", label: "PAS Compare Grid", icon: AlertCircle },
              { id: "courses", label: "Course Catalog", icon: BookOpen },
              { id: "testimonials", label: "Wall of Love Reviews", icon: Users },
              { id: "faqs", label: "FAQ Accordions", icon: HelpCircle },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as EditorTab)}
                  className={`flex-shrink-0 flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-bold transition-all cursor-pointer ${
                    isActive 
                      ? "bg-indigo-900 border border-indigo-950 text-white shadow-sm animate-pulse"
                      : "bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              )
            })}
          </aside>

          {/* Form Content Area */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            
            {/* HERO SECTION CONFIG EDITOR */}
            {activeTab === "hero" && (
              <div className="space-y-10">
                <div className="border-b border-slate-100 pb-5">
                  <h2 className="text-xl font-extrabold text-slate-900">Hero Persona Switcher Settings</h2>
                  <p className="text-xs text-muted-foreground mt-1">Configure copy, bullet stats, and images for Kids vs. Adults personas.</p>
                </div>

                {/* Kids vs Adults Forms */}
                <div className="grid gap-10 md:grid-cols-2">
                  
                  {/* Kids Column */}
                  <div className="space-y-5 rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                    <h3 className="text-sm font-black uppercase tracking-wider text-indigo-700 pb-2 border-b border-slate-100">For Kids Persona</h3>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Eyebrow Badge</label>
                      <input
                        type="text"
                        value={data.hero.kids.eyebrow}
                        onChange={(e) => updateHero("kids", "eyebrow", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Headline H1</label>
                      <textarea
                        rows={2}
                        value={data.hero.kids.title}
                        onChange={(e) => updateHero("kids", "title", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Subtext Description</label>
                      <textarea
                        rows={3}
                        value={data.hero.kids.description}
                        onChange={(e) => updateHero("kids", "description", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-500 block">Bullet Trust Points</label>
                      {data.hero.kids.stats.map((stat, i) => (
                        <input
                          key={i}
                          type="text"
                          value={stat}
                          onChange={(e) => updateHeroStat("kids", i, e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      ))}
                    </div>

                    <div className="grid gap-3 grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase text-slate-500">Student Name</label>
                        <input
                          type="text"
                          value={data.hero.kids.studentName}
                          onChange={(e) => updateHero("kids", "studentName", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase text-slate-500">Tutor Name</label>
                        <input
                          type="text"
                          value={data.hero.kids.tutorName}
                          onChange={(e) => updateHero("kids", "tutorName", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Student Bubble Message</label>
                      <input
                        type="text"
                        value={data.hero.kids.studentBubble}
                        onChange={(e) => updateHero("kids", "studentBubble", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Tutor Bubble Message</label>
                      <input
                        type="text"
                        value={data.hero.kids.tutorBubble}
                        onChange={(e) => updateHero("kids", "tutorBubble", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Student Image Link</label>
                      <input
                        type="text"
                        value={data.hero.kids.studentImage}
                        onChange={(e) => updateHero("kids", "studentImage", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Tutor Image Link</label>
                      <input
                        type="text"
                        value={data.hero.kids.tutorImage}
                        onChange={(e) => updateHero("kids", "tutorImage", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                  </div>

                  {/* Adults Column */}
                  <div className="space-y-5 rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                    <h3 className="text-sm font-black uppercase tracking-wider text-indigo-700 pb-2 border-b border-slate-100">For Adults Persona</h3>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Eyebrow Badge</label>
                      <input
                        type="text"
                        value={data.hero.adults.eyebrow}
                        onChange={(e) => updateHero("adults", "eyebrow", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Headline H1</label>
                      <textarea
                        rows={2}
                        value={data.hero.adults.title}
                        onChange={(e) => updateHero("adults", "title", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Subtext Description</label>
                      <textarea
                        rows={3}
                        value={data.hero.adults.description}
                        onChange={(e) => updateHero("adults", "description", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-500 block">Bullet Trust Points</label>
                      {data.hero.adults.stats.map((stat, i) => (
                        <input
                          key={i}
                          type="text"
                          value={stat}
                          onChange={(e) => updateHeroStat("adults", i, e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      ))}
                    </div>

                    <div className="grid gap-3 grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase text-slate-500">Student Name</label>
                        <input
                          type="text"
                          value={data.hero.adults.studentName}
                          onChange={(e) => updateHero("adults", "studentName", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase text-slate-500">Tutor Name</label>
                        <input
                          type="text"
                          value={data.hero.adults.tutorName}
                          onChange={(e) => updateHero("adults", "tutorName", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Student Bubble Message</label>
                      <input
                        type="text"
                        value={data.hero.adults.studentBubble}
                        onChange={(e) => updateHero("adults", "studentBubble", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Tutor Bubble Message</label>
                      <input
                        type="text"
                        value={data.hero.adults.tutorBubble}
                        onChange={(e) => updateHero("adults", "tutorBubble", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Student Image Link</label>
                      <input
                        type="text"
                        value={data.hero.adults.studentImage}
                        onChange={(e) => updateHero("adults", "studentImage", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500">Tutor Image Link</label>
                      <input
                        type="text"
                        value={data.hero.adults.tutorImage}
                        onChange={(e) => updateHero("adults", "tutorImage", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* PAS GRID EDITOR */}
            {activeTab === "pas" && (
              <div className="space-y-8">
                <div className="border-b border-slate-100 pb-5">
                  <h2 className="text-xl font-extrabold text-slate-900">Problem-Agitation-Solution Grid</h2>
                  <p className="text-xs text-muted-foreground mt-1">Agitate old video-learning methods versus the Skillbag small-cohort check items.</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-500">PAS Title Heading</label>
                    <input
                      type="text"
                      value={data.pasGrid.title}
                      onChange={(e) => updatePasGrid("title", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-500">PAS Description</label>
                    <input
                      type="text"
                      value={data.pasGrid.description}
                      onChange={(e) => updatePasGrid("description", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-8 mt-5 pt-5 border-t border-slate-100">
                  {data.pasGrid.pillars.map((pillar, i) => (
                    <div key={i} className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <h4 className="text-xs font-black uppercase tracking-wider text-indigo-700">Pillar #{i + 1} ({pillar.badgeText})</h4>
                        <div className="space-y-1.5 max-w-[200px]">
                          <input
                            type="text"
                            placeholder="Badge category"
                            value={pillar.badgeText}
                            onChange={(e) => updatePasPillar(i, "badgeText", e.target.value)}
                            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-red-500">❌ Problem Title (Pain Point)</label>
                          <input
                            type="text"
                            value={pillar.problemTitle}
                            onChange={(e) => updatePasPillar(i, "problemTitle", e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-red-500">❌ Problem Description</label>
                          <textarea
                            rows={2}
                            value={pillar.problemDesc}
                            onChange={(e) => updatePasPillar(i, "problemDesc", e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2 pt-2">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-emerald-600">✓ Skillbag Solution Title</label>
                          <input
                            type="text"
                            value={pillar.solutionTitle}
                            onChange={(e) => updatePasPillar(i, "solutionTitle", e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-emerald-600">✓ Skillbag Solution Description</label>
                          <textarea
                            rows={2}
                            value={pillar.solutionDesc}
                            onChange={(e) => updatePasPillar(i, "solutionDesc", e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* COURSES CONFIG EDITOR */}
            {activeTab === "courses" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">Course Catalog list</h2>
                    <p className="text-xs text-muted-foreground mt-1">Manage, add, or remove items from the pricing-tier grid list.</p>
                  </div>
                  <button
                    onClick={addCourse}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-4 py-2.5 shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <Plus className="size-3.5" />
                    Add Course
                  </button>
                </div>

                <div className="space-y-12">
                  {data.courses.map((course, index) => (
                    <div key={index} className="relative p-5 border border-slate-200 rounded-3xl bg-slate-50/30 space-y-5">
                      
                      {/* Close/Remove top right */}
                      <button
                        onClick={() => removeCourse(index)}
                        className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition"
                        title="Delete Course"
                      >
                        <Trash2 className="size-4" />
                      </button>

                      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-4">
                          
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase text-slate-500">Course Title</label>
                            <input
                              type="text"
                              value={course.title}
                              onChange={(e) => updateCourse(index, "title", e.target.value)}
                              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                            />
                          </div>

                          <div className="grid gap-3 grid-cols-3">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-500">Lessons (e.g. 12 live)</label>
                              <input
                                type="text"
                                value={course.lessons}
                                onChange={(e) => updateCourse(index, "lessons", e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-500">Duration (e.g. 8 weeks)</label>
                              <input
                                type="text"
                                value={course.duration}
                                onChange={(e) => updateCourse(index, "duration", e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-500">Difficulty Level</label>
                              <input
                                type="text"
                                value={course.level}
                                onChange={(e) => updateCourse(index, "level", e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase text-slate-500">Short Pitch Description</label>
                            <textarea
                              rows={2}
                              value={course.description}
                              onChange={(e) => updateCourse(index, "description", e.target.value)}
                              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                            />
                          </div>

                          <div className="grid gap-3 grid-cols-2">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-500">Instructor Name</label>
                              <input
                                type="text"
                                value={course.teacherName}
                                onChange={(e) => updateCourse(index, "teacherName", e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-500">Format Description</label>
                              <input
                                type="text"
                                value={course.format}
                                onChange={(e) => updateCourse(index, "format", e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                          </div>

                        </div>

                        <div className="space-y-4">
                          
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase text-slate-500">Thumbnail Image URL</label>
                            <input
                              type="text"
                              value={course.image}
                              onChange={(e) => updateCourse(index, "image", e.target.value)}
                              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                            />
                          </div>

                          <div className="grid gap-3 grid-cols-2">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-500">Rating ★ (Float)</label>
                              <input
                                type="number"
                                step="0.1"
                                value={course.rating}
                                onChange={(e) => updateCourse(index, "rating", parseFloat(e.target.value) || 0)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-500">Student Count</label>
                              <input
                                type="number"
                                value={course.studentCount}
                                onChange={(e) => updateCourse(index, "studentCount", parseInt(e.target.value) || 0)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-6 py-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id={`popular-${index}`}
                                checked={course.isPopular || false}
                                onChange={(e) => updateCourse(index, "isPopular", e.target.checked)}
                                className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`popular-${index}`} className="text-xs font-bold text-slate-700">Flag as Popular (★ Badge)</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id={`new-${index}`}
                                checked={course.isNewBatch || false}
                                onChange={(e) => updateCourse(index, "isNewBatch", e.target.checked)}
                                className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`new-${index}`} className="text-xs font-bold text-slate-700">Flag as Urgency (Filling Fast)</label>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase text-slate-500 block">Outcomes / Benefits (Comma separated)</label>
                            <input
                              type="text"
                              value={course.outcomes.join(", ")}
                              onChange={(e) => updateCourse(index, "outcomes", e.target.value.split(",").map(s => s.trim()))}
                              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                            />
                          </div>

                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* TESTIMONIALS CONFIG EDITOR */}
            {activeTab === "testimonials" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">Testimonials List (Wall of Love)</h2>
                    <p className="text-xs text-muted-foreground mt-1">Manage reviews, transformation slogans, and links to short video test files.</p>
                  </div>
                  <button
                    onClick={addTestimonial}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-4 py-2.5 shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <Plus className="size-3.5" />
                    Add Review
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {data.testimonials.map((test, index) => (
                    <div key={index} className="relative p-5 border border-slate-200 rounded-3xl bg-slate-50/30 space-y-4">
                      
                      <button
                        onClick={() => removeTestimonial(index)}
                        className="absolute right-4 top-4 flex size-7 items-center justify-center rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition"
                        title="Delete Review"
                      >
                        <Trash2 className="size-3.5" />
                      </button>

                      <div className="grid gap-3 grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-slate-500">Name</label>
                          <input
                            type="text"
                            value={test.name}
                            onChange={(e) => updateTestimonial(index, "name", e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-slate-500">Role / Sub-label</label>
                          <input
                            type="text"
                            value={test.role}
                            onChange={(e) => updateTestimonial(index, "role", e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase text-slate-500">Transformation Header</label>
                        <input
                          type="text"
                          value={test.transformation}
                          onChange={(e) => updateTestimonial(index, "transformation", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase text-slate-500">Testimonial Quote text</label>
                        <textarea
                          rows={3}
                          value={test.quote}
                          onChange={(e) => updateTestimonial(index, "quote", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      </div>

                      <div className="grid gap-3 grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-slate-500">Course Linked</label>
                          <input
                            type="text"
                            value={test.course}
                            onChange={(e) => updateTestimonial(index, "course", e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-slate-500">Avatar Image Link</label>
                          <input
                            type="text"
                            value={test.image}
                            onChange={(e) => updateTestimonial(index, "image", e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 py-1">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={`video-${index}`}
                            checked={test.isVideo}
                            onChange={(e) => updateTestimonial(index, "isVideo", e.target.checked)}
                            className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`video-${index}`} className="text-xs font-bold text-slate-700">Flag as Video testimonial</label>
                        </div>
                        {test.isVideo && (
                          <div className="space-y-1.5 flex-1">
                            <input
                              type="text"
                              placeholder="e.g. 1:12"
                              value={test.videoDuration}
                              onChange={(e) => updateTestimonial(index, "videoDuration", e.target.value)}
                              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold focus:outline-none"
                            />
                          </div>
                        )}
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* FAQS CONFIG EDITOR */}
            {activeTab === "faqs" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">FAQ Accordions List</h2>
                    <p className="text-xs text-muted-foreground mt-1">Tweak user objection questions and text answers regarding schedules, refund logic, etc.</p>
                  </div>
                  <button
                    onClick={addFaq}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-4 py-2.5 shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <Plus className="size-3.5" />
                    Add FAQ
                  </button>
                </div>

                <div className="space-y-4">
                  {data.faqs.map((faq, index) => (
                    <div key={index} className="relative p-5 border border-slate-200 rounded-3xl bg-slate-50/30 space-y-3">
                      
                      <button
                        onClick={() => removeFaq(index)}
                        className="absolute right-4 top-4 flex size-7 items-center justify-center rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition"
                        title="Delete FAQ"
                      >
                        <Trash2 className="size-3.5" />
                      </button>

                      <div className="space-y-1.5 max-w-[90%]">
                        <label className="text-[10px] font-black uppercase text-slate-500">Question Title</label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => updateFaq(index, "question", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase text-slate-500">Accordion Expanded Answer Text</label>
                        <textarea
                          rows={3}
                          value={faq.answer}
                          onChange={(e) => updateFaq(index, "answer", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                        />
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            )}

          </section>

        </div>

      </main>
    </div>
  )
}
