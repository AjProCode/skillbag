"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function ScrollReveal({ children, className, delay = 0, once = true }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && node) {
            observer.unobserve(node)
          }
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -60px 0px",
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={cn(
        "translate-y-8 opacity-0 transition-all duration-700 ease-out",
        isVisible && "translate-y-0 opacity-100",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
