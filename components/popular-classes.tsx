"use client"

import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { EnhancedClassCard } from "@/components/enhanced-class-card"
import { CourseDetailsModal } from "@/components/course-details-modal"
import { courses } from "@/lib/course-data"

export function PopularClasses() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [activeCourse, setActiveCourse] = useState<null | (typeof courses)[number]>(null)

  const scrollBy = (distance: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" })
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Explore
              <br className="hidden sm:block" /> popular classes
            </h2>
          </div>
          <p className="max-w-xs pb-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Handpicked classes loved by thousands of learners worldwide.
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

      <div
        ref={scrollRef}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {courses.map((item) => (
          <article key={item.title} className="shrink-0 snap-start w-[280px]">
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

      {activeCourse && (
        <CourseDetailsModal course={activeCourse} onClose={() => setActiveCourse(null)} />
      )}
    </section>
  )
}
