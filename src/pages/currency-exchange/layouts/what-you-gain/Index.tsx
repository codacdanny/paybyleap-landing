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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const syncActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const cardW = first ? first.offsetWidth + 24 : 340;
    setActive(Math.round(el.scrollLeft / cardW));
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    syncActive();
    el.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      el.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
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

  const leftSrc = canScrollLeft ? figma.navArrowRight : figma.navArrowLeft;
  const leftRotate = canScrollLeft ? "rotate-180" : "";
  const rightSrc = canScrollRight ? figma.navArrowRight : figma.navArrowLeft;
  const rightRotate = canScrollRight ? "" : "rotate-180";

  return (
    /* Section — warm cream bg, relative so the diagonal overlay is contained */
    <section className="relative bg-[#FBF2D6] mt-[35px] pb-[100px] pt-[104px] min-[1440px]:pb-[120px]">

      {/* ── Header row: heading left, nav arrows right ── */}
      <LandingInset>
        <div className="flex items-start justify-between gap-4">
          <h2 className="max-w-[700px] font-nohemi text-[48px] font-semibold leading-[1.2] text-grey-100 ">
            What you gain using{" "}
            <span className="text-primary">Paybyleap</span>
            <br />
            <span className="text-primary">Currency</span> Exchange
          </h2>

          {/* Nav arrows */}
          <div className="mt-1 flex shrink-0 items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={!canScrollLeft}
              aria-label="Previous"
              className="flex size-[72px] shrink-0 items-center justify-center disabled:cursor-default min-[1440px]:size-[100px]"
            >
              <img src={leftSrc} alt="" className={`size-full object-contain ${leftRotate}`} />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              disabled={!canScrollRight}
              aria-label="Next"
              className="flex size-[72px] shrink-0 items-center justify-center disabled:cursor-default min-[1440px]:size-[100px]"
            >
              <img src={rightSrc} alt="" className={`size-full object-contain ${rightRotate}`} />
            </button>
          </div>
        </div>
      </LandingInset>

      {/* ── Cards carousel ── */}
      <LandingInset>
      <div
        ref={scrollRef}
        className="scrollbar-hide mt-12 flex w-full snap-x snap-mandatory gap-[16px] overflow-x-auto min-[1440px]:mt-14"
      >
        {cards.map((c) => (
          <div
            key={c.id}
            className="min-w-[407px] h-[217px] p-[24px] rounded-2xl bg-white border border-primary shadow-[0px_4px_24px_rgba(0,0,0,0.07)]"
          >
            {c.id === "multi-currency" ? (
              <div className="flex items-center">
                {["₦", "$", "€"].map((symbol, i) => (
                  <div
                    key={i}
                    className="flex size-[70px] shrink-0 items-center justify-center rounded-full bg-[#FFF4F4] border border-primary font-nohemi text-[22px] font-semibold text-primary"
                    style={{ marginLeft: i === 0 ? 0 : "-16px", zIndex: i }}
                  >
                    {symbol}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-full bg-[#FFF4F4] size-[70px]">
                <img src={figma.realtimeconversionIcon} alt="icon" className="size-[32px] object-cover" />
              </div>
            )}

            <h3 className="mt-2 font-nohemi text-[24px] font-semibold text-grey-90">
              {c.title}
            </h3>
            <p className="mt-2 font-spartan font-normal text-[16px] leading-[1.65] text-grey-60">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
      </LandingInset>

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

    </section>
  );
}
