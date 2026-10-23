import { VirtualCardHero } from "./layouts/hero/Index";
import { ProductBenefitsGrid } from "./layouts/card-benefits/Index";
import { GetMoreSection } from "./layouts/get-more/Index";
import { TransactionSecuritySection } from "@/components/transaction-security-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";

export function StablecoinVirtualCardPage() {
  return (
    <main>
      <VirtualCardHero />
      <ProductBenefitsGrid />
      <GetMoreSection />
      <TransactionSecuritySection />
      <TestimonialsSection heading="See what our customers say about our virtual cards" />
    </main>
  );
}
