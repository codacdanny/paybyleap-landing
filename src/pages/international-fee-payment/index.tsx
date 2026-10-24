import { FeePaymentHero } from "./layouts/hero/Index";
import { PaymentBenefitsCarouselSection } from "./layouts/payment-features/Index";
import { FeaturePitchSection } from "@/components/feature-pitch-section/Index";
import { TransactionSecuritySection } from "@/components/transaction-security-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { sharedImages } from "@/data/images/shared";

const pills = [
  "SCHOOL FEES PAYMENT",
  "TUITION PAYMENT",
  "MULTI-CURRENCY SUPPORT",
  "INSTANT PROCESSING",
  "TRANSACTION HISTORY & REPORT",
  "ANTI-FRAUD PROTECTION",
  "PAYMENT NOTIFICATIONS",
];

export function InternationalFeePaymentPage() {
  return (
    <main>
      <FeePaymentHero />
      <PaymentBenefitsCarouselSection />
      <FeaturePitchSection
        heading={<>Get more from <span className="text-secondary">Paybyleap</span><br />for <span className="text-secondary">International</span> Payments</>}
        pills={pills}
        image={sharedImages.handheld}
        ctaHeading={<>Pay Fees<br />easily Today!</>}
      />
      <TransactionSecuritySection />
      <TestimonialsSection heading="See what our customers say about fee payments" />
    </main>
  );
}
