import { useRef, useState } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const audiences = [
  {
    id: "students",
    label: "Students paying tuition & fees abroad",
    image: figma.serveStudents,
  },
  {
    id: "freelancers",
    label: "Freelancers & remote workers earning internationally",
    image: figma.serveFreelancers,
  },
  {
    id: "businesses",
    label: "Businesses managing cross-border transactions",
    image: figma.serveBusinesses,
  },
  {
    id: "families",
    label: "Families sending remittances to loved ones",
    image: figma.serveFamilies,
  },
  {
    id: "merchants",
    label: "Online merchants accepting global payments",
    image: figma.serveMerchants,
  },
];

export function AudienceOverviewSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, audiences.length - 1));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let nearest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const distance = Math.abs(
        (child as HTMLElement).offsetLeft - track.offsetLeft - track.scrollLeft,
      );
      if (distance < min) {
        min = distance;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  return (
    <section className="overflow-hidden bg-[#383838] py-16 min-[1440px]:py-[100px]">
      <LandingInset>
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-[560px]">
            <h2 className="font-nohemi text-[36px] font-bold leading-[1.1] text-white md:text-[48px] min-[1440px]:text-[56px]">
              Who We Serve
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-white/65 min-[1440px]:text-[18px]">
              PayByLeap supports a diverse, global audience to participate in
              the international economy.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollToIndex(active - 1)}
              disabled={active === 0}
              className="flex size-[60px] items-center justify-center rounded-full border-2 border-white/25 text-white/40 transition-colors hover:border-white/50 hover:text-white/70 disabled:opacity-40 disabled:hover:border-white/25 disabled:hover:text-white/40"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden>
                <path
                  d="M19 12H5M11 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollToIndex(active + 1)}
              disabled={active === audiences.length - 1}
              className="flex size-[60px] items-center justify-center rounded-full border-2 border-secondary text-secondary transition-colors hover:bg-secondary hover:text-[#383838] disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-secondary"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden>
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-hide min-[1440px]:mt-16"
        >
          {audiences.map((a) => (
            <div
              key={a.id}
              className="shrink-0 basis-full snap-start sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
            >
              <div className="aspect-[357/430] overflow-hidden rounded-xl">
                <img
                  src={a.image}
                  alt={a.label}
                  className="size-full object-cover"
                />
              </div>
              <p className="mt-6 max-w-[280px] text-[22px] font-semibold leading-[1.3] text-white min-[1440px]:text-[26px]">
                {a.label}
              </p>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-12 flex items-center justify-center gap-2 min-[1440px]:mt-16">
          {audiences.map((a, i) => (
            <button
              key={a.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-[6px] rounded-full transition-all ${
                i === active ? "w-[44px] bg-primary" : "w-[36px] bg-white/25"
              }`}
            />
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
