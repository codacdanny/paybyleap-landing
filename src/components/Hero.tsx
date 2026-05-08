import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";
import { Button } from "./Button";

const walletItems: { code: string; src: string }[] = [
  { code: "NGN", src: figma.flagNg },
  { code: "USD", src: figma.flagUs },
  { code: "CAD", src: figma.flagCa },
  { code: "EUR", src: figma.euFlag },
  { code: "GBP", src: figma.flagUk },
  { code: "YEN", src: figma.flagCn },
  { code: "USDC", src: figma.usdc },
  { code: "USDT", src: figma.usdt },
];

function HeroIllustration() {
  return (
    <>
      <div className="relative mx-auto grid w-full max-w-[248px] justify-items-center lg:hidden">
        <img
          src={figma.iphoneAirMockupMobile}
          alt="PayByLeap app on iPhone"
          className="relative z-[1] h-auto w-full drop-shadow-card"
        />
        <div className="absolute bottom-[8%] right-[-4%] z-[2] w-[181px] max-w-[73%] rotate-[-6deg]">
          <div className="relative h-[121px] overflow-hidden rounded-[9.134px] bg-primary shadow-[0px_9px_4px_rgba(154,0,0,0.05)]">
            <img
              src={figma.heroCardOverlayMobile}
              alt=""
              className="pointer-events-none absolute left-0 top-0 h-full w-[287px] max-w-none object-cover"
            />
            <img
              src={figma.cardWatermarkMobile}
              alt=""
              className="pointer-events-none absolute left-2 top-3 z-[1] h-[21px] w-[96px] -rotate-90 object-cover opacity-10"
            />
            <div className="absolute left-[-12px] top-6 z-[2] size-[23px]">
              <img
                src={figma.chipEllipseMobile}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative z-[2] flex h-full flex-col justify-between px-4 pb-2 pt-1 text-[10px] text-white">
              <div className="flex items-start justify-between gap-1">
                <span className="w-[84px] font-mono tracking-wide">
                  **** **** **** 7564
                </span>
                <span className="text-[10px] font-bold text-white/50">USD</span>
              </div>
              <div className="flex items-end justify-between">
                <p className="leading-tight">JANET KHLOE</p>
                <div className="flex items-center gap-1">
                  <div className="relative h-[13px] w-2 overflow-hidden rounded-[2px]">
                    <img
                      src={figma.chipDetailMobile}
                      alt=""
                      className="absolute left-1/2 top-1/2 h-[220%] max-w-none -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <img src={figma.visaMobile} alt="" className="h-4 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto hidden w-full max-w-[476px] lg:mr-0 lg:block">
        <div className="relative z-[1] flex justify-center lg:justify-end">
          <div className="relative mt-[-35px] h-[821px] w-[397px]">
            <img
              src={figma.iphoneAirMockup}
              alt="PayByLeap app on iPhone"
              className="absolute  object-cover drop-shadow-card"
            />

            <div className="absolute left-[183px] top-[300px] z-[2] h-[195px] w-[293px]">
              <div className="relative h-[195px] overflow-hidden rounded-[9.134px] bg-primary shadow-[0px_9px_4px_rgba(154,0,0,0.05)]">
      
              <img
                  src={figma.usdCard}
                  alt=""
                  className="pointer-events-none absolute left-[3px] top-[-2px] h-[184px] w-[287px] max-w-none object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[724px]">
      <div
        className="min-h-0 bg-gradient-to-b from-[rgba(255,244,244,0.1)] from-[24%] via-[#fff4f4] via-[55%] to-[rgba(241,222,226,0.5)] pt-0 lg:min-h-[720px] min-[1440px]:min-h-[799px]"
        data-name="Hero section"
      >
        <LandingInset className="relative pb-12 pt-8 lg:pb-16 lg:pt-10 min-[1440px]:pb-24 min-[1440px]:pt-[116px]">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] bg-organic-lines opacity-20 lg:block min-[1440px]:top-3 min-[1440px]:h-[850px] min-[1440px]:w-[637px]" />

          <div className="relative grid w-full max-w-[1122px] items-start gap-8 lg:grid-cols-[minmax(0,642px)_minmax(0,1fr)] lg:gap-x-8 lg:gap-y-0 min-[1440px]:gap-x-0">
            <div className="relative z-[2] max-w-[642px]">
              <h1 className="text-[32px] font-semibold leading-10 text-grey-90 lg:text-[64px] lg:leading-[72px]">
                Simplifying global payment for everyone
              </h1>
              <p className="mt-6 max-w-[583px] text-[16px] leading-6 text-grey-80 lg:mt-[25px] lg:text-[20px] lg:leading-7">
                PayByLeap makes international transactions fast, easy, and
                accessible for education, business, and local payments
              </p>
              <div className="mt-8 flex flex-wrap gap-3 lg:mt-10 lg:gap-2">
                <Button
                  variant="primaryDark"
                  className="min-w-[162px] flex-1 lg:w-[190px] lg:min-w-[190px] lg:flex-none"
                >
                  Download the app
                </Button>
                <button
                  type="button"
                  className="inline-flex h-12 min-h-[48px] min-w-[138px] flex-1 items-center justify-center rounded-lg border border-[#1F2065] bg-[rgba(255,255,255,0.1)] px-2 text-[16px] font-medium leading-6 text-grey-90 transition hover:bg-white/20 lg:w-[138px] lg:flex-none lg:text-[18px]"
                >
                  Learn more
                </button>
              </div>
              <div className="mt-12 lg:mt-[83px]">
                <p className="text-[14px] leading-5 text-grey-60 lg:text-[16px] lg:leading-6">
                  Built for everyday people, to transact globally
                </p>
                <div className="mt-4 flex flex-wrap gap-2 lg:flex-nowrap">
                  {walletItems.map((w) => (
                    <div
                      key={w.code}
                      className="flex items-center gap-1 px-1 py-2 text-[16px] leading-6 text-grey-90"
                    >
                      <img
                        src={w.src}
                        alt=""
                        className="size-6 shrink-0 rounded-full object-cover"
                      />
                      <span className="font-normal">{w.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[420px] items-start justify-center pb-8 pt-4 md:min-h-[520px] lg:min-h-[821px] lg:justify-end lg:pb-0 lg:pt-[60px]">
              <HeroIllustration />
            </div>
          </div>
        </LandingInset>
      </div>
    </section>
  );
}
