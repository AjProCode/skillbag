import { Clock, Users, Video, GraduationCap } from "lucide-react"

const features = [
  { label: "Live Classes", icon: Video },
  { label: "Expert Teachers", icon: GraduationCap },
  { label: "Small Batch Size", icon: Users },
  { label: "Flexible Timing", icon: Clock },
]

export function SmallBatches() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di0yaC0ydjJIMTZ2LTJoLTJ2MmgtMnYyaDJ2Mmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <span className="w-fit rounded-full bg-primary-foreground/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/90 backdrop-blur-sm">
              Live classes, real connection
            </span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Small batches.
              <br /> Big attention.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Our interactive live classes ensure personalized attention and real progress
              for every learner.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-primary-foreground/15 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all hover:bg-primary-foreground/25"
                >
                  <Icon className="size-4 text-primary-foreground/90" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/20">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Max 8 students per batch</span>
              </div>
            </div>
          </div>

          <div className="relative min-h-72 lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            <img
              src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=900&q=80"
              alt="A student wearing headphones taking notes during a live online lesson"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/95 p-4 backdrop-blur-sm shadow-xl border border-border/50">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">HD Video Quality</p>
                  <p className="text-xs text-muted-foreground">Crystal clear learning experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
