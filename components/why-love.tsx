import { Globe, MessageSquare, TrendingUp, Users2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const pillars = [
  {
    icon: MessageSquare,
    title: "Live & Interactive",
    desc: "Real-time instruction with guided practice and instant support.",
    accent: "Live coaching",
  },
  {
    icon: Users2,
    title: "Top 1% Teachers",
    desc: "Warm, experienced mentors who make students feel seen and capable.",
    accent: "Expert-led",
  },
  {
    icon: Globe,
    title: "Small Batch Focus",
    desc: "With max 8 students per batch, every learner gets personalized attention.",
    accent: "Ensures personalized attention",
  },
]

export function WhyLove() {
  return (
    <section id="why-skillbag" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ScrollReveal>
        <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                Why families choose us
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                A learning experience that feels personal, encouraging, and effective.
              </h2>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-medium text-primary">
              Max 8 students per batch — for personal attention that matters.
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, desc, accent }, index) => (
              <div key={title} className="rounded-[1.5rem] border border-border/60 bg-background/70 p-6 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <p className="mt-4 text-sm font-semibold text-accent">{accent}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
