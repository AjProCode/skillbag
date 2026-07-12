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
    <div className="fixed bottom-0 left-0 right-0 z-50 px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-4">
      <div className="absolute inset-0 border-t border-white/60 bg-white/85 backdrop-blur-xl" />

      <div className="relative mx-auto flex w-full max-w-lg items-center justify-between gap-2 py-2.5 sm:gap-3 sm:py-3">
        {!isMinimized && (
          <button
            onClick={() => setIsMinimized(true)}
            className="flex size-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 sm:size-10"
            aria-label="Minimize"
          >
            <ChevronDown className="size-4 sm:size-5" />
          </button>
        )}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-3 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(16,185,129,0.95)] transition-all hover:bg-emerald-600 active:scale-95 sm:px-4 sm:py-3 ${isMinimized ? "py-2" : ""}`}
        >
          <span className="absolute inset-0 animate-pulse bg-emerald-300/20" />
          <span className="relative flex items-center gap-2">
            <MessageCircle className="size-4" />
            <span>{isMinimized ? "Connect" : "Connect on WhatsApp"}</span>
          </span>
        </a>

        {!isMinimized && (
          <div className="flex-shrink-0 text-right">
            <div className="text-xs font-semibold text-slate-900">2k+ students</div>
            <div className="text-[10px] text-slate-500">Enrolled</div>
          </div>
        )}

        {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="flex size-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 sm:size-10"
            aria-label="Expand"
          >
            <ChevronUp className="size-4 sm:size-5" />
          </button>
        )}
      </div>

      <div className="h-safe-area-inset-bottom" />
    </div>
  )
}
