"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ChevronUp, ChevronDown, Award } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/site"

export function StickyMobileFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 350)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block lg:hidden">
      
      {/* Frosted Glass Base Bar */}
      <div className="relative border-t border-black/[0.05] bg-white/95 px-4 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_40px_rgba(0,0,0,0.12)] backdrop-blur-lg">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3">
          
          {/* Collapse/Expand Toggle button */}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-slate-600 transition-colors hover:bg-black/[0.06] active:scale-95"
            aria-label={isMinimized ? "Expand CTA bar" : "Minimize CTA bar"}
          >
            {isMinimized ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>

          {/* WhatsApp CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold uppercase tracking-wider transition-all duration-300 active:scale-97 shadow-lg shadow-emerald-500/20 animate-whatsapp-pulse ${
              isMinimized ? "py-2 px-3 text-[10px]" : "py-3 px-4 text-xs"
            }`}
          >
            <MessageCircle className="size-4.5 fill-current shrink-0" />
            <span>{isMinimized ? "Chat Live" : "Connect on WhatsApp"}</span>
          </a>

          {/* Social Proof Badges when not minimized */}
          {!isMinimized && (
            <div className="flex shrink-0 flex-col text-right">
              <div className="flex items-center justify-end gap-0.5 text-xs font-black text-slate-800 leading-none">
                <span>4.9</span>
                <span className="text-amber-500 text-[10px]">★</span>
              </div>
              <span className="text-[8px] font-bold text-muted-foreground uppercase mt-1 leading-none">2k+ Joined</span>
            </div>
          )}
          
        </div>
      </div>

    </div>
  )
}
