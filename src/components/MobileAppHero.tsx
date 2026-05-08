import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";
import { Button } from "./Button";

export function MobileAppHero() {
  return (
    <section className="relative bg-[#1a1a1a] text-white">
      <div className="relative mx-auto grid min-h-[560px] max-w-[1440px] items-stretch lg:h-[668px] lg:min-h-[668px]">
        {/* Desktop background — woman on couch, right-aligned */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden overflow-hidden lg:block lg:w-[1071px]">
          <img
            src={figma.mobileAppHeroPhoto}
            alt=""
            className="h-full w-full object-cover object-[center_top]"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(26, 26, 26) 0.88%, rgba(26, 26, 26, 0) 30%)",
            }}
          />
        </div>

        <LandingInset>
          <div className="relative z-[2] max-w-xl py-10 pb-12 lg:max-w-[572px] lg:py-0 lg:pb-[120px] lg:pt-[101px]">
            <p className="text-[14px] font-medium uppercase leading-5 tracking-wide text-secondary lg:text-[18px] lg:leading-6">
              GET THE MOBILE APP
            </p>
            <h2 className="mt-3 max-w-[338px] font-nohemi text-[24px] font-semibold leading-8 text-white lg:mt-4 lg:max-w-[572px] lg:text-[48px] lg:leading-[56px]">
              All your Global payment in one mobile app
            </h2>
            <p className="mt-4 max-w-[316px] text-[14px] leading-[22px] text-white lg:mt-6 lg:max-w-[537px] lg:text-[20px] lg:leading-7">
              A mobile-first platform with crypto support, international fee
              payments, and business tools
            </p>
            <div className="mt-8 flex flex-col gap-4 lg:mt-10 lg:flex-row lg:items-center lg:gap-6">
              <Button className="h-12 w-[190px] border-2 border-secondary !bg-primary px-4 text-[18px] font-medium lg:h-[58px]">
                Download the app
              </Button>
              <a
                href="#how"
                className="inline-flex items-center gap-2 text-[18px] font-medium text-white"
              >
                Learn how it works
                <img
                  src={figma.arrowRightWhite}
                  alt=""
                  className="size-6"
                />
              </a>
            </div>
          </div>
        </LandingInset>
      </div>
    </section>
  );
}
