"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ChevronUp, ChevronDown } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/site"

export function StickyMobileFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-safe sm:px-4">
      <div className="absolute inset-0 border-t border-white/60 bg-white/85 backdrop-blur-xl" />

      <div className="relative mx-auto flex max-w-lg items-center justify-between gap-3 py-3">
        {!isMinimized && (
          <button
            onClick={() => setIsMinimized(true)}
            className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-stone-200"
            aria-label="Minimize"
          >
            <ChevronDown className="size-5" />
          </button>
        )}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-95 ${
            isMinimized ? "py-2" : ""
          }`}
        >
          <MessageCircle className="size-4" />
          <span>{isMinimized ? "Connect" : "Connect on WhatsApp"}</span>
        </a>

        {!isMinimized && (
          <div className="flex-shrink-0 text-right">
            <div className="text-xs font-semibold text-stone-900">2k+ students</div>
            <div className="text-[10px] text-stone-500">Enrolled</div>
          </div>
        )}

        {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-stone-200"
            aria-label="Expand"
          >
            <ChevronUp className="size-5" />
          </button>
        )}
      </div>

      <div className="h-safe-area-inset-bottom" />
    </div>
  )
}
