import { LandingInset } from "@/components/landing-inset/Index";
import { figma } from "@/data/images/Index";

function PlayIcon() {
  return (
    <span className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-[2px] size-[12px]" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export function CurrencyHero() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#FFF4F4_0%,#F1DEE2_100%)] pb-[80px] pt-[82px] lg:pt-[94px] 2xl:pt-[112px]">
      <LandingInset>
        <div className="relative min-h-[680px] lg:min-h-[680px] 2xl:min-h-[708px]">
          <div className="relative z-[2] max-w-[920px] 2xl:max-w-[1120px]">
            <h1 className="font-sparta text-[58px] font-semibold leading-[1.12] tracking-[-0.035em] text-grey-90 md:text-[64px]">
              Convert currencies instantly
              <br />
              at competitive rate
            </h1>
            <p className="mt-[31px] max-w-[760px] text-[24px] font-normal leading-[1.22] tracking-[-0.01em] text-grey-80 2xl:mt-[8px]">
              PayByLeap gives you seamless access to global currencies.
            </p>

            <div className="mt-[65px] flex flex-col items-start gap-[26px] 2xl:gap-[31px]">
              <a
                href="#real-time-exchange"
                className="inline-flex h-[52px] w-[190px] items-center justify-center rounded-[8px] bg-primary px-[28px] text-[20px] font-medium leading-none text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary 2xl:h-[64px] 2xl:min-w-[249px] 2xl:text-[24px]"
              >
                Convert Now
              </a>
              <a
                href="#real-time-exchange"
                className="inline-flex h-[48px] w-[357px] items-center justify-center gap-[14px] rounded-[8px] border border-grey-20 bg-[#FFF8F8] px-[8px] py-[16px] text-[18px] font-medium leading-none text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary 2xl:h-[48px] 2xl:gap-[18px]"
              >
                <PlayIcon />
                Learn more about currency exchange
              </a>
            </div>
          </div>

          <div
            className="mt-[58px] flex flex-col items-center gap-[44px] lg:absolute lg:z-[1] lg:top-[13px] lg:mt-0 lg:h-[540px] lg:w-[620px] 2xl:top-[6px] 2xl:h-[540px] 2xl:w-[830px]"
            style={{ right: "-64px" }}
          >
            <div className="lg:absolute lg:right-0 lg:top-0">
              <img
                src={figma.usdConvertHero}
                alt="USD conversion card"
                className="w-[323px] h-[178px] object-contain"
              />
            </div>

            <div className="lg:absolute lg:left-[304px] lg:top-[243px] 2xl:left-[442px] 2xl:top-[200px]">
              <img src={figma.convertIcon} alt="" className="h-[48px] w-[56px]" aria-hidden />
            </div>

            <div className="lg:absolute lg:left-0 lg:top-[356px] 2xl:left-[125px] 2xl:top-[256px]">
              <img
                src={figma.euroConvertHero}
                alt="EUR conversion card"
                className="w-[323px] h-[178px] object-contain"
              />
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
