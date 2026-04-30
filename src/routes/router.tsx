import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { ForeignAccountsPage } from "../pages/ForeignAccountsPage";
import { LandingPage } from "../pages/LandingPage";
import { ROUTES } from "./paths";

/**
 * Data router config — add new pages as `children` entries under the layout.
 * For heavy pages, switch to `lazy()` + `React.lazy` (see React Router lazy routes).
 */
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
