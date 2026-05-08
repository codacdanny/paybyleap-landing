import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./header/Index";
import { ScrollToTop } from "../components/scroll-to-top/Index";
import { SiteFooter } from "./footer/Index";
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
