import type { CSSProperties } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

// Listed in mobile order (Figma 4789:13436), where they alternate left and
// right. From xl each pill sits at its own spot in the 1440 frame (4643:37923).
const pills = [
  { label: "MULTI-CURRENCY VIRTUAL CARDS", mobileW: 299, x: 482, y: 367, w: 477 },
  { label: "INTEGRATION WITH WALLETS", mobileW: 266, x: 140, y: 478, w: 409 },
  { label: "TRANSACTION ALERTS", mobileW: 234, x: 918, y: 478, w: 362 },
  { label: "ANTI-FRAUD MONITORING", mobileW: 248, x: 108, y: 679, w: 409 },
  { label: "SPENDING LIMITS", mobileW: 234, x: 974, y: 643, w: 294 },
  { label: "CARD MANAGEMENT DASHBOARD", mobileW: 296, x: 107, y: 940, w: 456 },
  { label: "CARD FREEZE/UNFREEZE", mobileW: 241, x: 918, y: 881, w: 362 },
  { label: "LOW FEES", mobileW: 154, x: 1011, y: 1060, w: 269 },
];

const pillBorder: CSSProperties = {
  background:
    "linear-gradient(#FBF7FB, #FBF7FB) padding-box, linear-gradient(to right, #9A0000, rgba(154,0,0,.5) 52%, #F6C03A) border-box",
  border: "1.5px solid transparent",
};

export function GetMoreSection() {
  return (
    <section className="relative overflow-hidden bg-grey-100 xl:h-[2112px]">
      <img
        loading="lazy"
        decoding="async"
        src={figma.virtualCardSwooshMobile}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-274px)] top-[713px] w-[519px] max-w-none xl:hidden"
      />
      <img
        loading="lazy"
        decoding="async"
        src={figma.leapLogoLarge}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-753px)] top-[144px] hidden w-[1440px] max-w-none opacity-[.667] xl:block"
      />

      <LandingInset className="relative pb-[98px] pt-16 text-center xl:static xl:pb-0 xl:pt-[120px]">
        <h2 className="mx-auto max-w-[317px] font-nohemi text-[24px] font-semibold leading-8 text-white xl:max-w-[605px] xl:text-[48px] xl:leading-[64px]">
          Get more from <span className="text-secondary">Paybyleap</span>{" "}
          <span className="text-secondary">Virtual</span> Card
        </h2>

        <div className="mt-[57px] xl:absolute xl:left-1/2 xl:top-0 xl:mt-0 xl:h-full xl:w-[1440px] xl:-translate-x-1/2">
          <ul className="mx-auto flex max-w-[342px] flex-col gap-4">
            {pills.map((p, i) => (
              <li
                key={p.label}
                className={`flex h-[45px] w-[var(--w-m)] items-center justify-center gap-2 rounded-3xl xl:absolute xl:z-10 xl:h-[60px] xl:w-[var(--w-d)] xl:gap-4 ${i % 2 ? "self-end" : "self-start"}`}
                style={{
                  ...pillBorder,
                  left: p.x,
                  top: p.y,
                  ["--w-m" as string]: `${p.mobileW}px`,
                  ["--w-d" as string]: `${p.w}px`,
                }}
              >
                <img src={figma.star} alt="" className="size-5 shrink-0 xl:size-6" />
                <span className="whitespace-nowrap text-[16px] font-medium leading-8 text-grey-90 xl:text-[24px]">
                  {p.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="relative mx-auto mt-12 w-[242px] xl:absolute xl:left-[465px] xl:top-[508px] xl:mt-0 xl:w-[511px]">
            <img
              loading="lazy"
              decoding="async"
              src={figma.virtualCardHand}
              alt="Hand holding a phone showing the PayByLeap virtual card"
              className="w-full"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_80%,rgba(0,0,0,0.98)_100%)]"
            />
          </div>
        </div>

        <p className="mx-auto mt-[50px] max-w-[315px] font-nohemi text-[32px] font-semibold leading-10 text-white xl:absolute xl:left-1/2 xl:top-[1725px] xl:mt-0 xl:w-[605px] xl:max-w-none xl:-translate-x-1/2 xl:text-[64px] xl:leading-[76px]">
          Access your Virtual Cards Anywhere
        </p>
        <a
          href="#"
          className="mx-auto mt-14 flex h-12 w-[216px] items-center justify-center rounded-lg bg-primary px-2 text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary xl:absolute xl:left-1/2 xl:top-[1960px] xl:mt-0 xl:-translate-x-1/2"
        >
          Get Started - it's Free
        </a>
      </LandingInset>
    </section>
  );
}
