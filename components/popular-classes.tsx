"use client"

import { useMemo, useState } from "react"
import { Sparkles, CalendarRange } from "lucide-react"
import { EnhancedClassCard } from "@/components/enhanced-class-card"
import { CourseDetailsModal } from "@/components/course-details-modal"
import { useLandingPageData, CourseItem } from "@/lib/landing-page-data"
import { ScrollReveal } from "@/components/scroll-reveal"

const filters = ["All", "Kids Corner", "Communication", "Music", "Logic & STEM"] as const

type Filter = (typeof filters)[number]

export function PopularClasses() {
  const data = useLandingPageData()
  const courses = data.courses
  const [activeCourse, setActiveCourse] = useState<null | CourseItem>(null)
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const filteredCourses = useMemo(() => {
    if (activeFilter === "All") return courses

    const keywords = {
      "Kids Corner": ["Children", "Kids", "Abacus", "Robotics"],
      Communication: ["Speaking", "Writing", "English", "Conversational", "Public"],
      Music: ["Guitar", "Keyboard"],
      "Logic & STEM": ["Chess", "Rubik", "Abacus", "Robotics"],
    }

    return courses.filter((course) => {
      const haystack = `${course.title} ${course.description} ${course.level}`.toLowerCase()
      return keywords[activeFilter].some((keyword) => haystack.includes(keyword.toLowerCase()))
    })
  }, [activeFilter])

  return (
    <section id="courses" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="rounded-[2.5rem] border border-black/[0.04] bg-white/70 p-6 shadow-premium backdrop-blur-xl sm:p-10 lg:p-14">
          
          {/* Header */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider">
                <Sparkles className="size-3.5 fill-current animate-spin-slow" />
                Decision-Simplified Catalog
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Find the perfect small-batch live class.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vetted mentors, structured schedules, and focused groups of maximum 8 students. Swap passive watching for active growth.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-black/[0.05] pb-5">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 active:scale-95 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-102"
                    : "bg-black/[0.02] border border-black/[0.04] text-muted-foreground hover:bg-black/[0.04] hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid Layout of Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((item) => (
              <EnhancedClassCard
                key={item.title}
                title={item.title}
                image={item.image}
                rating={item.rating}
                studentCount={item.studentCount}
                duration={item.duration}
                isPopular={item.isPopular}
                isNewBatch={item.isNewBatch}
                teacherName={item.teacherName}
                onViewDetails={() => setActiveCourse(item)}
              />
            ))}
          </div>

          {/* Catalog stats banner */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-black/[0.02] p-4 text-xs font-semibold text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarRange className="size-4 text-primary" />
              <span>Next batch cohorts onboarded weekly. Reserve your trial spot early.</span>
            </div>
            <a href="#why-skillbag" className="text-primary hover:underline font-bold">
              Learn about our vetting system →
            </a>
          </div>

        </div>
      </ScrollReveal>

      {activeCourse && (
        <CourseDetailsModal course={activeCourse} onClose={() => setActiveCourse(null)} />
      )}
    </section>
  )
}
