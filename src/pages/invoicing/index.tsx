import { InvoicingHero } from "./layouts/hero/Index";
import { InvoiceBenefitsCarouselSection } from "./layouts/invoice-features/Index";
import { FeaturePitchSection } from "@/components/feature-pitch-section/Index";
import { TransactionSecuritySection } from "@/components/transaction-security-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { sharedImages } from "@/data/images/shared";

const pills = [
  "INVOICE CREATION",
  "MULTI-CURRENCY INVOICING",
  "GLOBAL PAYMENTS",
  "PAYMENT TRACKING",
  "AUTO PAYMENT REMINDERS",
  "ANTI-FRAUD PROTECTION",
  "INSTANT NOTIFICATIONS",
];

export function InvoicingPage() {
  return (
    <main>
      <InvoicingHero />
      <InvoiceBenefitsCarouselSection />
      <FeaturePitchSection
        heading={<>Get more from <span className="text-secondary">Paybyleap</span><br /><span className="text-secondary">Global</span> Invoicing</>}
        pills={pills}
        image={sharedImages.handheld}
        ctaHeading={<>Create Invoice<br />easily Today!</>}
      />
      <TransactionSecuritySection />
      <TestimonialsSection heading="See what our customers say about invoicing" />
    </main>
  );
}
