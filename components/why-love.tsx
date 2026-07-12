import { BadgeCheck, GraduationCap, ShieldCheck, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const highlights = [
  { title: "Confidence-first coaching", body: "Students practice speaking, thinking, and creating in a calm environment." },
  { title: "Guided by experts", body: "Every mentor is handpicked for warmth, clarity, and subject depth." },
  { title: "Progress you can see", body: "From first session to final showcase, growth stays visible and rewarding." },
]

export function WhyLove() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="grid gap-6 rounded-[2rem] border border-border/70 bg-slate-950 p-6 text-white shadow-[0_30px_90px_-35px_rgba(15,23,42,0.7)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/90">
              <Sparkles className="size-4" />
              Why families stay with Skillbag
            </div>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              From shy to self-assured, one live class at a time.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              Parents choose us because the experience feels calm, structured, and genuinely supportive — with results they can feel in school, at home, and in everyday confidence.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "2k+", label: "Learners" },
                { value: "4.9/5", label: "Rating" },
                { value: "100%", label: "Live" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
            <div className="rounded-[1.2rem] border border-emerald-400/20 bg-emerald-500/10 p-4">
              <div className="flex items-center gap-2 text-emerald-300">
                <BadgeCheck className="size-5" />
                <span className="text-sm font-semibold">Parent-approved, student-loved</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                “My daughter now walks into class smiling and comes home eager to practice. The coaching feels personal every single time.”
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-[1.2rem] bg-white/10 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-300">
                    {item.title.includes("expert") ? <GraduationCap className="size-5" /> : <ShieldCheck className="size-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-300">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
