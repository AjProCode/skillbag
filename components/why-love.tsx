import { Globe, MessageSquare, TrendingUp, Users2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: MessageSquare,
    title: "Live & Interactive",
    desc: "Real-time classes with engaging instructors and guided practice.",
  },
  {
    icon: Globe,
    title: "Learn from Anywhere",
    desc: "Join from the comfort of your home, laptop, or tablet.",
  },
  {
    icon: Users2,
    title: "For All Ages",
    desc: "Courses for kids, teens, and adults with age-appropriate pacing.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    desc: "Regular feedback and clear milestones keep learning exciting.",
  },
]

export function WhyLove() {
  return (
    <section id="why-skillbag" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        <ScrollReveal>
          <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft backdrop-blur-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              Why families choose us
            </div>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Why learners &amp; parents love Skillbag
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every class is built to feel welcoming, practical, and inspiring — with personal guidance at every step.
            </p>
            <div className="mt-6 rounded-2xl bg-primary/5 p-4 text-sm text-muted-foreground">
              “Whether it is confidence building, creativity, or academic focus, our sessions make progress feel simple and exciting.”
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <ScrollReveal key={title} delay={index * 70}>
              <div className="group flex flex-col gap-4 rounded-[1.5rem] border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 text-accent transition-all duration-300 group-hover:scale-110 group-hover:from-accent/20 group-hover:to-accent/10">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
