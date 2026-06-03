import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const audiences = [
  {
    id: "students",
    label: "Students paying tuition & fees abroad",
    image: figma.saintLouisCrest,
  },
  {
    id: "freelancers",
    label: "Freelancers & remote workers",
    image: figma.femalePhoneMockup,
  },
  {
    id: "businesses",
    label: "Businesses managing cross-border transactions",
    image: figma.freeAccountHero,
  },
];

export function AudienceOverviewSection() {
  return (
    <section className="bg-[#333333] py-16 min-[1440px]:py-[100px]">
      <LandingInset>
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-[560px]">
            <h2 className="font-nohemi text-[36px] font-bold leading-[1.15] text-white md:text-[44px] min-[1440px]:text-[52px]">
              Who We Serve
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-white/60 min-[1440px]:text-[18px]">
              PayByLeap supports a diverse, global audience to participate in
              the international economy.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous"
              className="flex size-[52px] items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/50 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              className="flex size-[52px] items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-white hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3 min-[1440px]:mt-12 min-[1440px]:gap-6">
          {audiences.map((a) => (
            <div key={a.id} className="overflow-hidden rounded-2xl bg-[#2B2B2B]">
              <div className="h-[260px] overflow-hidden min-[1440px]:h-[300px]">
                <img
                  src={a.image}
                  alt={a.label}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5 min-[1440px]:p-6">
                <p className="text-[16px] font-semibold leading-6 text-white min-[1440px]:text-[18px]">
                  {a.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
