import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const cards = [
  {
    id: "cross-border",
    title: "Seamless Cross-border Payments",
    desc: "Send money across borders quickly and reliably with minimal delays.",
    bg: "bg-[#222a5e]",
    titleClass: "text-white",
    descClass: "text-white/65",
    image: figma.benefitCrossBorder,
  },
  {
    id: "mobile-first",
    title: "Mobile-first Platform",
    desc: "Mobile-friendly design ensures seamless access and ease of use on any device.",
    bg: "bg-[#E9E9E6]",
    titleClass: "text-grey-90",
    descClass: "text-grey-70",
    image: figma.benefitMobile,
  },
  {
    id: "unified",
    title: "Unified Financial Ecosystem",
    desc: "Have all your currencies in one place, easy to carry out any transactions.",
    bg: "bg-[#F4E3A4]",
    titleClass: "text-[#2a1d05]",
    descClass: "text-[#2a1d05]/70",
    image: figma.benefitUnified,
  },
  {
    id: "global-access",
    title: "Global Accessibility",
    desc: "Stay informed and in control with real-time tracking and notifications.",
    bg: "bg-primary",
    titleClass: "text-white",
    descClass: "text-white/80",
    image: figma.benefitGlobalAccess,
  },
];

export function ValuePropositionSection() {
  return (
    <section className="relative overflow-hidden bg-[#1D1111] pt-16 min-[1440px]:pt-[100px]">
      <LandingInset>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,373px)_minmax(0,1fr)] lg:gap-x-12">
          <h2 className="font-nohemi text-[40px] font-bold leading-[1.12] text-white md:text-[46px] min-[1440px]:text-[52px]">
            Benefits/Value proposition of Paybyleap
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 min-[1440px]:gap-6">
            {cards.map((c) => (
              <div
                key={c.id}
                className={`flex min-h-[420px] flex-col overflow-hidden rounded-[20px] min-[1440px]:min-h-[480px] ${c.bg}`}
              >
                <div className="p-7 min-[1440px]:p-8">
                  <h3
                    className={`text-[21px] font-semibold leading-[1.25] min-[1440px]:text-[24px] ${c.titleClass}`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`mt-3 text-[14px] leading-[1.5] min-[1440px]:text-[15px] ${c.descClass}`}
                  >
                    {c.desc}
                  </p>
                </div>
                <div className="mt-auto flex-1 overflow-hidden">
                  <img
                    src={c.image}
                    alt=""
                    aria-hidden
                    className="size-full object-contain object-bottom"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder / mission / vision panel */}
        <div className="mt-16 rounded-[28px] border border-white/10 bg-[#271F1F] p-8 md:p-12 min-[1440px]:p-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[160px_minmax(0,1fr)_minmax(0,1fr)] md:gap-0">
            <div className="md:pr-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-secondary">
                Founded
              </p>
              <p className="mt-4 text-[18px] text-white">2026</p>
            </div>

            <div className="md:border-l md:border-white/15 md:px-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-secondary">
                Our Mission
              </p>
              <p className="mt-4 text-[17px] leading-[1.6] text-white/90">
                To simplify and expedite financial transactions across borders,
                making global business and international education payments more
                accessible.
              </p>
            </div>

            <div className="md:border-l md:border-white/15 md:px-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-secondary">
                Our Vision
              </p>
              <p className="mt-4 text-[17px] leading-[1.6] text-white/90">
                To create a world where money moves as freely as ideas, enabling
                individuals, students, and businesses to transact, grow, and
                thrive across borders effortlessly.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center min-[1440px]:mt-20">
            <div>
              <h3 className="font-nohemi text-[30px] font-bold leading-[1.15] text-white min-[1440px]:text-[36px]">
                Why Paybyleap Exists
              </h3>
              <p className="mt-5 max-w-[440px] text-[17px] leading-[1.6] text-white/55 min-[1440px]:text-[18px]">
                People and businesses are no longer limited by geography, yet
                financial systems remain fragmented, slow, and expensive.
              </p>
            </div>

            <div className="overflow-hidden rounded-[20px] md:justify-self-end">
              <img
                src={figma.whyExistsPhoto}
                alt="PayByLeap users"
                className="aspect-[456/470] w-full object-cover md:w-[440px] min-[1440px]:w-[456px]"
              />
            </div>
          </div>
        </div>
      </LandingInset>

      {/* Bleeding decorative divider */}
      <img
        src={figma.pageDivider}
        alt=""
        aria-hidden
        className="pointer-events-none mt-16 w-full min-[1440px]:mt-20"
      />
    </section>
  );
}
