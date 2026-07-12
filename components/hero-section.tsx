"use client"

import { useState } from "react"
import { CheckCircle2, MessageCircle, Play, Sparkles, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"
import { ScrollReveal } from "@/components/scroll-reveal"

import { initialData } from "@/lib/landing-page-data"

const personas = initialData.hero

type PersonaKey = "kids" | "adults"

export function HeroSection() {
  const [persona, setPersona] = useState<PersonaKey>("kids")
  const current = personas[persona]

  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10">
      <div className="rounded-[2.5rem] border border-black/[0.04] bg-white/70 p-5 shadow-premium backdrop-blur-xl sm:p-8 lg:p-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="order-2 lg:order-1">
            <ScrollReveal delay={50}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider">
                <Sparkles className="size-3.5 fill-current" />
                Live cohort learning
              </div>
            </ScrollReveal>

            {/* Persona Switcher Toggle */}
            <ScrollReveal delay={100}>
              <div className="mt-6 inline-flex rounded-full border border-black/[0.05] bg-black/[0.02] p-1.5 shadow-inner">
                {(["kids", "adults"] as PersonaKey[]).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setPersona(value)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold tracking-tight transition-all duration-300 ${
                      persona === value
                        ? "bg-primary text-primary-foreground shadow-md scale-102"
                        : "text-muted-foreground hover:text-foreground hover:bg-black/[0.02]"
                    }`}
                  >
                    {value === "kids" ? "For Kids (Ages 6-15)" : "For Adults & Professionals"}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Headline and Copy */}
            <ScrollReveal delay={150}>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-accent">
                {current.eyebrow}
              </p>
              <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                {current.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {current.description}
              </p>
            </ScrollReveal>

            {/* Call To Actions */}
            <ScrollReveal delay={250}>
              <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Button
                  nativeButton={false}
                  render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
                  size="lg"
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-500 hover:bg-emerald-600 px-8 py-5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-emerald-500/25 animate-whatsapp-pulse sm:w-auto"
                >
                  <MessageCircle className="size-5 fill-current" />
                  Connect on WhatsApp
                </Button>
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white/90 hover:bg-white px-6 py-4.5 text-sm font-bold text-foreground shadow-sm backdrop-blur-sm transition-all hover:border-primary/20 hover:text-primary active:scale-98"
                >
                  <Play className="size-4 fill-current text-primary" />
                  Explore courses
                </a>
              </div>
            </ScrollReveal>

            {/* Key Bullet Trust Points */}
            <ScrollReveal delay={300}>
              <div className="mt-8 grid gap-3 border-t border-black/[0.06] pt-6 sm:grid-cols-2">
                {current.stats.map((stat) => (
                  <div key={stat} className="flex items-center gap-2.5 text-sm font-semibold text-foreground/90">
                    <CheckCircle2 className="size-4.5 shrink-0 text-emerald-500 fill-emerald-50" />
                    {stat}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Student-Tutor Connected Composite Graphic */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center py-6">
            <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-[2rem] bg-slate-100/50 p-2 border border-black/[0.03]">
              
              {/* Decorative radial glows */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle,_rgba(99,102,241,0.14),_transparent_70%)] blur-3xl" />
              <div className="absolute -right-6 -bottom-6 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.1),_transparent_60%)] blur-2xl size-48" />

              {/* Animated Connecting SVG Swoosh */}
              <svg className="absolute inset-0 z-10 size-full pointer-events-none" viewBox="0 0 460 345" fill="none">
                <path
                  d="M140 180 C 200 130, 240 230, 310 160"
                  stroke="url(#swoosh-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="8 6"
                  className="animate-[dash_25s_linear_infinite]"
                />
                <defs>
                  <linearGradient id="swoosh-grad" x1="140" y1="180" x2="310" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--primary)" />
                    <stop offset="1" stopColor="oklch(0.68 0.21 42)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Left Panel: Student Card */}
              <div className="absolute left-2 top-8 z-20 w-[190px] rounded-2xl border border-black/[0.05] bg-white p-2 shadow-lg transition-transform duration-300 hover:scale-103 hover:-rotate-1 -rotate-2">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-slate-100">
                  <img
                    src={current.studentImage}
                    alt={current.studentName}
                    className="size-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                    {current.studentName}
                  </div>
                </div>
              </div>

              {/* Right Panel: Tutor Card */}
              <div className="absolute right-2 bottom-6 z-20 w-[190px] rounded-2xl border border-black/[0.05] bg-white p-2 shadow-lg transition-transform duration-300 hover:scale-103 hover:rotate-1 rotate-2">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-slate-100">
                  <img
                    src={current.tutorImage}
                    alt={current.tutorName}
                    className="size-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                    {current.tutorName}
                  </div>
                  <div className="absolute top-2 right-2 rounded-md bg-emerald-500 px-2 py-0.5 text-[10px] font-extrabold text-white shadow-sm">
                    LIVE
                  </div>
                </div>
              </div>

              {/* Interactive Speech Bubble: Student (Top Right of Student card) */}
              <div className="absolute left-6 -top-2 z-30 max-w-[210px] rounded-2xl rounded-tl-none bg-indigo-900 px-4 py-3 text-xs text-white shadow-md leading-relaxed animate-float">
                <p className="font-semibold opacity-75 mb-0.5 text-[10px]">{current.studentName}</p>
                <p>{current.studentBubble}</p>
              </div>

              {/* Interactive Speech Bubble: Tutor (Bottom Left of Tutor card) */}
              <div className="absolute right-6 -bottom-4 z-30 max-w-[210px] rounded-2xl rounded-br-none border border-black/[0.04] bg-white px-4 py-3 text-xs text-slate-800 shadow-md leading-relaxed">
                <p className="font-semibold text-primary mb-0.5 text-[10px]">{current.tutorName}</p>
                <p>{current.tutorBubble}</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* 3. The "Trust Engine" Banner */}
        <ScrollReveal delay={350}>
          <div className="mt-14 grid gap-6 rounded-2xl border border-black/[0.04] bg-black/[0.02] px-6 py-6 sm:grid-cols-3 sm:px-8 text-center sm:text-left">
            <div className="flex flex-col justify-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Endorsed Ecosystem</span>
              <p className="text-sm font-extrabold text-foreground">Trusted by 2,000+ parents across India</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 border-y border-black/[0.04] py-4 sm:border-y-0 sm:py-0 sm:border-x sm:border-black/[0.04] sm:px-6">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy learner avatar"
                    className="size-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <span className="text-sm font-black text-foreground">4.9/5</span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground">Rating from verified parent surveys</span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                <Video className="size-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-foreground">100% Live & Personal</p>
                <p className="text-[10px] font-semibold text-muted-foreground">Zero passive, pre-recorded lectures</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  )
}
