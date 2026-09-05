import type { LegalSection } from "@/components/legal-document/Index";
import { legalEntity } from "@/data/legal/entity";

export const termsSections: LegalSection[] = [
  {
    id: "about-these-terms",
    title: "About these Terms",
    blocks: [
      {
        kind: "p",
        text: `These Terms and Conditions form a binding agreement between you and ${legalEntity.brand} and govern your access to and use of our website, mobile applications, dashboards, application programming interfaces and every related service we make available (together, the "Services"). Please read them carefully and keep a copy for your records.`,
      },
      {
        kind: "p",
        text: `You accept these Terms when you create an account, access the Services, or continue to use them after we publish an updated version. If you do not accept these Terms, you must not use the Services.`,
      },
      {
        kind: "p",
        text: `These Terms apply alongside our Privacy Policy, our Acceptable Use Policy and any product-specific terms we present to you at the point of use, including card usage terms. Where a product-specific term conflicts with these Terms, the product-specific term prevails for that product only.`,
      },
      {
        kind: "callout",
        text: `${legalEntity.brand} is a financial technology company, not a bank. Regulated banking, card issuing and payment services are provided by our licensed partners. Your funds are not bank deposits and are not covered by deposit insurance.`,
      },
    ],
  },
  {
    id: "who-we-are",
    title: "Who we are",
    blocks: [
      {
        kind: "p",
        text: `The ${legalEntity.brand} Services are operated by the following entities, depending on where you are resident or incorporated:`,
      },
      {
        kind: "list",
        items: [
          `${legalEntity.usEntity.name}, incorporated in ${legalEntity.usEntity.registration}, with its registered office at ${legalEntity.usEntity.address}.`,
          `${legalEntity.ngEntity.name}, incorporated in Nigeria under ${legalEntity.ngEntity.registration}, with offices at ${legalEntity.ngEntity.address}.`,
        ],
      },
      {
        kind: "p",
        text: `Our regulatory registrations and licences are as follows: ${legalEntity.regulators}. Banking, custody, card issuing and settlement services are provided by our partners: ${legalEntity.bankingPartners}. In these Terms, "we", "us" and "our" refer to the ${legalEntity.brand} entity that contracts with you.`,
      },
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    blocks: [
      {
        kind: "list",
        items: [
          `"Account" means the ${legalEntity.brand} profile you open, including any foreign currency accounts, wallets, balances and cards held within it.`,
          `"Balance" means funds recorded to your Account that are available for transactions, net of any fees, holds, reserves or amounts you owe us.`,
          `"Business Day" means a day other than a Saturday, Sunday or public holiday in the jurisdiction of the relevant entity.`,
          `"Digital Assets" means stablecoins and other cryptographic assets we support, including USDC and USDT.`,
          `"FX Rate" means the exchange rate we quote for a currency conversion, which includes our margin and is valid only for the short period stated at quotation.`,
          `"Foreign Account" means a payment account denominated in a currency other than your local currency, provided through our banking partners and made available to you within the Services.`,
          `"KYC" and "KYB" mean the customer and business identification, verification and due diligence checks we are required to perform.`,
          `"Transaction" means any payment, transfer, conversion, card purchase, deposit, withdrawal or Digital Asset movement initiated through the Services.`,
          `"Virtual Card" and "Physical Card" mean payment cards issued to you through our card issuing partners under the applicable card network rules.`,
        ],
      },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility and registration",
    blocks: [
      { kind: "p", text: "To open and operate an Account you must:" },
      {
        kind: "list",
        items: [
          "Be at least 18 years old and have full legal capacity to enter into a binding contract.",
          "Be resident or incorporated in a country we currently serve, and not in a country subject to comprehensive sanctions or on our restricted list.",
          "Not be listed on any applicable sanctions list, and not be acting on behalf of any person who is.",
          "Provide accurate, current and complete information about yourself or your business, and keep it up to date.",
          "Open only one Account, unless we have agreed otherwise in writing.",
        ],
      },
      {
        kind: "p",
        text: `Where you open an Account on behalf of a business, you confirm that you are authorised to bind that business, and "you" in these Terms refers to both you and the business. You are responsible for the acts and omissions of any authorised user you add to your Account.`,
      },
      {
        kind: "p",
        text: "You must notify us within 14 days of any material change to the information you have given us, including a change of name, address, ownership, control, business activity or tax residency.",
      },
    ],
  },
  {
    id: "verification",
    title: "Identity verification and due diligence",
    blocks: [
      {
        kind: "p",
        text: "Before we can activate your Account or certain features, and from time to time afterwards, we are required by law to verify your identity. You authorise us and our partners to make the enquiries we consider necessary for this purpose, including checks against identity databases, sanctions and politically exposed person lists, credit reference agencies and other authorised sources.",
      },
      {
        kind: "p",
        text: "We may request documents including government-issued identification, proof of address, bank verification or national identity numbers, company registration documents, ownership structures, source of funds evidence and information about the purpose of your Transactions. We may apply enhanced due diligence where our risk assessment requires it.",
      },
      {
        kind: "p",
        text: "If you do not provide the information we request, if we cannot verify it, or if verification produces a result that we determine to be unacceptable under our risk policies, we may decline your application, limit your Account or close it. We may not always be able to tell you the reason.",
      },
    ],
  },
  {
    id: "your-account",
    title: "Your account and how funds are held",
    blocks: [
      {
        kind: "p",
        text: `Once verified, your Account may give you access to Foreign Accounts, currency wallets, Digital Asset wallets, Virtual and Physical Cards, invoicing tools and transfer services, depending on your location and verification level.`,
      },
      {
        kind: "p",
        text: "Funds recorded to your Balance are held with our licensed banking or custody partners in accounts designated for the benefit of customers. They are not held by us as deposits, they do not earn interest unless we expressly state otherwise, and we do not lend or use them for our own operations.",
      },
      {
        kind: "p",
        text: "A Foreign Account is provided for receiving and making payments in connection with your own legitimate activity. You must not permit any third party to use your Foreign Account details as their own, operate it as a payment service for others, or use it to pool or process funds belonging to other people.",
      },
    ],
  },
  {
    id: "currency-exchange",
    title: "Currency exchange and FX rates",
    blocks: [
      {
        kind: "p",
        text: `We support conversions between the currencies we make available, currently ${legalEntity.supportedCurrencies}. Availability varies by country and may change without notice.`,
      },
      {
        kind: "p",
        text: "Before you confirm a conversion we display the FX Rate and the amount you will receive. That quote is valid only for the period shown. Exchange rates move continuously, and the rate we quote includes our margin, so it will differ from mid-market or interbank rates you may see elsewhere.",
      },
      {
        kind: "p",
        text: "Once you confirm a conversion it is final and cannot be reversed because the rate has moved against you. Where a conversion is required to settle an amount you owe us, we may apply our prevailing rate at the time.",
      },
    ],
  },
  {
    id: "money-transfer",
    title: "Global money transfer and fee payments",
    blocks: [
      {
        kind: "p",
        text: "You are solely responsible for the accuracy of the payment details you enter, including account numbers, IBANs, sort codes, routing numbers, wallet addresses, beneficiary names and reference fields. Payment systems generally rely on the account identifier rather than the beneficiary name.",
      },
      {
        kind: "p",
        text: "If you send funds to the wrong beneficiary because of details you supplied, we will make reasonable efforts to help you recover them but we cannot guarantee recovery, and we may charge a fee for the attempt.",
      },
      {
        kind: "p",
        text: "Delivery times are estimates. Transfers may be delayed or rejected by intermediary banks, correspondent institutions, card networks or receiving institutions, or held pending compliance review. Intermediary banks may deduct their own charges from the amount sent.",
      },
      {
        kind: "p",
        text: "For international fee payments, including tuition, application and assessment fees, you are responsible for confirming the institution's payment details, deadlines and reference requirements. We are not responsible for an institution rejecting, misapplying or delaying a payment, or for any consequence of a missed deadline.",
      },
    ],
  },
  {
    id: "cards",
    title: "Virtual and physical cards",
    blocks: [
      {
        kind: "p",
        text: "Cards are issued by our card issuing partners under licence from the relevant card network, and your use of a card is also governed by the card terms presented to you when the card is issued and by the applicable network rules.",
      },
      {
        kind: "p",
        text: "You must keep sufficient funds available to cover card transactions. Repeated declines for insufficient funds may result in your card being suspended and, after further occurrences, permanently terminated. Issuing a replacement card may attract a fee.",
      },
      {
        kind: "p",
        text: "Some merchants place a temporary authorisation hold that is higher than the final amount, and some transactions settle at a different amount or on a later date than the purchase. Cards may not be accepted by every merchant, and certain merchant categories may be blocked for compliance reasons.",
      },
      {
        kind: "p",
        text: "You must notify us immediately if a card is lost, stolen or used without your authorisation so that we can freeze it. Disputes about a card purchase are subject to the chargeback rules and time limits of the relevant card network, and we cannot guarantee an outcome.",
      },
    ],
  },
  {
    id: "digital-assets",
    title: "Digital assets and stablecoins",
    blocks: [
      {
        kind: "callout",
        text: "Digital Asset transactions are recorded on public blockchains and are irreversible. Once a transfer is broadcast it cannot be cancelled, recalled or refunded by us for any reason, including an incorrect address or an incorrect network.",
      },
      {
        kind: "p",
        text: "You are solely responsible for verifying the destination address and selecting the correct network before you confirm a transfer. Sending an asset to an incompatible address or over an unsupported network will normally result in permanent loss.",
      },
      {
        kind: "p",
        text: "Network fees are payable on blockchain transactions and may vary significantly with network conditions. We are not responsible for blockchain congestion, forks, reorganisations, protocol changes, validator failures, smart contract defects or the actions of any third-party network participant.",
      },
      {
        kind: "p",
        text: "Digital Assets are not legal tender, are not deposits, and are not covered by deposit insurance or investor compensation schemes. The value of a Digital Asset can change, and a stablecoin may not hold its peg. We do not provide investment, tax or legal advice, and nothing in the Services is a recommendation to acquire or dispose of any asset.",
      },
      {
        kind: "p",
        text: "Digital Asset services are not available in every jurisdiction. You are responsible for confirming that your use of these features is lawful where you are, and we may withdraw or restrict them at any time in response to legal or regulatory developments.",
      },
    ],
  },
  {
    id: "invoicing",
    title: "Global invoicing",
    blocks: [
      {
        kind: "p",
        text: "Our invoicing tools let you create, send and track invoices and receive payment against them. You are responsible for the accuracy and lawfulness of everything you put on an invoice, including amounts, descriptions, tax treatment and any regulatory particulars your jurisdiction requires.",
      },
      {
        kind: "p",
        text: "We are not a party to the underlying contract between you and the person you invoice. We do not verify that goods or services were delivered, do not guarantee that an invoice will be paid, and are not responsible for collecting unpaid invoices or resolving commercial disputes.",
      },
      {
        kind: "p",
        text: "You are responsible for determining, charging, collecting and remitting any taxes arising from your invoices, and for retaining records for the period your law requires.",
      },
    ],
  },
  {
    id: "fees",
    title: "Fees and charges",
    blocks: [
      {
        kind: "p",
        text: "Our fees are published in the Services and are presented to you before you confirm a Transaction. Fees may include transaction fees, conversion margins built into the FX Rate, card issuance and maintenance fees, network fees for Digital Asset transfers, and fees charged for failed, returned or reversed payments.",
      },
      {
        kind: "p",
        text: "We may revise our fees. Where we do, we will give you reasonable notice through the Services or by email before the change takes effect, except where a change is favourable to you or is required immediately by law or by a partner or network.",
      },
      {
        kind: "p",
        text: "Third parties in the payment chain, including intermediary and receiving banks, merchants and networks, may apply their own charges which are outside our control. You are responsible for all taxes arising from your use of the Services other than taxes on our own income.",
      },
      {
        kind: "p",
        text: "If you believe a fee has been applied incorrectly, contact us within 30 days of the charge so that we can investigate.",
      },
    ],
  },
  {
    id: "limits-and-holds",
    title: "Limits, holds and reserves",
    blocks: [
      {
        kind: "p",
        text: "We may set and vary limits on your Account, including limits on transaction size, frequency, velocity, balances and card spending. Limits may depend on your verification level, location, product and risk profile.",
      },
      {
        kind: "p",
        text: "We may place a hold on a Transaction or on part of your Balance, delay or decline a Transaction, or require a reserve, where we consider it necessary to manage risk, investigate suspected fraud or a breach of these Terms, comply with a legal or regulatory obligation, or respond to a partner or network instruction. Where the law permits and it is safe to do so we will tell you, but there are circumstances in which we are prohibited from explaining our reasons.",
      },
    ],
  },
  {
    id: "irreversibility",
    title: "Finality of transactions",
    blocks: [
      {
        kind: "p",
        text: "Once a Transaction has been executed it is generally final and cannot be reversed by us. We may be able to attempt a recall of a bank transfer, but recall depends entirely on the receiving institution and the beneficiary and cannot be guaranteed. Digital Asset transfers cannot be recalled at all.",
      },
      {
        kind: "p",
        text: "We may reverse or adjust an entry where it resulted from our own processing error, where funds were credited to you in error, or where we are required to do so by law, a court order, a partner or a card network.",
      },
    ],
  },
  {
    id: "errors",
    title: "Errors and unauthorised transactions",
    blocks: [
      {
        kind: "p",
        text: "Tell us as soon as possible, and in any event within 60 days of the Transaction appearing in your history, if you believe your Account has been accessed without authorisation or that a Transaction is incorrect. Contact us at " + legalEntity.supportEmail + " or through in-app support.",
      },
      {
        kind: "subheading",
        text: "How we investigate",
      },
      {
        kind: "p",
        text: "We will investigate and aim to complete our review within 10 Business Days. Where a matter is complex we may need up to 45 days, and we will keep you informed. Where our investigation shows that an amount was incorrectly debited from your Account, we will correct it.",
      },
      {
        kind: "subheading",
        text: "What is not an error",
      },
      {
        kind: "list",
        items: [
          "A Transaction you or an authorised user initiated, including one sent to the wrong beneficiary because of details you entered.",
          "A currency conversion executed at the rate you were shown and accepted, where the market has since moved.",
          "A delay or deduction caused by an intermediary bank, receiving institution, merchant or blockchain network.",
          "A hold, limit or review applied under these Terms.",
          "A request for a copy of a record or a routine query about a Transaction.",
          "Loss arising because you shared your credentials or one-time codes with another person.",
        ],
      },
    ],
  },
  {
    id: "reversals",
    title: "Reversals, chargebacks and negative balances",
    blocks: [
      {
        kind: "p",
        text: "If a payment into your Account is reversed, recalled, charged back or otherwise returned, you are liable for the full amount together with any related fees. This applies whether or not you have already spent or transferred the funds.",
      },
      {
        kind: "p",
        text: "If your Balance becomes negative, the amount is immediately due. We may recover it by deducting from any Balance you hold with us in any currency, applying our prevailing FX Rate where a conversion is needed, setting it off against amounts we owe you, or pursuing recovery through other lawful means, including a collections agent.",
      },
    ],
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities and account security",
    blocks: [
      {
        kind: "list",
        items: [
          "Keep your password, PIN, one-time codes, device and biometric access secure, and never share them with anyone, including anyone claiming to be from PayByLeap.",
          "Use a unique password and enable every additional security feature we offer.",
          "Keep your contact details current so that we can reach you about security matters.",
          "Review your transaction history regularly and report anything unexpected immediately.",
          "Tell us at once if you suspect your Account or device has been compromised.",
        ],
      },
      {
        kind: "p",
        text: "We treat instructions given using your valid credentials as authorised by you. You may be liable for losses arising from Transactions authenticated with your credentials, subject to any protection the law of your jurisdiction gives you. We will never ask you for your password or a one-time code.",
      },
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited and restricted use",
    blocks: [
      {
        kind: "p",
        text: "You must use the Services only for lawful purposes and in accordance with our Acceptable Use Policy. You must not use the Services to:",
      },
      {
        kind: "list",
        items: [
          "Engage in or facilitate money laundering, terrorist financing, proliferation financing, sanctions evasion, tax evasion, bribery or corruption.",
          "Process funds derived from, or connected to, criminal activity of any kind.",
          "Provide unlicensed financial, payment, money transmission, lending, securities or investment services to third parties.",
          "Operate an unlicensed exchange, or process payments on behalf of other people as an intermediary.",
          "Support gambling, adult content, illegal narcotics, controlled pharmaceuticals, weapons or ammunition, counterfeit or stolen goods, wildlife trafficking, or any form of human exploitation.",
          "Operate a pyramid, ponzi, matrix or other scheme presenting an unrealistic prospect of return.",
          "Infringe intellectual property rights, or distribute malware, spam or deceptive content.",
          "Impersonate any person, misrepresent your identity, or use a false or borrowed identity to open or operate an Account.",
          "Circumvent, probe or interfere with the security, integrity or availability of the Services, or attempt to access another user's Account.",
          "Scrape, reverse engineer, decompile or create derivative works from any part of the Services except to the extent the law does not allow this to be restricted.",
        ],
      },
    ],
  },
  {
    id: "compliance",
    title: "Financial crime compliance and monitoring",
    blocks: [
      {
        kind: "p",
        text: "We monitor Transactions and Account activity to meet our obligations under applicable anti-money laundering, counter-terrorist financing and sanctions laws. We may request information about the source of funds, the purpose of a Transaction or your relationship with a counterparty at any time, and you must respond promptly and accurately.",
      },
      {
        kind: "p",
        text: "We may delay, block, freeze or refuse a Transaction, and we may freeze or close an Account, in order to comply with these obligations. Where we are required to report suspicious activity to a regulator, financial intelligence unit or law enforcement agency, we may be legally prohibited from telling you that we have done so, and we will not be liable to you for acting in accordance with the law.",
      },
    ],
  },
  {
    id: "termination",
    title: "Suspension, restriction and termination",
    blocks: [
      {
        kind: "p",
        text: "You may close your Account at any time from the Services or by contacting support. Before closure, you must settle any negative Balance and withdraw your remaining funds. Pending Transactions will complete first, and we may retain funds for a reasonable period to cover chargebacks, reversals or an ongoing investigation.",
      },
      {
        kind: "p",
        text: "We may suspend, restrict or terminate your Account, or any feature of it, where:",
      },
      {
        kind: "list",
        items: [
          "You breach these Terms or our Acceptable Use Policy.",
          "We are required to do so by law, a regulator, a court, a banking partner or a card network.",
          "We reasonably suspect fraud, financial crime or unauthorised access.",
          "You provide information that is false, misleading or that we cannot verify.",
          "We withdraw a product or cease to serve your jurisdiction.",
        ],
      },
      {
        kind: "p",
        text: "Where we terminate without cause, we will give you reasonable notice. Termination does not affect rights or obligations that accrued before it, and the sections of these Terms that by their nature should survive will survive.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property and licence",
    blocks: [
      {
        kind: "p",
        text: `All intellectual property in the Services, including software, interfaces, designs, text, graphics, the ${legalEntity.brand} name and our logos, belongs to us or our licensors. Nothing in these Terms transfers any of it to you.`,
      },
      {
        kind: "p",
        text: "We grant you a limited, personal, non-exclusive, non-transferable and revocable licence to use the Services for their intended purpose while these Terms are in force. If we give you access to an API, you must use it in accordance with our documentation, keep your credentials secure, and stop using it when your access ends.",
      },
      {
        kind: "p",
        text: "If you send us feedback or suggestions, you agree that we may use them without restriction or obligation to you.",
      },
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services and materials",
    blocks: [
      {
        kind: "p",
        text: "The Services may link to, or interoperate with, websites, applications and services operated by third parties. We do not control them, we do not endorse them, and we are not responsible for their content, availability, security or practices. Your use of a third-party service is governed by that party's own terms.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    blocks: [
      {
        kind: "p",
        text: "The Services are provided on an as-is and as-available basis. To the fullest extent permitted by law, we exclude all warranties, conditions and representations that are not expressly set out in these Terms, including any implied warranty of merchantability, fitness for a particular purpose, accuracy or non-infringement.",
      },
      {
        kind: "p",
        text: "We do not warrant that the Services will be uninterrupted, timely, secure or error-free, that defects will be corrected, or that any Transaction will complete within a particular time. We may suspend the Services for maintenance, upgrades or emergency work.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including liability for fraud, for death or personal injury caused by negligence, or any statutory right you have as a consumer.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    blocks: [
      {
        kind: "p",
        text: "Subject to the paragraph above, we are not liable for indirect, incidental, special, consequential, exemplary or punitive loss, or for loss of profits, revenue, business, goodwill, opportunity, anticipated savings or data, however caused.",
      },
      {
        kind: "p",
        text: "Our total aggregate liability arising out of or in connection with these Terms and the Services in any 12-month period is limited to the total fees you paid us in the three months immediately preceding the event giving rise to the claim.",
      },
      {
        kind: "p",
        text: "We are not liable for loss arising from events outside our reasonable control, including acts of God, war, civil unrest, epidemic, industrial action, failure of a bank, card network, blockchain, telecommunications or power infrastructure, government or regulatory action, or the act or omission of any third party in the payment chain.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    blocks: [
      {
        kind: "p",
        text: "You agree to indemnify and hold us, our affiliates and our partners harmless against any claim, loss, liability, fine, penalty, cost or expense (including reasonable legal fees) arising out of your breach of these Terms or of any applicable law, your misuse of the Services, any chargeback or reversal attributable to you, or any dispute between you and a third party.",
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints and dispute resolution",
    blocks: [
      {
        kind: "p",
        text: `If something goes wrong, contact us first at ${legalEntity.supportEmail} with a description of the issue and any reference numbers. We will acknowledge your complaint promptly and aim to resolve it as quickly as we can, keeping you updated on our progress.`,
      },
      {
        kind: "p",
        text: "If a dispute is not resolved through our complaints process, both parties agree to attempt in good faith to settle it through discussion for a period of 15 Business Days before commencing formal proceedings. Nothing in this section prevents either party from seeking urgent injunctive relief, or prevents you from exercising any right to refer a complaint to a financial services ombudsman or regulator in your jurisdiction.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    blocks: [
      {
        kind: "p",
        text: "We may update these Terms to reflect changes to our Services, our partners, our risk assessment or the law. Where a change is material and adverse to you, we will give you reasonable advance notice through the Services or by email before it takes effect.",
      },
      {
        kind: "p",
        text: "Changes apply from their effective date and do not apply retrospectively to Transactions already completed. If you do not accept a change, you may close your Account before it takes effect. Continuing to use the Services after that date means you accept the updated Terms.",
      },
    ],
  },
  {
    id: "general",
    title: "General",
    blocks: [
      {
        kind: "list",
        items: [
          "Entire agreement: these Terms, together with the policies referred to in them, form the entire agreement between us about the Services.",
          "Severability: if any provision is found to be unenforceable, the remainder continues in full force.",
          "No waiver: if we do not enforce a right immediately, we do not waive it.",
          "Assignment: we may assign or transfer our rights and obligations, including as part of a reorganisation or sale of our business. You may not assign yours without our prior written consent.",
          "Notices: we may contact you through the Services, by email or by push notification, and you agree to receive communications from us electronically.",
          "Language: these Terms are made in English, and any translation is provided for convenience only.",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing law and jurisdiction",
    blocks: [
      {
        kind: "p",
        text: "Where you contract with our United States entity, these Terms are governed by the laws of the State of Delaware and the federal laws of the United States, and the state and federal courts located in Delaware have exclusive jurisdiction.",
      },
      {
        kind: "p",
        text: "Where you contract with our Nigerian entity, these Terms are governed by the laws of the Federal Republic of Nigeria and the courts of Lagos State have exclusive jurisdiction.",
      },
      {
        kind: "p",
        text: "Nothing in this section removes any protection or right of action that the mandatory law of your country of residence gives you as a consumer.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      {
        kind: "p",
        text: `You can reach our support team in-app, or by email at ${legalEntity.supportEmail}. For legal or regulatory correspondence, write to ${legalEntity.usEntity.name} at ${legalEntity.usEntity.address}, or to ${legalEntity.ngEntity.name} at ${legalEntity.ngEntity.address}.`,
      },
    ],
  },
];
