import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PopularClasses } from "@/components/popular-classes"
import { SmallBatches } from "@/components/small-batches"
import { WhyLove } from "@/components/why-love"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SiteFooter } from "@/components/site-footer"
import { StickyMobileFooter } from "@/components/sticky-mobile-footer"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_30%)]" />
      <SiteHeader />
      <main>
        <HeroSection />
        <SmallBatches />
        <PopularClasses />
        <WhyLove />
        <TestimonialsSection />
      </main>
      <SiteFooter />
      <StickyMobileFooter />
    </div>
  )
}
