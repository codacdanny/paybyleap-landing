import { useState, useEffect } from "react";
import { sharedImages } from "@/data/images/shared";
import { homeImages } from "@/data/images/home";
import { LandingInset } from "@/components/landing-inset/Index";
import { Button } from "@/components/ui/button/Index";
import PayByLeapPhoneHero from "./paybyleap-mobile/Index";

const walletItems: { code: string; src: string }[] = [
  { code: "NGN", src: sharedImages.flagNg },
  { code: "USD", src: sharedImages.flagUs },
  { code: "CAD", src: sharedImages.flagCa },
  { code: "EUR", src: sharedImages.euFlag },
  { code: "GBP", src: sharedImages.flagUk },
  { code: "YEN", src: sharedImages.flagCn },
  { code: "USDC", src: sharedImages.usdc },
  { code: "USDT", src: sharedImages.usdt },
];

export function Hero() {
  const [phoneWidth, setPhoneWidth] = useState(420);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640)
        setPhoneWidth(280); // mobile
      else if (w < 769)
        setPhoneWidth(360); // tablet/ipad
      else if (w < 1024)
        setPhoneWidth(320); // tablet / ipad mini
      else if (w < 1280)
        setPhoneWidth(360); // lg screen / ipad pro
      else setPhoneWidth(420); // xl screen
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        className="bg-gradient-to-b from-[hsla(0,100%,98%,0)] from-[24%] via-[#fff4f4] via-[55%] to-[rgba(241,222,226,0.5)] pt-0 h-fit"
        data-name="Hero section"
      >
        <LandingInset className="relative pb-0 pt-8  lg:pt-10  min-[1440px]:pt-[116px]">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] bg-organic-lines opacity-20 lg:block min-[1440px]:top-3 min-[1440px]:h-[850px] min-[1440px]:w-[637px]" />

          <div className="relative grid w-full max-w-[1122px] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-x-8 lg:gap-y-0 xl:grid-cols-[minmax(0,642px)_minmax(0,1fr)] min-[1440px]:gap-x-0 min-[1280px]:pt-16 min-[1440px]:pt-0">
            <div className="relative z-[2] max-w-[642px]">
              <h1 className="text-[34px] md:text-[56px] md:leading-[60px] font-semibold leading-10 text-grey-90 lg:text-[48px] lg:leading-[56px] xl:text-[64px] xl:leading-[72px]">
                Simplifying Global Payments For Everyone
              </h1>
              <p className="mt-3 md:mt-6 max-w-[583px] text-[16px] leading-6 text-grey-80 lg:mt-[25px] md:leading-7 md:text-[20px]">
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
              <div className="mt-12 md:mt-16">
                <p className="text-[16px] leading-5 text-grey-60 md:text-[16px] md:leading-6">
                  Built for everyday people, to transact globally
                </p>
                <div className="mt-4 overflow-hidden relative w-full lg:w-[90%] flex min-h-[48px]">
                  <div className="flex w-max animate-marquee gap-6 whitespace-nowrap absolute">
                    {[...walletItems, ...walletItems].map((w, i) => (
                      <div
                        key={`${w.code}-${i}`}
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
            </div>

            <div className="relative flex min-h-[420px] items-start justify-center pb-8 lg:justify-end lg:pb-0 lg:pt-0 md:mt-5 lg:mt-0 -mb-10 min-[780px]:mb-0">
              <div className="relative z-10 xl:-mt-16 translate-x-7 md:translate-x-20 xl:translate-x-[10vw]">
                <PayByLeapPhoneHero
                  phoneWidth={phoneWidth}
                  height={
                    phoneWidth >= 420 ? 600 : phoneWidth >= 360 ? 520 : 450
                  }
                />
              </div>
              <div className="h-[750px] w-[100vw] md:w-[90vw] lg:w-[40vw] absolute bottom-0 -right-[5vw] md:-right-[11vw]">
                <img
                  src={homeImages.heroBg}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-1"
                />
              </div>
              {/* <div className="relative -mb-8 xl:-mt-6 lg:mb-0">
                <img
                  src={homeImages.heroPhone}
                  className="w-[88%] mx-auto md:w-full"
                  alt=""
                />
                <img
                  src={homeImages.heroCard}
                  className="absolute w-[70%] md:w-[89%] xl:w-[80%] top-[50%] left-[34%] md:left-[46%] lg:left-[21%] xl:left-[46%] z-10"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </LandingInset>
      </div>
    </section>
  );
}
