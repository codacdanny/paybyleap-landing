/**
 * Single source of truth for app URLs. Import these in Link/nav/configs
 * so paths stay consistent as the site grows.
 */
export const ROUTES = {
  HOME: "/",
  FOREIGN_ACCOUNTS: "/foreign-accounts",
  CURRENCY_EXCHANGE: "/currency-exchange",
  STABLECOIN_VIRTUAL_CARD: "/stablecoin-virtual-card",
  GLOBAL_MONEY_TRANSFER: "/global-money-transfer",
  CRYPTO: "/crypto",
  INTERNATIONAL_FEE_PAYMENT: "/international-fee-payment",
  INVOICING: "/invoicing",
  COMPANY: "/company",
} as const;

export type AppRoutePath = (typeof ROUTES)[keyof typeof ROUTES];
