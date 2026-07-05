"use client"

import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { EnhancedClassCard } from "@/components/enhanced-class-card"

const classes = [
  {
    title: "Rubik's Cube",
    image:
      "https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    studentCount: 1250,
    duration: "8 weeks",
    isPopular: true,
    teacherName: "Dr. Sarah Chen",
  },
  {
    title: "Public Speaking",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    studentCount: 890,
    duration: "6 weeks",
    isNewBatch: true,
    teacherName: "James Miller",
  },
  {
    title: "Creative Writing",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    studentCount: 670,
    duration: "10 weeks",
    teacherName: "Emily Watson",
  },
  {
    title: "Dance",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    studentCount: 1580,
    duration: "12 weeks",
    isPopular: true,
    teacherName: "Maria Santos",
  },
  {
    title: "Music",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    studentCount: 420,
    duration: "8 weeks",
    isNewBatch: true,
    teacherName: "David Kim",
  },
    {
      title: "Conversation Classes",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      studentCount: 970,
      duration: "6 weeks",
      isNewBatch: true,
      teacherName: "Ananya Patel",
    },
    {
      title: "Chess",
      image:
        "https://images.unsplash.com/photo-1516687400790-8672c4e4e6cc?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      studentCount: 1320,
      duration: "10 weeks",
      isPopular: true,
      teacherName: "Arjun Singh",
    },
    {
      title: "Abacus",
      image:
        "https://images.unsplash.com/photo-1587019150335-c5740bff790a?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      studentCount: 810,
      duration: "8 weeks",
      teacherName: "Meera Joshi",
    },
    {
      title: "Tenses",
      image:
        "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=600&q=80",
      rating: 4.5,
      studentCount: 520,
      duration: "4 weeks",
      teacherName: "Rohit Sharma",
    },
    {
      title: "English",
      image:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      studentCount: 1100,
      duration: "12 weeks",
      isPopular: true,
      teacherName: "Sophia Lee",
    },
    {
      title: "Book Club",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      studentCount: 680,
      duration: "6 weeks",
      teacherName: "Priya Kapoor",
    },
    {
      title: "English Handwriting",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      studentCount: 540,
      duration: "5 weeks",
      teacherName: "Anjali Verma",
    },
    {
      title: "Hindi Handwriting",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      studentCount: 460,
      duration: "5 weeks",
      teacherName: "Rajesh Kumar",
    },
    {
      title: "Guitar",
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      studentCount: 940,
      duration: "10 weeks",
      isPopular: true,
      teacherName: "Nina Bose",
    },
    {
      title: "Keyboard",
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      studentCount: 720,
      duration: "8 weeks",
      teacherName: "Amit Desai",
    },
    {
      title: "Baking",
      image:
        "https://images.unsplash.com/photo-1511688878352-1d2d6c35adf9?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      studentCount: 580,
      duration: "6 weeks",
      isNewBatch: true,
      teacherName: "Simran Mehta",
    },
]

export function PopularClasses() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollBy = (distance: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" })
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Explore
              <br className="hidden sm:block" /> popular classes
            </h2>
          </div>
          <p className="max-w-xs pb-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Handpicked classes loved by thousands of learners worldwide.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous classes"
            onClick={() => scrollBy(-320)}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next classes"
            onClick={() => scrollBy(320)}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {classes.map((item) => (
          <article key={item.title} className="shrink-0 snap-start w-[280px]">
            <EnhancedClassCard
              title={item.title}
              image={item.image}
              rating={item.rating}
              studentCount={item.studentCount}
              duration={item.duration}
              isPopular={item.isPopular}
              isNewBatch={item.isNewBatch}
              teacherName={item.teacherName}
            />
          </article>
        ))}
      </div>
    </section>
  )
}
