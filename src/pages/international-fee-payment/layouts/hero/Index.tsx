import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

function PlayIcon() {
  return (
    <span className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-[2px] size-[12px]" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export function FeePaymentHero() {
  return (
    <section className="overflow-hidden bg-[#FFF4F4] pb-0 pt-[82px] lg:pt-[94px] 2xl:pt-[112px]">

      {/* ── Centered hero text ── */}
      <LandingInset>
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-[900px] font-nohemi text-[56px] font-bold leading-[1.1] tracking-[-0.03em] text-grey-90 md:text-[68px] min-[1440px]:text-[76px]">
            Pay Tuition and Global Fees Seamlessly with PayByLeap.
          </h1>
          <p className="mt-6 text-[20px] font-normal leading-[1.5] text-grey-70 min-[1440px]:text-[22px]">
            Make school and international fees payment with ease
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-[52px] w-[201px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Pay Fees
            </a>
            <a
              href="#"
              className="inline-flex h-[52px] items-center gap-3 rounded-lg border border-grey-20 bg-white px-5 text-[16px] font-medium text-grey-90 transition-colors hover:border-primary/50"
            >
              <PlayIcon />
              Learn how to pay fees internationally
            </a>
          </div>
        </div>
      </LandingInset>

      {/* ── Hero image ── */}
      <div className="mx-auto mt-12 w-full max-w-[1440px] flex justify-center">
        <img
          src={figma.internationalFeeHero}
          alt="International fee payment on PayByLeap"
          className="w-[60%] object-contain"
        />
      </div>

    </section>
  );
}
