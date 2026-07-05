import { MessageCircle, Play, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
            </span>
            New classes starting soon
          </div>
          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Learn real skills.{" "}
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Live online.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Interactive online classes for every age. Learn. Practice. Grow. From anywhere in the world.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              <MessageCircle className="size-5" />
              Connect on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-6 text-base font-semibold text-foreground transition-all hover:bg-muted/80"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Play className="size-4 fill-current" />
              </span>
              Watch how it works
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-background"></div>
                <div className="size-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-background"></div>
                <div className="size-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-background"></div>
              </div>
              <span className="font-medium text-foreground">2,000+</span>
              <span>learners</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★★★★★</span>
              <span className="font-medium text-foreground">4.9</span>
              <span>rating</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                alt="A student smiling and waving during a live online class on her laptop"
                className="aspect-[4/3] w-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute -right-4 -top-4 flex items-center gap-3 rounded-2xl bg-card/95 px-4 py-3 shadow-xl backdrop-blur-sm border border-border/50">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg">
              <Video className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">Live &amp; Interactive</p>
              <p className="text-xs text-muted-foreground">Real-time classes</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card/95 px-4 py-3 shadow-xl backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">Expert Teachers</p>
                <p className="text-xs text-muted-foreground">Verified & trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
