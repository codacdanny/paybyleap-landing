import type { ReactNode } from "react";
import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";

function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-3xl border-[1.5px] border-primary bg-[#fbf7fb] px-4 py-2.5 text-left text-[16px] font-medium leading-8 text-grey-100 shadow-soft min-[1440px]:gap-4 min-[1440px]:px-6 min-[1440px]:py-5 min-[1440px]:text-[24px]">
      <img
        src={figma.starMobile}
        alt=""
        className="size-5 shrink-0 min-[1440px]:hidden"
      />
      <img
        src={figma.star}
        alt=""
        className="hidden size-6 shrink-0 min-[1440px]:block"
      />
      <span>{children}</span>
    </div>
  );
}

export function BenefitsPhoneSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbf2d6] pb-16 pt-10 md:pb-24 md:pt-12 lg:pb-32 lg:pt-16 min-[1440px]:pb-[80px] min-[1440px]:pt-[175px]">
      <div className="pointer-events-none absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 hidden opacity-10 lg:block">
        <div className="origin-center flex items-center justify-center rotate-[26deg]">
          <img
            src={figma.benefitsBgPattern}
            alt=""
            className="max-h-[508px] min-w-[1546px] object-cover"
          />
        </div>
      </div>

      {/* Section header */}
      <LandingInset>
        <p className="text-center text-[16px] font-medium leading-6 text-primary min-[1440px]:text-[18px]">
          PLATFORM BENEFITS
        </p>
        <h2 className="mx-auto mt-4 max-w-[244px] text-center font-nohemi text-[24px] font-semibold leading-8 text-grey-100 min-[1440px]:mt-[35px] min-[1440px]:max-w-[644px] min-[1440px]:text-[64px] min-[1440px]:leading-[78px]">
          More <span className="text-primary">Benefits</span>, Less Hustle
        </h2>
      </LandingInset>

      {/* ── Desktop illustration + tags (1440px+) ── */}
      <div className="relative mx-auto hidden max-w-[1440px] min-[1440px]:mt-[-23px] min-[1440px]:block">
        <div className="relative h-[1105px]">
          {/* Hand scene */}
          <div className="absolute left-1/2 top-0 h-[1105px] w-[553px] -translate-x-1/2">
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              <img
                src={figma.benefitsHandScene}
                alt=""
                className="absolute left-0 top-[-13%] h-[113%] w-full max-w-none object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(192deg, rgba(251, 242, 214, 0) 82.2%, rgb(251, 242, 214) 90.75%)",
                }}
              />
            </div>
            {/* Phone mockup */}
            <div className="absolute left-[123px] top-[106px] flex  items-center justify-center">
              <div className=" bg-transparent">
                <img
                  src={figma.iphone17Mockup}
                  alt="PayByLeap on iPhone"
                  className="object-cover drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Tags — left column (positions from Figma frame) */}
          <div className="absolute z-[1]" style={{ left: 277, top: 270 }}>
            <Tag>
              <span className="font-bold text-primary">64+</span> COUNTRIES
              GLOBALLY
            </Tag>
          </div>
          <div className="absolute z-[1]" style={{ left: 236, top: 428 }}>
            <Tag>VIRTUAL &amp; PHYSICAL CARD</Tag>
          </div>
          <div className="absolute z-[1]" style={{ left: 197, top: 626 }}>
            <Tag>GLOBAL PAYMENTS IN MINUTE</Tag>
          </div>

          {/* Tags — right column */}
          <div className="absolute z-[1]" style={{ left: 900, top: 180 }}>
            <Tag>STABLECOIN SUPPORT</Tag>
          </div>
          <div className="absolute z-[1]" style={{ left: 955, top: 404 }}>
            <Tag>GLOBAL INVOICING</Tag>
          </div>
          <div className="absolute z-[1]" style={{ left: 961, top: 564 }}>
            <Tag>
              <span className="font-bold text-primary">100%</span> SECURED
              ACCOUNT
            </Tag>
          </div>
        </div>
      </div>

      {/* ── Tablet / Mobile layout (below 1440px) ── */}
      <div className="min-[1440px]:hidden">
        <LandingInset>
          <div className="relative mx-auto mt-8 max-w-[1200px]">
            <div className="relative mx-auto mt-4 min-h-0 max-w-[1100px] md:mt-8 lg:min-h-[560px]">
              <div className="hidden lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-[32%] lg:flex-col lg:justify-center lg:gap-6 lg:pr-4">
                <Tag>
                  <span className="font-bold text-primary">64+</span> COUNTRIES
                  GLOBALLY
                </Tag>
                <Tag>VIRTUAL &amp; PHYSICAL CARD</Tag>
                <Tag>GLOBAL PAYMENTS IN MINUTE</Tag>
              </div>

              <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:w-[32%] lg:flex-col lg:items-end lg:justify-center lg:gap-6 lg:pl-4">
                <Tag>STABLECOIN SUPPORT</Tag>
                <Tag>GLOBAL INVOICING</Tag>
                <Tag>
                  <span className="font-bold text-primary">100%</span> SECURED
                  ACCOUNT
                </Tag>
              </div>

              <div className="relative z-[1] -mx-2 mt-6 lg:mx-auto lg:mt-0 lg:flex lg:max-w-[553px] lg:justify-center">
                <div className="relative w-full lg:hidden">
                  <img
                    src={figma.benefitsHandMobile}
                    alt=""
                    className="h-[779px] w-full object-cover object-top"
                  />
                </div>
                <div className="relative hidden w-full lg:block">
                  <div className="relative mx-auto aspect-[553/1105] w-full max-w-[553px]">
                    <div
                      className="absolute inset-0 overflow-hidden"
                      aria-hidden="true"
                    >
                      <img
                        src={figma.benefitsHandScene}
                        alt=""
                        className="absolute left-0 top-[-13%] h-[113%] w-full max-w-none object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(192deg, rgba(251, 242, 214, 0) 82.2%, rgb(251, 242, 214) 90.75%)",
                        }}
                      />
                    </div>
                    <div className="absolute left-1/2 top-[18%] z-[2] w-[52%] max-w-[287px] -translate-x-1/2">
                      <div className="-rotate-[5deg]">
                        <img
                          src={figma.iphone17Mockup}
                          alt="PayByLeap on iPhone"
                          className="h-auto w-full drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-stretch gap-3 px-1 lg:hidden">
                <Tag>
                  <span className="font-bold text-primary">64+</span> COUNTRIES
                  GLOBALLY
                </Tag>
                <Tag>VIRTUAL &amp; PHYSICAL CARD</Tag>
                <Tag>GLOBAL PAYMENTS IN MINUTE</Tag>
                <Tag>STABLECOIN SUPPORT</Tag>
                <Tag>GLOBAL INVOICING</Tag>
                <Tag>
                  <span className="font-bold text-primary">100%</span> SECURED
                  ACCOUNT
                </Tag>
              </div>
            </div>
          </div>
        </LandingInset>
      </div>

      {/* Bottom section */}
      <LandingInset>
        <div className="relative z-[2] mx-auto mt-16 max-w-3xl text-center min-[1440px]:mt-0 min-[1440px]:max-w-[693px]">
          <h3 className="font-nohemi text-[36px] font-semibold leading-10 text-grey-100 min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
            Empowering Global Transactions
          </h3>
          <div className="mx-auto mt-10 flex bg-black max-w-[247px] flex-col items-center gap-4 min-[1440px]:mt-[51px] min-[1440px]:max-w-none min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:justify-center">
            <a
              href="#"
              className="inline-flex h-16 w-full min-w-0 items-center justify-center gap-1 rounded-lg bg-[#000] px-4 text-white min-[1440px]:w-[201px]"
            >
              <img src={"/images/applelogo.svg"} alt="" className="size-8" />
              <span className="text-left leading-tight">
                <span className="block text-[14px] font-normal">
                  Download app on
                </span>
                <span className="text-[16px] font-semibold">Apple Store</span>
              </span>
            </a>
            <a
              href="#"
              className="inline-flex h-16 w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-[#000]  px-4 text-white min-[1440px]:w-[201px]"
            >
              <img
                src={figma.googlePlayMobile}
                alt=""
                className="h-[34px] w-[37px] object-cover min-[1440px]:hidden"
              />
              <img
                src={figma.googlePlayIcon}
                alt=""
                className="hidden h-[34px] w-[37px] object-cover min-[1440px]:block"
              />
              <span className="text-left leading-tight">
                <span className="block text-[14px] font-normal">
                  Get app on
                </span>
                <span className="text-[16px] font-semibold">
                  Google Play Store
                </span>
              </span>
            </a>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
