import { AdditionalServicesSection } from "../../components/AdditionalServicesSection";
import { BenefitsPhoneSection } from "../../components/BenefitsPhoneSection";
import { Hero } from "../../components/Hero";
import { MobileAppHero } from "../../components/MobileAppHero";
import { MoneyTransferSection } from "../../components/MoneyTransferSection";
import { StablecoinSection } from "../../components/StablecoinSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";

export function LandingPage() {
  return (
    <main>
      <Hero />
      <StablecoinSection />
      <MoneyTransferSection />
      <MobileAppHero />
      <BenefitsPhoneSection />
      <AdditionalServicesSection />
      <TestimonialsSection />
    </main>
  );
}
