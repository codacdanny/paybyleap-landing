import { TestimonialsSection } from "./layouts/testimonials/Index";
import { ProductsSection } from "./layouts/products/Index";
import { PlatformBenefitsSection } from "./layouts/platform-benefits/Index";
import { Hero } from "./layouts/hero/Index";
import { DownloadAppSection } from "./layouts/download-mobileApp/Index";
import { AdditionalServicesSection } from "./layouts/additional-services/Index";

export function HomePage() {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <DownloadAppSection />
      <PlatformBenefitsSection />
      <AdditionalServicesSection />
      <TestimonialsSection />
    </main>
  );
}
