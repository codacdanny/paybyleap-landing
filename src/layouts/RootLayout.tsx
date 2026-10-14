import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { Header } from "./header/Index";
import { ScrollToTop } from "../components/scroll-to-top/Index";
import { SiteFooter } from "./footer/Index";
import { footerHeadingForPath } from "../routes/footerHeadings";

export function RootLayout() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const footerHeading = footerHeadingForPath(pathname);
  // The mobile app opens pages with ?view=app inside its in-app browser,
  // where the site's own header and footer would be redundant chrome.
  const isAppView = searchParams.get("view") === "app";

  return (
    <div className="min-h-screen bg-white" data-view={isAppView ? "app" : undefined}>
      <ScrollToTop />
      {!isAppView && <Header />}
      <Outlet />
      {!isAppView && <SiteFooter heading={footerHeading} />}
    </div>
  );
}
