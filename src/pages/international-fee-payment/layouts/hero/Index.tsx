import type { CSSProperties } from "react";
import { sharedImages } from "@/data/images/shared";
import { internationalFeePaymentImages } from "@/data/images/international-fee-payment";
import { LandingInset } from "@/components/landing-inset/Index";
import { IconPlayCircle } from "@/components/ui/icons/Index";
import { REVEAL_EASE } from "@/hooks/useRevealOnScroll";

// Each card sits in two wrappers (entrance pop, idle bob) so the two motions
// never compete for the same transform.
const css = `
  @keyframes fpRise {
    from { opacity: 0; transform: translateY(64px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes fpPop {
    from { opacity: 0; transform: translateY(16px) scale(.9); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes fpBob {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-7px); }
  }
  @keyframes fpPing {
    0%        { transform: scale(.7); opacity: .35; }
    70%, 100% { transform: scale(1.9); opacity: 0; }
  }

  .fp-phone  { animation: fpRise 1s ${REVEAL_EASE} .1s both; }
  .fp-pop    { animation: fpPop .7s ${REVEAL_EASE} var(--in) both; }
  .fp-bob    { animation: fpBob var(--bob) ease-in-out calc(var(--in) + .8s) infinite; }
  .fp-ping   { opacity: 0; animation: fpPing 2.4s ease-out 1.8s infinite; }

  @media (prefers-reduced-motion: reduce) {
    .fp-phone, .fp-pop, .fp-bob, .fp-ping { animation: none !important; }
  }
`;

function IconPayment({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5.12 4.5C4.3 4.5 3.5 4.83 2.92 5.42C2.33 6 2 6.8 2 7.62V9.25H22V7.62C22 6.8 21.67 6 21.08 5.42C20.5 4.83 19.7 4.5 18.88 4.5H5.12ZM2 16.38V10.5H22V16.38C22 17.2 21.67 18 21.08 18.58C20.5 19.17 19.7 19.5 18.88 19.5H5.12C4.3 19.5 3.5 19.17 2.92 18.58C2.33 18 2 17.2 2 16.38ZM15.62 14.75C15.46 14.75 15.3 14.82 15.18 14.93C15.07 15.05 15 15.21 15 15.38C15 15.54 15.07 15.7 15.18 15.82C15.3 15.93 15.46 16 15.62 16H18.38C18.54 16 18.7 15.93 18.82 15.82C18.93 15.7 19 15.54 19 15.38C19 15.21 18.93 15.05 18.82 14.93C18.7 14.82 18.54 14.75 18.38 14.75H15.62Z" />
    </svg>
  );
}

// Figma draws the 0.5px stroke inside the card, so it's an inset shadow
// rather than a border that would push the content.
const cardBase =
  "fp-bob h-[62px] w-[137px] rounded-lg bg-white pl-2 shadow-[inset_0_0_0_0.5px_#9A0000,0_4px_36px_rgba(0,0,0,0.08)]";

// Figma 4643:38767 (1440) and 4884:6579 (390). The phone and cards are placed
// from the page centre, matching both frames.
export function FeePaymentHero() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,rgba(255,244,244,0.1)_59.65%,#FFF4F4_86.25%,rgba(241,222,226,0.5)_100%)] pt-[19px] md:pt-16 xl:pt-[76px]">
      <style>{css}</style>
      <LandingInset>
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-[337px] text-heading-5 text-grey-90 md:max-w-[700px] md:text-heading-3 xl:max-w-[847px] xl:text-heading-1">
            Pay Tuition and Global Fees Seamlessly with PayByLeap.
          </h1>
          <p className="mt-[19px] max-w-[309px] text-body-4 text-grey-80 md:mt-[15px] md:max-w-none md:text-[24px] md:leading-8">
            Make school and international fees payment with ease
          </p>
          <div className="mt-12 flex flex-col items-center gap-6 md:mt-10 md:flex-row md:gap-4">
            <a
              href="#"
              className="flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:w-[237px]"
            >
              Pay Fees
            </a>
            <a
              href="#"
              className="flex h-12 w-[320px] items-center justify-center gap-3 rounded-lg border border-grey-20 bg-[#FFF4F4] text-[16px] font-medium leading-6 text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:w-[356px] md:text-[18px]"
            >
              <IconPlayCircle className="size-6 shrink-0 text-primary" />
              Learn how to pay fees internationally
            </a>
          </div>
        </div>
      </LandingInset>

      <div
        role="img"
        aria-label="Paying Northeastern University school fees in CAD from the PayByLeap app"
        className="relative mt-[125px] h-[334px] md:mt-[35px] md:h-[417px]"
      >
        <img
          src={internationalFeePaymentImages.heroPhone}
          alt=""
          className="fp-phone absolute left-1/2 top-0 ml-[-142px] w-[285px] max-w-none md:ml-[-208px] md:w-[405px]"
        />

        <div className="fp-pop absolute left-1/2 top-[-53px] ml-[-171px] md:top-[94px] md:ml-[-315px]" style={{ "--in": ".7s" } as CSSProperties}>
          <div
            className={`${cardBase} pt-[7px] md:h-[87px] md:w-[150px] md:pl-3 md:pt-[13px] md:shadow-[inset_0_0_0_0.5px_#6C0505,0_4px_36px_rgba(154,0,0,0.11)]`}
            style={{ "--bob": "6s" } as CSSProperties}
          >
            <img src={sharedImages.roundFlagCa} alt="" className="size-4 md:size-[30px]" />
            <p className="ml-0.5 mt-0.5 whitespace-nowrap text-[12px] leading-4 text-grey-80 md:ml-0 md:mt-px md:text-[16px] md:leading-6">
              Canada, Toronto
            </p>
            <p className="ml-0.5 whitespace-nowrap text-[10px] leading-[14px] text-grey-50 md:-mt-[5px] md:ml-0 md:text-[12px] md:leading-4">
              Northeastern University
            </p>
          </div>
        </div>

        <div className="fp-pop absolute left-1/2 top-[115px] ml-[34px] md:top-[179px] md:ml-[153px]" style={{ "--in": ".95s" } as CSSProperties}>
          <div
            className={`${cardBase} pt-2 md:h-[83px] md:w-[182px] md:pl-[14px]`}
            style={{ "--bob": "7s" } as CSSProperties}
          >
            <span className="relative block size-4 text-primary md:size-6">
              <span className="fp-ping absolute inset-0 rounded-full bg-primary/40" />
              <IconPayment className="relative size-full" />
            </span>
            <p className="ml-0.5 mt-px whitespace-nowrap text-[12px] leading-4 text-grey-80 md:ml-0 md:mt-0 md:text-[16px] md:leading-6">
              School Fees Payment
            </p>
            <p className="ml-0.5 whitespace-nowrap text-[10px] leading-[14px] text-grey-50 md:ml-0 md:text-[12px] md:leading-4">
              Northeastern University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
