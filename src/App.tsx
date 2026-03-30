import { AdditionalServicesSection } from "./components/AdditionalServicesSection";
import { BenefitsPhoneSection } from "./components/BenefitsPhoneSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MobileAppHero } from "./components/MobileAppHero";
import { MoneyTransferSection } from "./components/MoneyTransferSection";
import { SiteFooter } from "./components/SiteFooter";
import { StablecoinSection } from "./components/StablecoinSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StablecoinSection />
        <MoneyTransferSection />
        <MobileAppHero />
        <BenefitsPhoneSection />
        <AdditionalServicesSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
