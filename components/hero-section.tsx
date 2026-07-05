import { MessageCircle, Play, Star, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

const avatars = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=45",
  "https://i.pravatar.cc/80?img=5",
]

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Learn real skills.{" "}
            <span className="text-accent">Live online.</span>
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Interactive online classes for every age. Learn. Practice. Grow. From anywhere.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              <MessageCircle className="size-4" />
              Connect on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-4 text-foreground hover:bg-muted"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Play className="size-3.5 fill-current" />
              </span>
              Watch how it works
            </Button>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-muted-foreground">
              Trusted by 1000+ learners &amp; parents
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src || "/placeholder.svg"}
                    alt=""
                    className="size-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">4.8</span>
                <span className="text-sm text-muted-foreground">(2.4k reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
              alt="A student smiling and waving during a live online class on her laptop"
              className="aspect-[4/3] w-full object-cover object-[center_20%]"
            />
          </div>
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-2xl bg-card/95 px-3 py-2 shadow-lg backdrop-blur">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Video className="size-4" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-foreground">Live &amp; Interactive</p>
              <p className="text-[11px] text-muted-foreground">Classes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
