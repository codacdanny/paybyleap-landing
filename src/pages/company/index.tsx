import { CompanyHero } from "./layouts/hero/Index";
import { ValuePropositionSection } from "./layouts/mission-vision/Index";
import { ProductEcosystemSection } from "./layouts/stats-offices/Index";
import { AudienceOverviewSection } from "./layouts/team-culture/Index";
import { CoreValuesSection } from "./layouts/core-values/Index";
import { GrowthMissionBanner } from "./layouts/getting-started/Index";

export function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <ValuePropositionSection />
      <ProductEcosystemSection />
      <AudienceOverviewSection />
      <CoreValuesSection />
      <GrowthMissionBanner />
    </main>
  );
}
