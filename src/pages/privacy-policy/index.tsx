import { LegalDocument } from "@/components/legal-document/Index";
import { legalEntity } from "@/data/legal/entity";
import { privacySections } from "./content";

export function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      summary={`This policy explains what personal data ${legalEntity.brand} collects, why we collect it, who we share it with, how long we keep it, and the rights you have over it.`}
      effectiveDate={legalEntity.effectiveDate}
      lastUpdated={legalEntity.lastUpdated}
      sections={privacySections}
    />
  );
}
