import { CompanyHero } from "./layouts/hero/Index";
import { ValuePropositionSection } from "./layouts/mission-vision/Index";
import { CompanyTimelineSection } from "./layouts/products-overview/Index";
import { ProductEcosystemSection } from "./layouts/stats-offices/Index";
import { AudienceOverviewSection } from "./layouts/team-culture/Index";
import { CoreValuesSection } from "./layouts/core-values/Index";
import { GrowthMissionBanner } from "./layouts/getting-started/Index";
import { AppDownloadSection } from "./layouts/final-cta/Index";

export function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <ValuePropositionSection />
      <CompanyTimelineSection />
      <ProductEcosystemSection />
      <AudienceOverviewSection />
      <CoreValuesSection />
      <GrowthMissionBanner />
      <AppDownloadSection />
    </main>
  );
}
