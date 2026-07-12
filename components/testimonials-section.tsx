import { Play, Star } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    name: "Aarav",
    role: "Parent of a Grade 4 student",
    course: "Abacus & Logic",
    quote:
      "My son became so much more confident and focused after just a few weeks. The classes feel warm, motivating, and genuinely personal.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    featured: false,
  },
  {
    name: "Naina",
    role: "Student",
    course: "Public Speaking",
    quote:
      "I used to get anxious speaking in front of people. The live coaching helped me speak clearly and calmly in class and at home.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    featured: true,
  },
  {
    name: "Rohan",
    role: "Parent of a teen learner",
    course: "English Enhancement",
    quote:
      "The sessions are easy to follow and the instructor always gives actionable feedback. It feels like real progress, not just homework.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    featured: false,
  },
  {
    name: "Mira",
    role: "Student",
    course: "Music & Confidence",
    quote:
      "I used to freeze when I had to perform. Now I look forward to every class and actually enjoy practicing at home.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    featured: false,
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="flex flex-col gap-4 rounded-[2rem] border border-border/70 bg-white/80 p-6 shadow-soft backdrop-blur-sm sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Wall of love</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Real stories, real confidence
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Parents and students choose Skillbag for the encouragement, structure, and results they can feel every week.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.name} delay={index * 80}>
            <article className={`flex h-full flex-col rounded-[1.6rem] border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${testimonial.featured ? "md:col-span-2 xl:col-span-1" : ""}`}>
              {testimonial.featured ? (
                <div className="mb-5 flex items-center justify-between rounded-[1.2rem] border border-primary/10 bg-primary/5 p-3 text-sm font-semibold text-primary">
                  <span>Video testimonial</span>
                  <span className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs text-primary">
                    <Play className="size-3" />
                    Watch clip
                  </span>
                </div>
              ) : null}

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="size-4 fill-current" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">“{testimonial.quote}”</p>

              <div className="mt-6 rounded-2xl bg-primary/5 px-3 py-2 text-sm font-semibold text-primary">
                {testimonial.course}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
