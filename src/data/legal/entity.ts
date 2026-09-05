/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  LEGAL REVIEW REQUIRED BEFORE PUBLISHING
 *
 *  Every value marked TO CONFIRM is a placeholder. Several of them are
 *  regulatory statements — publishing an inaccurate licence, regulator or
 *  entity name is a compliance offence in both Nigeria and the United States,
 *  not a typo. Have counsel confirm each one, then delete this block.
 *
 *  TO CONFIRM:
 *    - usEntity.name / usEntity.registration  (Delaware incorporation record)
 *    - ngEntity.name / ngEntity.registration  (CAC RC number)
 *    - regulators                             (only list licences actually held)
 *    - bankingPartners                        (name them only if contractually permitted)
 *    - support / privacy / dpo email addresses (must be live mailboxes)
 *    - euRepresentative                       (required under GDPR Art. 27 if you
 *                                              serve EEA users without an EU entity)
 *    - effectiveDate                          (set to the date you actually publish)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const legalEntity = {
  brand: "PayByLeap",
  effectiveDate: "TO CONFIRM — set on publication",
  lastUpdated: "TO CONFIRM — set on publication",

  usEntity: {
    name: "PayByLeap Inc. (TO CONFIRM)",
    registration: "Delaware, United States — registration number TO CONFIRM",
    address: "8 The Green, Ste A, Dover, Delaware, 19901, United States",
  },
  ngEntity: {
    name: "PayByLeap Technologies Limited (TO CONFIRM)",
    registration: "Corporate Affairs Commission RC number TO CONFIRM",
    address:
      "Block 59, Plot 12B Kusenla Road, Ikate, Lekki, Lagos and 42 Olowu Street, Opebi 101233, Ikeja, Lagos, Nigeria",
  },

  regulators: "TO CONFIRM — list only registrations and licences actually held",
  bankingPartners: "TO CONFIRM — licensed banking and card-issuing partners",

  supportEmail: "support@paybyleap.com (TO CONFIRM)",
  privacyEmail: "privacy@paybyleap.com (TO CONFIRM)",
  dpoEmail: "dpo@paybyleap.com (TO CONFIRM)",
  euRepresentative: "TO CONFIRM — GDPR Article 27 representative, if applicable",

  supportedCurrencies: "NGN, USD, GBP, EUR, CAD, JPY, USDC and USDT",
} as const;
