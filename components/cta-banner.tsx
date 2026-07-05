import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 px-8 py-12 text-primary-foreground shadow-2xl sm:px-12 sm:py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 size-64 rounded-full bg-accent/10 blur-3xl"></div>
        
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/90 backdrop-blur-sm">
              <Sparkles className="size-4 text-amber-300" />
              Limited spots available
            </div>
            <h2 className="mt-6 flex flex-wrap items-center gap-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to start
              <br className="hidden sm:block" />
              your learning journey?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Connect with us on WhatsApp and find the perfect class for you or your child.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-start gap-5 lg:items-end">
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
            >
              <MessageCircle className="size-5" />
              Connect on WhatsApp
            </Button>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <div className="flex size-2 items-center justify-center rounded-full bg-green-400">
                <span className="block size-1.5 rounded-full bg-green-400 animate-pulse"></span>
              </div>
              <span>We typically reply in a few minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
