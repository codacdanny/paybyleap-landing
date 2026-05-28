import { CurrencyHero } from "./layouts/hero/Index";
import { RealTimeExchangeSection } from "./layouts/real-time-exchange/Index";
import { WhatYouGainSection } from "./layouts/what-you-gain/Index";
import { CurrencyBenefitsDark } from "./layouts/benefits-dark/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { GlobalTransactionsSection } from "../foreign-accounts";

export function CurrencyExchangePage() {
  return (
    <main>
      <CurrencyHero />
      <RealTimeExchangeSection />
      <WhatYouGainSection />
      <CurrencyBenefitsDark />
      <GlobalTransactionsSection />
      <TestimonialsSection heading="See what our customers say about our rates" />
    </main>
  );
}
