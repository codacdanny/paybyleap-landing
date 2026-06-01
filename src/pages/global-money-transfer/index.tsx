import { MoneyTransferHero } from "./layouts/hero/Index";
import { TransferChannelsSection } from "./layouts/transfer-channels/Index";
import { BenefitPillsSection } from "@/components/benefit-pills-section/Index";
import { SecurityTrustSection } from "@/components/security-trust-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { CurrencyBenefitsDark } from "../currency-exchange/layouts/benefits-dark/Index";
import { GlobalTransactionsSection } from "../foreign-accounts";

const transferPills = [
  "SEND TO 80+ COUNTRIES",
  "REAL-TIME TRACKING",
  "RECEIVE IN MULTIPLE CURRENCIES",
  "PAYMENT SCHEDULING",
  "TRANSACTION HISTORY",
];

const transferSecurityFeatures = [
  {
    title: "Protected and Regulated",
    desc: "Your transfers are fully protected and regulated at every step",
  },
  {
    title: "2FA Authentication",
    desc: "Verify your identity to securely authorize every international transfer",
  },
  {
    title: "Instant Notification",
    desc: "Receive alerts immediately after every transfer or payment",
  },
];

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
