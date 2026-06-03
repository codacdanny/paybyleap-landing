import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const leftFeatures = [
  "OPEN AND MANAGE FOREIGN ACCOUNTS",
  "PERFORM INSTANT CURRENCY EXCHANGE",
  "PAY INTERNATIONAL SCHOOL FEES & BILLS",
  "USE STABLECOIN POWERED VIRTUAL CARDS",
];

const rightFeatures = [
  "SEND & RECEIVE GLOBAL PAYMENTS",
  "GENERATE & MANAGE GLOBAL INVOICES",
  "SEND & RECEIVE CRYPTO SEAMLESSLY",
];

function FeatureRow({ label, side }: { label: string; side: "left" | "right" }) {
  return (
    <div
      className={`flex items-center gap-3 ${side === "right" ? "flex-row-reverse" : ""}`}
    >
      <div className="flex h-[44px] items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-white/70 min-[1440px]:text-[12px]">
          {label}
        </span>
      </div>
      <div className="h-px w-8 bg-white/20" />
      <div className="size-2 shrink-0 rounded-full bg-primary" />
    </div>
  );
}

export function StatsOfficesSection() {
  return (
    <section className="bg-[#1D1212] py-16 min-[1440px]:py-[100px]">
      <LandingInset>
        {/* Header */}
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </p>
          <h2 className="mt-4 font-nohemi text-[36px] font-bold leading-[1.15] text-white md:text-[44px] min-[1440px]:text-[52px]">
            Our Financial Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-[1.7] text-white/60 min-[1440px]:text-[18px]">
            Mobile-first platform enabling global financial transactions with
            speed and control.
          </p>
        </div>

        {/* Ecosystem layout */}
        <div className="mt-14 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-6 min-[1440px]:mt-16">

          {/* Left features */}
          <div className="flex flex-col gap-4 lg:flex-1 lg:items-end lg:pt-12">
            {leftFeatures.map((f) => (
              <FeatureRow key={f} label={f} side="left" />
            ))}
          </div>

          {/* Center phone */}
          <div className="shrink-0">
            <img
              src={figma.getMoreIphoneMock}
              alt="PayByLeap app"
              className="w-[240px] object-contain min-[1440px]:w-[280px]"
            />
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-4 lg:flex-1 lg:items-start lg:pt-12">
            {rightFeatures.map((f) => (
              <FeatureRow key={f} label={f} side="right" />
            ))}
          </div>
        </div>

        {/* All-in-one banner */}
        <div className="mt-20 text-center min-[1440px]:mt-24">
          <h2 className="font-nohemi text-[40px] font-bold leading-[1.15] text-white md:text-[52px] min-[1440px]:text-[64px]">
            All-in-one platform,
            <br />
            <span className="text-primary">Instant</span> and{" "}
            <span className="text-primary">transparent</span>
            <br />
            transactions
          </h2>
        </div>
      </LandingInset>
    </section>
  );
}
