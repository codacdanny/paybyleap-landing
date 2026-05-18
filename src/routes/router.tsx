import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { ForeignAccountsPage } from "../pages/foreign-accounts/index";
import { HomePage } from "../pages/home/index";
import { CurrencyExchangePage } from "../pages/currency-exchange/index";
import { StablecoinVirtualCardPage } from "../pages/stablecoin-virtual-card/index";
import { GlobalMoneyTransferPage } from "../pages/global-money-transfer/index";
import { CryptoPage } from "../pages/crypto/index";
import { InternationalFeePaymentPage } from "../pages/international-fee-payment/index";
import { InvoicingPage } from "../pages/invoicing/index";
import { CompanyPage } from "../pages/company/index";
import { ROUTES } from "./paths";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "foreign-accounts",
        element: <ForeignAccountsPage />,
      },
      {
        path: "currency-exchange",
        element: <CurrencyExchangePage />,
      },
      {
        path: "stablecoin-virtual-card",
        element: <StablecoinVirtualCardPage />,
      },
      {
        path: "global-money-transfer",
        element: <GlobalMoneyTransferPage />,
      },
      {
        path: "crypto",
        element: <CryptoPage />,
      },
      {
        path: "international-fee-payment",
        element: <InternationalFeePaymentPage />,
      },
      {
        path: "invoicing",
        element: <InvoicingPage />,
      },
      {
        path: "company",
        element: <CompanyPage />,
      },
    ],
  },
]);
