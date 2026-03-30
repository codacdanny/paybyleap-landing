import { figma } from "../assets/figma";
import { Button } from "./Button";

export function MobileAppHero() {
  return (
    <section className="relative bg-[#1a1a1a] text-white">
      <div className="relative mx-auto grid min-h-[560px] max-w-[1440px] items-center overflow-hidden lg:min-h-[668px]">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-[1071px] lg:left-[391px] lg:w-[1071px]">
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

        <div className="relative z-[2] max-w-xl px-4 py-16 md:px-6 lg:px-8 lg:pl-10 xl:pl-[157px]">
          <p className="text-[18px] font-medium leading-6 text-secondary">
            GET THE MOBILE APP
          </p>
          <h2 className="mt-3 max-w-[572px] text-heading-3 text-white md:text-[48px] md:leading-[56px]">
            All your Global payment in one mobile app
          </h2>
          <p className="mt-6 max-w-[537px] text-body-3 text-white">
            A mobile-first platform with crypto support, international fee
            payments, and business tools
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button className="h-[58px] min-w-[190px] border-2 border-secondary bg-primary px-4 text-[18px] font-medium">
              Download the app
            </Button>
            <a
              href="#how"
              className="inline-flex items-center gap-2 text-[18px] font-medium text-white"
            >
              Learn how it works
              <img src={figma.learnArrow} alt="" className="h-6 w-6 rotate-90" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-[#fbf2d6] pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="bg-brush-soft pointer-events-none absolute inset-y-0 left-0 w-1/3" />
        <div className="relative mx-auto max-w-[1200px] px-4 text-center md:px-6 lg:px-8">
          <p className="text-[18px] font-medium text-primary">
            PLATFORM BENEFITS
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-heading-2 text-grey-100 md:text-[64px] md:leading-[78px]">
            More <span className="text-primary">Benefits</span>, Less Hustle
          </h2>
        </div>
      </div>
    </section>
  );
}
