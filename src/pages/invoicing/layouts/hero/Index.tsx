import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

export function InvoicingHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-16 min-[1440px]:min-h-[820px] min-[1440px]:pt-[105px]">
      <LandingInset className="relative z-10 pb-16 min-[1440px]:pb-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-16">
          {/* Left: copy */}
          <div className="max-w-[560px]">
            <div className="inline-flex items-center gap-1.5 rounded-2xl border border-secondary bg-cream px-3 py-1.5">
              <img src={figma.copyIcon} alt="" className="size-4 object-contain" />
              <span className="text-[14px] font-medium leading-5 text-grey-80 min-[1440px]:text-[16px]">
                GLOBAL INVOICING
              </span>
            </div>

            <h1 className="mt-10 font-nohemi text-[36px] font-semibold leading-[44px] text-grey-90 md:text-[48px] md:leading-[56px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              Create and Send Global Invoices, Get Paid Instantly
            </h1>

            <p className="mt-4 max-w-[583px] text-[18px] leading-7 text-grey-80 min-[1440px]:text-[20px]">
              Generate professional invoices and receive payment from clients worldwide.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center min-[1440px]:mt-12">
              <a
                href="#"
                className="inline-flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
              >
                Create Invoice
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-grey-20 bg-[#FFF3F3] px-4 text-[16px] font-medium leading-6 text-grey-90"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-primary">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Learn how invoicing works
              </a>
            </div>
          </div>

          {/* Right: invoice illustration */}
          <div className="relative flex items-center justify-center">
            {/* Invoice card mock */}
            <div className="w-full max-w-[480px] overflow-hidden rounded-2xl border border-grey-10 bg-white shadow-card">
              {/* Invoice header */}
              <div className="flex items-center justify-between bg-primary p-6">
                <div>
                  <img src={figma.logoImg} alt="PayByLeap" className="h-7 w-auto object-contain brightness-0 invert" />
                  <p className="mt-1 text-[12px] text-white/70">Invoice Generator</p>
                </div>
                <div className="rounded-full bg-white/20 px-3 py-1">
                  <span className="text-[13px] font-medium text-white">INVOICE</span>
                </div>
              </div>

              {/* Invoice body */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] text-grey-60">Bill To</p>
                    <p className="mt-1 text-[16px] font-semibold text-grey-90">Client Name</p>
                    <p className="text-[14px] text-grey-60">client@email.com</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] text-grey-60">Invoice #</p>
                    <p className="mt-1 text-[16px] font-semibold text-primary">INV-00124</p>
                    <p className="text-[12px] text-grey-60">Due: Dec 31, 2025</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-grey-10 pt-4">
                  {["Web Design Services", "Development", "SEO Optimization"].map((item, i) => (
                    <div key={item} className="flex justify-between text-[14px]">
                      <span className="text-grey-70">{item}</span>
                      <span className="font-medium text-grey-90">${[1200, 2400, 600][i]}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-grey-10 pt-4">
                  <span className="text-[16px] font-semibold text-grey-90">Total</span>
                  <span className="font-nohemi text-[24px] font-semibold text-primary">$4,200</span>
                </div>

                <div className="mt-5 flex w-full items-center justify-center rounded-lg bg-primary py-3">
                  <span className="text-[16px] font-medium text-white">Pay Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
