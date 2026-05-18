import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const products = [
  {
    name: "Foreign Accounts",
    desc: "Open global USD, EUR, GBP accounts instantly. Receive international payments with an IBAN.",
    href: "/foreign-accounts",
    bg: "bg-[#FFF4F4]",
    img: figma.foreignImage,
  },
  {
    name: "Currency Exchange",
    desc: "Convert between 50+ currencies at real-time, competitive rates with transparent fees.",
    href: "/currency-exchange",
    bg: "bg-[#FBF2D6]",
    img: figma.euFlag,
  },
  {
    name: "Virtual Card",
    desc: "Spend your crypto and stablecoin balances anywhere in the world with a Paybyleap virtual card.",
    href: "/stablecoin-virtual-card",
    bg: "bg-[#FFF3F3]",
    img: figma.cardsImage,
  },
  {
    name: "Global Money Transfer",
    desc: "Send and receive money to 80+ countries in seconds, not days.",
    href: "/global-money-transfer",
    bg: "bg-less-white",
    img: figma.faGlobe,
  },
  {
    name: "Crypto",
    desc: "Buy, sell, send, and receive cryptocurrency with low fees and instant settlement.",
    href: "/crypto",
    bg: "bg-[#FFF3F3]",
    img: figma.cryptoGraphic,
  },
  {
    name: "Global Invoicing",
    desc: "Create professional invoices and get paid by clients worldwide in any currency.",
    href: "/invoicing",
    bg: "bg-[#FBF2D6]",
    img: figma.serviceBillPayments,
  },
];

export function ProductsOverviewSection() {
  return (
    <section className="bg-white py-16 min-[1440px]:py-[120px]">
      <LandingInset>
        <div className="text-center">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-primary">
            Our Products
          </p>
          <h2 className="mx-auto mt-4 max-w-[600px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
            Everything you need to go global
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 min-[1440px]:mt-16 min-[1440px]:grid-cols-3">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1 min-[1440px]:p-8 ${p.bg}`}
            >
              <div className="flex size-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-soft">
                <img src={p.img} alt="" className="size-8 object-contain" />
              </div>
              <h3 className="mt-4 text-[20px] font-semibold text-grey-90 min-[1440px]:text-[22px]">
                {p.name}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-grey-70 min-[1440px]:text-[16px]">
                {p.desc}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[14px] font-medium text-primary">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden>
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
