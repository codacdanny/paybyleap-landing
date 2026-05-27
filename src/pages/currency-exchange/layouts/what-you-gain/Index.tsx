import { useRef, useState, useEffect, useCallback } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const cards = [
  {
    id: "real-time",
    title: "Real-time conversion",
    desc: "Instantly updates using live exchange rates for accurate and seamless transactions.",
    bg: "bg-white",
  },
  {
    id: "multi-currency",
    title: "Multi-currency Support",
    desc: "Access and transact in multiple global currencies from a single account with ease.",
    bg: "bg-white",
    flags: [figma.flagNg, figma.flagUs, figma.flagUk, figma.euFlag, figma.flagCa],
  },
  {
    id: "low-fees",
    title: "Low Fees",
    desc: "All costs are transparent and shown upfront — no hidden charges, ever.",
    bg: "bg-white",
  },
  {
    id: "instant",
    title: "Instant Conversion",
    desc: "Convert between currencies instantly without processing delays.",
    bg: "bg-white",
  },
];

export function WhatYouGainSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const cardW = first ? first.offsetWidth + 24 : 340;
    setActive(Math.round(el.scrollLeft / cardW));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncActive, { passive: true });
    return () => el.removeEventListener("scroll", syncActive);
  }, [syncActive]);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const cardW = first ? first.offsetWidth + 24 : 340;
    el.scrollTo({ left: cardW * idx, behavior: "smooth" });
  };

  const go = (dir: -1 | 1) =>
    scrollTo(Math.max(0, Math.min(cards.length - 1, active + dir)));

  return (
    /* Section — warm cream bg, relative so the diagonal overlay is contained */
    <section className="relative overflow-hidden bg-[#F0EAC4] mt-[35px] pb-[100px] pt-[72px] min-[1440px]:pb-[120px] min-[1440px]:pt-[88px]">

      {/* ── Header row: heading left, nav arrows right ── */}
      <LandingInset>
        <div className="flex items-start justify-between gap-4">
          <h2 className="max-w-[700px] font-nohemi text-[42px] font-bold leading-[1.2] text-grey-100 md:text-[52px] min-[1440px]:text-[62px] min-[1440px]:leading-[1.15]">
            What you gain using{" "}
            <span className="text-primary">Paybyleap</span>
            <br />
            <span className="text-primary">Currency</span> Exchange
          </h2>

          {/* Nav arrows */}
          <div className="mt-1 flex shrink-0 items-center gap-4">
            {/* Left — disabled when at first card */}
            <button
              onClick={() => go(-1)}
              disabled={active === 0}
              aria-label="Previous"
              className={`flex size-[70px] items-center justify-center rounded-full border-2 transition-colors min-[1440px]:size-[80px] ${
                active === 0
                  ? "border-grey-20 text-grey-30"
                  : "border-grey-90 text-grey-90 hover:bg-grey-100/5"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden>
                <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Right — disabled when at last card */}
            <button
              onClick={() => go(1)}
              disabled={active === cards.length - 1}
              aria-label="Next"
              className={`flex size-[70px] items-center justify-center rounded-full border-2 transition-colors min-[1440px]:size-[80px] ${
                active === cards.length - 1
                  ? "border-grey-20 text-grey-30"
                  : "border-grey-90 text-grey-90 hover:bg-grey-100/5"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden>
                <path d="M5 12h14M14 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </LandingInset>

      {/* ── Cards carousel ── */}
      <div
        ref={scrollRef}
        className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 md:px-8 min-[1440px]:mt-14 min-[1440px]:px-[160px]"
      >
        {cards.map((c) => (
          <div
            key={c.id}
            className="min-w-[300px] snap-start rounded-2xl bg-white p-7 shadow-[0px_4px_24px_rgba(0,0,0,0.07)] md:min-w-[360px] min-[1440px]:min-w-[400px] min-[1440px]:p-8"
          >
            {/* Red icon circle */}
            <div className="flex size-[52px] items-center justify-center rounded-full bg-primary min-[1440px]:size-[60px]">
              <svg viewBox="0 0 24 24" fill="none" className="size-6 text-white" aria-hidden>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Flag row (multi-currency only) */}
            {c.flags && (
              <div className="mt-4 flex items-center gap-1.5">
                {c.flags.map((flag, i) => (
                  <div key={i} className="flex size-7 overflow-hidden rounded-full border-2 border-white shadow-sm">
                    <img src={flag} alt="" className="size-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            <h3 className="mt-5 font-nohemi text-[20px] font-bold text-grey-90 min-[1440px]:text-[22px]">
              {c.title}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.65] text-grey-60 min-[1440px]:text-[15px]">
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── Progress dots ── */}
      <div className="mt-10 flex items-center justify-center gap-2.5">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[8px] rounded-full transition-all duration-300 ${
              i === active
                ? "w-[52px] bg-primary"
                : "w-[28px] bg-grey-20"
            }`}
          />
        ))}
      </div>

      {/* ── Bottom-right diagonal triangle — transitions into the dark section ── */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[42%] w-[52%]"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-grey-100"
          style={{ clipPath: "polygon(42% 100%, 100% 0%, 100% 100%)" }}
        />
      </div>
    </section>
  );
}
