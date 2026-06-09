import type { ReactNode } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const leftFeatures = [
  "PERFORM INSTANT CURRENCY EXCHANGE",
  "PAY INTERNATIONAL SCHOOL FEES & BILLS",
  "USE STABLECOIN POWERED VISUAL CARDS",
];

const rightFeatures = [
  "SEND & RECEIVE GLOBAL PAYMENTS",
  "GENERATE & MANAGE GLOBAL INVOICES",
  "SEND & RECEIVE CRYPTO SEAMLESSLY",
];

function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[28px] border border-primary/50 bg-gradient-to-b from-[#2b1f1f] to-[#1a1212] px-5 py-4 shadow-[0_22px_45px_-15px_rgba(0,0,0,0.85)] min-[1440px]:gap-4 min-[1440px]:px-6 min-[1440px]:py-5 ${className}`}
    >
      <img
        src={figma.star}
        alt=""
        className="size-5 shrink-0 min-[1440px]:size-6"
      />
      <span className="flex-1 text-center text-[13px] font-semibold uppercase leading-[1.3] tracking-wide text-white min-[1440px]:text-[15px]">
        {children}
      </span>
    </div>
  );
}

export function ProductEcosystemSection() {
  return (
    <section className="overflow-hidden bg-[#1D1111] py-16 min-[1440px]:py-[100px]">
      {/* Header */}
      <LandingInset>
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-secondary">
            What We Do
          </p>
          <h2 className="mt-4 font-nohemi text-[36px] font-bold leading-[1.15] text-white md:text-[44px] min-[1440px]:text-[52px]">
            Our Financial Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-[16px] leading-[1.6] text-white/60 min-[1440px]:text-[17px]">
            Mobile-first platform enabling global financial transactions with
            speed and control.
          </p>
        </div>
      </LandingInset>

      {/* ── Desktop layout (1440px+) — phone centred with pills floating around ── */}
      <div className="relative mx-auto mt-12 hidden h-[960px] max-w-[1440px] min-[1440px]:block">
        {/* Top pill */}
        <div className="absolute left-1/2 top-0 z-[1] -translate-x-1/2">
          <Pill className="w-[560px]">OPEN AND MANAGE FOREIGN ACCOUNTS</Pill>
        </div>

        {/* Phone */}
        <div className="absolute left-1/2 top-[120px] flex w-[360px] -translate-x-1/2 justify-center">
          <img
            src={figma.getMoreIphoneMock}
            alt="PayByLeap app"
            className="w-full object-contain"
          />
        </div>

        {/* Left pills */}
        <div className="absolute left-[115px] top-[200px] z-[1]">
          <Pill className="w-[420px]">{leftFeatures[0]}</Pill>
        </div>
        <div className="absolute left-[115px] top-[505px] z-[1]">
          <Pill className="w-[420px]">{leftFeatures[1]}</Pill>
        </div>
        <div className="absolute left-[115px] top-[740px] z-[1]">
          <Pill className="w-[420px]">{leftFeatures[2]}</Pill>
        </div>

        {/* Right pills */}
        <div className="absolute right-[115px] top-[150px] z-[1]">
          <Pill className="w-[420px]">{rightFeatures[0]}</Pill>
        </div>
        <div className="absolute right-[115px] top-[400px] z-[1]">
          <Pill className="w-[420px]">{rightFeatures[1]}</Pill>
        </div>
        <div className="absolute right-[115px] top-[705px] z-[1]">
          <Pill className="w-[420px]">{rightFeatures[2]}</Pill>
        </div>
      </div>

      {/* ── Tablet / Mobile layout (below 1440px) ── */}
      <LandingInset className="min-[1440px]:hidden">
        <div className="mt-12 flex flex-col items-center gap-8">
          <Pill className="w-full max-w-[440px]">
            OPEN AND MANAGE FOREIGN ACCOUNTS
          </Pill>

          <img
            src={figma.getMoreIphoneMock}
            alt="PayByLeap app"
            className="w-[240px] object-contain sm:w-[280px]"
          />

          <div className="flex w-full max-w-[440px] flex-col gap-4">
            {[...leftFeatures, ...rightFeatures].map((f) => (
              <Pill key={f}>{f}</Pill>
            ))}
          </div>
        </div>
      </LandingInset>

      {/* All-in-one banner */}
      <LandingInset>
        <h2 className="mt-16 text-center font-nohemi text-[40px] font-bold leading-[1.18] text-white md:text-[52px] min-[1440px]:mt-20 min-[1440px]:text-[64px]">
          All-in-one{" "}
          <span className="bg-gradient-to-r from-[#F6C03A] to-[#F2772E] bg-clip-text text-transparent">
            platform
          </span>
          ,
          <br />
          Instant and{" "}
          <span className="bg-gradient-to-r from-[#F2933C] via-[#E0481E] to-[#9A0000] bg-clip-text text-transparent">
            transparent
          </span>
          <br />
          transactions
        </h2>
      </LandingInset>
    </section>
  );
}
