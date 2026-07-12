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
    <header className="sticky top-0 z-50 border-b border-white/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Skillbag home">
          <img
            src="/skillbag-logo.png"
            alt="Skillbag"
            className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
            className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(16,185,129,0.95)] transition-all hover:-translate-y-0.5 hover:bg-emerald-600 sm:inline-flex"
          >
            <MessageCircle className="mr-2 size-4" />
            WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-border/70 bg-white/80 text-foreground shadow-sm transition-all hover:bg-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-border"></div>
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              className="w-full rounded-full bg-emerald-500 text-sm font-semibold text-white shadow-md hover:bg-emerald-600"
            >
              <MessageCircle className="mr-2 size-4" />
              Connect on WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
