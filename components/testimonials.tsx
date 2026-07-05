import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "The Rubik's Cube class is amazing! My son loves the interactive sessions and has improved so much.",
    name: "Priya Sharma",
    role: "Parent",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote:
      "Public speaking classes helped me overcome stage fear and speak with confidence.",
    name: "Arjun Mehta",
    role: "Adult Learner",
    avatar: "https://i.pravatar.cc/80?img=13",
  },
  {
    quote:
      "Creative writing sessions are engaging and fun. I look forward to every class!",
    name: "Ananya Iyer",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=25",
  },
  {
    quote:
      "Great platform with supportive teachers. Flexible timings make it perfect for working professionals.",
    name: "Rahul Verma",
    role: "Parent",
    avatar: "https://i.pravatar.cc/80?img=52",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground">
          Loved by learners,
          <br /> trusted by parents
        </h2>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">See what our community has to say</p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonials"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex w-72 shrink-0 snap-start flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 sm:w-auto sm:flex-1"
          >
            <blockquote className="text-sm leading-relaxed text-foreground/80">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar || "/placeholder.svg"}
                  alt=""
                  className="size-9 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
