import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

export interface ProductBenefitCard {
  id: string;
  title: string;
  desc: string;
  icon?: string;
  currencySymbols?: string[];
}

interface Props {
  heading: ReactNode;
  sectionClassName?: string;
  cards: ProductBenefitCard[];
}

export function ProductBenefitsCarousel({ heading, sectionClassName = "bg-[#FBF2D6]", cards }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const syncActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const cardW = first ? first.offsetWidth + 16 : 340;
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
    const cardW = first ? first.offsetWidth + 16 : 340;
    el.scrollTo({ left: cardW * idx, behavior: "smooth" });
  };

  const go = (dir: -1 | 1) =>
    scrollTo(Math.max(0, Math.min(cards.length - 1, active + dir)));

  const leftSrc = canScrollLeft ? figma.navArrowRight : figma.navArrowLeft;
  const rightSrc = canScrollRight ? figma.navArrowRight : figma.navArrowLeft;

  return (
    <section className={`relative pb-[100px] pt-[104px] min-[1440px]:pb-[120px] ${sectionClassName}`}>

      <LandingInset>
        <div className="flex items-start justify-between gap-4">
          <h2 className="w-[700px] font-nohemi text-[48px] font-semibold leading-[1.2] text-grey-100">
            {heading}
          </h2>
          <div className="mt-1 flex shrink-0 items-center gap-4">
            <button type="button" onClick={() => go(-1)} disabled={!canScrollLeft} aria-label="Previous"
              className="flex size-[72px] shrink-0 items-center justify-center disabled:cursor-default min-[1440px]:size-[100px]">
              <img src={leftSrc} alt="" className={`size-full object-contain ${canScrollLeft ? "rotate-180" : ""}`} />
            </button>
            <button type="button" onClick={() => go(1)} disabled={!canScrollRight} aria-label="Next"
              className="flex size-[72px] shrink-0 items-center justify-center disabled:cursor-default min-[1440px]:size-[100px]">
              <img src={rightSrc} alt="" className={`size-full object-contain ${canScrollRight ? "" : "rotate-180"}`} />
            </button>
          </div>
        </div>
      </LandingInset>

      <LandingInset>
        <div
          ref={scrollRef}
          className="scrollbar-hide mt-12 flex w-full snap-x snap-mandatory gap-[16px] overflow-x-auto min-[1440px]:mt-14"
        >
          {cards.map((c) => (
            <div
              key={c.id}
              className="h-[217px] w-[407px] shrink-0 snap-start rounded-2xl border border-primary bg-white p-[24px] shadow-[0px_4px_24px_rgba(0,0,0,0.07)]"
            >
              {c.currencySymbols ? (
                <div className="flex items-center">
                  {c.currencySymbols.map((symbol: string, i: number) => (
                    <div
                      key={i}
                      className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-primary bg-[#FFF4F4] font-nohemi text-[22px] font-semibold text-primary"
                      style={{ marginLeft: i === 0 ? 0 : "-16px", zIndex: i }}
                    >
                      {symbol}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex size-[70px] items-center justify-center rounded-full bg-[#FFF4F4]">
                  <img
                    src={c.icon ?? figma.realtimeconversionIcon}
                    alt=""
                    className="size-[32px] object-contain"
                  />
                </div>
              )}
              <h3 className="mt-2 font-nohemi text-[24px] font-semibold text-grey-90">{c.title}</h3>
              <p className="mt-2 font-spartan text-[16px] font-normal leading-[1.65] text-grey-60">{c.desc}</p>
            </div>
          ))}
        </div>
      </LandingInset>

      <div className="mt-10 flex items-center justify-center gap-2.5">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[8px] rounded-full transition-all duration-300 ${
              i === active ? "w-[52px] bg-primary" : "w-[28px] bg-grey-20"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
