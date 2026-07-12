import { Play, Star, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    name: "Naina",
    role: "Grade 5 Student",
    course: "Public Speaking & Confidence",
    transformation: "From shy to debate winner 🏆",
    quote: "I used to freeze and look down whenever I had to speak in public. Skillbag's live speech drills gave me a safe, small-group space to practice. Last week, I won my first school-level debate competition!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    isVideo: true,
    videoDuration: "1:15"
  },
  {
    name: "Aarav's Dad",
    role: "Parent of Grade 4 Student",
    course: "Abacus & Logic Skills",
    transformation: "Shy kid to active class participant",
    quote: "My son struggled with focus and would easily give up on math questions. The maximum 8 students limit meant the coach engaged him constantly. Now he loves solving abacus drills live!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    isVideo: false
  },
  {
    name: "Rohan",
    role: "Software Engineer",
    course: "Conversational English",
    transformation: "Conquered corporate speaker anxiety 💬",
    quote: "I was extremely anxious about presenting to client leads in the US. The instructor analyzed my vocal pacing, helped me eliminate fillers, and gave me practical exercises to speak with command.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    isVideo: true,
    videoDuration: "0:58"
  },
  {
    name: "Mira's Mom",
    role: "Parent of Teen Learner",
    course: "Guitar & Chord Mastery",
    transformation: "Plays favorite songs confidently at home",
    quote: "Mira had zero music experience and would private-practice in her room out of embarrassment. The friendly peer showcases built her confidence. Now she comfortably plays chord sequences for us!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    isVideo: false
  },
  {
    name: "Kunal's Father",
    role: "Parent of Grade 6 Student",
    course: "Chess Tactics Live",
    transformation: "Channeled screen time into critical logic ♟️",
    quote: "We wanted to reduce Kunal's passive iPad watching. The live chess coach redirected his screen time into analyzing board tactics and planning moves. His focus has improved in school too.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    isVideo: false
  },
  {
    name: "Divya",
    role: "MBA Candidate",
    course: "Advanced Persuasion Skills",
    transformation: "Aced placement round interview",
    quote: "I had strong academic marks but failed at dynamic group discussions. The coaching structured my answers using frameworks that sound natural yet professional. It got me hired in the final round!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    isVideo: true,
    videoDuration: "1:04"
  }
]

// Split testimonials into 3 arrays to build a clean responsive masonry grid without column breaking bugs
const col1 = [testimonials[0], testimonials[3]]
const col2 = [testimonials[1], testimonials[4]]
const col3 = [testimonials[2], testimonials[5]]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="flex flex-col gap-5 rounded-[2.5rem] border border-black/[0.04] bg-white/70 p-6 shadow-premium backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between sm:p-10 lg:p-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider">
              <Sparkles className="size-3.5 fill-current text-primary" />
              Wall of love
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Real transformations, real growth.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            See how Skillbag's interactive online coaching has helped learners upgrade their confidence, logic, and self-belief.
          </p>
        </div>
      </ScrollReveal>

      {/* Masonry Columns */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {col1.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {col2.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {col3.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ item }: { item: typeof testimonials[number] }) {
  return (
    <ScrollReveal delay={80}>
      <article className="group relative flex flex-col rounded-3xl border border-black/[0.05] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
        
        {/* Transformation Header */}
        <div className="mb-4 rounded-xl bg-primary/5 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-primary border border-primary/10">
          <span className="text-accent mr-1">Before ➔ After:</span> {item.transformation}
        </div>

        {/* Star Rating Group */}
        <div className="mb-4 flex text-amber-400 gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-xs font-semibold leading-relaxed text-foreground/80 grow italic">
          “{item.quote}”
        </blockquote>

        {/* Course Association Pill */}
        <div className="mt-5 inline-flex items-center self-start rounded-full bg-black/[0.03] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-muted-foreground">
          {item.course}
        </div>

        {/* Profile Card Bottom */}
        <div className="mt-5 flex items-center gap-3 border-t border-black/[0.03] pt-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-10 w-10 rounded-full object-cover border border-black/[0.08]"
          />
          <div>
            <p className="text-xs font-extrabold text-slate-800 leading-none">{item.name}</p>
            <p className="text-[10px] text-muted-foreground mt-1 leading-none">{item.role}</p>
          </div>
        </div>

        {/* Mock Video Overlay if it is a video review */}
        {item.isVideo && (
          <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 text-[9px] font-black text-white shadow-sm transition-colors duration-250 cursor-pointer active:scale-95 animate-whatsapp-pulse">
            <Play className="size-3 fill-current" />
            <span>Play Clip ({item.videoDuration})</span>
          </div>
        )}
      </article>
    </ScrollReveal>
  )
}
