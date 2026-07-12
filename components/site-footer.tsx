function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.5 7a2.8 2.8 0 0 0-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5 2.8 2.8 0 0 0 2 2c1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-5 29 29 0 0 0-.5-5z" />
      <polygon points="9.75 15.5 15.5 12 9.75 8.5 9.75 15.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const socials = [InstagramIcon, YoutubeIcon, FacebookIcon]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 rounded-[2rem] border border-border/60 bg-card/70 p-6 shadow-soft backdrop-blur-sm sm:grid-cols-[1.1fr_0.9fr] sm:p-8">
          <div>
            <a href="#" className="flex items-center gap-3" aria-label="Skillbag home">
              <img
                src="/skillbag-logo.png"
                alt="Skillbag"
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-12"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Interactive online classes for every age. Learn, practice and grow — from anywhere in the world.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <a href="#contact" className="font-medium text-foreground transition-colors hover:text-accent">
                Contact us
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#courses" className="font-medium text-foreground transition-colors hover:text-accent">
                Browse classes
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Stay connected</h3>
            <div className="mt-4 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:shadow-accent/20"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Follow us for updates, tips, and new batch announcements.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Skillbag. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground hover:underline decoration-1 underline-offset-4">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground hover:underline decoration-1 underline-offset-4">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground hover:underline decoration-1 underline-offset-4">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
