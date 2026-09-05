import type { LegalSection } from "@/components/legal-document/Index";
import { legalEntity } from "@/data/legal/entity";

export const privacySections: LegalSection[] = [
  {
    id: "about-this-policy",
    title: "About this policy",
    blocks: [
      {
        kind: "p",
        text: `This Privacy Policy explains how ${legalEntity.brand} collects, uses, shares and protects personal data when you visit our website, use our mobile applications, open an account or otherwise interact with us. It also sets out the rights you have over your data and how to exercise them.`,
      },
      {
        kind: "p",
        text: "This policy does not apply to third-party websites or services we link to. Those operators have their own privacy notices, and we encourage you to read them.",
      },
    ],
  },
  {
    id: "who-we-are",
    title: "Who we are and who controls your data",
    blocks: [
      {
        kind: "p",
        text: `${legalEntity.usEntity.name} (${legalEntity.usEntity.address}) and ${legalEntity.ngEntity.name} (${legalEntity.ngEntity.address}) are the controllers of your personal data, depending on which entity you contract with. They determine jointly how and why your data is processed across the ${legalEntity.brand} platform.`,
      },
      {
        kind: "p",
        text: `You can contact our privacy team at ${legalEntity.privacyEmail}, or our Data Protection Officer at ${legalEntity.dpoEmail}. Our representative for data subjects in the European Economic Area is ${legalEntity.euRepresentative}.`,
      },
    ],
  },
  {
    id: "data-we-collect",
    title: "Personal data we collect",
    blocks: [
      { kind: "subheading", text: "Identity data" },
      {
        kind: "p",
        text: "Full name, date of birth, nationality, gender, photograph and likeness including selfie or liveness capture, signature, government-issued identification such as passport, national identity card or driver's licence, and national identifiers such as a Bank Verification Number (BVN), National Identification Number (NIN), Social Security Number or Taxpayer Identification Number where the law requires us to collect them.",
      },
      { kind: "subheading", text: "Contact data" },
      {
        kind: "p",
        text: "Residential and postal address, email address, telephone number, and the contact details of any authorised user on a business account.",
      },
      { kind: "subheading", text: "Business data" },
      {
        kind: "p",
        text: "For business accounts: company name, registration number, incorporation documents, registered and trading addresses, ownership and control structure, details of directors and beneficial owners, business activity, expected transaction volumes and regulatory licences.",
      },
      { kind: "subheading", text: "Financial and transaction data" },
      {
        kind: "p",
        text: "Account and wallet numbers, card details in tokenised form, balances, payment instructions, counterparty and beneficiary details, amounts, currencies, exchange rates, merchant and category information, blockchain addresses and transaction hashes, source of funds and source of wealth evidence, and bank statements you provide.",
      },
      { kind: "subheading", text: "Technical and usage data" },
      {
        kind: "p",
        text: "IP address, device identifiers, device model and operating system, browser type and settings, app version, language and time zone, approximate location derived from IP address, precise location where you grant permission, login records, pages and screens viewed, features used, and diagnostic and crash data.",
      },
      { kind: "subheading", text: "Compliance and risk data" },
      {
        kind: "p",
        text: "Results of identity verification, sanctions, politically exposed person and adverse media screening, fraud and risk scores, device and behavioural signals used for fraud prevention, and records of any investigation, restriction or report relating to your account.",
      },
      { kind: "subheading", text: "Communications and marketing data" },
      {
        kind: "p",
        text: "Support tickets, chat transcripts, emails, call recordings where we tell you a call is recorded, survey responses, feedback, and your marketing preferences and consent history.",
      },
      {
        kind: "callout",
        text: "We do not knowingly collect special category data such as health, religious or political information, and we ask you not to send it to us. Where we process biometric data for identity verification, we do so on the specific legal basis identified below.",
      },
    ],
  },
  {
    id: "how-we-collect",
    title: "How we collect your data",
    blocks: [
      {
        kind: "list",
        items: [
          "Directly from you, when you register, complete verification, initiate a transaction, contact support or respond to a survey.",
          "Automatically, through cookies, SDKs and similar technologies when you use our website or apps.",
          "From our banking, card issuing, custody and payment partners, in connection with processing and settling your transactions.",
          "From identity verification providers, credit reference agencies, sanctions and watchlist databases, corporate registries and open sources, as part of our due diligence obligations.",
          "From fraud prevention agencies and other financial institutions, where we are permitted to share and receive risk information.",
          "From public blockchains and blockchain analytics providers, in relation to digital asset transactions.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How we use your data",
    blocks: [
      {
        kind: "list",
        items: [
          "To create and administer your account and provide the services you ask for.",
          "To verify your identity and satisfy our know-your-customer and know-your-business obligations.",
          "To execute, settle, reconcile and record transactions, and to convert currency.",
          "To detect, investigate and prevent fraud, financial crime, money laundering, sanctions breaches and misuse of our services.",
          "To meet our legal, regulatory, tax and reporting obligations, and to respond to lawful requests from authorities.",
          "To provide customer support and to handle complaints and disputes.",
          "To secure our platform, monitor for unauthorised access and maintain service availability.",
          "To improve and develop our products, using aggregated or de-identified data wherever possible.",
          "To send you service messages about your account, security and transactions.",
          "To send you marketing about our products where you have consented or where we are otherwise permitted to do so.",
          "To establish, exercise or defend legal claims and to protect our rights and those of our users.",
        ],
      },
    ],
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    blocks: [
      {
        kind: "p",
        text: "Where the Nigeria Data Protection Act 2023, the UK GDPR or the EU GDPR applies to our processing, we rely on the following legal bases:",
      },
      {
        kind: "table",
        head: ["Purpose", "Legal basis"],
        rows: [
          ["Opening and operating your account, executing transactions", "Performance of a contract with you"],
          ["Identity verification, KYC and KYB, sanctions screening, transaction monitoring, regulatory reporting, record keeping", "Compliance with a legal obligation"],
          ["Biometric identity verification (facial matching and liveness)", "Explicit consent, and substantial public interest in preventing fraud and financial crime"],
          ["Fraud prevention, platform security, risk management, product improvement", "Our legitimate interests, balanced against your rights"],
          ["Marketing communications and non-essential cookies", "Your consent, which you may withdraw at any time"],
          ["Establishing, exercising or defending legal claims", "Our legitimate interests and, where relevant, a legal obligation"],
          ["Protecting someone's life in an emergency", "Vital interests"],
        ],
      },
      {
        kind: "p",
        text: "Where we rely on legitimate interests, we have assessed that our interest does not override your rights and freedoms. You can ask us for a summary of that assessment.",
      },
    ],
  },
  {
    id: "sharing",
    title: "Who we share your data with",
    blocks: [
      {
        kind: "list",
        items: [
          "Our group companies and affiliates, for the purposes described in this policy.",
          "Banking, card issuing, custody, settlement and payment partners, so that your transactions can be processed and settled.",
          "Identity verification, sanctions screening, credit reference, fraud prevention and blockchain analytics providers.",
          "Cloud hosting, data storage, analytics, communications and customer support providers acting on our instructions under written contracts.",
          "Card networks and other financial institutions in the payment chain, including intermediary and beneficiary banks.",
          "Regulators, tax authorities, financial intelligence units, law enforcement and courts, where we are legally required or permitted to disclose.",
          "Professional advisers such as lawyers, auditors and insurers, under duties of confidentiality.",
          "A buyer or successor, in connection with a merger, acquisition, financing or reorganisation of our business.",
        ],
      },
      {
        kind: "p",
        text: "We do not sell your personal data, and we do not share it with third parties for their own independent marketing purposes.",
      },
    ],
  },
  {
    id: "international-transfers",
    title: "International transfers",
    blocks: [
      {
        kind: "p",
        text: "Because we operate a cross-border payments platform, your data will be transferred to and processed in countries other than the one you live in, including the United States and Nigeria. Data protection laws in those countries may differ from those in your own.",
      },
      {
        kind: "p",
        text: "When we transfer personal data internationally we put appropriate safeguards in place. Depending on the transfer, these include the European Commission's Standard Contractual Clauses, the UK International Data Transfer Addendum, an adequacy decision where one exists, or the transfer conditions permitted under the Nigeria Data Protection Act 2023. You can request a copy of the relevant safeguard by contacting us.",
      },
    ],
  },
  {
    id: "retention",
    title: "How long we keep your data",
    blocks: [
      {
        kind: "p",
        text: "We keep personal data only as long as we need it for the purposes described in this policy, or for as long as the law requires. Financial services record-keeping obligations mean some data must be retained well beyond the closure of your account.",
      },
      {
        kind: "table",
        head: ["Category", "Retention period"],
        rows: [
          ["Identity, KYC and KYB records", "At least 7 years after the end of our relationship"],
          ["Transaction and financial records", "At least 7 years from the transaction date or account closure, whichever is later"],
          ["Fraud and financial crime records", "Up to 7 years, or longer where needed to defend a legal claim"],
          ["Support tickets and complaints", "7 years from resolution"],
          ["Marketing preferences and consent records", "Up to 3 years from your last interaction, or until you withdraw consent"],
          ["Technical, log and device data", "Up to 12 months, extended where required for an investigation"],
          ["Call recordings", "Up to 12 months, unless retained for a dispute or investigation"],
        ],
      },
      {
        kind: "p",
        text: "When data is no longer needed we delete it or irreversibly anonymise it. We may keep a limited record of a closed or restricted account in order to prevent fraudulent re-registration. Anonymised and aggregated data, which cannot be linked back to you, may be kept indefinitely.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    blocks: [
      {
        kind: "p",
        text: "Depending on where you live, you have some or all of the following rights over your personal data:",
      },
      {
        kind: "list",
        items: [
          "Access: to be told whether we hold data about you and to receive a copy of it.",
          "Rectification: to have inaccurate or incomplete data corrected.",
          "Erasure: to have data deleted where we no longer have a lawful reason to keep it.",
          "Restriction: to limit how we use your data while a concern is being resolved.",
          "Objection: to object to processing based on our legitimate interests, and to object to direct marketing at any time.",
          "Portability: to receive data you gave us in a structured, commonly used, machine-readable format, and to have it transmitted to another controller where technically feasible.",
          "Withdraw consent: to withdraw consent at any time, without affecting processing already carried out.",
          "Automated decisions: to ask for human review of a decision made solely by automated means that has a legal or similarly significant effect on you.",
          "Complain: to lodge a complaint with your data protection authority.",
        ],
      },
      {
        kind: "callout",
        text: "Some rights are limited in financial services. We generally cannot delete identity and transaction records that anti-money laundering law requires us to keep, and we cannot disclose the detail of a suspicious activity report. Where we cannot act on a request, we will explain why.",
      },
    ],
  },
  {
    id: "exercising-rights",
    title: "How to exercise your rights",
    blocks: [
      {
        kind: "p",
        text: `Contact us at ${legalEntity.privacyEmail} or through in-app support. To protect your data we will verify your identity before acting on a request, and we may ask you to submit documents through a secure channel rather than by email attachment.`,
      },
      {
        kind: "p",
        text: "We will respond within 30 days of verifying your identity. If your request is complex or you have made several, we may extend that period and will tell you if we do. Exercising your rights is free, but we may charge a reasonable fee or decline to act where a request is manifestly unfounded or excessive.",
      },
    ],
  },
  {
    id: "automated-decisions",
    title: "Automated decision-making",
    blocks: [
      {
        kind: "p",
        text: "We use automated systems to screen transactions and accounts for fraud, sanctions exposure and financial crime risk, and to apply limits. These systems can result in a transaction being delayed or declined, or an account being restricted, without a person reviewing it first.",
      },
      {
        kind: "p",
        text: "We use them because they are necessary for entering into or performing our contract with you and to comply with our legal obligations. You can ask for human review of a decision, express your point of view and contest the outcome by contacting us, except where telling you about a financial crime measure is prohibited by law.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    blocks: [
      {
        kind: "p",
        text: "We use cookies, local storage and software development kits to keep you signed in, remember your preferences, secure your session, detect fraud, measure how our site and apps are used, and, where you consent, measure marketing performance.",
      },
      {
        kind: "p",
        text: "Strictly necessary cookies are required for the site to function and cannot be switched off. You can accept or reject non-essential cookies through our cookie banner, change your choice at any time, and control cookies through your browser settings. Blocking some cookies will affect how parts of the site work.",
      },
    ],
  },
  {
    id: "security",
    title: "How we protect your data",
    blocks: [
      {
        kind: "p",
        text: "We maintain technical and organisational measures designed to protect personal data against unauthorised access, alteration, disclosure and loss. These include encryption of data in transit and at rest, tokenisation of card data, multi-factor authentication, role-based access control on a need-to-know basis, network monitoring, logging, secure development practices, vendor due diligence, staff confidentiality training and a documented incident response process.",
      },
      {
        kind: "p",
        text: "No system can be guaranteed completely secure. You play an essential part in protecting your account: use a strong and unique password, enable every security feature we offer, never share your password or one-time codes with anyone, and tell us immediately if you suspect unauthorised access.",
      },
    ],
  },
  {
    id: "breach-notification",
    title: "Data breach notification",
    blocks: [
      {
        kind: "p",
        text: "If a personal data breach occurs, we will assess it without delay and notify the relevant authorities and affected individuals where the law requires:",
      },
      {
        kind: "list",
        items: [
          "Nigeria: notification to the Nigeria Data Protection Commission within 72 hours of becoming aware, and to affected data subjects where the breach is likely to result in a high risk to their rights and freedoms.",
          "United Kingdom: notification to the Information Commissioner's Office within 72 hours, and to affected individuals where there is a high risk.",
          "European Economic Area: notification to the lead supervisory authority within 72 hours, and to affected individuals where there is a high risk.",
          "United States: notification to affected individuals and state regulators in line with applicable state breach notification laws and our obligations under the Gramm-Leach-Bliley Act.",
        ],
      },
      {
        kind: "p",
        text: "Where a breach affects people in more than one jurisdiction, we will follow the requirements of each.",
      },
    ],
  },
  {
    id: "children",
    title: "Children's data",
    blocks: [
      {
        kind: "p",
        text: `The ${legalEntity.brand} services are for adults. They are not directed at children, and we do not knowingly collect personal data from anyone under 18. If you believe a child has provided us with personal data, contact us at ${legalEntity.privacyEmail} and we will delete it.`,
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing and your choices",
    blocks: [
      {
        kind: "p",
        text: "Where we send you marketing, you can opt out at any time using the unsubscribe link in any marketing email, the preference settings in your account, or by contacting us. We will action your request promptly.",
      },
      {
        kind: "p",
        text: "You cannot opt out of service communications. These include security alerts, transaction confirmations, statements, changes to our terms and other messages we are required to send you about your account.",
      },
    ],
  },
  {
    id: "country-specific",
    title: "Country-specific information",
    blocks: [
      { kind: "subheading", text: "Nigeria" },
      {
        kind: "p",
        text: `If you are in Nigeria, ${legalEntity.ngEntity.name} processes your data in accordance with the Nigeria Data Protection Act 2023 and the regulations and guidance issued by the Nigeria Data Protection Commission. Retention of identity and transaction records is also governed by the Money Laundering (Prevention and Prohibition) Act and Central Bank of Nigeria requirements. If you are not satisfied with how we have handled your data, you may lodge a complaint with the Nigeria Data Protection Commission.`,
      },
      { kind: "subheading", text: "European Economic Area and United Kingdom" },
      {
        kind: "p",
        text: "If you are in the EEA or the UK, you have the rights set out above under the EU GDPR or UK GDPR. You may lodge a complaint with your national supervisory authority, or with the Information Commissioner's Office in the UK. Our EEA representative is identified in the section above.",
      },
      { kind: "subheading", text: "United States" },
      {
        kind: "p",
        text: "If you are a resident of a US state with a comprehensive privacy law, you may have rights to know, access, correct, delete, obtain a portable copy of your data, and to opt out of targeted advertising, sale or profiling. We do not sell personal data or share it for cross-context behavioural advertising. Financial data we hold in connection with a financial product is also subject to the Gramm-Leach-Bliley Act, and where an exemption applies your state-law rights may be limited. We will not discriminate against you for exercising a privacy right.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    blocks: [
      {
        kind: "p",
        text: "Our website and apps may link to third-party sites and services. We are not responsible for their content or their privacy practices, and this policy does not apply to them. Please review their privacy notices before providing them with personal data.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      {
        kind: "p",
        text: "We may update this policy to reflect changes to our services, our partners or the law. We will post the updated version here and revise the date at the top. Where a change is material, we will notify you through the Services or by email before it takes effect.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      {
        kind: "p",
        text: `For any question about this policy or about how we handle your data, contact our privacy team at ${legalEntity.privacyEmail} or our Data Protection Officer at ${legalEntity.dpoEmail}.`,
      },
      {
        kind: "p",
        text: `You can also write to us at ${legalEntity.usEntity.address}, or at ${legalEntity.ngEntity.address}. If you are not satisfied with our response, you have the right to complain to the data protection authority in your country.`,
      },
    ],
  },
];
