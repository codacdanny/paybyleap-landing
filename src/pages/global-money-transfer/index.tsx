import { MoneyTransferHero } from "./layouts/hero/Index";
import { ServiceFeaturesSection } from "./layouts/transfer-channels/Index";
import { FeaturePitchSection } from "@/components/feature-pitch-section/Index";
import { TransactionSecuritySection } from "@/components/transaction-security-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { figma } from "@/data/images/Index";

const pills = [
  "FAST INTERNATIONAL TRANSFERS",
  "MULTI-CURRENCY SUPPORT",
  "REAL-TIME EXCHANGE RATES",
  "PAYMENT TRACKING",
  "TRANSACTION HISTORY & REPORT",
  "ANTI-FRAUD PROTECTION",
  "INSTANT NOTIFICATIONS",
];

export function GlobalMoneyTransferPage() {
  return (
    <main>
      <MoneyTransferHero />
      <ServiceFeaturesSection />
      <FeaturePitchSection
        heading={<>Get more from <span className="text-secondary">Paybyleap</span><br /><span className="text-secondary">Global</span> Money Transfer</>}
        pills={pills}
        image={figma.handheld}
        ctaHeading={<>Transfer Money<br />easily Today!</>}
      />
      <TransactionSecuritySection />
      <TestimonialsSection heading="See what our customers say about global transfers" />
    </main>
  );
}
