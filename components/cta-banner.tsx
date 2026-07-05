import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-10 text-primary-foreground sm:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="relative z-10 max-w-lg">
            <h2 className="flex flex-wrap items-center gap-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Ready to start
              <Sparkles className="size-6 text-amber-300" />
            </h2>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              your learning journey?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Connect with us on WhatsApp and find the perfect class for you.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-start gap-4 lg:items-end">
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
            >
              <MessageCircle className="size-4" />
              Connect on WhatsApp
            </Button>
            <span className="text-xs text-primary-foreground/70">
              We typically reply in a few minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
