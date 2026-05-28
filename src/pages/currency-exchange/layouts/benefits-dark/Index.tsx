import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { FeaturePill } from "@/components/ui/feature-pill/Index";

const pills = [
  { label: "LIVE EXCHANGE RATE" },
  { label: "CURRENCY WALLET INTEGRATION" },
  { label: "TRANSPARENT FEES" },
  { label: "INSTANT CONVERSION BETWEEN ACCOUNT" },
  { label: "TRANSACTION HISTORY & REPORT" },
  { label: "ANTI-FRAUD PROTECTION" },
  { label: "NOTIFICATIONS ON CONVERSIONS" },
];

export function CurrencyBenefitsDark() {
  return (
    <section className="relative overflow-hidden bg-grey-100">

      {/* ── Large logo watermark — decorative background ── */}
      <img
        src={figma.leapLogoLarge}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
      />



      <LandingInset className="relative z-10 pb-0 pt-16 min-[1440px]:pt-[88px]">
        {/* ── Centered heading ── */}
        <h2 className="text-center font-spartan text-[48px] font-semibold leading-[1.2] text-white">
          Get more from{" "}
          <span className="text-secondary">Paybyleap</span>
          <br />
          <span className="text-secondary">Currency</span> Exchange
        </h2>

        {/* ── Feature pills ── */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-[34px] min-[1440px]:mt-12">
          {pills.map((pill) => (
            <FeaturePill key={pill.label} label={pill.label} />
          ))}
        </div>
      </LandingInset>

      {/* ── Phone with hand — centered, bleeds edge to edge ── */}
      <div className="relative z-10 mt-[-20px] flex justify-center min-[1440px]:mt-[-32px]">
        <img
          src={figma.handheld}
          alt="PayByLeap currency exchange app in hand"
          className="w-full max-w-[850px] max-h-[796px] object-contain "
        />
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 flex flex-col items-center gap-6 pb-20 mt-12 text-center min-[1440px]:pb-24">
        <h2 className="font-nohemi text-[40px] font-bold leading-[1.15] text-white md:text-[52px] min-[1440px]:text-[62px]">
          Convert Currency
          <br />
          easily Today!
        </h2>
        <a
          href="#"
          className="inline-flex h-[52px] items-center justify-center rounded-lg bg-primary px-10 text-[16px] font-semibold text-white transition-opacity hover:opacity-90 min-[1440px]:h-[56px] min-[1440px]:text-[17px]"
        >
          Get Started - it's Free
        </a>
      </div>
    </section>
  );
}
