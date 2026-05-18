import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

export function CompanyHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-16 min-[1440px]:min-h-[796px] min-[1440px]:pt-[105px]">
      <LandingInset className="relative z-10 pb-16 min-[1440px]:pb-0">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex items-center gap-1.5 rounded-2xl border border-secondary bg-cream px-3 py-1.5">
            <img src={figma.ionPlanet} alt="" className="size-4" />
            <span className="text-[14px] font-medium leading-5 text-grey-80 min-[1440px]:text-[16px]">
              ABOUT PAYBYLEAP
            </span>
          </div>

          <h1 className="mt-8 font-nohemi text-[36px] font-semibold leading-[44px] text-grey-90 md:text-[52px] md:leading-[60px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
            Empowering Global Payments for Everyone
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-7 text-grey-70 min-[1440px]:text-[20px]">
            PayByLeap is building the future of borderless finance — a platform that makes sending, receiving, and managing money across borders as simple as sending a text.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-grey-20 bg-[#FFF3F3] px-6 text-[16px] font-medium leading-6 text-grey-90"
            >
              Learn our story
            </a>
          </div>
        </div>

        {/* Hero banner image */}
        <div className="mt-14 overflow-hidden rounded-2xl min-[1440px]:mt-16">
          <img
            src={figma.mobileAppHeroPhoto}
            alt="PayByLeap team and product"
            className="h-[300px] w-full object-cover md:h-[420px] min-[1440px]:h-[480px]"
          />
        </div>
      </LandingInset>
    </section>
  );
}
