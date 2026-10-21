import type { LegalSection } from "@/components/legal-document/Index";

// Section and subheading ids are deep-link targets used by the mobile app
// (e.g. /terms-and-conditions#fees). Renaming one breaks those links.
export const termsSections: LegalSection[] = [
  {
    id: "about-these-terms",
    title: "About these Terms",
    blocks: [
      {
        kind: "p",
        text: "These Terms and Conditions (“Terms”) form a binding agreement between you and PayByLeap and govern your access to and use of our website, mobile applications, dashboards, application programming interfaces and related products and services (together, the “Services”).",
      },
      {
        kind: "p",
        text: "Please read these Terms carefully before using the Services. You accept these Terms when you create an Account, access the Services, initiate a Transaction, or otherwise use the Services after these Terms have been made available to you.",
      },
      {
        kind: "p",
        text: "These Terms apply together with our Privacy Policy and any product-specific terms, disclosures or conditions presented to you in connection with a particular Service, including card terms and any terms applicable to digital asset, payment or other regulated services.",
      },
    ],
  },
  {
    id: "who-we-are",
    title: "Who we are",
    blocks: [
      {
        kind: "p",
        text: "PayByLeap is a financial technology platform. The Services are operated by one or more PayByLeap entities, depending on your country of residence or incorporation, the Service you use and the applicable legal and regulatory framework.",
      },
      {
        kind: "p",
        text: "The PayByLeap entities currently associated with the Services include:",
      },
      {
        kind: "list",
        items: [
          "PayByLeap Inc., incorporated in Delaware, United States, with its registered office at 8 The Green, Ste A, Dover, Delaware 19901, United States; and",
          "PayByLeap Technologies Limited, incorporated in Nigeria, with offices at Block 59, Plot 12B Kusenla Road, Ikate, Lekki, Lagos, Nigeria and 42 Olowu Street, Opebi, 101233, Ikeja, Lagos, Nigeria.",
        ],
      },
      {
        kind: "p",
        text: "The PayByLeap entity that contracts with you may depend on your country of residence or incorporation, the Service you use, the currency or payment corridor involved, and the applicable regulatory framework.",
      },
      {
        kind: "p",
        text: "The applicable contracting entity will be identified during onboarding, within your Account, in applicable product terms or disclosures, or otherwise communicated to you.",
      },
      {
        kind: "p",
        text: "Where a Service is provided through a third-party partner, that partner may also be identified in the applicable product terms or disclosures and that partner’s product terms and applicable rules may also apply to your use of that Service.",
      },
      {
        kind: "p",
        text: "References in these Terms to “PayByLeap”, “we”, “us” or “our” mean the relevant PayByLeap entity that provides or contracts with you for the applicable Service.",
      },
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    blocks: [
      { kind: "p", text: "For these Terms:" },
      {
        kind: "list",
        items: [
          "“Account” means the PayByLeap account or profile you create and operate through the Services, including any balances, virtual account details, wallets, cards or other features made available to you.",
          "“Balance” means an amount recorded as available to you through the Services, subject to applicable fees, holds, reserves, reversals, restrictions and amounts you owe us or a relevant provider.",
          "“Business Day” means a day other than a Saturday, Sunday or public holiday in the jurisdiction relevant to the applicable Service or PayByLeap entity.",
          "“Digital Assets” means supported digital assets, cryptocurrencies and stablecoins that may be made available through the Services, including assets such as USDC or USDT where supported.",
          "“FX Rate” means the exchange rate displayed or quoted to you for a currency conversion, which may include a PayByLeap margin or spread.",
          "“KYC” means customer identification, verification and due diligence procedures.",
          "“KYB” means business identification, verification and due diligence procedures.",
          "“Payment Method” means a bank transfer, card, mobile money, digital asset transfer or other method supported by the Services.",
          "“Transaction” means a payment, transfer, currency conversion, card transaction, deposit, withdrawal, Digital Asset movement or other transaction initiated, received or processed through the Services.",
          "“Virtual Account” means virtual account details or payment account functionality made available through PayByLeap or a third-party provider.",
          "“Virtual Card” and “Physical Card” mean payment cards issued through PayByLeap or its card-issuing partners under applicable card network and product rules.",
        ],
      },
    ],
  },
  {
    id: "services-and-availability",
    title: "Services and availability",
    blocks: [
      {
        kind: "p",
        text: "PayByLeap provides different Services depending on your location, eligibility, verification status, applicable laws and the availability of our partners and payment networks.",
      },
      { kind: "p", text: "Services may include:" },
      {
        kind: "ordered",
        items: [
          "multi-currency balances and wallets;",
          "virtual or foreign currency account details for receiving and making payments;",
          "peer-to-peer transfers between PayByLeap users;",
          "domestic and international money transfers;",
          "foreign exchange and currency conversion;",
          "eligible payments, including tuition, application, examination, visa and other approved fees;",
          "digital asset and stablecoin transfers;",
          "virtual and physical payment cards;",
          "invoicing and payment collection tools; and",
          "other payment and financial technology services that we may introduce.",
        ],
      },
      {
        kind: "p",
        text: "A particular Service may be provided directly by PayByLeap or through one or more third-party providers. Additional product-specific terms, disclosures, eligibility requirements, fees or limitations may apply.",
      },
      {
        kind: "p",
        text: "We may determine which currencies, countries, payment methods, networks, Digital Assets, cards and other features are available to you and may add, remove or restrict availability where permitted by applicable law.",
      },
      {
        kind: "p",
        text: "A feature described in these Terms may not yet be available to all users and may be introduced progressively.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility and registration",
    blocks: [
      { kind: "p", text: "To open and operate an Account, you must:" },
      {
        kind: "ordered",
        items: [
          "be at least 18 years old and have full legal capacity to enter into a binding agreement;",
          "be resident or incorporated in a country we currently serve;",
          "not be located in a jurisdiction that we restrict or are prohibited from serving;",
          "not be subject to applicable sanctions or acting on behalf of a sanctioned person;",
          "provide accurate, current and complete information about yourself or your business;",
          "keep your information updated;",
          "maintain only one Account unless we expressly permit otherwise; and",
          "comply with these Terms and all applicable laws.",
        ],
      },
      {
        kind: "p",
        text: "If you open an Account on behalf of a business or other legal entity, you confirm that you are authorised to act for and bind that entity.",
      },
      {
        kind: "p",
        text: "Where you open or operate an Account on behalf of a business, “you” includes both you and that business, as applicable.",
      },
      {
        kind: "p",
        text: "You are responsible for the acts and omissions of any person you authorise to access or operate your Account.",
      },
      {
        kind: "p",
        text: "You must notify us promptly of any material change to information provided to us, including changes to your name, address, ownership, control, business activity, tax residency or other information relevant to your Account.",
      },
    ],
  },
  {
    id: "identity-verification",
    title: "Identity verification and due diligence",
    blocks: [
      {
        kind: "p",
        text: "Before activating your Account or particular Services, and from time to time thereafter, we may be required to verify your identity or the identity of your business.",
      },
      {
        kind: "p",
        text: "You authorise us and relevant providers to conduct reasonable checks necessary to provide the Services and comply with applicable law.",
      },
      { kind: "p", text: "These checks may include verification against:" },
      {
        kind: "list",
        items: [
          "identity databases;",
          "sanctions lists;",
          "politically exposed person databases;",
          "fraud and financial crime databases;",
          "corporate and beneficial ownership records;",
          "tax or regulatory databases;",
          "device and security information; and",
          "other lawful and authorised sources.",
        ],
      },
      { kind: "p", text: "We may request documents or information including:" },
      {
        kind: "list",
        items: [
          "government-issued identification;",
          "proof of address;",
          "national identification information;",
          "bank or payment information;",
          "company registration documents;",
          "ownership and control structures;",
          "beneficial ownership information;",
          "source of funds or source of wealth information;",
          "tax information;",
          "information concerning the purpose of a Transaction; and",
          "information concerning counterparties or beneficiaries.",
        ],
      },
      {
        kind: "p",
        text: "We may apply enhanced due diligence where our legal, regulatory or risk requirements require it.",
      },
      {
        kind: "p",
        text: "If you do not provide requested information, if we cannot verify the information provided, or if the results of our checks do not satisfy our requirements, we may decline your application, restrict your Account or Services, delay or refuse Transactions, or close your Account.",
      },
      {
        kind: "p",
        text: "Where permitted by law, we may not be able to disclose the specific reasons for a restriction or decision.",
      },
    ],
  },
  {
    id: "accounts-and-wallets",
    title: "Accounts, virtual accounts and wallets",
    blocks: [
      {
        kind: "p",
        text: "Once verified, your Account may provide access to different financial and payment features depending on your location, verification level, product eligibility and applicable providers.",
      },
      {
        kind: "p",
        text: "These may include multi-currency balances, Virtual Accounts, Digital Asset wallets, cards, transfer functionality and other Services.",
      },
      { kind: "subheading", id: "virtual-accounts", text: "Virtual Accounts" },
      {
        kind: "p",
        text: "Where available, PayByLeap may provide you with Virtual Account details or payment account functionality in supported currencies and payment networks.",
      },
      {
        kind: "p",
        text: "A Virtual Account may allow you to receive or send payments through a partner bank, payment institution or other financial infrastructure provider.",
      },
      {
        kind: "p",
        text: "A Virtual Account is not necessarily a bank account opened directly by PayByLeap. The legal nature of the account, available payment methods, supported currencies and applicable protections depend on the relevant provider and jurisdiction.",
      },
      {
        kind: "p",
        text: "You may only use Virtual Account details for your own legitimate transactions.",
      },
      { kind: "p", text: "You must not:" },
      {
        kind: "list",
        items: [
          "allow another person or business to use your account details as their own;",
          "use your Account to receive or process funds for unrelated third parties;",
          "operate an undisclosed payment or money transmission service;",
          "pool funds belonging to other persons;",
          "use your Account as an undisclosed collection account for third parties; or",
          "use your Account for unlawful or prohibited activity.",
        ],
      },
      {
        kind: "p",
        text: "We may impose transaction, balance, receiving and sending limits on Virtual Accounts and may suspend or close access where required by law, partner requirements or our risk controls.",
      },
      {
        kind: "subheading",
        id: "digital-asset-wallets",
        text: "Digital Asset Wallets",
      },
      {
        kind: "p",
        text: "Where Digital Asset wallet functionality is available, the applicable custody or control arrangement may depend on the relevant product and provider.",
      },
      {
        kind: "p",
        text: "The Services may display wallet addresses or enable you to send and receive Digital Assets through supported blockchain networks.",
      },
      {
        kind: "p",
        text: "You are responsible for ensuring that you use the correct asset, wallet address and blockchain network before authorising a Digital Asset transaction.",
      },
    ],
  },
  {
    id: "funds-and-safeguarding",
    title: "Your funds and safeguarding",
    blocks: [
      {
        kind: "p",
        text: "Depending on the Service you use, funds associated with your Account may be held, safeguarded, settled or otherwise maintained by PayByLeap or by one or more third-party financial institutions or payment service providers.",
      },
      {
        kind: "p",
        text: "The entity responsible for holding or safeguarding funds, the applicable safeguarding or deposit-protection arrangements, and the rights available to you in the event of insolvency may differ depending on the Service and jurisdiction.",
      },
      {
        kind: "p",
        text: "Where a third party holds or safeguards your funds, PayByLeap does not control that institution’s internal systems or processes and your use of the relevant Service may also be subject to that provider’s terms.",
      },
      { kind: "p", text: "Unless expressly stated otherwise:" },
      {
        kind: "list",
        items: [
          "balances do not constitute deposits with PayByLeap;",
          "balances do not earn interest; and",
          "PayByLeap does not use customer balances for its own operating purposes except as permitted by the applicable legal and contractual structure.",
        ],
      },
      {
        kind: "p",
        text: "Where applicable law provides specific safeguarding or customer-fund protections, those protections will apply notwithstanding anything inconsistent in these Terms.",
      },
    ],
  },
  {
    id: "currency-exchange",
    title: "Currency exchange and FX",
    blocks: [
      {
        kind: "p",
        text: "PayByLeap may allow you to convert between currencies supported by the Services.",
      },
      {
        kind: "p",
        text: "Supported currencies and Digital Assets may vary by jurisdiction, product and provider and may change from time to time without notice.",
      },
      {
        kind: "p",
        text: "Before you confirm a currency conversion, we will generally display the applicable FX Rate and the amount you will receive.",
      },
      {
        kind: "p",
        text: "The FX Rate may include a PayByLeap margin or spread and may therefore differ from rates available from other sources.",
      },
      { kind: "p", text: "Exchange rates can change continuously." },
      {
        kind: "p",
        text: "A quoted rate is valid only for the period stated or implied in the applicable Service. If the quote expires before you complete the conversion, a new rate may apply.",
      },
      {
        kind: "p",
        text: "Once you confirm a conversion, it may be final and cannot be reversed solely because the market subsequently moves in a different direction.",
      },
      {
        kind: "p",
        text: "Where a currency conversion is required to recover an amount you owe us, we may use the prevailing rate available through the Services or relevant provider at the time of conversion.",
      },
    ],
  },
  {
    id: "transfers",
    title: "Domestic and international transfers",
    blocks: [
      {
        kind: "p",
        text: "Where available, PayByLeap may enable you to send funds to beneficiaries in supported countries through bank transfers, mobile money, Digital Assets or other payment methods.",
      },
      {
        kind: "p",
        text: "The available Payment Method, delivery time, currency, fees, limits and required information depend on the destination country, payment corridor, beneficiary institution and third-party providers involved.",
      },
      {
        kind: "p",
        text: "You are responsible for providing accurate payment information, including:",
      },
      {
        kind: "list",
        items: [
          "beneficiary name;",
          "account number;",
          "IBAN;",
          "sort code;",
          "routing number;",
          "wallet address;",
          "destination network;",
          "payment reference; and",
          "any other information required for the Transaction.",
        ],
      },
      {
        kind: "p",
        text: "Payment systems may rely primarily on account identifiers rather than beneficiary names.",
      },
      {
        kind: "p",
        text: "If you provide incorrect information and a Transaction is sent to the wrong beneficiary, we may make reasonable efforts to assist with recovery, but we cannot guarantee that funds will be recovered.",
      },
      {
        kind: "p",
        text: "A transfer may pass through one or more intermediary or correspondent institutions before reaching the beneficiary.",
      },
      {
        kind: "p",
        text: "Transfers may be delayed, rejected, returned or subject to additional requirements imposed by an intermediary, correspondent bank, receiving institution, payment network or regulatory authority.",
      },
      {
        kind: "p",
        text: "Third parties in the payment chain may deduct their own fees.",
      },
      {
        kind: "p",
        text: "Delivery times displayed through the Services are estimates unless expressly stated otherwise.",
      },
      {
        kind: "p",
        text: "Some payment services may be subject to mandatory cancellation, refund, error-resolution or consumer-protection rights in the applicable jurisdiction. Nothing in these Terms limits those rights.",
      },
    ],
  },
  {
    id: "peer-to-peer-transfers",
    title: "Peer-to-peer transfers",
    blocks: [
      {
        kind: "p",
        text: "Where available, you may send or receive funds from other PayByLeap users using information such as their name, username, account details or other identifiers supported by the Services.",
      },
      {
        kind: "p",
        text: "You are responsible for confirming that you have selected the correct recipient before authorising a transfer.",
      },
      {
        kind: "p",
        text: "A transfer initiated by you may be irreversible once processed.",
      },
      {
        kind: "p",
        text: "PayByLeap is not responsible for disputes between users concerning the underlying reason for a transfer, goods or services supplied between users, or any other private arrangement between them.",
      },
      {
        kind: "p",
        text: "We may delay, reject, reverse or restrict a peer-to-peer transfer where necessary to:",
      },
      {
        kind: "list",
        items: [
          "comply with applicable law;",
          "prevent fraud or financial crime;",
          "investigate suspicious activity;",
          "correct an error; or",
          "comply with a partner or payment network requirement.",
        ],
      },
    ],
  },
  {
    id: "payment-and-fee-services",
    title: "Payment and fee services",
    blocks: [
      {
        kind: "p",
        text: "Where available, PayByLeap may allow you to make payments to educational institutions, government or visa-related services, testing providers, subscription providers, utility providers, merchants and other approved recipients.",
      },
      { kind: "p", text: "You are responsible for providing accurate:" },
      {
        kind: "list",
        items: [
          "recipient information;",
          "payment references;",
          "application or account numbers;",
          "deadlines;",
          "invoice details; and",
          "any other information required for the payment.",
        ],
      },
      {
        kind: "p",
        text: "PayByLeap acts as a payment facilitator or technology platform unless expressly stated otherwise.",
      },
      {
        kind: "p",
        text: "We are not a party to the underlying agreement between you and the recipient and are not responsible for the underlying goods or services.",
      },
      { kind: "p", text: "We are not responsible for:" },
      {
        kind: "list",
        items: [
          "a recipient rejecting a payment;",
          "a recipient misapplying a payment;",
          "changes to fees imposed by the recipient;",
          "the quality or delivery of goods or services;",
          "a recipient’s internal processing delays; or",
          "disputes between you and the recipient.",
        ],
      },
      {
        kind: "p",
        text: "Where a payment fails, is rejected or is returned, we will handle the funds in accordance with the applicable payment method, provider rules and applicable law.",
      },
    ],
  },
  {
    id: "cards",
    title: "Cards",
    blocks: [
      {
        kind: "p",
        text: "Where available, PayByLeap may provide Virtual Cards and Physical Cards through card-issuing partners and applicable card networks.",
      },
      {
        kind: "p",
        text: "Card use may be subject to separate cardholder terms, network rules and additional disclosures presented to you when the card is issued.",
      },
      { kind: "p", text: "You must:" },
      {
        kind: "list",
        items: [
          "keep your card and card credentials secure;",
          "maintain sufficient available funds;",
          "use the card only for lawful purposes;",
          "notify us promptly if your card is lost, stolen or used without your authorisation; and",
          "comply with applicable card terms and network rules.",
        ],
      },
      {
        kind: "p",
        text: "Merchants may place temporary authorisation holds that differ from the final transaction amount.",
      },
      {
        kind: "p",
        text: "Some transactions may settle at an amount or time different from the original authorisation.",
      },
      {
        kind: "p",
        text: "Cards may not be accepted by every merchant, country or transaction type.",
      },
      {
        kind: "p",
        text: "Certain merchant categories may be restricted or blocked for legal, regulatory, risk or partner requirements.",
      },
      { kind: "p", text: "Replacement cards may attract applicable fees." },
      {
        kind: "p",
        text: "Card purchase disputes, chargebacks and related claims are subject to applicable card network rules, issuer procedures and mandatory law.",
      },
    ],
  },
  {
    id: "digital-assets",
    title: "Digital assets and stablecoins",
    blocks: [
      {
        kind: "p",
        text: "Where available, PayByLeap may allow you to send, receive, hold, convert or otherwise transact in supported Digital Assets.",
      },
      {
        kind: "p",
        text: "Digital Asset Services are subject to additional risks and limitations.",
      },
      {
        kind: "p",
        text: "Digital Asset transactions may be recorded on public blockchains and, once confirmed, may be irreversible.",
      },
      { kind: "p", text: "You are solely responsible for verifying:" },
      {
        kind: "list",
        items: [
          "the destination wallet address;",
          "the Digital Asset;",
          "the blockchain network;",
          "the amount; and",
          "any applicable transaction details",
        ],
      },
      { kind: "p", text: "before confirming a transfer." },
      {
        kind: "p",
        text: "Sending an asset to an incorrect address or over an unsupported network may result in permanent loss.",
      },
      {
        kind: "p",
        text: "Blockchain transactions may involve network fees that vary according to network conditions.",
      },
      {
        kind: "p",
        text: "We are not responsible for blockchain congestion, forks, reorganisations, protocol changes, validator failures, smart contract defects or the acts or omissions of third-party blockchain participants, except to the extent liability cannot lawfully be excluded.",
      },
      { kind: "p", text: "Digital Assets:" },
      {
        kind: "list",
        items: [
          "are not legal tender unless expressly recognised as such by applicable law;",
          "are not deposits with PayByLeap;",
          "may not be protected by deposit insurance or investor compensation schemes;",
          "may experience significant changes in value; and",
          "may involve additional technological, legal, regulatory and operational risks.",
        ],
      },
      {
        kind: "p",
        text: "A stablecoin may lose or deviate from its intended value or peg.",
      },
      {
        kind: "p",
        text: "Digital Asset Services may also be subject to additional custody, transfer, withdrawal, geographic or transaction restrictions imposed by PayByLeap or its providers.",
      },
      {
        kind: "p",
        text: "We do not provide investment, tax or legal advice through the Services. Nothing in the Services constitutes a recommendation to buy, sell, hold or otherwise transact in any Digital Asset.",
      },
      {
        kind: "p",
        text: "Digital Asset Services may not be available in every jurisdiction.",
      },
    ],
  },
  {
    id: "invoicing",
    title: "Invoicing and payment collection",
    blocks: [
      {
        kind: "p",
        text: "Where available, our invoicing tools may allow you to create, send, manage and track invoices and receive payments against them.",
      },
      {
        kind: "p",
        text: "You are solely responsible for the accuracy and lawfulness of information contained in your invoices, including:",
      },
      {
        kind: "list",
        items: [
          "amounts;",
          "descriptions;",
          "payment terms;",
          "tax treatment;",
          "recipient information; and",
          "any regulatory information required by applicable law.",
        ],
      },
      {
        kind: "p",
        text: "PayByLeap is not a party to the underlying contract between you and the person or business you invoice.",
      },
      {
        kind: "p",
        text: "We do not verify that goods or services have been supplied, do not guarantee that an invoice will be paid and do not assume responsibility for collecting unpaid invoices.",
      },
      {
        kind: "p",
        text: "You are responsible for determining, charging, collecting and remitting taxes arising from your invoices and for maintaining any records required by applicable law.",
      },
    ],
  },
  {
    id: "fees",
    title: "Fees and charges",
    blocks: [
      {
        kind: "p",
        text: "Our applicable fees will be displayed through the Services or otherwise communicated to you before you confirm a Transaction where required.",
      },
      { kind: "p", text: "Fees may include:" },
      {
        kind: "list",
        items: [
          "transfer fees;",
          "currency conversion margins or spreads;",
          "card issuance or maintenance fees;",
          "withdrawal fees;",
          "Digital Asset network fees;",
          "failed or returned payment fees; and",
          "other applicable Service fees.",
        ],
      },
      {
        kind: "p",
        text: "Third parties in the payment chain, including intermediary banks, receiving institutions, card networks and Digital Asset networks, may impose additional charges outside our control.",
      },
      {
        kind: "p",
        text: "You are responsible for taxes arising from your use of the Services other than taxes imposed on PayByLeap’s own income.",
      },
      { kind: "p", text: "We may change our fees from time to time." },
      {
        kind: "p",
        text: "Where a change is material and applicable law requires advance notice, we will provide the required notice before the change takes effect.",
      },
      {
        kind: "p",
        text: "If you believe a fee has been applied incorrectly, you should contact us through the support channels made available in the Services as soon as reasonably possible.",
      },
    ],
  },
  {
    id: "limits-holds-and-reserves",
    title: "Limits, holds and reserves",
    blocks: [
      {
        kind: "p",
        text: "We may set and vary limits on your Account and Services, including limits relating to:",
      },
      {
        kind: "list",
        items: [
          "individual Transactions;",
          "daily, weekly or monthly transaction volume;",
          "transaction frequency and velocity;",
          "account balances;",
          "receiving and sending amounts;",
          "card spending;",
          "Digital Asset transfers; and",
          "other activity.",
        ],
      },
      {
        kind: "p",
        text: "Limits may depend on your verification level, location, product, payment method, provider requirements and risk profile.",
      },
      {
        kind: "p",
        text: "We may place a hold on a Transaction or part of your Balance, delay or decline a Transaction, or require a reserve where reasonably necessary to:",
      },
      {
        kind: "list",
        items: [
          "manage financial or operational risk;",
          "investigate suspected fraud;",
          "investigate a breach of these Terms;",
          "comply with legal or regulatory obligations;",
          "comply with a partner or payment network requirement;",
          "address a chargeback, reversal or disputed payment; or",
          "protect the integrity or security of the Services.",
        ],
      },
      {
        kind: "p",
        text: "Where permitted by law and where doing so would not compromise a legal, security or financial crime investigation, we may provide information concerning a restriction.",
      },
      {
        kind: "p",
        text: "There may be circumstances in which we cannot disclose the reasons for a restriction.",
      },
    ],
  },
  {
    id: "cancellation-and-refunds",
    title: "Finality, cancellation and refunds",
    blocks: [
      {
        kind: "p",
        text: "A Transaction that has been successfully executed is generally final.",
      },
      {
        kind: "p",
        text: "Whether a Transaction can be cancelled, recalled or refunded depends on the type of Transaction, its processing status, the Payment Method, the applicable payment network or provider and applicable law.",
      },
      {
        kind: "p",
        text: "Where cancellation is available, you must submit the request through the process specified in the Services and before the applicable processing deadline.",
      },
      {
        kind: "p",
        text: "A request to cancel a Transaction does not guarantee that the Transaction can be stopped or that funds can be recovered.",
      },
      {
        kind: "p",
        text: "For bank transfers, we may be able to request a recall, but recovery depends on the receiving institution, payment network and beneficiary and cannot be guaranteed.",
      },
      {
        kind: "p",
        text: "Digital Asset transfers generally cannot be cancelled or recalled once broadcast or confirmed on the applicable blockchain.",
      },
      {
        kind: "p",
        text: "Where PayByLeap or a payment partner receives funds that are required to be returned to you, the refund will generally be made using the original Payment Method or another method reasonably available to us.",
      },
      {
        kind: "p",
        text: "A refund may be reduced by applicable fees where permitted by law and where those fees were properly disclosed.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms limits any mandatory cancellation, refund, chargeback or consumer-protection rights applicable to a Transaction.",
      },
    ],
  },
  {
    id: "errors-and-unauthorised-transactions",
    title: "Errors and unauthorised transactions",
    blocks: [
      { kind: "p", text: "If you believe that:" },
      {
        kind: "list",
        items: [
          "your Account has been accessed without your authorisation;",
          "a Transaction was not authorised by you;",
          "a Transaction contains an error; or",
          "your card or payment credentials have been compromised,",
        ],
      },
      {
        kind: "p",
        text: "you should notify us as soon as reasonably possible through the support channels provided in the Services.",
      },
      {
        kind: "p",
        text: "We may request information or documentation reasonably necessary to investigate the issue, including information concerning the relevant device, authentication method, Transaction and circumstances in which the issue occurred.",
      },
      {
        kind: "p",
        text: "We will investigate reported errors and unauthorised Transactions in accordance with our procedures, the applicable product terms, the rules of the relevant payment network or provider and applicable law.",
      },
      {
        kind: "p",
        text: "Where applicable law provides a specific timeframe for:",
      },
      {
        kind: "list",
        items: [
          "reporting an error;",
          "making a claim;",
          "investigating a Transaction;",
          "providing provisional credit;",
          "issuing a refund; or",
          "resolving an unauthorised Transaction,",
        ],
      },
      {
        kind: "p",
        text: "those requirements will apply notwithstanding anything else in these Terms.",
      },
      {
        kind: "p",
        text: "You may be responsible for losses resulting from your failure to protect your Account credentials, payment instruments or authentication information to the extent permitted by applicable law.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms excludes or limits any statutory protection applicable to you.",
      },
      {
        kind: "p",
        text: "A Transaction is not necessarily an “error” merely because:",
      },
      {
        kind: "list",
        items: [
          "you changed your mind;",
          "you entered incorrect beneficiary information;",
          "you dispute an underlying transaction with a merchant or recipient;",
          "you are dissatisfied with goods or services provided by a third party; or",
          "a Transaction was delayed or rejected for reasons outside our reasonable control.",
        ],
      },
    ],
  },
  {
    id: "reversals-and-negative-balances",
    title: "Reversals, chargebacks and negative balances",
    blocks: [
      {
        kind: "p",
        text: "If a payment into your Account is reversed, recalled, charged back or otherwise returned, you remain liable for the amount owed together with any properly applicable fees.",
      },
      {
        kind: "p",
        text: "This applies whether or not you have already spent, withdrawn or transferred the relevant funds.",
      },
      {
        kind: "p",
        text: "If your Balance becomes negative, the amount is immediately due and payable.",
      },
      {
        kind: "p",
        text: "Where permitted by law, we may recover a negative Balance by:",
      },
      {
        kind: "list",
        items: [
          "deducting from other balances held through the Services;",
          "applying an applicable FX Rate where currency conversion is required;",
          "setting off the amount against sums otherwise payable to you; or",
          "pursuing other lawful recovery methods.",
        ],
      },
      {
        kind: "p",
        text: "You remain responsible for any negative Balance until it has been fully settled.",
      },
    ],
  },
  {
    id: "account-security",
    title: "Account security",
    blocks: [
      {
        kind: "p",
        text: "You are responsible for keeping your Account and authentication credentials secure.",
      },
      { kind: "p", text: "You must:" },
      {
        kind: "list",
        items: [
          "use a strong and unique password;",
          "keep your password, PIN and one-time codes confidential;",
          "never share authentication information with another person;",
          "keep your device secure;",
          "enable additional security features made available by PayByLeap;",
          "keep your contact information current;",
          "regularly review your Transaction history; and",
          "notify us promptly if you suspect your Account, device or credentials have been compromised.",
        ],
      },
      {
        kind: "p",
        text: "PayByLeap will not ask you to disclose your password or one-time authentication code.",
      },
      {
        kind: "p",
        text: "We may treat a Transaction authenticated using your Account credentials or an applicable authentication method as having been initiated by you, subject to applicable law and any mandatory unauthorised-transaction protections.",
      },
      {
        kind: "p",
        text: "You remain responsible for losses arising from your intentional or negligent disclosure of authentication information to the extent permitted by applicable law.",
      },
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited and restricted use",
    blocks: [
      {
        kind: "p",
        text: "You must use the Services only for lawful purposes and in accordance with these Terms and our Acceptable Use Policy.",
      },
      { kind: "p", text: "You must not use the Services to:" },
      {
        kind: "ordered",
        items: [
          "engage in or facilitate money laundering, terrorist financing, proliferation financing, sanctions evasion, tax evasion, bribery or corruption;",
          "process funds derived from or connected to criminal activity;",
          "provide unlicensed financial, payment, money transmission, lending, securities or investment services to third parties;",
          "operate an undisclosed or unlicensed payment or money transmission service;",
          "operate an unlicensed exchange or financial intermediary;",
          "process funds on behalf of third parties where such activity is prohibited or requires authorisation;",
          "facilitate unlawful gambling, adult content, illegal narcotics, controlled pharmaceuticals, weapons or ammunition, counterfeit or stolen goods, wildlife trafficking or human exploitation;",
          "operate pyramid, Ponzi, matrix or similar unlawful schemes;",
          "infringe intellectual property rights;",
          "distribute malware, spam or deceptive content;",
          "impersonate another person or misrepresent your identity;",
          "use a false, stolen or borrowed identity;",
          "circumvent sanctions, transaction limits, KYC or other compliance controls;",
          "probe, interfere with or compromise the security or integrity of the Services;",
          "access another person’s Account without authorisation;",
          "scrape, reverse engineer, decompile or create derivative works from the Services except to the extent applicable law does not permit such restriction; or",
          "use the Services in any other manner prohibited by applicable law or our policies.",
        ],
      },
      {
        kind: "p",
        text: "We may restrict additional activities or transaction types where reasonably necessary to comply with law, regulatory requirements, provider requirements or our risk controls.",
      },
    ],
  },
  {
    id: "financial-crime-compliance",
    title: "Financial crime compliance and monitoring",
    blocks: [
      {
        kind: "p",
        text: "We monitor Account activity and Transactions to comply with applicable anti-money laundering, counter-terrorist financing, sanctions, fraud prevention and other financial crime requirements.",
      },
      {
        kind: "p",
        text: "Our monitoring may include automated and manual controls and may take into account factors such as:",
      },
      {
        kind: "list",
        items: [
          "transaction patterns;",
          "transaction amounts and frequency;",
          "geographic information;",
          "counterparties and beneficiaries;",
          "source of funds;",
          "source of wealth;",
          "sanctions and watchlist information;",
          "identity and verification information;",
          "device and account behaviour;",
          "Digital Asset transaction information where applicable; and",
          "other information permitted by law.",
        ],
      },
      {
        kind: "p",
        text: "We may request information concerning the source of funds, purpose of a Transaction, relationship with a counterparty, beneficial ownership or other matters relevant to our compliance obligations.",
      },
      {
        kind: "p",
        text: "You must provide requested information accurately and promptly.",
      },
      {
        kind: "p",
        text: "We may delay, block, freeze, reject or restrict a Transaction or Account where necessary to comply with applicable law, regulatory requirements, sanctions obligations, fraud controls or financial crime requirements.",
      },
      {
        kind: "p",
        text: "Where we are required to report suspicious activity to a regulator, financial intelligence unit or law enforcement authority, we may be legally prohibited from telling you that we have done so.",
      },
      {
        kind: "p",
        text: "We will not be liable for taking actions reasonably required to comply with applicable financial crime laws or regulatory obligations, subject to any liability that cannot lawfully be excluded.",
      },
    ],
  },
  {
    id: "suspension-and-termination",
    title: "Suspension, restriction and termination",
    blocks: [
      {
        kind: "p",
        text: "You may close your Account at any time through the Services or by contacting support.",
      },
      {
        kind: "p",
        text: "Before closure, you must settle any negative Balance and, subject to applicable restrictions, withdraw or otherwise receive any remaining funds to which you are entitled.",
      },
      {
        kind: "p",
        text: "We may suspend, restrict or terminate your Account or any Service where:",
      },
      {
        kind: "ordered",
        items: [
          "you breach these Terms or our Acceptable Use Policy;",
          "we are required to do so by law, a regulator, court, payment network or financial institution;",
          "we reasonably suspect fraud, financial crime or unauthorised access;",
          "you provide information that is false, misleading, incomplete or unverifiable;",
          "continued use presents a legal, regulatory, security or material operational risk;",
          "a third-party provider terminates or restricts the relevant Service;",
          "we withdraw a product or cease serving your jurisdiction; or",
          "another lawful basis exists for taking such action.",
        ],
      },
      {
        kind: "p",
        text: "Where appropriate and legally permissible, we may provide notice before terminating or restricting an Account.",
      },
      {
        kind: "p",
        text: "However, we may take immediate action where required to protect users, PayByLeap, our partners, payment networks or the integrity of the Services, or where required by law.",
      },
      {
        kind: "p",
        text: "If your Account is closed, we may retain funds for a reasonable period where necessary to address pending Transactions, chargebacks, reversals, disputes, legal obligations or investigations.",
      },
      {
        kind: "p",
        text: "Termination does not affect rights or obligations that accrued before termination.",
      },
      {
        kind: "p",
        text: "What happens to your Account and personal data when you choose to close your Account is explained in “Account closure and data deletion” below.",
      },
    ],
  },
  {
    id: "account-closure-and-data-deletion",
    title: "Account closure and data deletion",
    blocks: [
      {
        kind: "p",
        text: "This section explains how you can close your Account, the period during which you can change your mind, and what happens to your personal data after your Account is closed, including the records we are required by law to keep.",
      },
      {
        kind: "subheading",
        id: "closing-your-account",
        text: "Requesting closure",
      },
      {
        kind: "p",
        text: "You may request the closure of your Account at any time through the Services or by contacting support. We will ask you to confirm the request and may ask you to verify your identity before we process it.",
      },
      { kind: "p", text: "Before you request closure, you should:" },
      {
        kind: "list",
        items: [
          "withdraw or transfer any remaining Balance, including Digital Assets, to an account or wallet in your own name;",
          "settle any negative Balance or other amount you owe us;",
          "allow any pending Transactions to complete;",
          "cancel any recurring payments or subscriptions linked to your cards or Virtual Accounts; and",
          "download any account statements, Transaction history or other records you wish to keep.",
        ],
      },
      {
        kind: "p",
        text: "We may delay closing your Account while it has a Balance, a negative Balance, pending Transactions, an open dispute or chargeback, or while it is subject to a legal, regulatory or compliance review. You must not close your Account to avoid an investigation, and closing your Account does not end any obligation you owe us.",
      },
      {
        kind: "subheading",
        id: "reactivation-period",
        text: "7-day reactivation period",
      },
      {
        kind: "p",
        text: "Once you confirm your closure request, your Account will be deactivated. While your Account is deactivated, you will not be able to make Transactions, your cards will be blocked, and payments sent to your Virtual Account details may be rejected or returned to the sender.",
      },
      {
        kind: "p",
        text: "For seven (7) days after you confirm your request (the “Reactivation Period”), we will keep your Account and its details in case you change your mind. You may ask us to restore your Account at any time during the Reactivation Period by contacting support through the channels made available in the Services. Restoring your Account may require you to verify your identity again.",
      },
      {
        kind: "subheading",
        id: "permanent-closure",
        text: "After the Reactivation Period",
      },
      {
        kind: "p",
        text: "If you do not ask us to restore your Account before the Reactivation Period ends, your Account will be permanently closed. After that:",
      },
      {
        kind: "list",
        items: [
          "your Account cannot be restored, and you will no longer be able to access it, your Transaction history or your statements through the Services;",
          "your Virtual Account details, cards and Digital Asset wallet addresses will be permanently deactivated, and you should tell anyone who pays you to stop using them;",
          "payments sent to closed account details may be rejected or returned, and Digital Assets sent to a closed wallet address may be permanently lost;",
          "your personal data will be removed from our active systems and will no longer be used to provide the Services or to contact you for marketing; and",
          "if you wish to use the Services again, you will need to open a new Account and complete our verification checks again.",
        ],
      },
      {
        kind: "subheading",
        id: "records-we-keep",
        text: "Records we must keep after closure",
      },
      {
        kind: "p",
        text: "Closing your Account does not mean that all of your data is deleted immediately. As a financial services provider, we are required by law, including the Money Laundering (Prevention and Prohibition) Act 2022, the Nigeria Data Protection Act 2023 and applicable regulations of the Central Bank of Nigeria, as well as equivalent laws in other jurisdictions where we operate, to keep certain records after a customer relationship ends.",
      },
      {
        kind: "p",
        text: "We will retain the following records for at least five (5) years after your Account is permanently closed, or for longer where required by law or where reasonably necessary to deal with an ongoing investigation, dispute or legal claim:",
      },
      {
        kind: "list",
        items: [
          "identity and verification records, including the information and documents collected for KYC or KYB;",
          "Transaction records and account statements;",
          "records of your communications with us, including complaints; and",
          "records relating to fraud prevention, sanctions screening and financial crime compliance.",
        ],
      },
      {
        kind: "p",
        text: "During this retention period, your records will be stored securely, access will be restricted to authorised personnel, and the records will be used only to comply with our legal and regulatory obligations, to prevent fraud and financial crime, to respond to lawful requests from regulators, law enforcement or courts, and to establish, exercise or defend legal claims. They will not be used to provide the Services to you or for marketing.",
      },
      {
        kind: "p",
        text: "At the end of the applicable retention period, we will securely delete your records or anonymise them so that they can no longer be linked to you. Anonymised information may be retained and used for statistical and analytical purposes.",
      },
      {
        kind: "subheading",
        id: "your-data-rights",
        text: "Your data protection rights",
      },
      {
        kind: "p",
        text: "Applicable data protection laws, including the Nigeria Data Protection Act 2023, may give you the right to request the erasure of your personal data. Where we are legally required to retain records as described above, we may not be able to delete them before the end of the applicable retention period, and we will explain this to you if you make a request.",
      },
      {
        kind: "p",
        text: "You may continue to exercise your other rights, such as the right to request access to a copy of the personal data we hold about you, during the retention period, subject to verification of your identity and applicable law. More information is available in our Privacy Policy.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property and API use",
    blocks: [
      {
        kind: "p",
        text: "All intellectual property rights in the Services, including software, interfaces, designs, text, graphics, trademarks, logos and other materials, belong to PayByLeap or its licensors.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms transfers ownership of our intellectual property to you.",
      },
      {
        kind: "p",
        text: "We grant you a limited, personal, non-exclusive, non-transferable and revocable licence to access and use the Services for their intended purpose while these Terms remain in force.",
      },
      { kind: "p", text: "If we provide you with API access, you must:" },
      {
        kind: "list",
        items: [
          "use the API in accordance with our documentation;",
          "keep API credentials secure;",
          "comply with applicable usage limits;",
          "not use the API for unlawful purposes; and",
          "stop using the API when your access is suspended or terminated.",
        ],
      },
      {
        kind: "p",
        text: "You must not use PayByLeap trademarks, branding or other intellectual property without our prior written permission.",
      },
      {
        kind: "p",
        text: "If you provide feedback, suggestions or ideas concerning the Services, you agree that we may use them without restriction or obligation to compensate you, subject to applicable law.",
      },
    ],
  },
  {
    id: "third-party-providers",
    title: "Third-party providers and partners",
    blocks: [
      {
        kind: "p",
        text: "Certain Services depend on third-party providers, including:",
      },
      {
        kind: "list",
        items: [
          "banks;",
          "payment institutions;",
          "money services businesses;",
          "card issuers;",
          "card networks;",
          "payment processors;",
          "Digital Asset providers or custodians;",
          "foreign exchange providers;",
          "identity verification providers;",
          "blockchain networks; and",
          "technology and infrastructure providers.",
        ],
      },
      {
        kind: "p",
        text: "These providers may impose additional terms, eligibility requirements, fees, transaction limits or restrictions.",
      },
      {
        kind: "p",
        text: "Where additional third-party terms apply, we will make them available to you where reasonably required.",
      },
      {
        kind: "p",
        text: "You agree to comply with applicable third-party terms where they are presented to you.",
      },
      {
        kind: "p",
        text: "PayByLeap may change, add or replace third-party providers where reasonably necessary to operate, improve, secure or comply with legal or regulatory requirements relating to the Services.",
      },
      {
        kind: "p",
        text: "Where a third-party provider is responsible for a particular aspect of a Service, that provider may be responsible for the relevant regulated activity, infrastructure or account arrangement.",
      },
      {
        kind: "p",
        text: "PayByLeap is not responsible for the acts or omissions of a third-party provider to the extent they are outside PayByLeap’s reasonable control, subject to any liability that cannot lawfully be excluded or limited.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    blocks: [
      {
        kind: "p",
        text: "The Services are provided on an “as-is” and “as-available” basis to the fullest extent permitted by applicable law.",
      },
      { kind: "p", text: "We do not guarantee that:" },
      {
        kind: "list",
        items: [
          "the Services will always be available;",
          "the Services will be uninterrupted;",
          "Transactions will always be completed within a particular timeframe;",
          "the Services will be error-free;",
          "all currencies, countries or payment methods will remain available;",
          "a beneficiary will accept a payment;",
          "a third-party provider will remain available;",
          "a Digital Asset will maintain its value or peg; or",
          "defects will always be corrected immediately.",
        ],
      },
      {
        kind: "p",
        text: "We may suspend the Services for maintenance, upgrades, security measures, emergency work, legal requirements or other operational reasons.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms excludes or limits liability or rights that cannot lawfully be excluded or limited, including applicable statutory consumer protections.",
      },
      {
        kind: "p",
        text: "Nothing in the Services constitutes investment, legal, tax or financial advice unless expressly stated otherwise.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    blocks: [
      {
        kind: "p",
        text: "To the fullest extent permitted by applicable law, PayByLeap will not be liable for indirect, incidental, special, consequential, exemplary or punitive losses, or for loss of profits, revenue, business, goodwill, opportunity, anticipated savings or data.",
      },
      {
        kind: "p",
        text: "Subject to applicable law, our total aggregate liability arising out of or in connection with these Terms or the Services will not exceed the greater of:",
      },
      {
        kind: "ordered",
        items: [
          "the total fees you paid to PayByLeap for the relevant Service during the twelve (12) months immediately preceding the event giving rise to the claim; or",
          "USD 100, or the equivalent amount in the applicable local currency.",
        ],
      },
      {
        kind: "p",
        text: "This limitation does not apply to liability that cannot lawfully be excluded or limited.",
      },
      { kind: "p", text: "Nothing in this section is intended to limit:" },
      {
        kind: "list",
        items: [
          "your statutory rights;",
          "mandatory consumer protections;",
          "applicable rights concerning unauthorised electronic transactions;",
          "applicable rights relating to customer funds;",
          "liability for fraud or fraudulent misrepresentation;",
          "liability for death or personal injury caused by negligence where such limitation is prohibited; or",
          "any other liability that applicable law prohibits us from limiting.",
        ],
      },
      {
        kind: "p",
        text: "We are not responsible for loss caused by events outside our reasonable control, including natural disasters, war, civil unrest, epidemics, industrial action, telecommunications or power failures, blockchain network failures, government or regulatory action, payment network failures or the acts or omissions of third parties in the payment chain, except to the extent applicable law provides otherwise.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    blocks: [
      {
        kind: "p",
        text: "To the fullest extent permitted by law, you agree to indemnify and hold harmless PayByLeap, its affiliates and, where applicable, its officers, employees and partners against claims, losses, liabilities, costs and reasonable expenses arising directly from:",
      },
      {
        kind: "ordered",
        items: [
          "your material breach of these Terms;",
          "your unlawful or prohibited use of the Services;",
          "your fraud, intentional misconduct or misrepresentation;",
          "your violation of applicable law;",
          "a chargeback, reversal or payment dispute attributable to your conduct; or",
          "a dispute between you and a third party arising from your use of the Services.",
        ],
      },
      {
        kind: "p",
        text: "This indemnity does not apply to the extent that the relevant loss was caused by PayByLeap’s own breach of these Terms, fraud, wilful misconduct or liability that cannot lawfully be transferred to you.",
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints and dispute resolution",
    blocks: [
      {
        kind: "p",
        text: "If you have a complaint about the Services, you should first contact us through the support channels made available in the Services.",
      },
      {
        kind: "p",
        text: "When contacting us, please provide sufficient information to identify the relevant Account or Transaction, including any applicable reference number.",
      },
      {
        kind: "p",
        text: "We will acknowledge and investigate complaints in accordance with our applicable procedures and legal obligations.",
      },
      {
        kind: "p",
        text: "Where a specific jurisdiction or regulated Service provides a prescribed complaints process, response period, escalation route, ombudsman scheme or regulatory complaint mechanism, that process will apply.",
      },
      {
        kind: "p",
        text: "Where permitted by applicable law, the parties will attempt in good faith to resolve disputes through discussion before commencing formal proceedings.",
      },
      { kind: "p", text: "Nothing in this section:" },
      {
        kind: "list",
        items: [
          "prevents either party from seeking urgent injunctive or protective relief;",
          "prevents you from exercising a statutory right;",
          "prevents you from making a complaint to a competent regulator or ombudsman; or",
          "limits any mandatory dispute-resolution or consumer-protection procedure applicable to you.",
        ],
      },
    ],
  },
  {
    id: "jurisdiction-specific-terms",
    title: "Jurisdiction-specific terms",
    blocks: [
      { kind: "subheading", id: "nigeria", text: "A. Nigeria" },
      {
        kind: "p",
        text: "Where you contract with a PayByLeap entity in Nigeria or use Services provided to you in Nigeria, applicable Nigerian laws and regulatory requirements will apply to the relevant Services.",
      },
      {
        kind: "p",
        text: "Depending on the Service, applicable requirements may include laws and regulations relating to payments, foreign exchange, anti-money laundering, consumer protection, data protection, electronic transactions and financial services.",
      },
      {
        kind: "p",
        text: "Certain Services may be provided through regulated third-party institutions or providers.",
      },
      {
        kind: "p",
        text: "Where a Nigerian law or regulatory requirement provides a mandatory customer protection, disclosure, complaint or transaction right, that requirement will apply notwithstanding anything inconsistent in these Terms.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms represents that PayByLeap holds a particular Nigerian licence or regulatory approval unless that status is expressly disclosed by PayByLeap for the relevant Service.",
      },
      { kind: "subheading", id: "united-states", text: "B. United States" },
      {
        kind: "p",
        text: "Where PayByLeap provides Services to users in the United States, the applicable Service may be subject to federal and state financial-services, money-transmission, consumer-protection and other laws.",
      },
      {
        kind: "p",
        text: "Certain Services may be provided through regulated third-party financial institutions or payment providers.",
      },
      {
        kind: "p",
        text: "Where applicable, additional product disclosures and terms may apply, including disclosures relating to electronic fund transfers, remittance transfers, cards or other regulated products.",
      },
      {
        kind: "p",
        text: "Where applicable law provides specific cancellation, disclosure, error-resolution, refund or unauthorised-transaction rights, those rights will apply notwithstanding these Terms.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms is intended to waive or limit any consumer protection or statutory right that applies to you under applicable United States law.",
      },
      { kind: "subheading", id: "canada", text: "C. Canada" },
      {
        kind: "p",
        text: "Where PayByLeap provides Services to users in Canada, the applicable PayByLeap entity and Service may be subject to Canadian federal or provincial laws and regulatory requirements.",
      },
      {
        kind: "p",
        text: "Depending on the Service, applicable requirements may include those relating to money services, retail payment activities, consumer protection, privacy, anti-money laundering and payment services.",
      },
      {
        kind: "p",
        text: "Where applicable, PayByLeap may be subject to requirements administered by the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) or the Bank of Canada, including requirements applicable to relevant payment activities.",
      },
      {
        kind: "p",
        text: "The regulatory status and protections applicable to a particular Service depend on the nature of the Service, the applicable PayByLeap entity and the relevant third-party providers.",
      },
      {
        kind: "p",
        text: "Registration with or oversight by a regulator does not constitute an endorsement, approval or guarantee of PayByLeap or its Services unless expressly stated by the regulator.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms limits any right or protection that cannot lawfully be excluded under applicable Canadian law.",
      },
      { kind: "subheading", id: "united-kingdom", text: "D. United Kingdom" },
      {
        kind: "p",
        text: "Where PayByLeap provides Services to users in the United Kingdom, the availability of particular payment, electronic money, Digital Asset or other financial services may depend on the regulatory status of PayByLeap and its relevant third-party providers.",
      },
      {
        kind: "p",
        text: "Where required by applicable UK law, PayByLeap will provide applicable regulatory disclosures, customer protections and complaints procedures.",
      },
      {
        kind: "p",
        text: "Digital Asset Services may be restricted or unavailable to UK users where PayByLeap or the relevant provider is not permitted to provide or promote the relevant Service in the United Kingdom.",
      },
      {
        kind: "p",
        text: "Where applicable UK financial promotion rules apply to communications concerning Digital Assets or financial services, PayByLeap will comply with the requirements applicable to the relevant communication and Service.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms represents that PayByLeap is authorised or regulated by the Financial Conduct Authority unless expressly stated in the applicable product disclosure.",
      },
      {
        kind: "subheading",
        id: "other-jurisdictions",
        text: "E. Other Jurisdictions",
      },
      {
        kind: "p",
        text: "Where you use the Services from a jurisdiction not specifically addressed above, the availability of the Services will depend on applicable local laws, PayByLeap’s regulatory permissions, third-party provider availability and our internal country restrictions.",
      },
      {
        kind: "p",
        text: "You are responsible for complying with laws applicable to your use of the Services in your jurisdiction.",
      },
      {
        kind: "p",
        text: "We may restrict or discontinue access to a Service where providing it would create a legal, regulatory or operational issue.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    blocks: [
      {
        kind: "p",
        text: "Our collection and use of personal information is governed by our Privacy Policy.",
      },
      {
        kind: "p",
        text: "By using the Services, you acknowledge that personal information may be collected, used, disclosed, transferred and retained in accordance with the Privacy Policy and applicable law.",
      },
      {
        kind: "p",
        text: "Where a Service requires identity verification, fraud prevention, sanctions screening or other regulatory checks, your information may be shared with relevant service providers, financial institutions, regulators or other authorised recipients where permitted or required by law.",
      },
      {
        kind: "p",
        text: "How long we keep your personal data after you close your Account is explained in “Account closure and data deletion” above.",
      },
      { kind: "p", text: "The Privacy Policy forms part of these Terms." },
    ],
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to these Terms",
    blocks: [
      { kind: "p", text: "We may update these Terms to reflect:" },
      {
        kind: "list",
        items: [
          "changes to our Services;",
          "changes to our third-party providers;",
          "changes to our risk and security controls;",
          "changes in applicable law or regulation;",
          "new products or features; or",
          "other legitimate business or operational requirements.",
        ],
      },
      {
        kind: "p",
        text: "Where a change is material and applicable law requires advance notice, we will provide notice through the Services, by email or by another permitted communication method before the change takes effect.",
      },
      {
        kind: "p",
        text: "Changes will not retrospectively alter Transactions that have already been completed, except where necessary to comply with law, correct an error or otherwise permitted by applicable law.",
      },
      {
        kind: "p",
        text: "If you do not agree to an updated version of these Terms, you may close your Account before the updated Terms take effect, subject to any outstanding obligations.",
      },
      {
        kind: "p",
        text: "Your continued use of the Services after the effective date of updated Terms constitutes acceptance of the updated Terms to the extent permitted by applicable law.",
      },
    ],
  },
  {
    id: "general",
    title: "General",
    blocks: [
      { kind: "subheading", text: "Entire Agreement" },
      {
        kind: "p",
        text: "These Terms, together with the Privacy Policy, Acceptable Use Policy and any applicable product-specific terms, form the agreement between you and PayByLeap concerning the Services.",
      },
      { kind: "subheading", text: "Severability" },
      {
        kind: "p",
        text: "If any provision of these Terms is found to be invalid or unenforceable, that provision will be interpreted or modified to the minimum extent necessary to make it enforceable, where permitted by law. The remaining provisions will continue in effect.",
      },
      { kind: "subheading", text: "No Waiver" },
      {
        kind: "p",
        text: "Our failure to enforce a provision of these Terms immediately does not constitute a waiver of our right to enforce it later.",
      },
      { kind: "subheading", text: "Assignment" },
      {
        kind: "p",
        text: "We may assign or transfer our rights and obligations under these Terms in connection with a reorganisation, merger, acquisition, sale of assets or other legitimate business transaction, subject to applicable law.",
      },
      {
        kind: "p",
        text: "You may not assign your rights or obligations under these Terms without our prior written consent, except where applicable law permits otherwise.",
      },
      { kind: "subheading", text: "Notices" },
      {
        kind: "p",
        text: "We may communicate with you through the Services, by email, push notification or other electronic means.",
      },
      {
        kind: "p",
        text: "You are responsible for ensuring that your contact details remain current.",
      },
      { kind: "subheading", text: "Electronic Communications" },
      {
        kind: "p",
        text: "You agree that notices, disclosures, statements, Transaction information and other communications may be provided electronically where permitted by applicable law.",
      },
      { kind: "subheading", text: "Language" },
      {
        kind: "p",
        text: "These Terms are made available in English. Any translation is provided for convenience unless applicable law requires otherwise.",
      },
      { kind: "subheading", text: "Relationship" },
      {
        kind: "p",
        text: "Nothing in these Terms creates a partnership, joint venture, agency, employment or fiduciary relationship between you and PayByLeap unless expressly stated otherwise.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing law and jurisdiction",
    blocks: [
      {
        kind: "p",
        text: "The governing law and jurisdiction applicable to your use of the Services will depend on the PayByLeap entity contracting with you, your location, the relevant Service and mandatory applicable law.",
      },
      {
        kind: "p",
        text: "Where you contract with PayByLeap Inc., these Terms will, subject to mandatory applicable law, be governed by the laws of the State of Delaware and applicable federal laws of the United States.",
      },
      {
        kind: "p",
        text: "Subject to mandatory applicable law, disputes concerning that contractual relationship will be submitted to the competent courts of Delaware.",
      },
      {
        kind: "p",
        text: "Where you contract with PayByLeap Technologies Limited, these Terms will, subject to mandatory applicable law, be governed by the laws of the Federal Republic of Nigeria.",
      },
      {
        kind: "p",
        text: "Subject to mandatory applicable law, disputes concerning that contractual relationship will be submitted to the competent courts of Lagos State, Nigeria.",
      },
      {
        kind: "p",
        text: "Where mandatory consumer or financial-services laws in your jurisdiction provide otherwise, those mandatory rights and protections will continue to apply.",
      },
      {
        kind: "p",
        text: "Nothing in this section prevents you from exercising any mandatory statutory right to bring a claim, make a complaint or seek regulatory or ombudsman assistance in your jurisdiction.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      {
        kind: "p",
        text: "You may contact PayByLeap through the support channels made available within the Services.",
      },
      {
        kind: "p",
        text: "For legal, regulatory or formal correspondence, you may contact the applicable PayByLeap entity at its address identified in these Terms or through the contact details provided in the Services.",
      },
      {
        kind: "table",
        head: ["Entity", "Address"],
        rows: [
          [
            "PayByLeap Inc.",
            "8 The Green, Ste A, Dover, Delaware 19901, United States",
          ],
          [
            "PayByLeap Technologies Limited",
            "Block 59, Plot 12B Kusenla Road, Ikate, Lekki, Lagos, Nigeria",
          ],
          [
            "PayByLeap Technologies Limited",
            "42 Olowu Street, Opebi, 101233, Ikeja, Lagos, Nigeria",
          ],
        ],
      },
    ],
  },
];
