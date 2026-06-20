import { GenerazioneNavbar } from "@/components/generazione-navbar"
import { GenerazioneHero } from "@/components/generazione-hero"
import { MarqueeBand } from "@/components/marquee-band"
import { ManifestoSection } from "@/components/manifesto-section"
import { MembersTeaser } from "@/components/members-teaser"
import { FormSection } from "@/components/form-section"
import { CtaFooter } from "@/components/cta-footer"
import { FAQSection } from "@/components/faq-section"
import { LandingFooter } from "@/components/landing-footer"

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#070b07", color: "#f0f5f0" }}
    >
      <GenerazioneNavbar />
      <GenerazioneHero />
      <MarqueeBand />
      <ManifestoSection />
      <MembersTeaser />
      <FormSection />
      <CtaFooter />
      <FAQSection />
      <LandingFooter />
    </main>
  )
}
