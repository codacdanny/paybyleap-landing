import { CurrencyHero } from "./layouts/hero/Index";
import { CurrencyConverterSection } from "./layouts/real-time-exchange/Index";
import { CurrencyBenefitsCarouselSection } from "./layouts/what-you-gain/Index";
import { FeaturePitchSection } from "@/components/feature-pitch-section/Index";
import { TransactionSecuritySection } from "@/components/transaction-security-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { figma } from "@/data/images/Index";

const pills = [
  "LIVE EXCHANGE RATE",
  "CURRENCY WALLET INTEGRATION",
  "TRANSPARENT FEES",
  "INSTANT CONVERSION BETWEEN ACCOUNT",
  "TRANSACTION HISTORY & REPORT",
  "ANTI-FRAUD PROTECTION",
  "NOTIFICATIONS ON CONVERSIONS",
];

export function CurrencyExchangePage() {
  return (
    <main>
      <CurrencyHero />
      <CurrencyConverterSection />
      <CurrencyBenefitsCarouselSection />
      <FeaturePitchSection
        heading={<>Get more from <span className="text-secondary">Paybyleap</span><br /><span className="text-secondary">Currency</span> Exchange</>}
        pills={pills}
        image={figma.handheld}
        ctaHeading={<>Convert Currency<br />easily Today!</>}
      />
      <TransactionSecuritySection />
      <TestimonialsSection heading="See what our customers say about our rates" />
    </main>
  );
}
