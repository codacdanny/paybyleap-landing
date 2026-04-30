/**
 * Single source of truth for app URLs. Import these in Link/nav/configs
 * so paths stay consistent as the site grows.
 */
export const ROUTES = {
  HOME: "/",
  FOREIGN_ACCOUNTS: "/foreign-accounts",
} as const;

export type AppRoutePath = (typeof ROUTES)[keyof typeof ROUTES];
