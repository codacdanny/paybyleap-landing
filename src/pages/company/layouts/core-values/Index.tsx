import { LandingInset } from "@/components/landing-inset/Index";

const values = [
  {
    id: "transparency",
    title: "Transparency First",
    desc: "Users know exactly what they're paying and why — no hidden fees, no surprises.",
    col: "sm:col-span-1",
  },
  {
    id: "user-centric",
    title: "User-centric Innovation",
    desc: "Solutions that solve a specific problem — designed around real user needs.",
    col: "sm:col-span-1",
  },
  {
    id: "global-access",
    title: "Global Accessibility",
    desc: "Financial tools for everyone, everywhere — especially the underserved.",
    col: "sm:col-span-1",
  },
  {
    id: "reliability",
    title: "Reliability, Real Trust",
    desc: "Secure, stable & institutional-grade infrastructure you can count on.",
    col: "sm:col-span-1",
  },
  {
    id: "improvement",
    title: "Continuous Improvement",
    desc: "Evolving with a changing world — always building, always iterating.",
    col: "sm:col-span-2 min-[1440px]:col-span-1",
  },
];

const ValueIcon = () => (
  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/20">
    <svg viewBox="0 0 24 24" fill="none" className="size-5 text-primary" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export function CoreValuesSection() {
  return (
    <section className="bg-[#1D1212] py-16 min-[1440px]:py-[100px]">
      <LandingInset>
        <h2 className="font-nohemi text-[36px] font-bold leading-[1.15] text-white md:text-[44px] min-[1440px]:text-[52px]">
          Our Core Values
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 min-[1440px]:mt-12 min-[1440px]:grid-cols-3 min-[1440px]:gap-6">
          {values.map((v) => (
            <div
              key={v.id}
              className={`rounded-2xl border border-white/10 bg-[#2A1A1A] p-6 min-[1440px]:p-8 ${v.col}`}
            >
              <ValueIcon />
              <h3 className="mt-4 text-[20px] font-semibold text-white min-[1440px]:text-[22px]">
                {v.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-white/60 min-[1440px]:text-[16px]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
