import { Globe, MessageSquare, TrendingUp, Users2 } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Live & Interactive",
    desc: "Real-time classes with engaging instructors.",
  },
  {
    icon: Globe,
    title: "Learn from Anywhere",
    desc: "Join from the comfort of your home.",
  },
  {
    icon: Users2,
    title: "For All Ages",
    desc: "Courses for kids, teens, and adults.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    desc: "Regular feedback and progress updates.",
  },
]

export function WhyLove() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,350px)_1fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Why learners &amp; parents love Skillbag
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Join thousands of satisfied learners who have transformed their skills with our interactive online classes.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div 
              key={title} 
              className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 text-accent transition-all duration-300 group-hover:scale-110 group-hover:from-accent/20 group-hover:to-accent/10">
                <Icon className="size-6" />
              </span>
              <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
