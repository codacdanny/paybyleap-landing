import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { SiteFooter } from "./components/SiteFooter";
import { LandingPage } from "./pages/LandingPage";
import { ForeignAccountsPage } from "./pages/ForeignAccountsPage";

const foreignAccountsFooterHeading = (
  <>
    Start Receiving Your{" "}
    <span className="text-secondary">Foreign</span>{" "}
    <span className="text-secondary">Payments</span> With Ease
  </>
);

export default function App() {
  const { pathname } = useLocation();
  const isForeignAccounts = pathname === "/foreign-accounts";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foreign-accounts" element={<ForeignAccountsPage />} />
      </Routes>
      <SiteFooter
        heading={isForeignAccounts ? foreignAccountsFooterHeading : undefined}
      />
    </div>
  );
}
