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

export function VirtualCardHero() {
  return (
    <section className="overflow-hidden bg-white  py-[82px] ">
      <LandingInset>
        <div className="flex items-top w-[100%] ">

          {/* ── Left: text content ── */}
          <div className="relative z-[2] w-[55%]">
            <h1 className="font-nohemi text-[58px] font-semibold leading-[1.12] tracking-[-0.035em] text-grey-90 md:text-[64px]">
              Spend Crypto Globally
              <br />
              Using Virtual Card
            </h1>
            <p className="mt-[31px] max-w-[760px] text-[24px] font-normal leading-[1.22] tracking-[-0.01em] text-grey-80 2xl:mt-[8px]">
              Access your crypto funds anywhere.
            </p>

            <div className="mt-[65px] flex flex-col items-start gap-[26px] 2xl:gap-[31px]">
              <a
                href="#"
                className="inline-flex h-[52px] w-[190px] items-center justify-center rounded-[8px] bg-primary px-[28px] text-[20px] font-medium leading-none text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary 2xl:h-[64px] 2xl:min-w-[249px] 2xl:text-[24px]"
              >
                Get Card
              </a>
              <a
                href="#"
                className="inline-flex h-[48px] w-[357px] items-center justify-center gap-[14px] rounded-[8px] border border-grey-20 bg-[#FFF8F8] px-[8px] py-[16px] text-[18px] font-medium leading-none text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary 2xl:h-[48px] 2xl:gap-[18px]"
              >
                <PlayIcon />
                Learn how virtual cards work
              </a>
            </div>
          </div>

          {/* ── Right: card images ── */}
          <div className="relative  w-[45%]">
            <img
              src={figma.stablecoinHero}
              alt="PayByLeap virtual card"
              className="w-[650px] object-cover"
            />

            {/* ── Overlay info card ── */}
            <div className="absolute bottom-[60px] left-[-90px] w-[306px] rounded-2xl border border-grey-20 bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
              <div className="flex size-[52px] items-center justify-center rounded-xl bg-secondary">
                <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <p className="mt-[17px] font-spartan text-[18px] font-normal leading-[28px] text-grey-100">
                Send crypto globally, take charge of your money using paybyleap virtual card
              </p>
            </div>
          </div>

        </div>
      </LandingInset>
    </section>
  );
}
