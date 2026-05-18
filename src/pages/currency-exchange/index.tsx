import { CurrencyHero } from "./layouts/hero/Index";
import { CurrencyFeatureCards } from "./layouts/feature-cards/Index";
import { WhatYouGainSection } from "./layouts/what-you-gain/Index";
import { CurrencySecuritySection } from "./layouts/security/Index";
import { BenefitPillsSection } from "@/components/benefit-pills-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";

const currencyPills = [
  "LIVE EXCHANGE RATE",
  "CURRENCY WALLET INTEGRATION",
  "TRANSPARENT FEES",
  "INSTANT CONVERSION BETWEEN ACCOUNT",
  "TRANSACTION HISTORY & REPORT",
];

export function CurrencyExchangePage() {
  return (
    <main>
      <CurrencyHero />
      <CurrencyFeatureCards />
      <WhatYouGainSection />
      <BenefitPillsSection
        heading="Get more from Paybyleap Currency Exchange"
        subheading="Convert Currency easily Today!"
        pills={currencyPills}
      />
      <CurrencySecuritySection />
      <TestimonialsSection heading="See what our customers say about our rates" />
    </main>
  );
}
