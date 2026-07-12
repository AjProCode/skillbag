"use client"

import { useState } from "react"
import { CheckCircle2, MessageCircle, Play, ShieldCheck, Sparkles, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"
import { ScrollReveal } from "@/components/scroll-reveal"

const personas = {
  kids: {
    eyebrow: "For curious kids",
    title: "Give your child the confidence to learn faster and shine brighter.",
    description:
      "Live classes in public speaking, logic, music, and STEM built for curiosity, focus, and steady growth.",
    stats: ["Max 8 students per batch", "Top 1% mentors", "4.9/5 parent rating"],
  },
  adults: {
    eyebrow: "For adults ready to grow",
    title: "Don’t just learn. Master real skills with live experts.",
    description:
      "Join 2,000+ learners upgrading their communication, logic, and creativity through interactive, small-batch online classes.",
    stats: ["100% live coaching", "Flexible batches", "Real feedback every week"],
  },
} as const

type PersonaKey = keyof typeof personas

export function HeroSection() {
  const [persona, setPersona] = useState<PersonaKey>("kids")
  const current = personas[persona]

  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <div className="rounded-[2.25rem] border border-white/70 bg-white/80 p-4 shadow-[0_35px_90px_-32px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-6 lg:p-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <ScrollReveal delay={80}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3.5 py-2 text-sm font-semibold text-primary">
                <Sparkles className="size-4" />
                Premium live learning, designed around real outcomes
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="mt-6 flex flex-wrap gap-2 rounded-full border border-border/70 bg-background/70 p-1.5 shadow-sm">
                {(["kids", "adults"] as PersonaKey[]).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setPersona(value)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${persona === value ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-white hover:text-foreground"}`}
                  >
                    {value === "kids" ? "For Kids" : "For Adults"}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">{current.eyebrow}</p>
              <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {current.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {current.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
                  size="lg"
                  className="group relative w-full overflow-hidden rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_50px_-16px_rgba(16,185,129,0.95)] transition-all hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto"
                >
                  <span className="absolute inset-0 animate-pulse bg-emerald-300/30 blur-xl" />
                  <span className="relative flex items-center gap-2">
                    <MessageCircle className="size-5" />
                    Connect on WhatsApp
                  </span>
                </Button>
                <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-card/80 px-5 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:text-primary">
                  <Play className="size-4" />
                  Explore courses
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-3">
                {current.stats.map((stat) => (
                  <div key={stat} className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3.5 py-2 text-sm font-medium text-foreground shadow-sm">
                    <CheckCircle2 className="size-4 text-emerald-500" />
                    {stat}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="relative order-1 lg:order-2">
            <ScrollReveal delay={80}>
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle,_rgba(99,102,241,0.22),_transparent_65%)] blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-slate-900 shadow-[0_30px_85px_-28px_rgba(15,23,42,0.4)]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                    alt="A live coaching session with a tutor and student"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-800 backdrop-blur-sm">
                    Live & personal
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-[1.2rem] border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Small-batch coaching</p>
                        <p className="text-xs text-slate-600">Real time feedback, every session</p>
                      </div>
                      <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                        4.9/5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="absolute -bottom-3 left-2 rounded-2xl border border-border/60 bg-white/90 px-3 py-3 shadow-xl backdrop-blur-sm sm:-bottom-4 sm:left-4 sm:px-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Video className="size-5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-foreground">Top 1% tutors</p>
                    <p className="text-xs text-muted-foreground">Vetted and supportive</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="absolute -right-2 top-3 rounded-2xl border border-border/60 bg-white/90 px-3 py-3 shadow-xl backdrop-blur-sm sm:-right-4 sm:top-6 sm:px-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Users className="size-5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-foreground">Max 8 learners</p>
                    <p className="text-xs text-muted-foreground">Focused attention</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={320}>
          <div className="mt-8 grid gap-3 rounded-[1.6rem] border border-slate-200 bg-slate-950 px-4 py-4 text-sm text-slate-200 sm:grid-cols-3 sm:px-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald-400" />
              Trusted by parents across India
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-2.5 py-1 font-semibold text-white">4.9/5</span>
              from 2,000+ happy learners
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-2.5 py-1 font-semibold text-white">100%</span>
              live classes, no passive videos
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
