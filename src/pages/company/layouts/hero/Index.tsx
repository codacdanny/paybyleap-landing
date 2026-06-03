import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const flags = [figma.flagNg, figma.flagUs, figma.flagUk, figma.euFlag, figma.flagCa];

export function CompanyHero() {
  return (
    <section className="bg-[#1D1111] pb-0 pt-[82px] lg:pt-[94px] 2xl:pt-[112px]">
      <LandingInset>
        <div className="flex flex-col items-center text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">
            About Us
          </p>

          <h1 className="mt-6 max-w-[860px] font-nohemi text-[52px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[64px] min-[1440px]:text-[72px]">
            Simplifying{" "}
            <span className="text-primary">Global Payments</span>{" "}
            for a Connected World
          </h1>

          <p className="mt-6 max-w-[660px] text-[18px] font-normal leading-[1.7] text-white/60 min-[1440px]:text-[20px]">
            At PayByLeap, we are building the future of global finance, where
            sending, receiving, and managing money across borders is simple and
            seamless.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-[52px] w-[190px] items-center justify-center rounded-lg bg-primary-dark text-[18px] font-medium text-white transition-colors hover:bg-primary"
            >
              Download the App
            </a>
            <a
              href="#"
              className="inline-flex h-[52px] items-center justify-center rounded-lg border border-white/25 px-7 text-[18px] font-medium text-white transition-colors hover:border-white/50"
            >
              Create Account
            </a>
          </div>

          {/* Flag avatars */}
          <div className="mt-12 flex items-center gap-2">
            {flags.map((flag, i) => (
              <div
                key={i}
                className="size-[52px] overflow-hidden rounded-full border-2 border-white/20 shadow-[0_0_0_2px_rgba(255,255,255,0.06)]"
              >
                <img src={flag} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </LandingInset>

      {/* Full-width team photo */}
      <div className="mt-14 w-full overflow-hidden min-[1440px]:mt-16">
        <img
          src={figma.mobileAppHeroPhoto}
          alt="PayByLeap team"
          className="h-[320px] w-full object-cover md:h-[420px] min-[1440px]:h-[500px]"
        />
      </div>
    </section>
  );
}
