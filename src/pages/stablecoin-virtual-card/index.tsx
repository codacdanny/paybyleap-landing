import { VirtualCardHero } from "./layouts/hero/Index";
import { CardBenefitsSection } from "./layouts/card-benefits/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { CurrencyBenefitsDark } from "../currency-exchange/layouts/benefits-dark/Index";
import { GlobalTransactionsSection } from "../foreign-accounts";





export function StablecoinVirtualCardPage() {
  return (
    <main>
      <VirtualCardHero />
      <CardBenefitsSection />
      <CurrencyBenefitsDark />
      <GlobalTransactionsSection />
      <TestimonialsSection heading="See what our customers say about our virtual cards" />
    </main>
  );
}
