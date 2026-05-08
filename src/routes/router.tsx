import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { ForeignAccountsPage } from "../pages/foreign-accounts/index";
import { LandingPage } from "../pages/landing/index";
import { ROUTES } from "./paths";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "foreign-accounts",
        element: <ForeignAccountsPage />,
      },
    ],
  },
]);
