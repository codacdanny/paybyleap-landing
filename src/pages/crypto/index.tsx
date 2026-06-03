import { CryptoHero } from "./layouts/hero/Index";
import { CryptoBenefitsCarouselSection } from "./layouts/crypto-benefits/Index";
import { FeaturePitchSection } from "@/components/feature-pitch-section/Index";
import { TransactionSecuritySection } from "@/components/transaction-security-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { figma } from "@/data/images/Index";

const pills = [
  "BUY & SELL CRYPTO",
  "SEND & RECEIVE CRYPTO",
  "REAL-TIME PRICE ALERTS",
  "WALLET INTEGRATION",
  "TRANSACTION HISTORY",
  "ANTI-FRAUD PROTECTION",
  "INSTANT NOTIFICATIONS",
];

export function CryptoPage() {
  return (
    <main>
      <CryptoHero />
      <CryptoBenefitsCarouselSection />
      <FeaturePitchSection
        heading={<>Get more from <span className="text-secondary">Paybyleap</span><br /><span className="text-secondary">Crypto</span></>}
        pills={pills}
        image={figma.handheld}
        ctaHeading={<>Start using Crypto<br />easily Today!</>}
      />
      <TransactionSecuritySection />
      <TestimonialsSection heading="See what our customers say about our crypto features" />
    </main>
  );
}
