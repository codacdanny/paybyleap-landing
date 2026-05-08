import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { ForeignAccountsPage } from "../pages/foreign-accounts/index";
import { HomePage } from "../pages/home/index";
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
    ],
  },
]);
