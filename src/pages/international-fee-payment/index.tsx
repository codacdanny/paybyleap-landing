import { FeePaymentHero } from "./layouts/hero/Index";
import { PaymentFeaturesSection } from "./layouts/payment-features/Index";
import { BenefitPillsSection } from "@/components/benefit-pills-section/Index";
import { SecurityTrustSection } from "@/components/security-trust-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";

const feePills = [
  "SCHOOL FEE PAYMENT",
  "TUITION PAYMENT",
  "MULTI-CURRENCY SUPPORT",
  "INSTANT CONFIRMATION",
  "INVOICE GENERATION",
  "LOW TRANSACTION FEES",
  "GLOBAL COVERAGE",
];

const feeSecurityFeatures = [
  {
    title: "Protected and Regulated",
    desc: "Every international payment is secured and fully regulated",
  },
  {
    title: "2FA Authentication",
    desc: "Verify your identity before authorizing any fee payment",
  },
  {
    title: "Instant Notification",
    desc: "Receive alerts immediately after every international fee payment",
  },
];

export function InternationalFeePaymentPage() {
  return (
    <main>
      <FeePaymentHero />
      <PaymentFeaturesSection />
      <BenefitPillsSection
        heading="Get more from Paybyleap International Fee Payments"
        subheading="Pay International Fees with Ease"
        pills={feePills}
      />
      <SecurityTrustSection
        heading="Pay international fees globally, with ease and safety measures"
        subtitle="Paying international fees is now very easy and fast with Paybyleap"
        features={feeSecurityFeatures}
      />
      <TestimonialsSection heading="See what our customers say about fee payments" />
    </main>
  );
}
