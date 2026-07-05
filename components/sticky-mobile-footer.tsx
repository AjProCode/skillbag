"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ChevronUp, ChevronDown } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/site"

export function StickyMobileFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 400px)
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe">
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-t border-stone-200" />
      
      {/* Content */}
      <div className="relative flex items-center justify-between gap-3 py-3 max-w-lg mx-auto">
        {/* Minimize Button */}
        {!isMinimized && (
          <button
            onClick={() => setIsMinimized(true)}
            className="flex-shrink-0 flex items-center justify-center size-10 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
            aria-label="Minimize"
          >
            <ChevronDown className="size-5" />
          </button>
        )}

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-95 ${
            isMinimized ? "py-2" : ""
          }`}
        >
          <MessageCircle className="size-4" />
          <span>{isMinimized ? "Connect" : "Connect on WhatsApp"}</span>
        </a>

        {/* Trust Badge (hidden when minimized) */}
        {!isMinimized && (
          <div className="flex-shrink-0 text-right">
            <div className="text-xs font-semibold text-stone-900">2k+ Students</div>
            <div className="text-[10px] text-stone-500">Enrolled</div>
          </div>
        )}

        {/* Expand Button (when minimized) */}
        {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="flex-shrink-0 flex items-center justify-center size-10 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
            aria-label="Expand"
          >
            <ChevronUp className="size-5" />
          </button>
        )}
      </div>

      {/* Safe area padding for iOS */}
      <div className="h-safe-area-inset-bottom" />
    </div>
  )
}
