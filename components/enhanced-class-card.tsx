"use client"

import { Star, Users, Clock, ChevronRight } from "lucide-react"

interface ClassCardProps {
  title: string
  image: string
  rating: number
  studentCount: number
  duration: string
  isPopular?: boolean
  isNewBatch?: boolean
  teacherName?: string
  teacherAvatar?: string
  onViewDetails?: () => void
}

export function EnhancedClassCard({
  title,
  image,
  rating,
  studentCount,
  duration,
  isPopular = false,
  isNewBatch = false,
  teacherName,
  teacherAvatar,
  onViewDetails,
}: ClassCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      {isPopular && (
        <div className="absolute right-3 top-3 z-10 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
          Popular
        </div>
      )}

      {isNewBatch && (
        <div className="absolute left-3 top-3 z-10 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
          New Batch
        </div>
      )}

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute bottom-3 left-3 right-3 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={onViewDetails}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-indigo-600 shadow-lg transition-colors hover:bg-indigo-50"
          >
            View Details
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-3.5 ${
                    i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-stone-200 text-stone-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-stone-900">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-stone-500">
            <Users className="size-3.5" />
            <span>{studentCount >= 1000 ? `${(studentCount / 1000).toFixed(1)}k` : studentCount}</span>
          </div>
        </div>

        <h3 className="mb-3 line-clamp-2 text-base font-bold text-stone-900 transition-colors group-hover:text-indigo-600">
          {title}
        </h3>

        {teacherName && (
          <div className="mb-3 flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 text-xs font-semibold text-indigo-700">
              {teacherName.charAt(0)}
            </div>
            <span className="text-xs text-stone-600">{teacherName}</span>
          </div>
        )}

        <div className="flex items-center gap-1.5 text-xs text-stone-500">
          <Clock className="size-3.5" />
          <span>{duration}</span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] border-2 border-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}
