import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const avatars = [
  { src: figma.flagNg, person: false },
  { src: figma.avatarPerson1, person: true },
  { src: figma.avatarPerson2, person: true },
  { src: figma.flagUs, person: false },
  { src: figma.flagCa, person: false },
  { src: figma.avatarPerson3, person: true },
  { src: figma.flagUk, person: false },
  { src: figma.euFlag, person: false },
];

export function CompanyHero() {
  return (
    <section className="overflow-hidden bg-[#1D1111] pb-0 pt-[82px] lg:pt-[94px] 2xl:pt-[112px]">
      <LandingInset>
        <div className="flex flex-col items-center text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/70">
            About Us
          </p>

          <h1 className="mt-6 max-w-[920px] font-nohemi text-[52px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[64px] min-[1440px]:text-[72px]">
            Simplifying{" "}
            <span className="text-secondary">Global</span>{" "}
            <span className="bg-gradient-to-r from-[#F2933C] via-[#E0481E] to-[#9A0000] bg-clip-text text-transparent">
              Payments
            </span>{" "}
            for a Connected World
          </h1>

          <p className="mt-6 max-w-[680px] text-[18px] font-normal leading-[1.7] text-white/60 min-[1440px]:text-[20px]">
            At PayByLeap, we are building the future of global finance, where
            sending, receiving, and managing money across borders is simple,
            fast, and accessible to everyone.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-[56px] items-center justify-center rounded-lg border-2 border-secondary bg-primary px-8 text-[18px] font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Download the App
            </a>
            <a
              href="#"
              className="inline-flex h-[56px] items-center justify-center rounded-lg bg-cream px-8 text-[18px] font-medium text-primary-dark transition-colors hover:bg-white"
            >
              Create Account
            </a>
          </div>
        </div>
      </LandingInset>

      {/* Bleeding avatar row */}
      <div className="mt-16 w-full overflow-hidden min-[1440px]:mt-20">
        <div className="flex items-center justify-center gap-3 md:gap-4 min-[1440px]:gap-6">
          {avatars.map((avatar, i) => (
            <div
              key={i}
              className={`-mb-[44px] size-[112px] shrink-0 overflow-hidden rounded-full border-[3px] md:-mb-[58px] md:size-[148px] min-[1440px]:-mb-[68px] min-[1440px]:size-[168px] ${
                avatar.person ? "border-secondary" : "border-white/15"
              }`}
            >
              <img
                src={avatar.src}
                alt=""
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}