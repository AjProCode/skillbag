import { ArrowLeft, ArrowRight, Users } from "lucide-react"

const classes = [
  {
    title: "Rubik's Cube",
    students: "2,451 students",
    image:
      "https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Public Speaking",
    students: "1,208 students",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Creative Writing",
    students: "1,104 students",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Dance",
    students: "1,987 students",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Music",
    students: "1,764 students",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
]

export function PopularClasses() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground">
            Explore
            <br className="hidden sm:block" /> popular classes
          </h2>
          <p className="max-w-xs pb-1 text-sm text-muted-foreground">
            Handpicked classes loved by thousands of learners.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous classes"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next classes"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {classes.map((item) => (
          <article
            key={item.title}
            className="group w-44 shrink-0 snap-start sm:w-auto sm:flex-1"
          >
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.title} class`}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-sm font-bold text-foreground">{item.title}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="size-3.5" />
              {item.students}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
