import type { ReactNode } from "react";
import { figma } from "../assets/figma";

function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border-[1.5px] border-primary bg-[#fbf7fb] px-6 py-5 text-left text-body-1 font-normal text-grey-100 shadow-soft md:text-[24px] md:leading-8">
      <img src={figma.star} alt="" className="h-6 w-6 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export function BenefitsPhoneSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbf2d6] pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="pointer-events-none absolute -left-24 top-8 opacity-10">
        <div className="origin-center rotate-[26deg]">
          <img
            src={figma.benefitsBgPattern}
            alt=""
            className="max-h-[508px] min-w-[800px] object-cover"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="relative mx-auto mt-4 min-h-[560px] max-w-[1100px] md:mt-8">
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

          <div className="relative z-[1] mx-auto flex max-w-[553px] justify-center lg:mt-0">
            <div className="relative w-full">
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

          <div className="mt-10 flex flex-col items-stretch gap-4 lg:hidden">
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

        <div className="relative z-[2] mx-auto mt-20 max-w-3xl text-center">
          <h3 className="text-heading-2 text-grey-100 md:text-[64px] md:leading-[72px]">
            Empowering Global Transactions
          </h3>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex h-16 min-w-[201px] items-center justify-center gap-1 rounded-lg bg-black px-4 text-white"
            >
              <img src={figma.icApple} alt="" className="h-8 w-8" />
              <span className="text-left leading-tight">
                <span className="block text-[14px] font-normal">
                  Download app on
                </span>
                <span className="text-[16px] font-semibold">Apple Store</span>
              </span>
            </a>
            <a
              href="#"
              className="inline-flex h-16 min-w-[201px] items-center justify-center gap-2 rounded-lg bg-black px-4 text-white"
            >
              <img
                src={figma.googlePlayIcon}
                alt=""
                className="h-[34px] w-[37px] object-cover"
              />
              <span className="text-left leading-tight">
                <span className="block text-[14px] font-normal">Get app on</span>
                <span className="text-[16px] font-semibold">
                  Google Play Store
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
