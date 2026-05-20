import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const pills = [
  "LIVE EXCHANGE RATE",
  "CURRENCY WALLET INTEGRATION",
  "TRANSPARENT FEES",
  "INSTANT CONVERSION BETWEEN ACCOUNT",
  "TRANSACTION HISTORY & REPORT",
  "ANTI-FRAUD PROTECTION",
  "NOTIFICATIONS ON CONVERSIONS",
];

function SparkleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-[14px] shrink-0" aria-hidden>
      <path
        d="M8 1v14M1 8h14M3.1 3.1l9.8 9.8M12.9 3.1 3.1 12.9"
        stroke="#F6C03A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CurrencyBenefitsDark() {
  return (
    <section className="relative overflow-hidden bg-grey-100">

      {/* ── Dark red curved arc — decorative left element ── */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[35%] h-[520px] w-[520px] rounded-full border-[80px] border-primary/40"
        aria-hidden
        style={{ transform: "rotate(-30deg) scaleX(0.55)" }}
      />

      {/* ── Golden glow — bottom right ── */}
      <div
        className="pointer-events-none absolute bottom-[22%] right-[8%] h-[80px] w-[80px] rounded-full"
        aria-hidden
        style={{ background: "radial-gradient(circle, rgba(180,140,20,0.55) 0%, transparent 70%)", width: "120px", height: "120px" }}
      />

      <LandingInset className="relative z-10 pb-0 pt-16 min-[1440px]:pt-[88px]">
        {/* ── Centered heading ── */}
        <h2 className="text-center font-nohemi text-[36px] font-bold leading-[1.2] text-white md:text-[44px] min-[1440px]:text-[52px]">
          Get more from{" "}
          <span className="text-secondary">Paybyleap</span>
          <br />
          <span className="text-secondary">Currency</span> Exchange
        </h2>

        {/* ── Feature pills ── */}
        <div className="mt-10 flex flex-wrap gap-3 min-[1440px]:mt-12 min-[1440px]:gap-4">
          {pills.map((pill) => (
            <div
              key={pill}
              className="inline-flex h-[48px] items-center gap-2.5 rounded-full bg-white px-5 min-[1440px]:h-[54px] min-[1440px]:px-6"
            >
              <SparkleIcon />
              <span className="whitespace-nowrap text-[12px] font-bold uppercase tracking-wide text-grey-90 min-[1440px]:text-[13px]">
                {pill}
              </span>
            </div>
          ))}
        </div>
      </LandingInset>

      {/* ── Phone with hand — centered, bleeds edge to edge ── */}
      <div className="relative z-10 mt-[-20px] flex justify-center min-[1440px]:mt-[-32px]">
        <img
          src={figma.iphoneLayout}
          alt="PayByLeap currency exchange app in hand"
          className="w-full max-w-[360px] object-contain sm:max-w-[420px] md:max-w-[500px] min-[1440px]:max-w-[580px]"
        />
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 flex flex-col items-center gap-6 pb-20 pt-4 text-center min-[1440px]:pb-24">
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
