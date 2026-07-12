import { Star } from "lucide-react"
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
  },
  {
    name: "Naina",
    role: "Student",
    course: "Public Speaking",
    quote:
      "I used to get anxious speaking in front of people. The live coaching helped me speak clearly and calmly in class and at home.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Rohan",
    role: "Parent of a teen learner",
    course: "English Enhancement",
    quote:
      "The sessions are easy to follow and the instructor always gives actionable feedback. It feels like real progress, not just homework.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ScrollReveal>
        <div className="flex flex-col gap-4 rounded-[2rem] border border-border/70 bg-white/70 p-6 shadow-soft backdrop-blur-sm sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Real stories, real confidence</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Loved by families and learners
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Parents and students choose Skillbag for the encouragement, structure, and results they can feel every week.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.name} delay={index * 90}>
            <article className="flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
