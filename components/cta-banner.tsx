import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const avatars = [
  "https://i.pravatar.cc/80?img=15",
  "https://i.pravatar.cc/80?img=33",
  "https://i.pravatar.cc/80?img=8",
]

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
              size="lg"
              className="rounded-full bg-background px-6 text-foreground hover:bg-background/90"
            >
              <MessageCircle className="size-4" />
              Connect on WhatsApp
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src || "/placeholder.svg"}
                    alt=""
                    className="size-7 rounded-full border-2 border-primary object-cover"
                  />
                ))}
              </div>
              <span className="text-xs text-primary-foreground/70">
                We typically reply in a few minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
