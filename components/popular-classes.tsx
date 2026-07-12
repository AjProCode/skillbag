"use client"

import { useMemo, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { EnhancedClassCard } from "@/components/enhanced-class-card"
import { CourseDetailsModal } from "@/components/course-details-modal"
import { courses } from "@/lib/course-data"
import { ScrollReveal } from "@/components/scroll-reveal"

const filters = ["All", "For Kids", "Communication", "Music", "Logic"] as const

type Filter = (typeof filters)[number]

export function PopularClasses() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [activeCourse, setActiveCourse] = useState<null | (typeof courses)[number]>(null)
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const scrollBy = (distance: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" })
  }

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
    <section id="courses" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ScrollReveal>
        <div className="flex flex-col gap-6 rounded-[2rem] border border-border/70 bg-white/70 p-6 shadow-soft backdrop-blur-sm sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <Sparkles className="size-4" />
                Curated learning paths
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Choose a class that fits your goal.
              </h2>
            </div>
            <p className="max-w-sm pb-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
              From confidence-building communication to logic and music, pick the path that feels right for you or your child.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous classes"
              onClick={() => scrollBy(-320)}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next classes"
              onClick={() => scrollBy(320)}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredCourses.map((item) => (
            <article key={item.title} className="w-[285px] shrink-0 snap-start">
              <EnhancedClassCard
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
            </article>
          ))}
        </div>
      </ScrollReveal>

      {activeCourse && (
        <CourseDetailsModal course={activeCourse} onClose={() => setActiveCourse(null)} />
      )}
    </section>
  )
}
