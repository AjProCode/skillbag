import { MessageCircle, Play, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <ScrollReveal delay={80}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </span>
              New batches opening this month
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Unlock your potential with expert-led classes from home.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Help your child or yourself gain confidence, communication skills, creativity, and focus through interactive online learning.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
                size="lg"
                className="w-full rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
              >
                <MessageCircle className="size-5" />
                Connect on WhatsApp
              </Button>
              <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-card/70 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:text-primary sm:justify-start">
                <Play className="size-4" />
                Explore courses
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-border/70 bg-card/70 p-4 text-sm text-muted-foreground shadow-soft backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="size-9 rounded-full border-2 border-background bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <div className="size-9 rounded-full border-2 border-background bg-gradient-to-br from-violet-400 to-violet-600"></div>
                  <div className="size-9 rounded-full border-2 border-background bg-gradient-to-br from-amber-400 to-amber-600"></div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">2,000+ learners</p>
                  <p>joined this year</p>
                </div>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">★★★★★</span>
                <div>
                  <p className="font-semibold text-foreground">4.9/5 from happy families</p>
                  <p>trusted by parents across India</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative order-1 lg:order-2">
          <ScrollReveal delay={80}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-primary/20 via-violet-500/20 to-amber-400/20 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-border/70 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.45)]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  alt="A cheerful teacher guiding a smiling student during a live online class"
                  className="aspect-[4/3] w-full object-cover object-[center_15%] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <div className="absolute -right-2 -top-2 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/95 px-3 py-3 shadow-xl backdrop-blur-sm sm:-right-4 sm:-top-4 sm:px-4">
              <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
                <Video className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">Live &amp; Interactive</p>
                <p className="text-xs text-muted-foreground">Real-time guidance</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <div className="absolute -bottom-2 -left-2 rounded-2xl border border-border/60 bg-card/95 px-3 py-3 shadow-xl backdrop-blur-sm sm:-bottom-4 sm:-left-4 sm:px-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">Top 1% Teachers</p>
                  <p className="text-xs text-muted-foreground">Certified & supportive</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            <div className="absolute left-2 top-2 rounded-full border border-white/50 bg-white/70 px-3 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur-sm sm:left-4 sm:top-4">
              <span className="mr-2 inline-flex size-2 rounded-full bg-emerald-500"></span>
              Personalized learning
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
