import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { figma } from "../../data/images/Index";
import { LandingInset } from "../../components/landing-inset/Index";
import { Button } from "../../components/ui/button/Index";
import { ROUTES } from "../../routes/paths";

/* ─── data ─────────────────────────────────────────────────────────── */

const productLinks = [
  {
    label: "Foreign Accounts",
    href: ROUTES.FOREIGN_ACCOUNTS,
    desc: "Open an account for International payment",
  },
  {
    label: "Currency Exchange",
    href: ROUTES.CURRENCY_EXCHANGE,
    desc: "Covert currencies at competitive rates",
  },
  {
    label: "Stablecoin Virtual/Physical Cards",
    href: ROUTES.STABLECOIN_VIRTUAL_CARD,
    desc: "Send crypto globally using virtual cards",
  },
  {
    label: "Global Money Transfer",
    href: ROUTES.GLOBAL_MONEY_TRANSFER,
    desc: "Send and receive money worldwide",
  },
  {
    label: "Send/Receive Crypto",
    href: ROUTES.CRYPTO,
    desc: "Buy, sell or transfer crypto",
  },
  {
    label: "International Fees Payment",
    href: ROUTES.INTERNATIONAL_FEE_PAYMENT,
    desc: "Pay tuition fee and global fees seamlessly",
  },
  {
    label: "Global Invoicing",
    href: ROUTES.INVOICING,
    desc: "Create and send invoices internationally.",
  },
];

const companyLinks = [
  { label: "About Us", desc: "Get to know our company values", href: ROUTES.COMPANY },
  { label: "Paybyleap Community", desc: "Meet other members & share ideas", href: "#" },
];

const topOptions = [
  { id: "individual", label: "For Individual", comingSoon: false },
  { id: "business", label: "For Business", comingSoon: true },
  { id: "banks-fintechs", label: "For Banks & Fintechs", comingSoon: true },
] as const;
type TopOptionId = (typeof topOptions)[number]["id"];

/* ─── sub-components ───────────────────────────────────────────────── */

function ProductDropdown({ onClose }: { onClose: () => void }) {
  const col1 = productLinks.slice(0, 4);
  const col2 = productLinks.slice(4);

  return (
    <div className="absolute left-1/2 top-full z-50 mt-2 w-[680px] -translate-x-1/2 rounded-2xl border border-grey-10 bg-white p-4 shadow-card">
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-col gap-1">
          {col1.map((p, i) => (
            <Link
              key={p.href}
              to={p.href}
              onClick={onClose}
              className={`rounded-xl px-4 py-3 transition-colors hover:bg-[#FFF3F3] ${i === 0 ? "bg-[#FFF3F3]" : ""}`}
            >
              <p className="text-[15px] font-semibold leading-5 text-grey-90">{p.label}</p>
              <p className="mt-0.5 text-[13px] leading-5 text-grey-60">{p.desc}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {col2.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              onClick={onClose}
              className="rounded-xl px-4 py-3 transition-colors hover:bg-[#FFF3F3]"
            >
              <p className="text-[15px] font-semibold leading-5 text-grey-90">{p.label}</p>
              <p className="mt-0.5 text-[13px] leading-5 text-grey-60">{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompanyDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-1/2 top-full z-50 mt-2 w-[340px] -translate-x-1/2 rounded-2xl border border-grey-10 bg-white p-4 shadow-card">
      <div className="flex flex-col gap-1">
        {companyLinks.map((l, i) => (
          <Link
            key={l.label}
            to={l.href}
            onClick={onClose}
            className={`rounded-xl px-4 py-3 transition-colors hover:bg-[#FFF3F3] ${i === 0 ? "bg-[#FFF3F3]" : ""}`}
          >
            <p className="text-[15px] font-semibold leading-5 text-grey-90">{l.label}</p>
            <p className="mt-0.5 text-[13px] leading-5 text-grey-60">{l.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── main component ───────────────────────────────────────────────── */

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTopOption, setActiveTopOption] =
    useState<TopOptionId>("individual");
  const [openDropdown, setOpenDropdown] = useState<
    "products" | "company" | null
  >(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* close dropdown on outside click */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* close dropdown on route change */
  useEffect(() => {
    setOpenDropdown(null);
    setMenuOpen(false);
  }, [pathname]);

  function toggleDropdown(name: "products" | "company") {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="border-b border-primary/10 bg-primary-light">
        <LandingInset>
          <div className="mx-auto flex max-w-[1438px] flex-wrap items-center justify-between gap-x-2 gap-y-2 pt-[15px]">
            <div
              className="flex h-[60px] flex-wrap items-center gap-x-2 gap-y-2 text-[12px] font-medium leading-4 xl:gap-x-[21px] xl:text-[16px] xl:leading-6"
              role="tablist"
              aria-label="Audience options"
            >
              {topOptions.map((option) => {
                const isActive = activeTopOption === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTopOption(option.id)}
                    className={`flex items-center gap-0.5 xl:py-1 ${
                      isActive
                        ? "border-b-2 border-primary text-grey-100 xl:border-b-[3px]"
                        : "border-b-2 border-transparent text-grey-70 xl:border-b-[3px]"
                    }`}
                  >
                    <span
                      className={isActive ? "text-button-lg text-grey-100" : ""}
                    >
                      {option.label}
                    </span>
                    {option.comingSoon ? (
                      <span className="rounded-2xl bg-[#fbe6b0] px-[6px] py-[4px] text-[10px] font-normal leading-tight text-grey-100 xl:bg-secondary">
                        Coming Soon
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </LandingInset>
      </div>

      {/* Main nav bar */}
      <div className="border-b border-grey-10 bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.05)]">
        <LandingInset>
          <div className="flex items-center justify-between py-4 lg:mx-auto lg:h-[76px] lg:w-full lg:max-w-[1122px] lg:justify-center lg:gap-[116px] lg:py-0">
            {/* Logo */}
            <Link to={ROUTES.HOME} className="shrink-0">
              <img
                src={figma.logoImg}
                alt="PayByLeap"
                className="h-6 w-[99px] object-contain object-left lg:h-10 lg:w-[152px]"
              />
            </Link>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              className="relative z-[61] flex size-6 shrink-0 items-center justify-center lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="size-6"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>

            {/* Desktop nav */}
            <nav className="relative hidden lg:flex lg:w-[435px] lg:flex-none lg:items-center lg:justify-center lg:gap-2.5">
              {/* Products */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("products")}
                  className={`flex h-10 items-center gap-1 px-2.5 text-[18px] font-medium leading-6 transition-colors hover:text-primary ${
                    openDropdown === "products"
                      ? "text-primary"
                      : "text-grey-90"
                  }`}
                >
                  Products
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`size-4 transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openDropdown === "products" && (
                  <ProductDropdown onClose={() => setOpenDropdown(null)} />
                )}
              </div>

              {/* Company */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("company")}
                  className={`flex h-10 items-center gap-1 px-2.5 text-[18px] font-medium leading-6 transition-colors hover:text-primary ${
                    openDropdown === "company" ||
                    pathname === ROUTES.COMPANY
                      ? "text-primary"
                      : "text-grey-90"
                  }`}
                >
                  Company
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`size-4 transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openDropdown === "company" && (
                  <CompanyDropdown onClose={() => setOpenDropdown(null)} />
                )}
              </div>

              <a
                href="#support"
                className="flex h-10 w-[125px] items-center justify-center p-2.5 text-[18px] font-medium leading-6 text-grey-90 hover:text-primary"
              >
                Support
              </a>
              <a
                href="#legal"
                className="flex h-10 w-[78px] items-center justify-center p-2.5 text-[18px] font-medium leading-6 text-grey-90 hover:text-primary"
              >
                Legal
              </a>
            </nav>

            {/* CTA buttons (desktop) */}
            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <button
                type="button"
                className="flex h-12 w-[110px] items-center justify-center rounded-[8px] border border-primary bg-white px-2 py-4 text-[18px] font-medium leading-6 text-grey-90 transition-colors hover:bg-grey-10/80"
              >
                Book a call
              </button>
              <button
                type="button"
                className="flex h-12 w-[190px] items-center justify-center rounded-[8px] border border-primary-dark bg-primary-dark px-2 py-4 text-[18px] font-medium leading-6 text-white transition-colors hover:border-primary hover:bg-primary"
              >
                Download the app
              </button>
            </div>
          </div>
        </LandingInset>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,340px)] flex-col overflow-y-auto bg-white px-6 py-8 shadow-xl">
            {/* Products accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((o) => !o)}
                className="flex w-full items-center justify-between text-[18px] font-medium text-grey-100"
              >
                Products
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`size-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {mobileProductsOpen && (
                <div className="mt-3 flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                  {productLinks.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl py-2.5 text-[16px] font-medium text-grey-80 transition-colors hover:text-primary"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company */}
            <div className="mt-5">
              <p className="text-[18px] font-medium text-grey-100">Company</p>
              <div className="mt-3 flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                {companyLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-[16px] font-medium text-grey-80 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="#support"
              className="mt-5 text-[18px] font-medium text-grey-100"
              onClick={() => setMenuOpen(false)}
            >
              Support
            </a>
            <a
              href="#legal"
              className="mt-5 text-[18px] font-medium text-grey-100"
              onClick={() => setMenuOpen(false)}
            >
              Legal
            </a>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button
                variant="outline"
                className="w-full border-primary !bg-white text-[18px] font-medium !text-grey-90 hover:!bg-grey-10/80 hover:!text-grey-90"
              >
                Book a call
              </Button>
              <Button variant="primaryDark" className="w-full">
                Download the app
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
