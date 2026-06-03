import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const cards = [
  {
    id: "cross-border",
    title: "Seamless Cross-border Payments",
    desc: "Send and receive money across borders quickly and reliably with minimal delays.",
    bg: "bg-[#2A1E1E]",
    image: figma.heroGlobalMT,
    imageClass: "w-full object-contain",
  },
  {
    id: "mobile-first",
    title: "Mobile-first Ecosystem",
    desc: "A fully mobile-optimised platform built for speed, simplicity, and global access.",
    bg: "bg-[#222222]",
    image: figma.transactionsPhone,
    imageClass: "h-[220px] object-contain mx-auto",
  },
  {
    id: "unified",
    title: "Unified Financial Ecosystem",
    desc: "One platform for accounts, exchange, crypto, invoicing, and international payments.",
    bg: "bg-[#FBF2D6]",
    image: figma.femalePhoneMockup,
    imageClass: "h-[220px] w-full object-cover object-top",
    dark: false,
  },
  {
    id: "global-access",
    title: "Global Accessibility",
    desc: "Financial tools for everyone, everywhere — breaking barriers for underserved users worldwide.",
    bg: "bg-primary",
    image: figma.faGlobe,
    imageClass: "h-[180px] w-full object-contain opacity-30 mx-auto",
  },
];

export function MissionVisionSection() {
  return (
    <section className="bg-[#1D1111] py-16 min-[1440px]:py-[100px]">
      <LandingInset>
        <h2 className="font-nohemi text-[36px] font-bold leading-[1.15] text-white md:text-[44px] min-[1440px]:text-[52px]">
          Benefits/Value proposition
          <br />
          of <span className="text-primary">Paybyleap</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 min-[1440px]:mt-14 min-[1440px]:gap-6">
          {cards.map((c) => (
            <div
              key={c.id}
              className={`relative overflow-hidden rounded-2xl p-6 min-[1440px]:p-8 ${c.bg}`}
              style={{ minHeight: 320 }}
            >
              <h3
                className={`text-[22px] font-semibold leading-[1.3] min-[1440px]:text-[26px] ${c.dark === false ? "text-grey-90" : "text-white"}`}
              >
                {c.title}
              </h3>
              <p
                className={`mt-3 max-w-[320px] text-[15px] leading-6 min-[1440px]:text-[16px] ${c.dark === false ? "text-grey-70" : "text-white/70"}`}
              >
                {c.desc}
              </p>
              <div className="mt-6 overflow-hidden rounded-xl">
                <img src={c.image} alt="" aria-hidden className={c.imageClass} />
              </div>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
