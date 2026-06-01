import { MoneyTransferHero } from "./layouts/hero/Index";
import { TransferChannelsSection } from "./layouts/transfer-channels/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { CurrencyBenefitsDark } from "../currency-exchange/layouts/benefits-dark/Index";
import { GlobalTransactionsSection } from "../foreign-accounts";





export function GlobalMoneyTransferPage() {
  return (
    <main>
      <MoneyTransferHero />
      <TransferChannelsSection />
      <CurrencyBenefitsDark />
      <GlobalTransactionsSection />
      <TestimonialsSection heading="See what our customers say about global transfers" />
    </main>
  );
}
