import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaBanner() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-900 px-8 py-12 text-primary-foreground shadow-[0_30px_90px_-35px_rgba(15,23,42,0.65)] sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.13),_transparent_30%)]"></div>
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-amber-400/20 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 size-64 rounded-full bg-indigo-400/10 blur-3xl"></div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="relative z-10 max-w-lg">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/90 backdrop-blur-sm">
                <Sparkles className="size-4 text-amber-300" />
                Limited spots available
              </div>
              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to start
                <br className="hidden sm:block" />
                your learning journey?
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Connect with us on WhatsApp and find the perfect course for you or your child.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-start gap-5 lg:items-end">
              <Button
                render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
                size="lg"
                className="rounded-full bg-amber-400 px-8 text-base font-semibold text-slate-950 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/30"
              >
                <MessageCircle className="size-5" />
                Connect on WhatsApp
              </Button>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <div className="flex size-2 items-center justify-center rounded-full bg-emerald-400">
                  <span className="block size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <span>We typically reply within minutes</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
