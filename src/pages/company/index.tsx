import { CompanyHero } from "./layouts/hero/Index";
import { MissionVisionSection } from "./layouts/mission-vision/Index";
import { ProductsOverviewSection } from "./layouts/products-overview/Index";
import { StatsOfficesSection } from "./layouts/stats-offices/Index";
import { TeamCultureSection } from "./layouts/team-culture/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";

export function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <MissionVisionSection />
      <ProductsOverviewSection />
      <StatsOfficesSection />
      <TeamCultureSection />
      <TestimonialsSection heading="What our users say about Paybyleap" />
    </main>
  );
}
