import { InvoicingHero } from "./layouts/hero/Index";
import { InvoiceFeaturesSection } from "./layouts/invoice-features/Index";
import { BenefitPillsSection } from "@/components/benefit-pills-section/Index";
import { SecurityTrustSection } from "@/components/security-trust-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";

const invoicingPills = [
  "GLOBAL INVOICE CREATION",
  "MULTI-CURRENCY PAYMENT",
  "AUTO PAYMENT REMINDERS",
  "EXPENSE TRACKING",
  "INVOICE HISTORY & REPORTS",
  "INSTANT PAYMENT NOTIFICATIONS",
];

const invoicingSecurityFeatures = [
  {
    title: "Protected and Regulated",
    desc: "Every invoice and payment is secured and fully regulated",
  },
  {
    title: "2FA Authentication",
    desc: "Verify your identity before sending or authorizing invoices",
  },
  {
    title: "Instant Notification",
    desc: "Get alerts the moment a client views or pays your invoice",
  },
];

export function InvoicingPage() {
  return (
    <main>
      <InvoicingHero />
      <InvoiceFeaturesSection />
      <BenefitPillsSection
        heading="Get more from Paybyleap Global Invoicing"
        subheading="Invoice and get paid globally with ease"
        pills={invoicingPills}
      />
      <SecurityTrustSection
        heading="Invoice globally, with ease and safety measures"
        subtitle="Sending and receiving invoices is now very easy with Paybyleap"
        features={invoicingSecurityFeatures}
      />
      <TestimonialsSection heading="See what our customers say about invoicing" />
    </main>
  );
}
