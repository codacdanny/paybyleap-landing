import { CurrencyBenefitsDark } from "../currency-exchange/layouts/benefits-dark/Index";
import { GlobalTransactionsSection } from "../foreign-accounts";
import { FeePaymentHero } from "./layouts/hero/Index";
import { PaymentFeaturesSection } from "./layouts/payment-features/Index";

import { TestimonialsSection } from "@/components/testimonials-section/Index";



export function InternationalFeePaymentPage() {
  return (
    <main>
      <FeePaymentHero />
      <PaymentFeaturesSection />
      <CurrencyBenefitsDark />
      <GlobalTransactionsSection />
      <TestimonialsSection heading="See what our customers say about fee payments" />
    </main>
  );
}
