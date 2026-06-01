import { VirtualCardHero } from "./layouts/hero/Index";
import { CardBenefitsSection } from "./layouts/card-benefits/Index";
import { BenefitPillsSection } from "@/components/benefit-pills-section/Index";
import { SecurityTrustSection } from "@/components/security-trust-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { CurrencyBenefitsDark } from "../currency-exchange/layouts/benefits-dark/Index";
import { GlobalTransactionsSection } from "../foreign-accounts";

const cardPills = [
  "INTEGRATION WITH WALLETS",
  "ANTI-FRAUD MONITORING",
  "CARD MANAGEMENT DASHBOARD",
  "SPENDING LIMITS",
  "CARD FREEZE/UNFREEZE",
];

const cardSecurityFeatures = [
  {
    title: "Protected and Regulated",
    desc: "Our virtual cards are protected for any transaction",
  },
  {
    title: "2FA Authentication",
    desc: "Verify to grant access to use your virtual card",
  },
  {
    title: "Instant Notification",
    desc: "Receive alert immediately after using your card",
  },
];

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
