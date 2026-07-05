import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PopularClasses } from "@/components/popular-classes"
import { SmallBatches } from "@/components/small-batches"
import { WhyLove } from "@/components/why-love"
import { CtaBanner } from "@/components/cta-banner"
import { SiteFooter } from "@/components/site-footer"
import { StickyMobileFooter } from "@/components/sticky-mobile-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <PopularClasses />
        <SmallBatches />
        <WhyLove />
        <CtaBanner />
      </main>
      <SiteFooter />
      <StickyMobileFooter />
    </div>
  )
}
