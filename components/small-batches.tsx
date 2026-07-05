import { Clock, Users, Video, GraduationCap } from "lucide-react"

const features = [
  { label: "Live Classes", icon: Video },
  { label: "Expert Teachers", icon: GraduationCap },
  { label: "Small Batch Size", icon: Users },
  { label: "Flexible Timing", icon: Clock },
]

export function SmallBatches() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="w-fit rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/80">
              Live classes, real connection
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Small batches.
              <br /> Big attention.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Our interactive live classes ensure personalized attention and real progress
              for every learner.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {features.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium"
                >
                  <Icon className="size-4 text-primary-foreground/80" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-64 lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=900&q=80"
              alt="A student wearing headphones taking notes during a live online lesson"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
