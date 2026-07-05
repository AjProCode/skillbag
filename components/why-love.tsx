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
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground">
          Why learners &amp; parents love Skillbag
        </h2>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                <Icon className="size-5" />
              </span>
              <h3 className="text-base font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
