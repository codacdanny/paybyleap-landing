import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";
import { Button } from "./Button";

export function MobileAppHero() {
  return (
    <section className="relative bg-[#1a1a1a] text-white">
      <div className="relative mx-auto grid min-h-[560px] max-w-[1440px] items-stretch overflow-hidden lg:min-h-[668px]">
        <div className="pointer-events-none absolute inset-0 size-full lg:hidden">
          <img
            src={figma.mobileAppHeroMobile}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90.2deg, rgb(26, 26, 26) 0.88%, rgba(26, 26, 26, 0) 17%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-full max-w-[1071px] lg:left-[391px] lg:block lg:w-[1071px]">
          <img
            src={figma.mobileAppHeroPhoto}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(26, 26, 26) 0.88%, rgba(26, 26, 26, 0) 17%)",
            }}
          />
        </div>

        <LandingInset>
          <div className="relative z-[2] max-w-xl py-10 pb-12 lg:max-w-xl lg:py-16 min-[1440px]:max-w-[572px] min-[1440px]:py-0 min-[1440px]:pb-[120px] min-[1440px]:pt-[101px]">
            <p className="text-[16px] font-medium leading-6 text-secondary min-[1440px]:text-[18px]">
              GET THE MOBILE APP
            </p>
            <h2 className="mt-3 max-w-[338px] text-[24px] font-semibold leading-8 text-white min-[1440px]:max-w-[572px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
              All your Global payment in one mobile app
            </h2>
            <p className="mt-6 max-w-[316px] text-[14px] leading-[22px] text-white min-[1440px]:max-w-[537px] min-[1440px]:text-[20px] min-[1440px]:leading-7">
              A mobile-first platform with crypto support, international fee
              payments, and business tools
            </p>
            <div className="mt-10 flex flex-col gap-4 min-[1440px]:mt-10 min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:items-center min-[1440px]:gap-6">
              <Button className="h-12 w-[190px] border-2 border-secondary bg-primary px-4 text-[18px] font-medium min-[1440px]:h-[58px]">
                Download the app
              </Button>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-2xl text-[18px] font-medium text-white"
              >
                Learn how it works
                <img
                  src={figma.learnArrowMobile}
                  alt=""
                  className="size-6 rotate-90 min-[1440px]:hidden"
                />
                <img
                  src={figma.learnArrow}
                  alt=""
                  className="hidden size-6 rotate-90 min-[1440px]:block"
                />
              </a>
            </div>
          </div>
        </LandingInset>
      </div>
    </section>
  );
}
