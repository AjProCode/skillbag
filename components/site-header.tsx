"use client"

import { useState } from "react"
import { ChevronDown, GraduationCap, Menu, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Classes", hasDropdown: true },
  { label: "How it works" },
  { label: "For Kids" },
  { label: "For Adults" },
  { label: "Become Teacher" },
  { label: "Pricing" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-bold text-foreground">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="text-lg tracking-tight">Skillbag</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="size-3.5" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90 sm:inline-flex">
            <MessageCircle className="size-4" />
            Connect on WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="size-4" />
              Connect on WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
