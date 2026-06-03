import { VirtualCardHero } from "./layouts/hero/Index";
import { ProductBenefitsGrid } from "./layouts/card-benefits/Index";
import { FeaturePitchSection } from "@/components/feature-pitch-section/Index";
import { TransactionSecuritySection } from "@/components/transaction-security-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { figma } from "@/data/images/Index";

const pills = [
  "VIRTUAL CARD ISSUANCE",
  "CRYPTO TO CARD CONVERSION",
  "GLOBAL SPENDING",
  "MULTI-CURRENCY SUPPORT",
  "TRANSACTION SECURITY",
  "ANTI-FRAUD PROTECTION",
  "INSTANT NOTIFICATIONS",
];

export function StablecoinVirtualCardPage() {
  return (
    <main>
      <VirtualCardHero />
      <ProductBenefitsGrid />
      <FeaturePitchSection
        heading={<>Get more from <span className="text-secondary">Paybyleap</span><br /><span className="text-secondary">Virtual</span> Card</>}
        pills={pills}
        image={figma.handheld}
        ctaHeading={<>Get your Card<br />easily Today!</>}
      />
      <TransactionSecuritySection />
      <TestimonialsSection heading="See what our customers say about our virtual cards" />
    </main>
  );
}
