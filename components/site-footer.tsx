"use client"

import { useState } from "react"
import { MessageCircle, Plus, Minus, HelpCircle, ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/site"

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.5 7a2.8 2.8 0 0 0-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5 2.8 2.8 0 0 0 2 2c1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-5 29 29 0 0 0-.5-5z" />
      <polygon points="9.75 15.5 15.5 12 9.75 8.5 9.75 15.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const socials = [InstagramIcon, YoutubeIcon, FacebookIcon]

import { useLandingPageData } from "@/lib/landing-page-data"

export function SiteFooter() {
  const data = useLandingPageData()
  const faqs = data.faqs
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <footer className="border-t border-black/[0.04] bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Top Info Grid */}
        <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-premium backdrop-blur-xl sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <a href="#" className="flex items-center gap-3 transition-transform duration-300 active:scale-95" aria-label="Skillbag home">
              <img
                src="/skillbag-logo.png"
                alt="Skillbag Logo"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-300">
              Skillbag is a premium, high-trust EdTech platform. We deliver live, small-group communication, logic, and creativity classes for curious kids and ambitious adults.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <a href="#courses" className="transition-colors hover:text-white">
                Browse classes
              </a>
              <span className="text-slate-600">•</span>
              <a href="#why-skillbag" className="transition-colors hover:text-white">
                Why Us
              </a>
              <span className="text-slate-600">•</span>
              <a href="#reviews" className="transition-colors hover:text-white">
                Read reviews
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Join 2,000+ happy learners</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              Have doubts about sizing, teacher availability, or schedules? Message our team directly and we will set you up.
            </p>
            
            <div className="mt-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="size-4 fill-current" />
                Ask a counselor on WhatsApp
              </a>
            </div>
            
            <div className="mt-6 flex items-center gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-300 transition-all hover:bg-white/20 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive FAQ Section */}
        <div className="mt-10 grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-premium backdrop-blur-xl sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-300 border border-white/10">
              <HelpCircle className="size-3.5" />
              Frequently Asked Questions
            </div>
            <h3 className="mt-4 text-2xl font-black text-white">Answering your objections upfront.</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              We stand by our coaching quality and small-batch dedication. Connect on WhatsApp if you have custom schedule requirements.
            </p>

          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 transition-colors duration-250"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(i)}
                    className="flex w-full items-center justify-between px-5 py-4.5 text-left text-xs font-black uppercase tracking-wider text-white hover:bg-white/5 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-slate-300">
                      {isOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                    </span>
                  </button>
                  
                  {/* Expanded Content with CSS Transitions */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[250px] opacity-100 border-t border-white/5 py-4 px-5" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-xs leading-relaxed text-slate-300 font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Skillbag. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Terms of use</a>
            <a href="#" className="transition-colors hover:text-white">Privacy policy</a>
            <a href="#" className="transition-colors hover:text-white">Refund guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
