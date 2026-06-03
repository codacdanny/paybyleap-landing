import { CompanyHero } from "./layouts/hero/Index";
import { MissionVisionSection } from "./layouts/mission-vision/Index";
import { ProductsOverviewSection } from "./layouts/products-overview/Index";
import { StatsOfficesSection } from "./layouts/stats-offices/Index";
import { TeamCultureSection } from "./layouts/team-culture/Index";
import { CoreValuesSection } from "./layouts/core-values/Index";
import { GettingStartedSection } from "./layouts/getting-started/Index";
import { CompanyFinalCTA } from "./layouts/final-cta/Index";

export function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <MissionVisionSection />
      <ProductsOverviewSection />
      <StatsOfficesSection />
      <TeamCultureSection />
      <CoreValuesSection />
      <GettingStartedSection />
      <CompanyFinalCTA />
    </main>
  );
}
