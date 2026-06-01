import { InvoicingHero } from "./layouts/hero/Index";
import { InvoiceFeaturesSection } from "./layouts/invoice-features/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { CurrencyBenefitsDark } from "../currency-exchange/layouts/benefits-dark/Index";
import { GlobalTransactionsSection } from "../foreign-accounts";



export function InvoicingPage() {
  return (
    <main>
      <InvoicingHero />
      <InvoiceFeaturesSection />
      <CurrencyBenefitsDark />
      <GlobalTransactionsSection />
      <TestimonialsSection heading="See what our customers say about invoicing" />
    </main>
  );
}
