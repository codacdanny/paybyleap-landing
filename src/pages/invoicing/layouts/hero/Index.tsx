import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

function PlayIcon() {
  return (
    <span className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-[2px] size-[12px]" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export function InvoicingHero() {
  return (
    <section className="overflow-hidden bg-[#FFF4F4] pb-[80px] pt-[82px] lg:pt-[94px] 2xl:pt-[112px]">
      <LandingInset>
        <div className="flex w-full items-start gap-10 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="relative z-[2] w-[50%] shrink-0">
            <h1 className="font-spartan text-[48px] font-semibold leading-[1.125] text-grey-90 md:text-[56px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              Create and Send Invoices Internationally with Ease
            </h1>
            <p className="mt-6 font-spartan text-[18px] font-normal leading-[1.5] text-grey-70 min-[1440px]:text-[20px]">
              Move your money anywhere and anytime.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex h-[52px] w-[201px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Create Invoice
              </a>
              <a
                href="#"
                className="inline-flex h-[52px] items-center gap-3 rounded-lg border border-grey-20 bg-white px-5 text-[16px] font-medium text-grey-90 transition-colors hover:border-primary/50"
              >
                <PlayIcon />
                Learn how global invoicing work
              </a>
            </div>
          </div>

          {/* ── Right: invoice hero image ── */}
          <div className="w-[50%]">
            <img
              src={figma.invoiceHero}
              alt="PayByLeap invoice creation"
              className="w-full object-contain"
            />
          </div>

        </div>
      </LandingInset>
    </section>
  );
}
