"use client"

import { X, Clock, Users, Sparkles } from "lucide-react"

interface CourseDetailsModalProps {
  course: {
    title: string
    image: string
    rating: number
    studentCount: number
    duration: string
    teacherName: string
    description: string
    level: string
    lessons: string
    format: string
    outcomes: string[]
  }
  onClose: () => void
}

export function CourseDetailsModal({ course, onClose }: CourseDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/90 text-stone-700 shadow-sm transition hover:bg-white"
          aria-label="Close details"
        >
          <X className="size-5" />
        </button>

        <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[220px]">
            <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-indigo-200">
                Course highlight
              </p>
              <h3 className="text-2xl font-semibold">{course.title}</h3>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap gap-2 text-sm text-stone-600">
              <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700">
                {course.level}
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">
                {course.duration}
              </span>
            </div>

            <p className="mb-5 text-sm leading-6 text-stone-600">{course.description}</p>

            <div className="mb-5 space-y-3 text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-indigo-600" />
                <span>{course.studentCount.toLocaleString()} learners</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-indigo-600" />
                <span>{course.lessons}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-indigo-600" />
                <span>{course.format}</span>
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                What you’ll learn
              </h4>
              <ul className="space-y-2 text-sm text-stone-700">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span className="mt-1 size-2 rounded-full bg-indigo-600" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <p className="text-sm font-semibold text-stone-900">Taught by {course.teacherName}</p>
              <p className="mt-1 text-sm text-stone-600">Rated {course.rating.toFixed(1)} by our learners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
