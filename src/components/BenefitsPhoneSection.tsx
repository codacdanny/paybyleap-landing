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
    <section className="relative overflow-hidden bg-[#fbf2d6] pb-16 pt-10 md:pb-24 md:pt-12 lg:pb-32 lg:pt-16 min-[1440px]:pt-[175px]">
      <div className="pointer-events-none absolute -left-24 top-8 hidden opacity-10 lg:block">
        <div className="origin-center rotate-[26deg]">
          <img
            src={figma.benefitsBgPattern}
            alt=""
            className="max-h-[508px] min-w-[800px] object-cover"
          />
        </div>
      </div>

      <LandingInset>
        <p className="text-center text-[16px] font-medium leading-6 text-primary min-[1440px]:text-[18px]">
          PLATFORM BENEFITS
        </p>
        <h2 className="mx-auto mt-4 max-w-[244px] text-center text-[24px] font-semibold leading-8 text-grey-100 min-[1440px]:mt-6 min-[1440px]:max-w-[644px] min-[1440px]:text-[64px] min-[1440px]:leading-[78px]">
          More <span className="text-primary">Benefits</span>, Less Hustle
        </h2>

        <div className="relative mx-auto mt-8 max-w-[1200px] min-[1440px]:mt-14">
          <div className="relative mx-auto mt-4 min-h-0 max-w-[1100px] md:mt-8 lg:min-h-[560px]">
            <div className="hidden lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-[32%] lg:flex-col lg:justify-center lg:gap-6 lg:pr-4">
              <Tag>GLOBAL PAYMENTS IN MINUTE</Tag>
              <Tag>
                <span className="font-bold text-primary">64+</span> COUNTRIES
                GLOBALLY
              </Tag>
              <Tag>VIRTUAL &amp; PHYSICAL CARD</Tag>
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
                  <div className="absolute inset-0 overflow-hidden" aria-hidden>
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
              <Tag>GLOBAL PAYMENTS IN MINUTE</Tag>
              <Tag>
                <span className="font-bold text-primary">64+</span> COUNTRIES
                GLOBALLY
              </Tag>
              <Tag>VIRTUAL &amp; PHYSICAL CARD</Tag>
              <Tag>STABLECOIN SUPPORT</Tag>
              <Tag>GLOBAL INVOICING</Tag>
              <Tag>
                <span className="font-bold text-primary">100%</span> SECURED
                ACCOUNT
              </Tag>
            </div>
          </div>

          <div className="relative z-[2] mx-auto mt-16 max-w-3xl text-center min-[1440px]:mt-[120px]">
            <h3 className="text-[36px] font-semibold leading-10 text-grey-100 min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              Empowering Global Transaction
            </h3>
            <div className="mx-auto mt-10 flex max-w-[247px] flex-col items-center gap-4 min-[1440px]:mt-10 min-[1440px]:max-w-none min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:justify-center">
              <a
                href="#"
                className="inline-flex h-16 w-full min-w-0 items-center justify-center gap-1 rounded-lg bg-black px-4 text-white min-[1440px]:w-auto min-[1440px]:min-w-[201px]"
              >
                <img src={figma.icApple} alt="" className="size-8" />
                <span className="text-left leading-tight">
                  <span className="block text-[14px] font-normal">
                    Download app on
                  </span>
                  <span className="text-[16px] font-semibold">Apple Store</span>
                </span>
              </a>
              <a
                href="#"
                className="inline-flex h-16 w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-black px-4 text-white min-[1440px]:w-auto min-[1440px]:min-w-[201px]"
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
        </div>
      </LandingInset>
    </section>
  );
}
