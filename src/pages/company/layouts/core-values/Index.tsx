import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const values = [
  {
    id: "transparency",
    num: "01",
    title: "Transparency first: Users know what they are paying and why",
    image: figma.coreValue1,
  },
  {
    id: "user-centric",
    num: "02",
    title: "User-centric innovation: solutions that solve real problems",
    image: figma.coreValue2,
  },
  {
    id: "global-access",
    num: "03",
    title: "Global accessibility: financial tools for everyone, everywhere",
    image: figma.coreValue3,
  },
  {
    id: "reliability",
    num: "04",
    title: "Reliability and trust: secure, stable & consistent transactions",
    image: figma.coreValue4,
  },
  {
    id: "improvement",
    num: "05",
    title: "Continuous improvement: evolving with a changing world",
    image: figma.coreValue5,
  },
];

export function CoreValuesSection() {
  return (
    <section className="bg-[#1D1111] py-16 min-[1440px]:py-[100px]">
      <LandingInset>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <h2 className="font-nohemi text-[36px] font-bold leading-[1.1] text-white md:text-[44px] min-[1440px]:text-[48px]">
            Our Core
            <br />
            Values
          </h2>

          {values.map((v) => (
            <div
              key={v.id}
              className="flex min-h-[460px] flex-col rounded-2xl bg-[#2A2222] p-6 min-[1440px]:min-h-[500px] min-[1440px]:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-medium text-white/55">
                  {v.num}
                </span>
                <span className="h-px flex-1 bg-white/15" />
                <svg viewBox="0 0 24 24" fill="none" className="size-4 text-white/40" aria-hidden>
                  <path
                    d="M6 7l5 5-5 5M13 7l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-[18px] font-semibold leading-[1.4] text-white min-[1440px]:text-[20px]">
                {v.title}
              </h3>

              <div className="mt-auto flex items-end justify-center pt-6">
                <img
                  src={v.image}
                  alt=""
                  aria-hidden
                  className="max-h-[220px] w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
