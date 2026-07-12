"use client"

import { ChevronRight, Clock, Star, Users } from "lucide-react"

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
  onViewDetails,
}: ClassCardProps) {
  const badgeText = isPopular ? "Popular" : isNewBatch ? "Filling Fast" : "Open" 

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-28px_rgba(15,23,42,0.32)]">
      <div className="absolute left-3 right-3 top-3 z-10 flex items-start justify-between">
        <div className={`rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md ${isPopular ? "bg-amber-500" : isNewBatch ? "bg-emerald-600" : "bg-slate-700"}`}>
          {badgeText}
        </div>
        <div className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          {rating.toFixed(1)} ★
        </div>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {duration}
          </div>
          <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
            Live class
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Small-group coaching with clear outcomes, warm feedback, and real progress.
        </p>

        {teacherName && (
          <div className="mt-4 flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-emerald-500/15 text-sm font-semibold text-primary">
              {teacherName.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{teacherName}</p>
              <p className="text-xs text-slate-500">Live mentor</p>
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            {rating.toFixed(1)} avg
          </span>
          <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
            <Users className="size-3.5" />
            {studentCount >= 1000 ? `${(studentCount / 1000).toFixed(1)}k` : studentCount}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
            <Clock className="size-3.5" />
            {duration}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm font-semibold text-emerald-700">{isNewBatch ? "Next batch: this week" : "Open for enrollment"}</div>
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View details
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
