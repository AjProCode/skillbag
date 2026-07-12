"use client"

import { Calendar, ChevronRight, Clock, Star, Users, Award } from "lucide-react"

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
  teacherName = "Skillbag Certified Coach",
  onViewDetails,
}: ClassCardProps) {
  // Determine urgency text
  const badgeText = isPopular ? "Top Rated ★" : isNewBatch ? "Filling Fast" : "Few Spots Left"

  // Date calculation for urgency (next Monday from current time)
  // Let's compute a neat date placeholder relative to July 12, 2026 (Sunday)
  // E.g., Next Batch: July 13 (Monday) or July 15 (Wednesday)
  const batchDate = isNewBatch ? "Mon, July 13" : "Wed, July 15"

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.05] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-premium">
      
      {/* Thumbnail area with overlays */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        
        {/* Urgency Badge */}
        <div className="absolute left-3 top-3 z-10">
          <span className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm ${
            isPopular 
              ? "bg-primary" 
              : "bg-accent"
          }`}>
            {badgeText}
          </span>
        </div>

        {/* Rating overlay */}
        <div className="absolute right-3 top-3 z-10 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-xs flex items-center gap-1">
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
          <span>{rating.toFixed(1)}</span>
        </div>

        {/* Duration badge at the bottom */}
        <div className="absolute bottom-3 left-3 z-10 rounded-lg border border-white/20 bg-black/40 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm flex items-center gap-1">
          <Clock className="size-3.5 text-white" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        
        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-extrabold text-foreground group-hover:text-primary transition-colors duration-250 leading-snug">
          {title}
        </h3>

        {/* Description / Subtext */}
        <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground/90">
          Premium cohort class. Guided live practice, peer interactions, and structured weekly checkpoints.
        </p>

        {/* Vetted Instructor Row */}
        <div className="my-5 flex items-center gap-3 border-y border-black/[0.04] py-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-extrabold text-sm uppercase">
            {teacherName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-foreground leading-none">{teacherName}</span>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[8px] font-black text-emerald-800 uppercase tracking-wide">
                <Award className="size-2 text-emerald-600" />
                Vetted 1%
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-0.5">Active Pedagogy Lead</p>
          </div>
        </div>

        {/* Course Specifications Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-foreground/80 mb-5">
          <div className="flex items-center gap-2 rounded-xl bg-black/[0.02] p-2.5">
            <Users className="size-4 text-primary/70" />
            <span>Max 8 students</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-black/[0.02] p-2.5">
            <Calendar className="size-4 text-primary/70" />
            <span>Starts: {batchDate}</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-auto pt-4 border-t border-black/[0.03] flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-accent/80">Batch availability</p>
            <p className="text-[11px] font-black text-foreground mt-0.5">{isNewBatch ? "Next cohort starts Monday" : "Enrollment closing soon"}</p>
          </div>
          
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center gap-1 rounded-full border border-black/[0.08] hover:border-primary/20 hover:bg-slate-50 px-4 py-2.5 text-xs font-bold text-foreground transition-all active:scale-98"
          >
            View details
            <ChevronRight className="size-3.5 text-muted-foreground" />
          </button>
        </div>

      </div>
    </div>
  )
}
