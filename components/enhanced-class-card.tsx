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
}: ClassCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-3 right-3 z-10 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
          Popular
        </div>
      )}

      {/* New Batch Badge */}
      {isNewBatch && (
        <div className="absolute top-3 left-3 z-10 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
          New Batch
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Quick View Button */}
        <div className="absolute bottom-3 left-3 right-3 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-indigo-600 shadow-lg transition-colors hover:bg-indigo-50">
            View Details
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating & Students */}
        <div className="flex items-center justify-between mb-3">
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

        {/* Title */}
        <h3 className="mb-3 text-base font-bold text-stone-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        {/* Teacher Info */}
        {teacherName && (
          <div className="flex items-center gap-2 mb-3">
            <div className="size-7 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center text-xs font-semibold text-indigo-700">
              {teacherName.charAt(0)}
            </div>
            <span className="text-xs text-stone-600">{teacherName}</span>
          </div>
        )}

        {/* Duration */}
        <div className="flex items-center gap-1.5 text-xs text-stone-500">
          <Clock className="size-3.5" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
    </div>
  )
}
