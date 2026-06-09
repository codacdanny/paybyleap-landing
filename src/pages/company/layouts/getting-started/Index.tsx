import { LandingInset } from "@/components/landing-inset/Index";

export function GrowthMissionBanner() {
  return (
    <section className="bg-[#1D1111] py-20 min-[1440px]:py-[120px]">
      <LandingInset>
        <svg
          viewBox="0 0 160 40"
          className="mx-auto mb-8 h-9 w-[160px]"
          fill="none"
          aria-hidden
        >
          <path
            d="M10 24 Q60 6 122 16"
            stroke="#9A0000"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <circle cx="136" cy="22" r="6" fill="#F6C03A" />
        </svg>
        <h2 className="mx-auto max-w-[820px] text-center font-nohemi text-[40px] font-bold leading-[1.15] text-white md:text-[52px] min-[1440px]:text-[60px]">
          We are just getting started: continuously building, improving &
          expanding to serve more users globally
        </h2>
      </LandingInset>
    </section>
  );
}
