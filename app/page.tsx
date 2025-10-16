import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CarShowcase } from "@/components/car-showcase"
import { FeaturesSection } from "@/components/features-section"
import { FinancingSection } from "@/components/financing-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CarShowcase />
      <FeaturesSection />
      <FinancingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
