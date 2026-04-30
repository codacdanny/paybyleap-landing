import type { ReactNode } from "react";
import { ROUTES } from "./paths";

const foreignAccountsFooterHeading = (
  <>
    Start Receiving Your <span className="text-secondary">Foreign</span>{" "}
    <span className="text-secondary">Payments</span> With Ease
  </>
);

/** Map URL path → optional custom `<SiteFooter />` heading. Extend when you add pages. */
const FOOTER_HEADING_BY_PATH: Partial<Record<string, ReactNode>> = {
  [ROUTES.FOREIGN_ACCOUNTS]: foreignAccountsFooterHeading,
};

export function footerHeadingForPath(pathname: string): ReactNode | undefined {
  return FOOTER_HEADING_BY_PATH[pathname];
}
