import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

export function CompanyFinalCTA() {
  return (
    <section className="bg-black py-20 min-[1440px]:py-[100px]">
      <LandingInset>
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[700px] font-nohemi text-[36px] font-bold leading-[1.2] text-white md:text-[48px] min-[1440px]:text-[56px]">
            Experience Seamless{" "}
            <span className="text-primary">Global Payments</span> Today
          </h2>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-lg bg-white px-6 text-[16px] font-semibold text-grey-90 transition-colors hover:bg-grey-10"
            >
              <img src={figma.blackAppleLogo} alt="" className="size-5" aria-hidden />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-lg bg-white px-6 text-[16px] font-semibold text-grey-90 transition-colors hover:bg-grey-10"
            >
              <img src={figma.googlePlayIcon} alt="" className="size-5" aria-hidden />
              Google Play
            </a>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
