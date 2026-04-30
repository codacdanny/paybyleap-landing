import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import { SiteFooter } from "../components/SiteFooter";
import { footerHeadingForPath } from "../routes/footerHeadings";

export function RootLayout() {
  const { pathname } = useLocation();
  const footerHeading = footerHeadingForPath(pathname);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Outlet />
      <SiteFooter heading={footerHeading} />
    </div>
  );
}
