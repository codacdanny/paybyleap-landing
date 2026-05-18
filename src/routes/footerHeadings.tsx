import type { ReactNode } from "react";
import { ROUTES } from "./paths";

const FOOTER_HEADING_BY_PATH: Partial<Record<string, ReactNode>> = {
  [ROUTES.FOREIGN_ACCOUNTS]: (
    <>
      Start Receiving Your <span className="text-secondary">Foreign</span>{" "}
      <span className="text-secondary">Payments</span> With Ease
    </>
  ),
  [ROUTES.CURRENCY_EXCHANGE]: (
    <>
      Start Converting Currencies{" "}
      <span className="text-secondary">With Paybyleap</span>
    </>
  ),
  [ROUTES.STABLECOIN_VIRTUAL_CARD]: (
    <>
      Get your <span className="text-secondary">Virtual Card</span> Today!
    </>
  ),
  [ROUTES.GLOBAL_MONEY_TRANSFER]: (
    <>
      Start Sending Money{" "}
      <span className="text-secondary">Globally Today</span>
    </>
  ),
  [ROUTES.CRYPTO]: (
    <>
      Start Transacting <span className="text-secondary">Crypto</span> with
      Paybyleap
    </>
  ),
  [ROUTES.INTERNATIONAL_FEE_PAYMENT]: (
    <>
      Pay Your International Fees{" "}
      <span className="text-secondary">with Ease</span>
    </>
  ),
  [ROUTES.INVOICING]: (
    <>
      Start Invoicing <span className="text-secondary">Globally</span> Today
    </>
  ),
  [ROUTES.COMPANY]: (
    <>
      Experience Seamless{" "}
      <span className="text-secondary">Global Payments</span> Today
    </>
  ),
};

/** Map URL path → optional custom `<SiteFooter />` heading. */
export function footerHeadingForPath(pathname: string): ReactNode | undefined {
  return FOOTER_HEADING_BY_PATH[pathname];
}
