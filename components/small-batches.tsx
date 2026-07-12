import { MessageSquareOff, Users, Video, Sparkles, ShieldCheck, PlayCircle, AlertCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const pasPillars = [
  {
    problemTitle: "Boring Passive Videos",
    problemDesc: "Watching pre-recorded video modules feels like a chore. There is no urgency to complete them, leading to a 95% dropout rate.",
    solutionTitle: "100% Live & Interactive",
    solutionDesc: "Active, two-way discussions. Learn by doing, ask questions on the fly, and receive immediate coaching inside every class.",
    icon: Video,
    badgeText: "Real-Time Engagement"
  },
  {
    problemTitle: "Feeling Invisible & Lost",
    problemDesc: "Large webinars with 100+ students leave no room for personal feedback. You're left to figure out mistakes on your own.",
    solutionTitle: "Max 8 Students per Batch",
    solutionDesc: "Intimate class sizing ensuring our certified mentors can focus on your specific strengths, weaknesses, and speaking posture.",
    icon: Users,
    badgeText: "Hyper-Personal Attention"
  },
  {
    problemTitle: "Unvetted, Average Tutors",
    problemDesc: "Many platforms hire unvetted freelancers with little teaching experience. Quality varies wildly, frustrating students.",
    solutionTitle: "Vetted, Top 1% Educators",
    solutionDesc: "Every Skillbag instructor undergoes rigorous pedagogy vetting, background checks, and active communication checks.",
    icon: Sparkles,
    badgeText: "World-Class Mentors"
  }
]

export function SmallBatches() {
  return (
    <section id="why-skillbag" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="rounded-[2.5rem] border border-black/[0.04] bg-white/70 p-6 shadow-premium backdrop-blur-xl sm:p-10 lg:p-14">
          
          {/* Header */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-bold text-accent uppercase tracking-wider">
                <AlertCircle className="size-3.5" />
                Why pre-recorded courses fail
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                The Skillbag Difference: <br/>Why our students actually succeed.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Learning a real skill requires feedback, correction, and encouragement. Passive videos don't talk back — Skillbag does.
            </p>
          </div>

          {/* PAS Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pasPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.05] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between pb-6 border-b border-black/[0.04]">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                        {pillar.badgeText}
                      </span>
                    </div>

                    {/* Problem Section (Agitation) */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2 text-red-500">
                        <MessageSquareOff className="size-4 shrink-0" />
                        <h3 className="text-sm font-bold uppercase tracking-wider">{pillar.problemTitle}</h3>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground/80">
                        {pillar.problemDesc}
                      </p>
                    </div>

                    {/* Downward transition line / separator */}
                    <div className="relative my-6 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-dashed border-black/[0.08]"></div>
                      </div>
                      <div className="relative flex size-6 items-center justify-center rounded-full bg-slate-50 border border-black/[0.06] text-[10px] font-bold text-muted-foreground">
                        vs
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <ShieldCheck className="size-4 shrink-0 fill-emerald-50" />
                        <h3 className="text-sm font-black uppercase tracking-wider">{pillar.solutionTitle}</h3>
                      </div>
                      <p className="text-xs font-semibold leading-relaxed text-foreground/90">
                        {pillar.solutionDesc}
                      </p>
                    </div>
                  </div>

                  {/* Trust indicator bottom */}
                  <div className="mt-6 flex items-center gap-2.5 rounded-2xl bg-emerald-500/5 p-3 text-xs font-bold text-emerald-800">
                    <PlayCircle className="size-4 text-emerald-600 fill-emerald-50" />
                    <span>Skillbag Certified Approach</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </ScrollReveal>
    </section>
  )
}
