import { AboutSection } from "@/components/about-section"
import { AccommodationPage } from "@/components/accommodation/page"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PropertiesSection } from "@/components/properties-section"
import { getAccommodationByPath } from "@/lib/accommodations"
import { Router, useRouter } from "@/src/router"

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <BenefitsSection />
      <ContactSection />
    </main>
  )
}

export default function App() {
  return (
    <Router>
      <Shell />
    </Router>
  )
}

function Shell() {
  const { path } = useRouter()
  const accommodation = getAccommodationByPath(path)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {accommodation ? <AccommodationPage accommodation={accommodation} /> : <HomePage />}
      <Footer />
    </div>
  )
}
