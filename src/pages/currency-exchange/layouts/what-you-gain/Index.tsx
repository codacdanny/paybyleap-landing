import { useRef, useState, useEffect, useCallback } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const cards = [
  {
    id: "real-time",
    title: "Real-Time conversion",
    desc: "Paybyleap delivers real-time competitive exchange rates with no hidden fees, ensuring transparent and reliable global currency conversion.",
    bg: "bg-white",
    textColor: "text-grey-90",
    descColor: "text-grey-60",
    visual: (
      <div className="mb-4 flex items-center gap-2">
        <div className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-grey-10 bg-white">
          <img src={figma.flagUs} alt="USD" className="size-full object-cover" />
        </div>
        <img src={figma.transferArrow} alt="" className="size-5 object-contain opacity-40" />
        <div className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-grey-10 bg-white">
          <img src={figma.euFlag} alt="EUR" className="size-full object-cover" />
        </div>
        <img src={figma.transferArrow} alt="" className="size-5 object-contain opacity-40" />
        <div className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-grey-10 bg-white">
          <img src={figma.flagNg} alt="NGN" className="size-full object-cover" />
        </div>
      </div>
    ),
  },
  {
    id: "multi-currency",
    title: "Multi-Currency Support",
    desc: "Access and transact in multiple global currencies from a single account — NGN, USD, GBP, EUR, CAD and more.",
    bg: "bg-[#FFF3F3]",
    textColor: "text-grey-90",
    descColor: "text-grey-60",
    visual: (
      <div className="mb-4 flex flex-wrap gap-2">
        {[figma.flagNg, figma.flagUs, figma.flagUk, figma.euFlag, figma.flagCa, figma.flagCn].map(
          (flag, i) => (
            <div
              key={i}
              className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-grey-10 bg-white"
            >
              <img src={flag} alt="" className="size-full object-cover" />
            </div>
          )
        )}
      </div>
    ),
  },
  {
    id: "zero-fees",
    title: "Zero Hidden Fees",
    desc: "All costs are transparent and shown upfront. What you see is exactly what you pay — no surprises.",
    bg: "bg-grey-100",
    textColor: "text-white",
    descColor: "text-white/60",
    visual: null,
  },
  {
    id: "instant-conversion",
    title: "Instant Conversion",
    desc: "Convert between currencies instantly without waiting for confirmation or processing delays.",
    bg: "bg-[#FBF2D6]",
    textColor: "text-grey-90",
    descColor: "text-grey-60",
    visual: null,
  },
];

export function WhatYouGainSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 24
      : 340;
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
    const cardW = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 24
      : 340;
    el.scrollTo({ left: cardW * idx, behavior: "smooth" });
  };

  const scrollBy = (dir: -1 | 1) => {
    const next = Math.max(0, Math.min(cards.length - 1, active + dir));
    scrollTo(next);
  };

  return (
    <section className="overflow-hidden bg-[#FBF2D6] py-16 min-[1440px]:py-[80px]">
      <LandingInset>
        <div className="flex items-center justify-between">
          <h2 className="max-w-[540px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
            What you gain using Paybyleap Currency Exchange
          </h2>
          <div className="hidden shrink-0 items-center gap-3 min-[1440px]:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="flex size-[52px] items-center justify-center rounded-full border border-grey-20 bg-white transition-colors hover:bg-grey-10 disabled:opacity-40"
              disabled={active === 0}
            >
              <img src={figma.navArrowLeft} alt="" className="size-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="flex size-[52px] items-center justify-center rounded-full border border-grey-20 bg-white transition-colors hover:bg-grey-10 disabled:opacity-40"
              disabled={active === cards.length - 1}
            >
              <img src={figma.navArrowRight} alt="" className="size-5" />
            </button>
          </div>
        </div>
      </LandingInset>

      <div
        ref={scrollRef}
        className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 md:px-8 min-[1440px]:mt-12 min-[1440px]:px-[160px]"
      >
        {cards.map((c) => (
          <div
            key={c.id}
            className={`min-w-[280px] snap-start rounded-2xl p-6 md:min-w-[340px] min-[1440px]:min-w-[380px] min-[1440px]:p-8 ${c.bg}`}
          >
            {c.visual}
            <h3
              className={`text-[20px] font-semibold leading-7 min-[1440px]:text-[24px] ${c.textColor}`}
            >
              {c.title}
            </h3>
            <p
              className={`mt-3 text-[14px] leading-6 min-[1440px]:text-[16px] min-[1440px]:leading-7 ${c.descColor}`}
            >
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Dot pagination */}
      <div className="mt-8 flex items-center justify-center gap-1.5">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-2xl transition-all duration-300 ${
              i === active ? "w-16 bg-primary" : "w-6 bg-grey-30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
