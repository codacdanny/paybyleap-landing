import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const rateItems = [
  { flag: figma.flagNg, code: "NGN", value: "1,650.00" },
  { flag: figma.flagUk, code: "GBP", value: "0.79" },
  { flag: figma.euFlag, code: "EUR", value: "0.92" },
  { flag: figma.flagUs, code: "USD", value: "1.00" },
];

export function CurrencyHero() {
  return (
    <section className="bg-white pb-12 pt-14 min-[1440px]:pb-16 min-[1440px]:pt-[100px]">
      <LandingInset>
        {/* 2-column: copy left, swap widget right */}
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-20">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-2xl border border-secondary bg-[#FFFDF0] px-3 py-1.5">
              <img src={figma.transferArrow} alt="" className="size-4 object-contain" />
              <span className="text-[13px] font-semibold uppercase leading-5 tracking-wide text-grey-70 min-[1440px]:text-[14px]">
                Currency Exchange
              </span>
            </div>

            <h1 className="mt-6 max-w-[520px] font-nohemi text-[36px] font-semibold leading-[44px] text-grey-100 md:text-[44px] md:leading-[52px] min-[1440px]:mt-8 min-[1440px]:text-[56px] min-[1440px]:leading-[64px]">
              Convert currencies instantly at competitive rate
            </h1>

            <p className="mt-4 max-w-[480px] text-[16px] leading-6 text-grey-70 min-[1440px]:mt-5 min-[1440px]:text-[18px] min-[1440px]:leading-7">
              PayByLeap gives you seamless access to global currencies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center min-[1440px]:mt-10">
              <a
                href="#"
                className="inline-flex h-[52px] items-center justify-center rounded-xl bg-primary px-7 text-[16px] font-semibold text-white transition-opacity hover:opacity-90 min-[1440px]:text-[18px]"
              >
                Convert Now
              </a>
              <a
                href="#"
                className="inline-flex h-[52px] items-center gap-2.5 rounded-xl border border-grey-20 bg-[#FFF3F3] px-5 text-[15px] font-medium text-grey-90 transition-colors hover:bg-[#ffe8e8] min-[1440px]:text-[16px]"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 translate-x-px text-primary"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Learn more about currency exchange
              </a>
            </div>
          </div>

          {/* Right: USD → EUR swap widget */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[360px] min-[1440px]:max-w-[400px]">
              {/* USD card */}
              <div className="rounded-2xl border border-grey-10 bg-[#FFF3F3] px-5 py-4 shadow-[0px_6px_24px_rgba(0,0,0,0.08)] min-[1440px]:px-6 min-[1440px]:py-5">
                <div className="flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center overflow-hidden rounded-full border border-grey-10 bg-white min-[1440px]:size-10">
                    <img
                      src={figma.flagUs}
                      alt="USD"
                      className="size-full object-cover"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-grey-60 min-[1440px]:text-[13px]">
                    Amount to swap
                  </span>
                </div>
                <p className="mt-3 text-[28px] font-bold leading-8 text-grey-90 min-[1440px]:text-[32px]">
                  USD 00.00
                </p>
              </div>

              {/* Swap arrow */}
              <div className="flex justify-center py-2.5">
                <div className="flex size-10 items-center justify-center rounded-full border border-grey-10 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5 text-grey-80"
                    aria-hidden
                  >
                    <path
                      d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* EUR card */}
              <div className="rounded-2xl border border-grey-10 bg-[#FBF2D6] px-5 py-4 shadow-[0px_6px_24px_rgba(0,0,0,0.08)] min-[1440px]:px-6 min-[1440px]:py-5">
                <div className="flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center overflow-hidden rounded-full border border-grey-10 bg-white min-[1440px]:size-10">
                    <img
                      src={figma.euFlag}
                      alt="EUR"
                      className="size-full object-cover"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-grey-60 min-[1440px]:text-[13px]">
                    Amount to receive
                  </span>
                </div>
                <p className="mt-3 text-[28px] font-bold leading-8 text-grey-90 min-[1440px]:text-[32px]">
                  EUR 00.00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Exchange rate bar */}
        <div className="mt-10 rounded-2xl border border-grey-10 bg-white px-6 py-5 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] min-[1440px]:mt-12 min-[1440px]:px-8 min-[1440px]:py-6">
          <p className="text-[14px] font-semibold text-grey-60 min-[1440px]:text-[16px]">
            Real-Time Exchange
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 min-[1440px]:gap-4">
            {rateItems.map((r) => (
              <div
                key={r.code}
                className="flex items-center gap-3 rounded-xl bg-[#F5F5F5] px-4 py-3"
              >
                <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-grey-10 bg-white min-[1440px]:size-10">
                  <img
                    src={r.flag}
                    alt={r.code}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-grey-60 min-[1440px]:text-[12px]">
                    {r.code}
                  </p>
                  <p className="truncate text-[15px] font-semibold text-grey-90 min-[1440px]:text-[16px]">
                    {r.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
