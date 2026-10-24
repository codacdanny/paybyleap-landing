import type { CSSProperties } from "react";
import { invoicingImages } from "@/data/images/invoicing";
import { LandingInset } from "@/components/landing-inset/Index";
import { IconPlayCircle } from "@/components/ui/icons/Index";
import { REVEAL_EASE } from "@/hooks/useRevealOnScroll";

// The quantity card is lifted out of the illustration so it can float on its
// own; the rings pulse over the accuracy target and the approval seal.
const css = `
  @keyframes ivRise {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes ivPop {
    from { opacity: 0; transform: translateY(14px) scale(.94); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes ivDrift {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes ivBob {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-7px); }
  }
  @keyframes ivPing {
    0%        { transform: scale(1); opacity: .6; }
    75%, 100% { transform: scale(1.7); opacity: 0; }
  }

  .iv-art   { animation: ivRise .9s ${REVEAL_EASE} .1s both; }
  .iv-drift { animation: ivDrift 8s ease-in-out 1.6s infinite; }
  .iv-qty   { animation: ivPop .7s ${REVEAL_EASE} .6s both, ivBob 6s ease-in-out 1.4s infinite; }
  .iv-ping  { opacity: 0; animation: ivPing 2.6s ease-out var(--in) infinite; }

  @media (prefers-reduced-motion: reduce) {
    .iv-art, .iv-drift, .iv-qty, .iv-ping { animation: none !important; }
  }
`;

// Figma 4643:39131 (1440, illustration 4643:39323 sits beside the frame) and
// 4884:6837 (390). Overlay bounds are shares of the 722x867 source image.
export function InvoicingHero() {
  return (
    <section className="overflow-hidden bg-less-white pb-[71px] pt-[19px] md:pb-20 md:pt-12 xl:h-[743px] xl:pb-0 xl:pt-[99px]">
      <style>{css}</style>
      <LandingInset>
        <div className="relative">
          <div className="relative z-[1] xl:max-w-[679px]">
            <h1 className="max-w-[337px] text-heading-5 text-grey-90 md:max-w-[679px] md:text-heading-3 xl:text-heading-1">
              Create and Send Invoices Internationally with Ease
            </h1>
            <p className="mt-[19px] text-body-4 text-grey-80 md:text-[24px] md:leading-8 xl:mt-[22px]">
              Move your money anywhere and anytime.
            </p>
            <div className="mt-10 flex flex-col items-start gap-[19px] md:flex-row md:gap-4 xl:mt-14">
              <a
                href="#"
                className="flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:w-[201px]"
              >
                Create Invoice
              </a>
              <a
                href="#"
                className="flex h-14 w-[296px] items-center justify-center gap-3 rounded-lg border border-grey-20 bg-[#FFF4F4] text-[16px] font-medium leading-6 text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:h-12 md:w-[339px] md:text-[18px]"
              >
                <IconPlayCircle className="size-6 shrink-0 text-primary" />
                Learn how global invoicing work
              </a>
            </div>
          </div>

          <div
            role="img"
            aria-label="Invoice with a 99.99% accuracy score and an approved compliance check"
            className="iv-art mx-auto mt-[51px] w-[334px] md:w-[506px] xl:absolute xl:left-[678px] xl:top-[3px] xl:mt-0"
          >
            <div className="iv-drift relative">
              <img src={invoicingImages.heroBase} alt="" className="w-full" />
              <img src={invoicingImages.heroQty} alt="" className="iv-qty absolute left-[1.385%] top-[1.153%] w-[40.166%]" />
              <span
                className="iv-ping absolute left-[49.861%] top-[8.824%] aspect-square w-[9.834%] rounded-full border-[1.5px] border-primary"
                style={{ "--in": "1.8s" } as CSSProperties}
              />
              <span
                className="iv-ping absolute left-[83.864%] top-[47.463%] aspect-square w-[7.341%] rounded-full bg-[#27AE60]/50"
                style={{ "--in": "2.6s" } as CSSProperties}
              />
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
