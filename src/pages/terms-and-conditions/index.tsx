import { LegalDocument } from "@/components/legal-document/Index";
import { legalEntity } from "@/data/legal/entity";
import { termsSections } from "./content";

export function TermsAndConditionsPage() {
  return (
    <LegalDocument
      title="Terms and Conditions"
      summary={`These Terms govern your use of ${legalEntity.brand} — our foreign accounts, currency exchange, global transfers, cards, digital asset services and invoicing tools. They explain what you can expect from us and what we need from you.`}
      effectiveDate={legalEntity.effectiveDate}
      lastUpdated={legalEntity.lastUpdated}
      sections={termsSections}
    />
  );
}
