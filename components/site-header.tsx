"use client"

import { useState } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-skillbag" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-white/75 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 transition-transform duration-300 active:scale-95" aria-label="Skillbag home">
          <img
            src="/skillbag-logo.png"
            alt="Skillbag Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-9"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-semibold text-muted-foreground/90 transition-colors duration-250 hover:text-foreground py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            nativeButton={false}
            render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
            className="hidden rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-4.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 animate-whatsapp-pulse sm:inline-flex"
          >
            <MessageCircle className="mr-1.5 size-4.5 fill-current" />
            Connect on WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-border/80 bg-white/90 text-foreground shadow-sm transition-all hover:bg-white active:scale-95 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-white/95 shadow-lg backdrop-blur-xl animate-in fade-in-50 slide-in-from-top-3 duration-200 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-all active:bg-slate-100 active:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="my-3 h-px bg-border/40"></div>
            <Button
              nativeButton={false}
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              className="w-full rounded-full bg-emerald-500 text-sm font-bold text-white py-4.5 shadow-md hover:bg-emerald-600 active:scale-98 text-center justify-center animate-whatsapp-pulse"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="mr-1.5 size-4.5 fill-current" />
              Connect on WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
