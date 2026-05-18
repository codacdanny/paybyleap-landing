import { CryptoHero } from "./layouts/hero/Index";
import { CryptoBenefitsSection } from "./layouts/crypto-benefits/Index";
import { BenefitPillsSection } from "@/components/benefit-pills-section/Index";
import { SecurityTrustSection } from "@/components/security-trust-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";

const cryptoPills = [
  "BUY/SELL CRYPTO",
  "SEND/RECEIVE CRYPTO",
  "NOTIFICATION ON EVERY CRYPTO TRANSACTIONS",
  "REAL-TIME PRICE ALERTS",
  "WALLET INTEGRATION",
  "TRANSACTION HISTORY",
];

const cryptoSecurityFeatures = [
  {
    title: "Protected and Regulated",
    desc: "Our platform is fully regulated and your crypto assets are protected",
  },
  {
    title: "2FA Authentication",
    desc: "Verify to grant access to use your crypto wallet and transfers",
  },
  {
    title: "Instant Notification",
    desc: "Receive alert immediately after every crypto transaction",
  },
];

export function CryptoPage() {
  return (
    <main>
      <CryptoHero />
      <CryptoBenefitsSection />
      <BenefitPillsSection
        heading="Get more from transacting your Crypto with Paybyleap"
        pills={cryptoPills}
      />
      <SecurityTrustSection
        heading="Send/Receive crypto globally with ease and safety measures"
        subtitle="Transacting crypto is now very easy and fast with Paybyleap"
        features={cryptoSecurityFeatures}
      />
      <TestimonialsSection heading="See what our customers say about our crypto features" />
    </main>
  );
}
