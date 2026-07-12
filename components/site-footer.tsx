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
const faqs = [
  { question: "Do you offer live classes only?", answer: "Yes, every Skillbag class is live and interactive, with no passive video-only learning." },
  { question: "What is the batch size?", answer: "Most batches are intentionally small, with a maximum of 8 students so tutors can engage each learner." },
  { question: "How do I book a trial or class?", answer: "Tap the WhatsApp CTA and our team will help you choose the best class and batch timing." },
  { question: "What about refunds?", answer: "We offer a simple, transparent refund policy for eligible cases. Reach out and we will clarify it for you." },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur-sm sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <a href="#" className="flex items-center gap-3" aria-label="Skillbag home">
              <img
                src="/skillbag-logo.png"
                alt="Skillbag"
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-12"
              />
            </a>
            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              Live online classes for confident learners, curious kids, and ambitious adults. Learn, practice, and grow with expert mentors in small, supportive batches.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <a href="#courses" className="font-medium transition-colors hover:text-white">
                Browse classes
              </a>
              <span className="text-slate-500">•</span>
              <a href="#reviews" className="font-medium transition-colors hover:text-white">
                Read reviews
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Stay connected</h3>
            <div className="mt-4 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition-all hover:bg-white/20"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">Follow us for updates, tips, and new batch announcements.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Need help deciding?</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">We will help you pick the right path.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Connect on WhatsApp and we will guide you through the best class, timing, and starting point for your goal.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[1.2rem] border border-white/10 bg-black/15 px-4 py-3 text-sm text-slate-200">
                <summary className="cursor-pointer font-semibold text-white">{faq.question}</summary>
                <p className="mt-2 leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} Skillbag. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
