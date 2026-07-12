import { Clock, Users, Video, GraduationCap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  { label: "Live Classes", icon: Video },
  { label: "Expert Teachers", icon: GraduationCap },
  { label: "Small Batch Size", icon: Users },
  { label: "Flexible Timing", icon: Clock },
]

export function SmallBatches() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-900 text-primary-foreground shadow-[0_30px_90px_-35px_rgba(15,23,42,0.6)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_30%)]"></div>
          <div className="relative grid items-stretch gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/90 backdrop-blur-sm">
                Live classes, real connection
              </span>
              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Small batches.
                <br /> Big attention.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Our interactive live classes create room for personalized coaching, a warm learning environment, and visible progress.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {features.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <Icon className="size-4 text-primary-foreground/90" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/75">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/20">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Max 8 students per batch</span>
                </div>
                <div className="rounded-full bg-amber-400/20 px-3 py-2 font-semibold text-amber-200">
                  Trusted by parents & students
                </div>
              </div>
            </div>

            <div className="relative min-h-72 lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=900&q=80"
                alt="A student wearing headphones taking notes during a live online lesson"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">HD Video Quality</p>
                    <p className="text-xs text-muted-foreground">Crystal clear learning experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
