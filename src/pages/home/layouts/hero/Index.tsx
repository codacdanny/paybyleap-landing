import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { Button } from "@/components/ui/button/Index";

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
    <div className="relative mx-auto w-full max-w-[476px] lg:mr-0">
      <img
        src={figma.herobg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 z-0 w-[120%] max-w-none  select-none object-contain opacity-1"
      />

      <div className="relative z-[1] flex justify-center lg:justify-end">
        <div className="relative mt-[-80px] h-[821px] w-[397px]">
          <img
            src={figma.iphoneAirMockup}
            alt="PayByLeap app on iPhone"
            className="absolute top-0 inset-0 h-full w-full object-contain drop-shadow-card"
          />

          <div className="absolute left-[183px] top-[375px] z-[2] h-[195px] w-[293px]">
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
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[600px]">
      <div
        className="min-h-0 bg-gradient-to-b from-[hsla(0,100%,98%,0)] from-[24%] via-[#fff4f4] via-[55%] to-[rgba(241,222,226,0.5)] pt-0 lg:min-h-[720px] min-[1440px]:min-h-[799px]"
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

            <div className="relative flex min-h-[420px] items-start justify-center pb-8 pt-4 md:min-h-[520px] lg:min-h-[821px] lg:justify-end lg:pb-0 lg:pt-0">
              <HeroIllustration />
            </div>
          </div>
        </LandingInset>
      </div>
    </section>
  );
}
