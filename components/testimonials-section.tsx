"use client"

import { Play, Star, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLandingPageData } from "@/lib/landing-page-data"

export function TestimonialsSection() {
  const data = useLandingPageData()
  const testimonials = data.testimonials

  // Split testimonials into 3 arrays to build a clean responsive masonry grid without column breaking bugs
  const col1 = testimonials.filter((_, i) => i % 3 === 0)
  const col2 = testimonials.filter((_, i) => i % 3 === 1)
  const col3 = testimonials.filter((_, i) => i % 3 === 2)
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="flex flex-col gap-5 rounded-[2.5rem] border border-black/[0.04] bg-white/70 p-6 shadow-premium backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between sm:p-10 lg:p-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider">
              <Sparkles className="size-3.5 fill-current text-primary" />
              Wall of love
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Real transformations, real growth.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            See how Skillbag's interactive online coaching has helped learners upgrade their confidence, logic, and self-belief.
          </p>
        </div>
      </ScrollReveal>

      {/* Masonry Columns */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {col1.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {col2.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {col3.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ item }: { item: typeof testimonials[number] }) {
  return (
    <ScrollReveal delay={80}>
      <article className="group relative flex flex-col rounded-3xl border border-black/[0.05] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
        
        {/* Transformation Header */}
        <div className="mb-4 rounded-xl bg-primary/5 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-primary border border-primary/10">
          <span className="text-accent mr-1">Before ➔ After:</span> {item.transformation}
        </div>

        {/* Star Rating Group */}
        <div className="mb-4 flex text-amber-400 gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-xs font-semibold leading-relaxed text-foreground/80 grow italic">
          “{item.quote}”
        </blockquote>

        {/* Course Association Pill */}
        <div className="mt-5 inline-flex items-center self-start rounded-full bg-black/[0.03] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-muted-foreground">
          {item.course}
        </div>

        {/* Profile Card Bottom */}
        <div className="mt-5 flex items-center gap-3 border-t border-black/[0.03] pt-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-10 w-10 rounded-full object-cover border border-black/[0.08]"
          />
          <div>
            <p className="text-xs font-extrabold text-slate-800 leading-none">{item.name}</p>
            <p className="text-[10px] text-muted-foreground mt-1 leading-none">{item.role}</p>
          </div>
        </div>

        {/* Mock Video Overlay if it is a video review */}
        {item.isVideo && (
          <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 text-[9px] font-black text-white shadow-sm transition-colors duration-250 cursor-pointer active:scale-95 animate-whatsapp-pulse">
            <Play className="size-3 fill-current" />
            <span>Play Clip ({item.videoDuration})</span>
          </div>
        )}
      </article>
    </ScrollReveal>
  )
}
