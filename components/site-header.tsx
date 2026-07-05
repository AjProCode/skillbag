"use client"

import { useState } from "react"
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/site"

const navLinks = [
  { label: "Classes", hasDropdown: true },
  { label: "For Kids" },
  { label: "For Adults" },
  { label: "Become Teacher" },
  { label: "Pricing" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center" aria-label="Skillbag home">
          <img
            src="/skillbag-logo.png"
            alt="Skillbag"
            className="h-12 w-auto sm:h-14 transition-transform hover:scale-105"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline decoration-2 underline-offset-4"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
            className="hidden rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 sm:inline-flex"
          >
            <MessageCircle className="size-4" />
            Connect on WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full bg-muted/50 text-foreground transition-all hover:bg-muted lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-lg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-border"></div>
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              className="mt-3 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
            >
              <MessageCircle className="size-4" />
              Connect on WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
