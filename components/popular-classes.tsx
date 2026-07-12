"use client"

import { useMemo, useState } from "react"
import { Sparkles } from "lucide-react"
import { EnhancedClassCard } from "@/components/enhanced-class-card"
import { CourseDetailsModal } from "@/components/course-details-modal"
import { courses } from "@/lib/course-data"
import { ScrollReveal } from "@/components/scroll-reveal"

const filters = ["All", "For Kids", "Communication", "Music", "Logic"] as const

type Filter = (typeof filters)[number]

export function PopularClasses() {
  const [activeCourse, setActiveCourse] = useState<null | (typeof courses)[number]>(null)
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const filteredCourses = useMemo(() => {
    if (activeFilter === "All") return courses

    const keywords = {
      "For Kids": ["Children", "Kids", "Abacus", "Robotics"],
      Communication: ["Speaking", "Writing", "English", "Conversational", "Public"],
      Music: ["Guitar", "Keyboard"],
      Logic: ["Chess", "Rubik", "Abacus", "Robotics"],
    }

    return courses.filter((course) => {
      const haystack = `${course.title} ${course.description} ${course.level}`.toLowerCase()
      return keywords[activeFilter].some((keyword) => haystack.includes(keyword.toLowerCase()))
    })
  }, [activeFilter])

  return (
    <section id="courses" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="rounded-[2rem] border border-border/70 bg-white/80 p-6 shadow-soft backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                <Sparkles className="size-4" />
                Curated learning paths
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Pick the class that fits your next breakthrough.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              From public speaking to music and logic, each course is designed to feel supportive, practical, and worth your attention.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </ScrollReveal>

      {activeCourse && (
        <CourseDetailsModal course={activeCourse} onClose={() => setActiveCourse(null)} />
      )}
    </section>
  )
}
