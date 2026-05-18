import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

export function VirtualCardHero() {
  return (
    <section className="relative overflow-hidden bg-off-white pb-0 pt-16 min-[1440px]:min-h-[820px] min-[1440px]:pt-[105px]">
      <LandingInset className="relative z-10 pb-16 min-[1440px]:pb-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-16">
          {/* Left: copy */}
          <div className="max-w-[560px]">
            <div className="inline-flex items-center gap-1.5 rounded-2xl border border-secondary bg-cream px-3 py-1.5">
              <img src={figma.cardsImage} alt="" className="size-4 object-contain" />
              <span className="text-[14px] font-medium leading-5 text-grey-80 min-[1440px]:text-[16px]">
                VIRTUAL CARD
              </span>
            </div>

            <h1 className="mt-10 font-nohemi text-[36px] font-semibold leading-[44px] text-grey-90 md:text-[48px] md:leading-[56px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              Spend Crypto Globally Using Virtual Card
            </h1>

            <p className="mt-4 max-w-[583px] text-[18px] leading-7 text-grey-80 min-[1440px]:text-[20px]">
              Access your crypto funds anywhere.
            </p>

            {/* Feature callout */}
            <div className="mt-6 rounded-2xl border border-grey-10 bg-white p-5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-secondary">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
                  <rect x="3" y="6" width="18" height="13" rx="2" />
                  <path d="M3 10h18" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="mt-3 text-[16px] leading-6 text-grey-90 min-[1440px]:text-[18px]">
                Send crypto globally, take charge of your money using Paybyleap virtual card
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center min-[1440px]:mt-12">
              <a
                href="#"
                className="inline-flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
              >
                Get Card
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
                Learn how virtual cards work
              </a>
            </div>
          </div>

          {/* Right: card stack */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-[420px]">
              {/* Card stack effect */}
              <div className="absolute left-8 top-8 h-[320px] w-[300px] rotate-6 overflow-hidden rounded-2xl shadow-card">
                <img
                  src={figma.usdCard}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute left-4 top-4 h-[320px] w-[300px] rotate-3 overflow-hidden rounded-2xl shadow-card">
                <img
                  src={figma.usdCard}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute left-0 top-0 h-[320px] w-[300px] overflow-hidden rounded-2xl shadow-card">
                <img
                  src={figma.cardsImage}
                  alt="PayByLeap Virtual Cards"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </LandingInset>

      {/* Decorative rectangle */}
      <div className="absolute bottom-0 right-0 h-[305px] w-[633px] rounded-tl-3xl bg-grey-10/30 hidden min-[1440px]:block" />
    </section>
  );
}
