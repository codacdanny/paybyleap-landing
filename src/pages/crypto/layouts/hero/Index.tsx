import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

export function CryptoHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF3F3] pb-0 pt-16 min-[1440px]:min-h-[820px] min-[1440px]:pt-[105px]">
      <LandingInset className="relative z-10 pb-16 min-[1440px]:pb-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-16">
          {/* Left: copy */}
          <div className="max-w-[588px]">
            <div className="inline-flex items-center gap-1.5 rounded-2xl border border-secondary bg-cream px-3 py-1.5">
              <img src={figma.cryptoGraphic} alt="" className="size-4 object-contain" />
              <span className="text-[14px] font-medium leading-5 text-grey-80 min-[1440px]:text-[16px]">
                CRYPTO
              </span>
            </div>

            <h1 className="mt-10 font-nohemi text-[36px] font-semibold leading-[44px] text-grey-90 md:text-[48px] md:leading-[56px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              Buy, Sell or Transfer Crypto easily with Paybyleap
            </h1>

            <p className="mt-4 max-w-[441px] text-[18px] leading-7 text-grey-80 min-[1440px]:text-[20px]">
              Move your money anywhere and anytime.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center min-[1440px]:mt-12">
              <a
                href="#"
                className="inline-flex h-12 w-[201px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
              >
                Transfer Now
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-grey-20 bg-white px-4 text-[16px] font-medium leading-6 text-grey-90"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-[#FFF3F3]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-primary">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Learn how crypto work
              </a>
            </div>
          </div>

          {/* Right: crypto illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-[480px]">
              {/* Main crypto image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={figma.cryptoGraphic}
                  alt="Crypto illustration"
                  className="h-[380px] w-[380px] object-contain"
                />
              </div>

              {/* Floating coin tags */}
              <div className="absolute left-0 top-8 rounded-2xl border border-grey-10 bg-white px-4 py-2 shadow-soft">
                <p className="text-[12px] font-medium text-grey-60">BTC/USD</p>
                <p className="text-[18px] font-semibold text-grey-90">$43,250</p>
              </div>
              <div className="absolute bottom-8 right-0 rounded-2xl border border-grey-10 bg-white px-4 py-2 shadow-soft">
                <p className="text-[12px] font-medium text-grey-60">ETH/USD</p>
                <p className="text-[18px] font-semibold text-grey-90">$2,680</p>
              </div>
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
