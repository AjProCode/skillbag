import { MessageCircleMore, Sparkles, Users, Video } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const pillars = [
  {
    icon: Video,
    title: "No more boring videos",
    body: "Every session is live, interactive, and paced for attention.",
    badge: "100% live & interactive",
  },
  {
    icon: Users,
    title: "No more feeling lost",
    body: "We keep batches small so every learner gets personal support.",
    badge: "Max 8 students per batch",
  },
  {
    icon: Sparkles,
    title: "No more average tutors",
    body: "Vetted mentors guide progress with warmth, structure, and care.",
    badge: "Top 1% educators",
  },
]

export function SmallBatches() {
  return (
    <section id="why-skillbag" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="rounded-[2rem] border border-border/70 bg-white/80 p-6 shadow-soft backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                <MessageCircleMore className="size-4" />
                The Skillbag difference
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                The learning experience people actually stick with.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Pre-recorded courses can feel passive. Skillbag makes growth visible, personal, and motivating from the very first session.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body, badge }, index) => (
              <div key={title} className="rounded-[1.5rem] border border-border/70 bg-gradient-to-br from-background to-white p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p>
                <div className="mt-5 inline-flex rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                  {badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
