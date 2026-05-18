import { MoneyTransferHero } from "./layouts/hero/Index";
import { TransferChannelsSection } from "./layouts/transfer-channels/Index";
import { BenefitPillsSection } from "@/components/benefit-pills-section/Index";
import { SecurityTrustSection } from "@/components/security-trust-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";

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
      <BenefitPillsSection
        heading="Get more from Paybyleap Transfer Globally"
        subheading="Transfer Money Globally with Ease"
        pills={transferPills}
      />
      <SecurityTrustSection
        heading="Send/Receive money globally, with ease and safety measures"
        subtitle="Sending money globally is now very easy and fast with Paybyleap"
        features={transferSecurityFeatures}
      />
      <TestimonialsSection heading="See what our customers say about global transfers" />
    </main>
  );
}
