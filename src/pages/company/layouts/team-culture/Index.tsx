import { useCallback, useEffect, useRef, useState } from "react";
import { companyImages } from "@/data/images/company";
import { LandingInset } from "@/components/landing-inset/Index";
import { useSectionReveal } from "../../reveal";

// Figma 4669:12788 reuses one office photo for the last two audiences.
const audiences = [
  { label: "Students paying tuition & fees abroad", image: companyImages.serveStudents },
  { label: "Freelancers & remote workers earning internationally", image: companyImages.serveFreelancers },
  { label: "Businesses managing cross-border transactions", image: companyImages.serveBusinesses },
  { label: "Families sending & receiving global remittances", image: companyImages.serveFamilies },
  { label: "Fintech and Institution seeking payment infrastructure", image: companyImages.serveFamilies },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="currentColor" className={className} aria-hidden>
      <path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z" />
      <path d="M25.3 34.7L15.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z" />
      <path d="M17 24h17v2H17z" />
    </svg>
  );
}

export function AudienceOverviewSection() {
  const { ref, revealClass } = useSectionReveal<HTMLElement>(0.15);
  const trackRef = useRef<HTMLDivElement>(null);
  const [stops, setStops] = useState<number[]>([0]);
  const [active, setActive] = useState(0);

  // A dot per distinct place the track can rest: each card's start, capped at
  // the furthest scroll, so desktop (about 2.7 cards in view) gets four.
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const next = Array.from(track.children).map((c) =>
      Math.min((c as HTMLElement).offsetLeft - track.offsetLeft, max),
    );
    setStops(next.filter((v, i) => i === 0 || v - next[i - 1] > 1));
  }, []);

  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    let nearest = 0;
    stops.forEach((s, i) => {
      if (Math.abs(s - track.scrollLeft) < Math.abs(stops[nearest] - track.scrollLeft)) nearest = i;
    });
    setActive(nearest);
  }, [stops]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, stops.length - 1));
    trackRef.current?.scrollTo({ left: stops[clamped], behavior: "smooth" });
  };

  const arrowClass =
    "flex size-16 items-center justify-center transition-colors enabled:text-secondary enabled:hover:text-[#FFD466] disabled:text-grey-60 xl:size-[100px]";

  return (
    <section ref={ref} className={`overflow-hidden bg-grey-80 py-16 xl:h-[990px] xl:pb-0 xl:pt-[87px]${revealClass}`}>
      <LandingInset>
        <div className="flex items-start justify-between gap-6 xl:pl-[27px] xl:pr-[30px]">
          <div className="co-rise max-w-[599px]">
            <h2 className="font-nohemi text-[32px] font-semibold leading-10 text-white xl:text-[48px] xl:leading-[64px]">
              Who We Serve
            </h2>
            <p className="mt-4 text-body-3 text-white xl:mt-[17px] xl:text-body-2">
              PayByLeap supports a diverse, global audience to participate in the international economy.
            </p>
          </div>

          <div className="co-fade hidden shrink-0 md:flex xl:mt-[9px]" style={{ ["--d" as string]: "200ms" }}>
            <button type="button" aria-label="Previous" onClick={() => goTo(active - 1)} disabled={active === 0} className={arrowClass}>
              <ArrowIcon className="size-full" />
            </button>
            <button type="button" aria-label="Next" onClick={() => goTo(active + 1)} disabled={active === stops.length - 1} className={arrowClass}>
              <ArrowIcon className="size-full rotate-180" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={syncActive}
          className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto xl:ml-[3px] xl:mt-[94px] xl:w-[1117px]"
        >
          {audiences.map((a, i) => (
            <article
              key={a.label}
              className="co-rise group w-[85%] shrink-0 snap-start shadow-[0_4px_34px_rgba(0,0,0,0.05)] sm:w-[390px]"
              style={{ ["--d" as string]: `${150 + i * 100}ms` }}
            >
              <div className="aspect-[390/414] overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={a.image}
                  alt={a.label}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="h-[103px] max-w-[364px] pl-[13px] pt-[17px] font-nohemi text-[20px] font-medium leading-8 text-white">
                {a.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-[5px] xl:mt-[66px]">
          {stops.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`relative h-2 rounded-2xl transition-all duration-300 before:absolute before:-inset-x-1 before:-bottom-[18px] before:-top-[18px] before:content-[''] ${
                i === active ? "w-20 bg-primary" : "w-7 bg-grey-10"
              }`}
            />
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
