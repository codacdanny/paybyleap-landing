import { useRef, useState, useCallback, useEffect } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { Button } from "@/components/ui/button/Index";

const cards = [
  {
    title: "Bill Payments",
    body: " enable users to conveniently pay for utilities and subscription services across the globe, allowing seamless, secure, and timely transactions",
    image: figma.serviceBillPayments,
    gradient: "linear-gradient(234deg, rgba(0,0,0,0) 25.5%, rgb(0,0,0) 84.4%)",
  },
  {
    title: "Expenses Management",
    body: "It allows users to effectively monitor, track, and categorize their spending in real time, providing clear insights into where their money goes by organizing expenses into meaningful categories",
    image: figma.serviceExpenses,
    gradient: "linear-gradient(222deg, rgba(0,0,0,0) 25%, rgb(0,0,0) 81.7%)",
  },
];

export function AdditionalServicesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth * 0.85;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const leftSrc = canScrollLeft ? figma.navArrowRight : figma.navArrowLeft;
  const leftRotate = canScrollLeft ? "rotate-180" : "";

  const rightSrc = canScrollRight ? figma.navArrowRight : figma.navArrowLeft;
  const rightRotate = canScrollRight ? "" : "rotate-180";

  return (
    <section className="bg-[#fbf7fb] py-12 md:py-16 lg:py-24">
      <LandingInset>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[708px]">
            <h2 className="font-nohemi text-[24px] font-semibold leading-8 text-grey-100 min-[1440px]:text-[36px] min-[1440px]:font-medium min-[1440px]:leading-[56px]">
              Additional Services Available in the App
            </h2>
            <Button className="mt-6 h-12 min-h-[48px] w-[190px] border-2 border-secondary bg-primary px-4 text-[18px] font-medium min-[1440px]:mt-[23px] min-[1440px]:h-[58px]">
              Download the app
            </Button>
          </div>
          <div className="hidden shrink-0 items-center lg:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              className="flex size-[72px] shrink-0 items-center justify-center disabled:cursor-default min-[1440px]:size-[100px]"
              aria-label="Previous services"
            >
              <img
                src={leftSrc}
                alt=""
                className={`size-full object-contain ${leftRotate}`}
              />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              className="flex size-[72px] shrink-0 items-center justify-center disabled:cursor-default min-[1440px]:size-[100px]"
              aria-label="Next services"
            >
              <img
                src={rightSrc}
                alt=""
                className={`size-full object-contain ${rightRotate}`}
              />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="scrollbar-hide mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 min-[1440px]:mt-14 min-[1440px]:gap-10"
        >
          {cards.map((c) => (
            <article
              key={c.title}
              className="relative h-[619px] w-[min(90vw,324px)] shrink-0 snap-center overflow-hidden rounded-lg md:h-[480px] md:w-[min(85vw,555px)] md:rounded-2xl min-[1440px]:h-[575px] min-[1440px]:rounded-[16px]"
            >
              <img
                src={c.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl min-[1440px]:rounded-[16px]"
                style={{ backgroundImage: c.gradient }}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-7 min-[1440px]:px-7 min-[1440px]:pb-9">
                <h3 className="text-[24px] font-semibold leading-7 text-white min-[1440px]:text-[32px] min-[1440px]:leading-10">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-[270px] text-[16px] leading-6 text-white min-[1440px]:mt-3 min-[1440px]:max-w-[489px] min-[1440px]:text-[18px] min-[1440px]:leading-7">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="mt-8 flex justify-center lg:hidden">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            className="flex size-[100px] shrink-0 items-center justify-center disabled:cursor-default"
            aria-label="Previous services"
          >
            <img
              src={leftSrc}
              alt=""
              className={`size-full object-contain ${leftRotate}`}
            />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            className="flex size-[100px] shrink-0 items-center justify-center disabled:cursor-default"
            aria-label="Next services"
          >
            <img
              src={rightSrc}
              alt=""
              className={`size-full object-contain ${rightRotate}`}
            />
          </button>
        </div>
      </LandingInset>
    </section>
  );
}
